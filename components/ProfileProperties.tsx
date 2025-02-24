"use client";

import { PropertyType } from "@/types/PropertyTypes";
import Image from "next/image";
import { useState } from "react";

interface Props {
  initialProperties: PropertyType[];
}

const ProfileProperties = ({ initialProperties }: Props) => {
  const [properties, setProperties] = useState(initialProperties);

  return properties.map((property) => (
    <div key={property._id} className="mb-10">
      <a href="/property.html">
        <Image
          className="h-32 w-full rounded-md object-cover"
          src={property.images[0]}
          alt="Property 1"
          width={1200}
          height={200}
        />
      </a>
      <div className="mt-2">
        <p className="text-lg font-semibold">{property.name}</p>
        <p className="text-gray-600">
          {property.location.street} {property.location.state}{" "}
          {property.location.city}
        </p>
      </div>
      <div className="mt-2">
        <a
          href="/add-property.html"
          className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
        >
          Edit
        </a>
        <button
          className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  ));
};

export default ProfileProperties;
