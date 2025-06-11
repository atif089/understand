"use client";

import { useState } from "react";

import Button from "@/components/Button";
import ContactFormModal from "@/features/ContactForm/ContactFormModal"; // Adjusted import

export default function MastHeadButtonHandler({
  buttonText = "Contact Doctor",
  buttonAriaLabel = "Contact doctor",
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    console.log("Opening contact form modal from MastHead");
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("MastHead Contact Form submitted:", formData);
    // Add actual submission logic here (e.g., API call)
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <>
      <Button variant="primary" size="md" onClick={handleButtonClick} ariaLabel={buttonAriaLabel}>
        {buttonText}
      </Button>
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleFormSubmit}
      />
    </>
  );
}
