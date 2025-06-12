import React from "react";
import SectionBlock from "@/components/SectionBlock";
import Carousel from "@/components/Carousel";
import TestimonialSlide from "./TestimonialSlide";

// TODO: Replace with actual SVG
// Placeholder for user-provided SVG
const LeftArrow = () => (
  <div
    style={{
      background: "#00529b",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

// Placeholder for user-provided SVG
const RightArrow = () => (
  <div
    style={{
      background: "#00529b",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const testimonials = [
  {
    imageSrc: "/review-1.webp",
    headline: "The best in Dallas!",
    text: "I’ve been a patient of Dr. Hohman’s since 2015. After other clinics overlooked my knee implant issue, he identified an allergy to the implant and explained the revision process thoroughly. He performed surgeries on both knees and my right hip between 2016 and 2018, and thanks to him, I’m walking today. He’s knowledgeable, compassionate, and takes the time to truly listen. His staff is outstanding, and I continue to see him for follow-ups. I highly recommend Dr. Hohman—he’s the best in Dallas!",
    author: "Arlene S.",
  },
  {
    imageSrc: "/review-2.webp",
    headline: "Nothing can stop me now!",
    text: "As I sit on a terrace in Taormina, Sicily, gazing at Mt. Etna, I’m filled with gratitude for Dr. Hohman. Since my double hip replacement in 2021–2022, I’ve taken five international trips, something I once thought impossible due to severe pain. Now, I walk the Royal Mile in Edinburgh, climb the Acropolis in Athens, and wander the vineyards of Santorini. This September, I’ll be tasting oysters in Bordeaux. Nothing can stop me now. Mille grazie, Dr. Hohman.",
    author: "Karen A.",
  },
  {
    imageSrc: "/review-3.webp",
    headline: "So grateful to be in such good hands",
    text: "A friend recommended Dr. Hohman after her own successful double hip replacement. I had my left hip replaced by him on Feb. 10, 2025, and everything went great. After therapy, I’m now scheduled for my right hip on July 7. Dr. Hohman is professional, kind, and truly skilled. His staff is welcoming and attentive. I’m so grateful to be in such good hands and highly recommend him to anyone needing hip replacement.",
    author: "Norma M.",
  },
  {
    imageSrc: "/review-2.webp",
    headline: "Smooth and worry-free recovery process",
    text: "What truly amazed me was the outcome of the surgery itself. I experienced no pain after the procedure and was walking immediately upon arrival from the recovery room. Dr. Hohman and the team provided clear, thorough instructions that made the recovery process smooth and worry-free. Anytime I had a concern, I felt completely reassured by their prompt and thoughtful responses.",
    author: "Nick Z.",
  },
];

const Testimonials = () => {
  return (
    <SectionBlock paddingY="py-16">
      <h2 className="text-center text-3xl font-bold text-gray-800">Real Patients. Real Results</h2>
      <Carousel leftArrow={<LeftArrow />} rightArrow={<RightArrow />}>
        {testimonials.map((testimonial, index) => (
          <TestimonialSlide key={index} {...testimonial} />
        ))}
      </Carousel>
    </SectionBlock>
  );
};

export default Testimonials;
