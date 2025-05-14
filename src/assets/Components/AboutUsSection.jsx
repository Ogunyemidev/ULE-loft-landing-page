import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const AboutUsSection = () => {
  const features = [
    {
      title: "Prime Locations",
      description:
        "Stay where the city comes alive. Each Loft is set in vibrant neighborhoods, close to cafés, culture, and local gems that make every stay unforgettable.",
      image: "/images/prime-locations.svg", // Replace with your actual image path
    },
    {
      title: "Design Curated Homes",
      description:
        "What you see is what you feel. Each Loft is design curated with local touches, cozy textures, and thoughtful details to elevate every stay.",
      image: "/images/curated-homes.svg",
    },
    {
      title: "No Hidden Fees",
      description:
        "What you see is what you pay. Each Loft comes with clear pricing, no surprises, no hidden fees, just honest value for every stay.",
      image: "/images/no-hidden-fees.svg",
      darkBg: true,
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-4 md:px-16">
      <div className="mb-12">
        <button className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
          <FaInfoCircle />
          About Us
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden shadow-lg p-6 ${
              feature.darkBg ? "bg-gray-900" : "bg-gray-800"
            }`}
          >
            <div className="mb-4">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-40 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
