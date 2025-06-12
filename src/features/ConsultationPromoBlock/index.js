import React from "react";
import Image from "next/image";

import SectionBlock from "@/components/SectionBlock";
import ButtonHandler from "./ButtonHandler";

const ConsultationPromoBlock = ({
  heading,
  subheading,
  buttonText,
  imageSrc,
  className = "",
  ...props
}) => {
  return (
    <SectionBlock bgColor="bg-gradient-to-r from-[#005999] to-[#0077CC]">
      <div className="flex items-center justify-center">
        <div
          className={`flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row ${className}`}
          {...props}
        >
          {/* Content column */}
          <div className="min-w-[260px] flex-1 text-center md:text-left">
            <h2 className="mb-4 text-white">{heading}</h2>
            {subheading}
            <ButtonHandler buttonText={buttonText} variant="secondary" size="md" />
          </div>

          {/* Image column */}
          <div className="flex w-full min-w-[260px] flex-1 justify-center md:justify-end">
            <div className="relative aspect-square w-full max-w-none overflow-hidden rounded-2xl md:aspect-video md:h-[390px] md:max-w-[640px]">
              <Image
                src={imageSrc}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
};

export default ConsultationPromoBlock;
