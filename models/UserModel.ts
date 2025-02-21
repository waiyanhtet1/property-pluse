import mongoose, { model, models, Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: [true, "Email is already exit!"],
      required: [true, "Email is required!"],
    },
    username: {
      type: String,
      required: [true, "Username is required!"],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  { timestamps: true }
);

export default models.User || model("User", userSchema);
