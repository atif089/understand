import React from "react";

export default function CopyrightFooter({ text, links }) {
  return (
    <div className="w-full py-0">
      <div className="px-4">
        <div className="text-gray border-main-light container mx-auto flex flex-col items-start justify-between gap-y-4 border-t px-0 py-4 text-xs sm:flex-row sm:items-center sm:gap-y-0">
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
      </div>
    </div>
  );
}
