"use client";

import React from "react";
import Image from "next/image";
import Carousel from "../ui/Carousel1";
import Button from "../ui/Button";
import { cards } from "@/lib/constants";
import FadeInSection from "@/lib/FadeInAnimation";
import { useBlogs } from "@/hooks/useBlog";

export default function Blogs() {
  const { blog, error } = useBlogs();

  return (
    <>
      <section id="blog">
        <FadeInSection>
          <div className="my-4  py-8">
            <div className="mx-6 ">
              {" "}
              {/* Increased padding for navigation buttons */}
              <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
                <Image
                  src="/images/welcomestar.svg"
                  width={20}
                  height={30}
                  alt="welcome star"
                />
                <p className="text-[16px] gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                  Blogs
                </p>
              </div>
              <h1 className=" text-[56px]  mt-4 text-center my-6">
                The Traders&apos; Playbook
              </h1>
              <div className="  md:mx-12 lg:mx-[90px] pt-6 md:pt-0">
                {/* replace card */}
                <Carousel items={cards} />
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
