import { connectDB } from "@/config/dbConnect";
import Property from "@/models/PropertyModel";
import { PropertyType } from "@/types/PropertyTypes";
import Link from "next/link";
import PropertyCard from "./PropertyCard";

const HomeProperties = async () => {
  await connectDB();

  const properties = await Property.find()
    .sort({ createdAt: -1 })
    .limit(3)
    .lean<PropertyType[]>();

  return (
    <>
      <div className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h3 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h3>
          {properties.length === 0 ? (
            <p>No Properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="mx-auto max-w-lg my-6 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
