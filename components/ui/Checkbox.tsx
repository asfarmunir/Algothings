// components/Checkbox.tsx

import React from "react";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  checkboxClassName?: string;
  labelClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  checkboxClassName = "",
  labelClassName = "",
}) => {
  return (
    <label
      className={`flex items-center space-x-2 text-sm ${
        disabled ? "text-gray-500" : "text-gray-900"
      } ${labelClassName}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        disabled={disabled}
        className={`h-4 w-4 rounded ${checkboxClassName || "bg-customgreen"}`}
        aria-label={label}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
