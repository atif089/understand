import React from "react";
import Image from "next/image";

const TestimonialSlide = ({ imageSrc, headline, text, author }) => {
  return (
    <div className="mx-auto flex max-w-4xl overflow-hidden rounded-2xl shadow-xl">
      <div className="w-1/2 bg-[#00529b] p-6">
        <div className="relative aspect-square h-full w-full overflow-hidden rounded-lg">
          <Image src={imageSrc} alt={headline} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="flex w-1/2 flex-col justify-center bg-[#eaf2fa] p-12 text-left">
        <h3 className="text-3xl font-bold text-gray-800">{headline}</h3>
        <blockquote className="mt-4 text-gray-600">"{text}"</blockquote>
        <p className="mt-6 text-right font-semibold text-gray-700">— {author}</p>
      </div>
    </div>
  );
};

export default TestimonialSlide;
