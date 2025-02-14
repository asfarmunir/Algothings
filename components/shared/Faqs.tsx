"use client";
import AnimationSection from "../ui/AnimationSection";
import FAQComponent from "../ui/FaqComponent";
import Image from "next/image";
import { useState } from "react";

const question_ans = [
  {
    title: "How can I get started with Trade Tech Solutions?",
    answer:
      "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {
    title: "How long does it typically take to launch a prop firm with us?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },
  {
    title: "Can I retain all the profits I generate with my prop firm?",
    answer:
      "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {
    title: "What types of payment methods does Trade Tech Solutions support?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },
  {
    title: "Can Trade Tech Solutions assist with marketing my prop firm?",
    answer:
      "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {
    title: "Which trading platforms do you support?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },
  {
    title: "Which Prop Firms are using Trade Tech Solutions services?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },
  {
    title: "Do you only provide tech, or do you offer other services as well?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },
  {
    title: "Why choose Trade Tech Solutions? What makes you stand out?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },

  // Additional FAQ items
];

export default function FAQ() {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <>
      <section id="faqs">
        <div className="bg-[#FFFFFF05] ">
          <div className="mx-6  md:my-3">
            <AnimationSection>
              <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
                <Image
                  src="/images/welcomestar.svg"
                  width={20}
                  height={30}
                  alt="welcome star"
                />
                <p className="text-[16px] gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                  FAQs
                </p>
              </div>

              <div className="mt-3">
                <h1 className="text-[34px] font-spaceGrotesk font-semibold">
                  Frequently Asked Questions?
                </h1>
                <p className="text-[20px] font-thin mt-1">
                  Revolutionize your trading game with BTFT.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-6 lg:grid-cols-3  gap-5  2xl:gap-7 w-full sm:w-fit py-3 px-2">
                {["Category 1", "Category 2", "Category 3"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="w-full bg-gradient-to-r from-customgreen to-customblue bg-clip-border p-[1px] rounded-md"
                    >
                      <button
                        onClick={() => setActiveStep(index + 1)}
                        className={` py-[10px] w-full rounded-md px-12 transition duration-300 uppercase ${
                          activeStep === index + 1
                            ? "bg-gradient-to-r from-customgreen text-black to-customblue"
                            : "bg-black text-customgreen "
                        } text-sm sm:text-[23px]  tracking-wider`}
                      >
                        <span
                          className={`${
                            activeStep === index + 1
                              ? "text-black"
                              : "bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent"
                          }`}
                        >
                          {item}
                        </span>
                      </button>
                    </div>
                  )
                )}
              </div>
            </AnimationSection>

            {/* Center the Accordion container */}
            <div className="flex justify-center mt-4 ">
              <div className="w-full mx-4 md:mx-12 lg:mx-[90px]">
                <FAQComponent question_ans={question_ans} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
