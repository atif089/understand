"use client";

import React from "react";
import Button from "@/components/Button";

const ButtonHandler = ({ buttonText, variant = "primary", size = "md", ariaLabel, ...props }) => {
  const handleClick = () => {
    console.log("Consultation button clicked");
    // Additional logic can be added here - like analytics tracking, etc.
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      ariaLabel={ariaLabel || `Book a consultation: ${buttonText}`}
      {...props}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonHandler;
