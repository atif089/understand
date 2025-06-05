"use client";

import { useState, createContext, useContext } from "react";
import ContactForm from "./index";

// Create context for the modal
const ContactModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

// Hook for components to access the modal functionality
export function useContactModal() {
  return useContext(ContactModalContext);
}

// Modal Provider component
export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    // Here you would typically send the form data to an API
    closeModal();
  };

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ContactForm isOpen={isOpen} onClose={closeModal} onSubmit={handleSubmit} />
    </ContactModalContext.Provider>
  );
}
