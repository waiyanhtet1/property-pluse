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
      // Check user exit
      // if not, create user
      // return true to allow sign in
    },
    // session callback function modifies session object
    async session({ session }) {
      // Get user from database
      // assign user id from session
      // return session
    },
  },
};
