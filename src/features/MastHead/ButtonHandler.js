"use client";

import Button from "@/components/Button";
import { useContactModal } from "@/features/ContactForm/ContactFormModal";

export default function MastHeadButtonHandler({
  buttonText = "Contact Doctor",
  buttonAriaLabel = "Contact doctor",
}) {
  // Use the contact modal context
  const { openModal } = useContactModal();

  const handleButtonClick = () => {
    console.log("Opening contact form modal");
    openModal();
  };

  return (
    <Button variant="primary" size="md" onClick={handleButtonClick} ariaLabel={buttonAriaLabel}>
      {buttonText}
    </Button>
  );
}
