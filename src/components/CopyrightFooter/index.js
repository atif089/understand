import React from "react";
import SectionBlock from "@/components/SectionBlock";

export default function CopyrightFooter({ text, links }) {
  return (
    <SectionBlock bgColor="bg-white" paddingY="py-4" className="border-t border-gray-200">
      <div className="text-gray flex flex-col items-start justify-between gap-y-4 px-0 py-4 text-xs sm:flex-row sm:items-center sm:gap-y-0">
        <div className="order-1 flex gap-4 sm:order-2">
          {links &&
            links.map((link, idx) => (
              <React.Fragment key={link.href}>
                {idx > 0 && <span className="mx-1">/</span>}
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </React.Fragment>
            ))}
        </div>
        <div className="order-2 sm:order-1">{text}</div>
      </div>
    </SectionBlock>
  );
}
