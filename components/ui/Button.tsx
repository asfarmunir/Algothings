// components/Button.tsx
import React from "react";

interface ButtonProps {
  label: any; // Button text
  onClick?: () => void; // Click handler (optional)
  type?: "button" | "submit" | "reset"; // Button type (optional, default: 'button')
  className?: string; // Additional Tailwind classes for customization
  disabled?: boolean; // Disable button state
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-1   disabled:opacity-50 disabled:cursor-not-allowed transition ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
