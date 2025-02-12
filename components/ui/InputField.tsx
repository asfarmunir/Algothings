import React from "react";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customClass?: string;
  labelClass?: string;
  inputClass?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode; // Optional icon prop
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder = "",
  type = "text",
  value,
  name,
  onChange,
  customClass = "",
  labelClass = "",
  inputClass = "",
  required = false,
  disabled = false,
  icon, // Destructuring the new optional icon prop
}) => {
  return (
    <div className={`flex flex-col ${customClass}`}>
      {label && (
        <label
          htmlFor={name}
          className={`mb-2 text-xs 2xl:xt-sm font-medium text-gray-700 ${labelClass}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute text-white inset-y-0 left-0 flex items-center px-3 ">
            {icon}
          </span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`p-2 border text-xs 2xl:text-sm border-[#FFFFFF1A] rounded-md fill-transparent focus:outline-none text-white placeholder:text-white  ${
            icon ? "pl-10" : "" // Adjust padding if icon is present
          } ${inputClass}`}
          style={{
            color: "#FFFFFF99", // Ensures the input text stays the desired color
          }}
        />
      </div>
    </div>
  );
};

export default InputField;
