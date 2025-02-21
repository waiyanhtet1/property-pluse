import PropertyDetails from "@/components/PropertyDetails";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import { connectDB } from "@/config/dbConnect";
import Property from "@/models/PropertyModel";
import { PropertyType } from "@/types/PropertyTypes";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  params: { id: string };
}

const PropertyDetailPage = async ({ params }: Props) => {
  await connectDB();
  const property = await Property.findById(params.id).lean<PropertyType>();

  return (
    <>
      <PropertyHeaderImage image={property?.images[0] as string} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>

      {/* property info */}
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property as PropertyType} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetailPage;
