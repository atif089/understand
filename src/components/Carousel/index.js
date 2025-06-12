"use client";

import React, { useState } from "react";

// TODO support gestures

const Carousel = ({ children, leftArrow, rightArrow, className = "" }) => {
  const [current, setCurrent] = useState(0);
  const total = React.Children.count(children);

  const goTo = (idx) => {
    if (idx < 0) setCurrent(total - 1);
    else if (idx >= total) setCurrent(0);
    else setCurrent(idx);
  };

  return (
    <div className={`md:px-8 py-8 ${className}`.trim()}>
      <div className="relative flex items-center justify-center">
        <button
          className="absolute top-1/2 left-0 z-20 -translate-y-1/2 cursor-pointer border-none bg-transparent"
          aria-label="Previous"
          onClick={() => goTo(current - 1)}
        >
          {leftArrow}
        </button>
        <div className="flex flex-col">{React.Children.toArray(children)[current]}</div>
        <button
          className="absolute top-1/2 right-0 z-20 -translate-y-1/2 cursor-pointer border-none bg-transparent"
          aria-label="Next"
          onClick={() => goTo(current + 1)}
        >
          {rightArrow}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
