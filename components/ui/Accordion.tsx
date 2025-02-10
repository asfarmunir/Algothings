// Import necessary libraries
'use client';
import React, { useState } from "react";
import { IconType } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";

// Define types for props
interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
  iconOpen?: IconType;
  iconClose?: IconType;
  containerStyles?: string;
  titleStyles?: string;
  contentStyles?: string;
}

// Reusable Accordion component
const Accordion: React.FC<AccordionProps> = ({
  items,
  iconOpen: IconOpen = FiMinus,
  iconClose: IconClose = FiPlus,
  containerStyles = "",
  titleStyles = "",
  contentStyles = "",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${containerStyles}`}>
     
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-[#FFFFFF33] rounded-md shadow-sm overflow-hidden"
        >
           <svg width="0" height="0">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%" >
            <stop offset="0%" style={{ stopColor: '#45F175', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00C3CE', stopOpacity: 1 }} />

          </linearGradient>
        </defs>
      </svg>
          <button
            className={`flex justify-between items-center w-full px-[20px] font-semibold text-sm bg-customcard ${titleStyles}`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-left">{item.title}</span>
            {openIndex === index ? (
            
              <Image src="/images/minus.svg" width={12} height={20} alt="Open" />
            ) : (
            
              <Image src="/images/plus.svg" width={12} height={20} alt="Close" />
            )}
          </button>
          {openIndex === index && (
            <div className={`p-4 bg-customcard text-sm ${contentStyles}`}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;