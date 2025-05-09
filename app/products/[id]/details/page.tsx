"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Navbar from "@/components/shared/Navbar";
import FadeInSection from "@/lib/FadeInAnimation";
import { DiscordCommunity } from "@/components/shared/Discord";
import { Footer } from "@/components/shared/Footer";
import { products } from "@/lib/products";
import Link from "next/link";
import { useSession } from "next-auth/react";
export default function AllProduct({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("🚀 ~ id:", id);
  const { status } = useSession();

  const product = products.find((product) => product.id === id);

  return (
    <div className="flex flex-col w-full pb-12 sm:pb-6 h-full">
      {/* Dashboard Navbar: Static and non-scrollable */}
      <Navbar />
      {/* Details Section: Scrollable */}
      <FadeInSection>
        <div className="p-4 md:p-8 md:py-12 overflow-y-auto flex-col md:flex-row  flex items-center sm:items-start  justify-center gap-20 2xl:gap-28 scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
          <Image
            src={`/products/${product?.id}.webp`}
            width={300}
            height={340}
            alt="card image"
          />
          <div className="sm:max-w-2xl">
            <h2 className="text-4xl mb-1  2xl:text-5xl font-bold">
              <span className="text-[#45F175]">{product?.title}</span>{" "}
            </h2>
            <p className="2xl:text-xl mb-7 2xl:mb-10 text-lg ">
              <span className="text-white">{product?.subtitle}</span>{" "}
            </p>

            <p
              dangerouslySetInnerHTML={{ __html: product!.description }}
              className="2xl:text-lg"
            />
            <div className=" mt-6">
              <h2 className="text-xl 2xl:text-2xl font-bold">Disclaimer!</h2>

              <p
                dangerouslySetInnerHTML={{ __html: product!.disclaimer }}
                className=" 2xl:text-lg mt-2"
              />
            </div>
            {/* <ul className="mb-5 2xl:mb-7">
              <li className="text-lg font-thin  2xl:text-xl ">
                <ul className="list-disc list-inside">
                  <li>
                    For E-mini (NQ) and Micro (MNQ) Nasdaq 100 Index Futures
                  </li>
                  <li>Strategy Type: Day Trading</li>
                  <li>Chart Bar Time: 1 min or less</li>
                </ul>
              </li>
            </ul>
            <p className=" font-thin 2xl:text-xl mt-2 mb-4">
              This strategy is optimized for short-term breakout opportunities.
              It leverages tight stop-loss parameters and a trailing take-profit
              mechanism to maximize returns while minimizing risk. Designed for
              quick scalping, it ensures minimal market exposure, executing only
              one trade per day. No positions are carried overnight, making it
              ideal for traders seeking precise, focused, and efficient trading
              solutions.
            </p> */}
            {/* <p className=" font-thin 2xl:text-xl mt-2">
              <span className=" font-bold">Compatible</span>:{" "}
              <span className=" bg-gradient-to-r text-transparent font-normal from-[#45F175] to-[#00C3CE] bg-clip-text  ">
                Metatrader, Multicharts and Tradestation
              </span>
            </p>
            <p className=" font-thin 2xl:text-xl mt-2">
              <span className=" font-semibold">
                Suggested Account for Optimal Performance:
              </span>
              <span className=" px-2 bg-gradient-to-r text-transparent font-bold from-[#45F175] to-[#00C3CE] bg-clip-text  ">
                $6,000 
              </span>
            </p> */}
            <div className="mt-6 flex flex-row gap-2  md:gap-4 items-center">
              <Link
                href="/register"
                passHref
                className=" flex-grow sm:flex-grow-0 text-white underline"
              >
                <Button
                  label="Get started"
                  className="bg-gradient-to-r py-2 2xl:py-3 px-12 md:px-16  w-full sm:w-fit font-semibold text-nowrap uppercase text-xs from-customgreen to-customblue text-black rounded-md "
                />
              </Link>
              <Link
                href={`
                  ${
                    status === "authenticated"
                      ? `/performance-summary/${product!.id}`
                      : "/register"
                  }
                  `}
                className=" flex-grow sm:flex-grow-0"
              >
                <div className="bg-gradient-to-r p-[1px] w-full sm:w-fit font-semibold text-nowrap uppercase text-xs from-customgreen to-customblue text-black rounded-md ">
                  <button className=" w-full h-full bg-black p-2 2xl:py-3 sm:px-7 uppercase text-white rounded-md flex flex-row items-center justify-center gap-2">
                    Performance Report
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className="text-center">
        <DiscordCommunity />
        <Footer />{" "}
      </div>
    </div>
  );
}
