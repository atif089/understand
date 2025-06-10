"use client";

import React, { useState } from "react";
import SectionBlock from "@/components/SectionBlock/index";

// TODO support gestures

/**
 * Carousel wrapper component.
 * @param {object} props
 * @param {React.ReactNode[]} props.children - Carousel items
 * @param {React.ReactNode} props.leftArrow - SVG for left arrow
 * @param {React.ReactNode} props.rightArrow - SVG for right arrow
 * @param {string} [props.className] - Optional className for styling
 */
const Carousel = ({ children, leftArrow, rightArrow, className = "" }) => {
  const [current, setCurrent] = useState(0);
  const total = React.Children.count(children);

  const goTo = (idx) => {
    if (idx < 0) setCurrent(total - 1);
    else if (idx >= total) setCurrent(0);
    else setCurrent(idx);
  };

  return (
    <SectionBlock className={`carousel-section ${className}`.trim()}>
      <div
        className="carousel-root"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <button
          className="carousel-arrow left"
          aria-label="Previous"
          onClick={() => goTo(current - 1)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          {leftArrow}
        </button>
        <div
          className="carousel-content"
          style={{
            width: "100%",
            maxWidth: 900,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {React.Children.toArray(children)[current]}
        </div>
        <button
          className="carousel-arrow right"
          aria-label="Next"
          onClick={() => goTo(current + 1)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          {rightArrow}
        </button>
      </div>
    </SectionBlock>
  );
};

export default Carousel;
