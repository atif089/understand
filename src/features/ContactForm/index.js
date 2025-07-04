"use client";

import Button from "@/components/Button";
import { useState } from "react";

export default function ContactForm({ onSubmit = () => {}, onClose = () => {} }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Handle form changes and submission
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    onSubmit(formData);
  };

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

      <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1"
            value={formData.phone}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <Button type="submit" variant="primary" size="md" className="mt-2">
          Contact Doctor
        </Button>
      </form>
    </div>
  );
}
