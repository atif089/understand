import React from "react";

import { siteConfig } from "@/config/siteConfig";

import SectionBlock from "@/components/SectionBlock";
import { Instagram, Linkedin, Facebook } from "@deemlol/next-icons";

export default function Footer() {
  const { title, name, qualification, address, phone, email, hours, social } = siteConfig;

  return (
    <SectionBlock bgColor="bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex grid grid-cols-1 flex-col items-center justify-center gap-8 md:grid-cols-3">
          {/* Contact Information */}
          <div>
            <div className="space-y-2 text-black">
              <p className="my-4 flex items-center font-medium">
                <span className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#005999] to-[#0077CC] font-bold text-white uppercase">
                  DR
                </span>
                <span>
                  {name}, {qualification}
                </span>
              </p>
              <p>{address}</p>
            </div>
          </div>

          {/* Social Links - Middle Column */}
          <div className="flex flex-col items-center justify-center rounded-lg border-5 border-white bg-gradient-to-r from-[#005999] to-[#0077CC] p-4 text-white shadow-lg">
            <p>
              <a href={`tel:${phone}`} className="hover:underline">
                {phone}
              </a>
            </p>

            {/* TODO: Swap them out with actual icons from Figma */}
            <div className="flex items-center space-x-4 py-8">
              <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={24} color="#FFFFFF" />
              </a>
              <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} color="#FFFFFF" />
              </a>
              <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={24} color="#FFFFFF" />
              </a>
            </div>
            <p>
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </p>
          </div>

          {/* Office Hours */}
          <div>
            <div className="space-y-2 text-right font-medium">
              <p>{hours.weekdays}</p>
              <p>{hours.saturday}</p>
              <p>{hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}
