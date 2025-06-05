"use client";

import Button from "@/components/Button";
import { useContactModal } from "@/features/ContactForm/ContactFormModal";

const ButtonHandler = ({ buttonText, variant = "primary", size = "md", ariaLabel, ...props }) => {
  // Use the contact modal context
  const { openModal } = useContactModal();

  const handleClick = () => {
    console.log("Consultation button clicked");
    // Open the contact form modal
    openModal();
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
