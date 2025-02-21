import { connectDB } from "@/config/dbConnect";
import User from "@/models/UserModel";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // successful sing in
    async signIn({ profile }) {
      // Connect to database
      await connectDB();
      // Check user exit
      const isUserExit = await User.findOne({ email: profile.email });
      // if not, create user
      if (!isUserExit) {
        await User.create({
          email: profile.email,
          username: profile.name,
          image: profile.picture,
        });
      }
      // return true to allow sign in
      return true;
    },
    // session callback function modifies session object
    async session({ session }) {
      // Get user from database
      const user = await User.findOne({ email: session.user.email });
      // assign user id from session
      session.user.id = user._id.toString();
      // return session
      return session;
    },
  },
};
