'use client';
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  placeholder?: string;
  className?: string;
  textclassName?: string;
  dropdownClass?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder = "Select an option",
  className,
  textclassName,
  dropdownClass,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [dropUp, setDropUp] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setDropUp(true);
      } else {
        setDropUp(false);
      }
    }
  }, [isOpen]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block ${dropdownClass}`}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`px-2 py-1 text-left bg-[#101C18] rounded-md shadow-sm focus:outline-none flex justify-between items-center ${className}`}
      >
        <span>{selectedOption || placeholder}</span>
        {isOpen ? (
          <FaChevronUp className="text-white text-sm" />
        ) : (
          <FaChevronDown className="text-white text-sm" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className={`absolute w-full z-10 bg-black border border-[#FFFFFF1A] rounded-md shadow-lg ${
            dropUp ? "bottom-full mb-2" : "mt-2"
          }`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-[#04110D] hover:text-white ${textclassName}`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
