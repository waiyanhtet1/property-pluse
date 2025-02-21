import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDb connected!");
  } catch (error) {
    console.log(error);
  }
};
