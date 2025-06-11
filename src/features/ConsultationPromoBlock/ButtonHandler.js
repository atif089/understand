"use client";

import { useState } from "react";

import Button from "@/components/Button";
import ContactFormModal from "@/features/ContactForm/ContactFormModal"; // Adjusted import

const ButtonHandler = ({ buttonText, variant = "primary", size = "md", ariaLabel, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    console.log("Consultation button clicked, opening modal");
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("ConsultationPromoBlock Contact Form submitted:", formData);
    // Add actual submission logic here (e.g., API call)
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={handleClick}
        ariaLabel={ariaLabel || `Book a consultation: ${buttonText}`}
        {...props}
      >
        {buttonText}
      </Button>
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default ButtonHandler;
