"use client";

import Button from "@/components/Button";

export default function MastHeadButtonHandler({
  buttonText = "Contact Doctor",
  buttonAriaLabel = "Contact doctor",
}) {
  const handleButtonClick = () => {
    console.log("Contact form not found, would open modal or redirect");
  };

  return (
    <Button variant="primary" size="md" onClick={handleButtonClick} ariaLabel={buttonAriaLabel}>
      {buttonText}
    </Button>
  );
}
