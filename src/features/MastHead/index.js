import React from "react";
import Image from "next/image";
import SectionBlock from "@/components/SectionBlock";
import MastHeadButtonHandler from "./ButtonHandler";

const MastHead = ({
  doctorImage,
  doctorTitle,
  doctorSubTitle,
  doctorDescription,
  backgroundImage,
}) => {
  return (
    <SectionBlock bgColor="bg-main-light" paddingY="py-0" className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Left content column (constrained to container width) */}
        <div className="z-10 w-full px-4 py-12 md:w-1/2 md:py-24">
          <div className="mb-6 flex justify-start">
            {doctorImage && (
              <div className="overflow-hidden rounded-full bg-gray-300 md:h-48 md:w-48">
                <Image
                  src={doctorImage}
                  alt={doctorTitle || "Doctor"}
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>

          {doctorTitle && (
            <h1 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
              {doctorTitle}
            </h1>
          )}
          {doctorSubTitle && (
            <p className="mb-4 text-base font-medium text-gray-500">{doctorSubTitle}</p>
          )}

          {doctorDescription && <p className="mb-8 max-w-lg text-gray-700">{doctorDescription}</p>}

          <MastHeadButtonHandler />
        </div>

        {/* Right background image (will stretch beyond container) */}
        <div className="absolute top-0 right-0 h-full w-full md:w-1/2">
          {backgroundImage && (
            <div className="relative h-full w-full">
              <Image src={backgroundImage} alt="" fill className="object-cover" priority />
              {/* Gradient overlay for better text readability on mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent md:hidden"></div>
            </div>
          )}
        </div>
      </div>
    </SectionBlock>
  );
};

export default MastHead;
