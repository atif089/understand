"use client";

import React from "react";
import Modal from "../../components/Modal"; // Adjust path if necessary
import ContactForm from "./index";

const ContactFormModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleFormSubmit = (formData) => {
    if (onSubmit) {
      onSubmit(formData);
    }
    // Optionally, close the modal on submit
    // onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ContactForm
        onSubmit={handleFormSubmit}
        onClose={onClose}
        // The ContactForm itself no longer needs direct isOpen/onClose for modal display
        // but might need onClose if a cancel button *within* the form should close the modal.
        // For now, we assume the main modal 'X' or overlay click handles closing.
        // If the form needs an internal cancel button, pass onClose to it.
      />
    </Modal>
  );
};

export default ContactFormModal;
