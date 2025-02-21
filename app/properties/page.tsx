import PropertyCard from "@/components/PropertyCard";
import { connectDB } from "@/config/dbConnect";
import Property from "@/models/PropertyModel";
import { PropertyType } from "@/types/PropertyTypes";

const PropertiesPage = async () => {
  await connectDB();
  const properties = await Property.find().lean<PropertyType[]>();

  return (
    <div className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
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
  );
};

export default PropertiesPage;
