"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import AnimationSection from "./AnimationSection";
import Image from "next/image";

export default function FAQComponent({ question_ans }) {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (id: any) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === id ? null : id));
  };

  // Animation variants for Framer Motion
  const accordionVariants = {
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    expanded: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      {question_ans.map((item: any, index: any) => (
        <div key={index} className="group border-none mb-4">
          {/* Accordion Header */}
          <AnimationSection>
            <div
              onClick={() => handleToggle(item.question)}
              className="bg-[#04100C] tracking-wider px-[20px] py-[12px] text-[15px] 2xl:text-[18px]  rounded-md border border-[#FFFFFF33] flex justify-between items-center cursor-pointer"
            >
              <span className="text-left">{item.question}</span>
              <span className="flex-shrink-0">
                {openItem === item.question ? (
                  <Image
                    src="/images/minus.svg"
                    width={12}
                    height={20}
                    alt="Open"
                  />
                ) : (
                  <Image
                    src="/images/plus.svg"
                    width={12}
                    height={20}
                    alt="Close"
                  />
                )}
              </span>
            </div>
          </AnimationSection>

          {/* Accordion Body with Framer Motion animation */}
          <AnimatePresence initial={false}>
            {openItem === item.question && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                variants={accordionVariants}
                className="overflow-hidden text-start  font-light bg-[#04100C] text-sm  p-3 sm:px-8 rounded-b-md border border-[#FFFFFF33] border-t-0 leading-7  tracking-wider"
              >
                <p dangerouslySetInnerHTML={{ __html: item.answer }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
}
