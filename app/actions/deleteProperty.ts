"use server";

import cloudinary from "@/config/cloudinary";
import { connectDB } from "@/config/dbConnect";
import Property from "@/models/PropertyModel";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteProperty(id: string) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required!");
  }

  const property = await Property.findById(id);
  if (!property) {
    throw new Error("Property not found!");
  }

  if (property.owner.toString() !== sessionUser.userId) {
    throw new Error("Unauthorized!");
  }

  //   extract publicId from images
  const publicIds = property.images.map((image) => {
    const parts = image.split("/");
    return parts.at(-1).split(".").at(0);
  });

  //   delete image from cloudinary
  if (publicIds.length > 0) {
    for (const publicId of publicIds) {
      await cloudinary.uploader.destroy("propertypluse/" + publicId);
    }
  }
  await property.deleteOne();
  revalidatePath("/", "layout");
}

export default deleteProperty;
