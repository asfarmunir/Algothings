"use client";

import React from "react";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import FAQ from "@/components/shared/Faqs";
import { cards } from "@/lib/constants";
import { Footer } from "@/components/shared/Footer";
import { useBlogDetails } from "@/hooks/useBlog";
import Link from "next/link";
import { DiscordCommunity } from "@/components/shared/Discord";

// Dynamically import the Carousel component for client-side rendering
const Carousel = dynamic(() => import("@/components/ui/Carousel1"), {
  ssr: false,
});

export default function BlogDetails() {
  const { blogDetails, error } = useBlogDetails();
  return (
    <>
      <div className="">
        <div>
          <Navbar />
        </div>
        <div className="mx-5 md:mx-20">
          <Link href="/blog">
            <Image
              src="/images/arrowback.svg"
              width={30}
              height={30}
              alt="arrow back"
              className="py-4"
            />
          </Link>

          <div className="mx-2 md:mx-4 mt-4">
            <h1 className="text-xl md:text-3xl lg:text-5xl 2xl:text-7xl text-center bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent font-bold">
              How to Retain Customers After Black Friday and Cyber Monday: 7
              Proven Strategies
            </h1>
            <div className="flex flex-row justify-between items-center my-3 text-[#979797]">
              <p>By Author</p>
              <p>23 November 2023</p>
            </div>

            <div className="my-2 md:my-6 mx-2 md:mx-10 px-2 md:px-10">
              <Image
                src="/images/comGraph.svg"
                width={1024}
                height={300}
                alt="image"
                className="w-full sm:w-auto"
              />
            </div>
            <div className="text-[14px] 2xl:text-base mx-5">
              <p>
                Black Friday and Cyber Monday (BFCM) bring a massive surge in
                traffic and sales, but the true value comes from turning these
                one-time shoppers into long-term loyal customers. Once the
                frenzy of the holiday shopping season settles, the goal shifts
                from acquiring new customers to retaining them for continued
                growth.
              </p>
              <p className="py-3">
                In this guide, we’ll walk through 7 proven strategies to help
                you retain customers after BFCM and build lasting relationships
                that drive repeat purchases.
              </p>

              <h1 className="mt-6 text-3xl font-semibold">
                1. Send Personalized Thank-You Emails
              </h1>
              <p>
                Once your customers have made their purchases during Black
                Friday and Cyber Monday, a simple yet effective way to start
                nurturing loyalty is through a personalized thank-you email.
              </p>

              <p className="text-sm font-semibold pt-4 pb-2">Why it Works:</p>
              <ul className="list-disc ml-4">
                <li>
                  Once your customers have made their purchases during Black
                  Friday and Cyber Monday, a simple yet effective way to start
                  nurturing loyalty is through a personalized thank-you email.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frequent asked Questions */}
        <div className="text-center py-12">
          <FAQ />
        </div>

        {/* Related Content section */}
        <div className="bg-gradient-to-b from-[#45F17580] to-[#02090780] px-8 py-12">
          <p className="text-3xl mb-3 font-bold">Related Content</p>
          <Carousel items={cards} />
        </div>

        {/* Footer */}
        <div>
          <DiscordCommunity />
          <Footer />
        </div>
      </div>
    </>
  );
}
