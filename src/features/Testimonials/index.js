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
    imageSrc: "/review-1.webp", // Replace with actual image path
    headline: "We're dancing again!",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "Michael D.",
  },
  {
    imageSrc: "/review-2.webp", // Replace with actual image path
    headline: "A new lease on life!",
    text: "My new hip has been a complete game-changer. I am back to my daily walks without any pain. Thank you Dr. Hohman!",
    author: "Susan B.",
  },
  {
    imageSrc: "/review-3.webp", // Replace with actual image path
    headline: "Glad to be pain free!",
    text: "I was in so much pain that I could not walk. I was able to walk again after the surgery. Thank you Dr. Hohman!",
    author: "John Doe",
  },
];

const Testimonials = () => {
  return (
    <SectionBlock>
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
        Real Patients. Real Results
      </h2>
      <Carousel leftArrow={<LeftArrow />} rightArrow={<RightArrow />}>
        {testimonials.map((testimonial, index) => (
          <TestimonialSlide key={index} {...testimonial} />
        ))}
      </Carousel>
    </SectionBlock>
  );
};

export default Testimonials;
