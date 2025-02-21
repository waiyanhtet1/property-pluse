import mongoose, { model, models, Schema } from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    description: {
      type: String,
    },
    location: {
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
    beds: {
      type: Number,
      required: [true, "Beds number are required!"],
    },
    baths: {
      type: Number,
      required: [true, "Baths number are required!"],
    },
    square_feet: {
      type: Number,
      required: [true, "square feet number are required!"],
    },
    amenities: [String],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    seller_info: {
      name: String,
      email: String,
      phone: String,
    },
    images: [String],
    is_featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default models.Property || model("Property", propertySchema);
