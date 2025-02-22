"use server";
import { connectDB } from "@/config/dbConnect";
import Property from "@/models/PropertyModel";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function addProperty(formData: FormData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required!");
  }

  const amenities = formData.getAll("amenities");
  const images = formData
    .getAll("images")
    .filter((image) => image instanceof File && image.name !== "")
    .map((image) => image instanceof File && image.name);

  const propertyData = {
    owner: sessionUser.userId,
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode"),
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),
    square_feet: formData.get("square_feet"),
    amenities,
    rates: {
      nightly: formData.get("rates.nightly"),
      weekly: formData.get("rates.weekly"),
      monthly: formData.get("rates.monthly"),
    },
    seller_info: {
      name: formData.get("seller_info.name"),
      phone: formData.get("seller_info.phone"),
      email: formData.get("seller_info.email"),
    },
    images,
  };

  const newProperty = new Property(propertyData);
  await newProperty.save();

  revalidatePath("/", "layout");
  redirect(`/properties/${newProperty._id}`);
}

export default addProperty;
