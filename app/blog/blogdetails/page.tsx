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
            <h1 className="text-xl md:text-3xl py-2 lg:text-5xl 2xl:text-7xl text-center bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent font-bold">
              Introducing The Algos Field: The Future of Automated Trading
            </h1>
            <div className="flex flex-row justify-between items-center my-3 text-[#979797]">
              <p>By Author</p>
              <p>13 March 2025</p>
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
            {/* <div className="text-[14px] 2xl:text-base mx-5">
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
            </div> */}
            <p className="text-white mb-4">
              Imagine a trading world where your strategy never sleeps, emotions
              don’t dictate decisions, and market inefficiencies are exploited
              in real-time, all without lifting a finger. Algorithmic trading is
              no longer just for hedge funds and institutional players. It’s
              reshaping retail investing, empowering traders to achieve
              consistent profits without spending hours monitoring the markets.
            </p>
            <p className="text-white mb-4">
              Enter <strong>The Algos Field (TAF)</strong>—a fully automated,
              hands-free trading solution designed to give both beginner and
              experienced traders a powerful edge. With proven data-driven
              strategies, rigorous 3+ years of back-testing, and a 75%+ win
              rate, The Algos Field is built to maximize efficiency, minimize
              risk, and remove emotional bias from trading.
            </p>
            <button className="bg-gradient-to-r from-customgreen to-customblue text-black px-6 py-2 rounded-lg hover:px-8 transition-all my-3 ">
              Automate Your Trading Now
            </button>

            <h2 className="text-2xl font-semibold text-customgreen mt-6 mb-3">
              The Rise of Algorithmic Trading
            </h2>
            <p className="text-white mb-4">
              Algorithmic trading is transforming global financial markets. Over
              70% of all trades in major exchanges are now executed by
              algorithms, allowing traders to capitalize on market movements at
              speeds impossible for humans.
            </p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>✔ Algos don’t make emotional decisions.</li>
              <li>✔ They don’t suffer from fatigue or hesitation.</li>
              <li>
                ✔ They execute trades in milliseconds, securing optimal entry
                and exit points.
              </li>
            </ul>
            <button className="bg-gradient-to-r from-customgreen to-customblue text-black px-6 py-2 rounded-lg hover:px-8 transition-all my-3 ">
              Trade Smarter with Automation
            </button>

            <h2 className="text-2xl font-semibold text-customgreen mt-6 mb-3">
              What Makes The Algos Field Unique?
            </h2>
            <h3 className="text-xl font-semibold text-customlight mt-4">
              1. Fully Automated, Hands-Free Trading
            </h3>
            <p className="text-white mb-4">
              With The Algos Field, you don’t need to spend hours analyzing
              charts or second-guessing trade decisions. Every trade is executed
              automatically, following a proven algorithmic system optimized for
              market efficiency.
            </p>
            <h3 className="text-xl font-semibold text-customlight mt-4">
              2. Proven Performance Backed by 3+ Years of Testing
            </h3>
            <p className="text-white mb-4">
              Many trading platforms promise profitability, but few provide
              real, transparent performance data. The Algos Field strategies
              have undergone extensive back-testing and live validation.
            </p>
            <h3 className="text-xl font-semibold text-customlight mt-4">
              3. Multiple Strategies for Diversification
            </h3>
            <p className="text-white mb-4">
              Instead of relying on a single trading approach, The Algos Field
              offers 10 different strategies tailored for various market
              conditions.
            </p>
            <h3 className="text-xl font-semibold text-customlight mt-4">
              4. Advanced Risk Management Controls
            </h3>
            <p className="text-white mb-4">
              Risk management is built directly into The Algos Field’s trading
              algorithms, including stop-loss mechanisms, position sizing, and
              drawdown protection.
            </p>
            <h3 className="text-xl font-semibold text-customlight mt-4">
              5. Simple Setup, No Coding Required
            </h3>
            <p className="text-white mb-4">
              The Algos Field is designed for ease of use, requiring no coding
              skills. Simply choose your strategy, install it, and start
              trading.
            </p>
            <button className="bg-gradient-to-r from-customgreen to-customblue text-black px-6 py-2 rounded-lg hover:px-8 transition-all my-3 ">
              Get Started in Minutes
            </button>

            <h2 className="text-2xl font-semibold text-customgreen mt-6 mb-3">
              How The Algos Field Stacks Up Against Competitors
            </h2>
            <table className="w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="">
                  <th className="p-2 border border-gray-300">Feature</th>
                  <th className="p-2 border border-gray-300">
                    The Algos Field
                  </th>
                  <th className="p-2 border border-gray-300">
                    Other Trading Bots
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-300">
                    Fully Automated
                  </td>
                  <td className="p-2 border border-gray-300">✅ Yes</td>
                  <td className="p-2 border border-gray-300">❌ Partial</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">
                    Proven Performance
                  </td>
                  <td className="p-2 border border-gray-300">
                    ✅ 75%+ Win Rate
                  </td>
                  <td className="p-2 border border-gray-300">
                    ❌ Limited Transparency
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-semibold text-customgreen mt-6 mb-3">
              Join the Trading Revolution
            </h2>
            <p className="text-white mb-4">
              Algorithmic trading is the future—and The Algos Field is leading
              the charge. Whether you’re looking to maximize trading efficiency,
              generate passive income, or gain an edge in volatile markets, The
              Algos Field offers an elite trading experience without the
              complexity.
            </p>
            <button className="bg-gradient-to-r from-customgreen to-customblue text-black px-6 py-2 rounded-lg hover:px-8 transition-all my-3 ">
              Start Your Journey Today
            </button>
          </div>
        </div>

        {/* Frequent asked Questions */}
        <div className="text-center py-12">
          <FAQ />
        </div>

        {/* Related Content section */}
        {/* <div className="bg-gradient-to-b from-[#45F17580] to-[#02090780] px-8 py-12">
          <p className="text-3xl mb-3 font-bold">Related Content</p>
          <Carousel items={cards} />
        </div> */}

        {/* Footer */}
        <div>
          <DiscordCommunity />
          <Footer />
        </div>
      </div>
    </>
  );
}
