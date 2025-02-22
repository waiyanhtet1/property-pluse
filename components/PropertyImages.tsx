import Image from "next/image";

interface Props {
  images: string[];
}

const PropertyImages = ({ images }: Props) => {
  return (
    <div className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt=""
            className="object-cover h-[400px] mx-auto rounded-xl"
            width={1800}
            height={400}
            priority
          />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="col-span-1">
                <Image
                  src={image}
                  alt=""
                  className="object-cover h-[400px] w-full rounded-xl"
                  width={1800}
                  height={400}
                  priority
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyImages;
