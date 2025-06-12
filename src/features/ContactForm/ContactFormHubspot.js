"use client";

import HubspotForm from "react-hubspot-form";

export default function ContactForm({ onSubmit = () => {}, onClose = () => {} }) {
  return (
    // The outer div with modal styling and the explicit close button are removed.
    // The generic Modal component now handles this.
    // The h2 title is also part of the form content now.
    <div className="w-full max-w-[90vw] min-w-[560px] px-8 py-8">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Contact Form</h2>
      <button
        onClick={onClose} // Use the onClose prop to close the modal
        className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800"
        aria-label="Close"
      >
        {/* TODO: Replace with actual SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <HubspotForm
        portalId="243028361"
        formId="9523ecd8-b25e-43ee-bae1-b13bc9d3fbc7"
        onSubmit={() => console.log("Submit!")}
        onReady={(form) => console.log("Form ready!")}
        loading={<div>Loading...</div>}
      />
    </div>
  );
}
