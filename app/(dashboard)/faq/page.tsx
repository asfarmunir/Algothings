"use client";
import { Algorithm } from "@/components/shared/Algorithm";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { Plans } from "@/components/shared/plans";
import Sidebar from "@/components/shared/Sidebar";
import Accordion from "@/components/ui/Accordion";

import { useState } from "react";

export default function FAQ() {
  const faqItems = [
    {
      title: "How can I get started with Trade Tech Solutions?",
      content:
        "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
    },
    {
      title: "How can I get started with Trade Tech Solutions?",
      content:
        "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
    },
    {
      title: "How can I get started with Trade Tech Solutions?",
      content:
        "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
    },
  ];

  const [activeStep, setActiveStep] = useState(1);

  return (
    <>
      <div className="flex flex-row h-screen">
        {/* Sidebar: Static and non-scrollable */}
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full h-full">
          {/* Dashboard Navbar: Static and non-scrollable */}
          <DashboardNavbar />
          {/* Details Section: Scrollable */}
          <div className="flex-grow gradient-corners-main  p-4 overflow-y-auto scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
            <h1 className="text-4xl font-bold text-center my-5">
              Frequently Asked Questions?
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-6 lg:grid-cols-3  gap-5  2xl:gap-7 w-full sm:w-fit py-3 px-2">
              {["Category 1", "Category 2", "Category 3"].map((item, index) => (
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
              ))}
            </div>
            <div>
              <div className="px-6">
                <Accordion
                  items={faqItems}
                  containerStyles=""
                  titleStyles="bg-customcard text-[20px] py-4 font-semibold"
                  contentStyles="bg-customcard font-light"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
