import React from "react";

const SectionBlock = ({
  children,
  bgColor = "bg-white",
  paddingY = "py-16",
  className = "",
  ...props
}) => {
  return (
    <section className={`w-full ${bgColor} ${paddingY} ${className}`} {...props}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

export default SectionBlock;
