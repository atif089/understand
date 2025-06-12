import React from "react";
import Image from "next/image";

const TestimonialSlide = ({ imageSrc, headline, text, author }) => {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col overflow-hidden rounded-2xl shadow-xl md:flex-row">
      <div className="flex-1 bg-[#00529b] p-4 md:p-6">
        <div className="relative h-48 w-full overflow-hidden rounded-lg md:h-full">
          <Image src={imageSrc} alt={headline} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="flex-1 flex-col justify-center bg-[#eaf2fa] p-12 text-center">
        <h3 className="font-bold text-gray-800">{headline}</h3>
        <blockquote className="mt-4 text-gray-600">{text}</blockquote>
        <p className="mt-6 font-semibold text-gray-700">— {author}</p>
      </div>
    </div>
  );
};

export default TestimonialSlide;
