import React from "react";
import Image from "next/image";
import SectionBlock from "@/components/SectionBlock";

/* 
  TODO: Implement modal functionality when clicked
  - Create VideoModal component
  - Add state management for modal open/close
  - Include video player in modal
*/

const VideoGuidesBlock = ({ blockTitle, videoGuides }) => {
  return (
    <SectionBlock>
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-10 text-center">{blockTitle}</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {videoGuides.map((guide, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
              // TODO: Future onClick handler will go here for modal functionality
            >
              <div className="relative h-48">
                <Image
                  src={guide.image}
                  alt={`${guide.title} Video Guide`}
                  fill
                  className="object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/50 p-3">
                    {/* TODO: Replace with actual play button */}
                    <svg viewBox="0 0 24 24" className="h-12 w-12 text-blue-600">
                      <path
                        strokeWidth={1}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        fill="#fff"
                        stroke="#fff"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-main-accent mb-2 text-xl font-medium">{guide.title}</h4>
                <p className="text-gray-600">{guide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
};

export default VideoGuidesBlock;
