import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  ariaLabel,
  ...props
}) => {
  // Define variant styles
  const variantStyles = {
    primary: "bg-gradient-to-r from-[#005999] to-[#0077CC] text-white hover:cursor-pointer",
    secondary: "bg-white text-[#0164AB] hover:cursor-pointer",
  };

  // Define size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={` ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} focus:ring-opacity-75 rounded-lg font-semibold transition-all focus:ring-2 focus:ring-blue-400 focus:outline-none ${className}`}
      aria-label={ariaLabel || undefined}
      {...props}
    >
      {children}

      {/* TODO: support icon images and lazy load them */}
      <span className={`ml-1 text-xl ${variant === "primary" ? "text-white" : "text-[#0164AB]"}`}>
        →
      </span>
    </button>
  );
};

export default Button;
