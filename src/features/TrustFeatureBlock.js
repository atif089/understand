import React from "react";
import Image from "next/image";

const TrustFeatureBlock = () => {
  const features = [
    {
      icon: "/star.svg",
      title: "Harvard Fellowship in Joint Replacement",
    },
    {
      icon: "/star.svg",
      title: "Trusted Expert in Hip & Knee Surgery",
    },
    {
      icon: "/star.svg",
      title: "Minimally Invasive & Robotic-Assisted Techniques",
    },
    {
      icon: "/star.svg",
      title: 'Named a "Best Doctor" 2023, 2024, 2025',
    },
  ];

  return (
    <section className="bg-blue-50 px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-10 text-center">Why Patients Trust Dr. Hohman</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl border-1 border-gray-200 bg-white p-6 text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#005999] to-[#0077CC]">
                <Image
                  src={feature.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="text-white"
                  style={{ color: "white", stroke: "white" }}
                />
              </div>
              <h4 className="text-lg font-medium text-gray-800">{feature.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFeatureBlock;
