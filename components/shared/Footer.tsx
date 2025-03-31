import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaDiscord, FaFacebook } from "react-icons/fa6";
import { About_us, quick_links } from "@/lib/constants";
import Link from "next/link";
import FadeInSection from "@/lib/FadeInAnimation";

export const Footer = () => {
  return (
    <>
      {/* previous footer */}
      {/* <FadeInSection>
        <div>
          <div className="flex  items-center flex-row gap-4 p-8 mt-6">
            <div className="w-full md:block hidden md:w-1/4  lg:flex items-center justify-center">
              <div className="">
                <Image
                  src="/images/logo.svg"
                  width={140}
                  height={40}
                  alt="logo image"
                />
                <div className="text-start">
                  <p className="text-sm 2xl:text-base pt-4 font-thin ">
                    Monday-Fridat 24h
                  </p>

                  <p className="py-4 text-sm 2xl:text-base font-thin ">
                    support@syndicatefunded.com
                  </p>
                  <p className="py-2 text-sm 2xl:text-base font-thin ">
                    The Meydan Hotel, Grandstand, 6th floor, Meydan Road, Nad Al
                    Sheba, Dubai, U.A.E
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-1/2">
              <h1 className="text-2xl 2xl:text-4xl font-bold tracking-wider ">
                Join{" "}
                <span className="bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                  THE ALGOS FIELD
                </span>{" "}
                <br /> NewsLetter
              </h1>

              <div className="inline-flex rounded-full pl-3 pr-2 md:min-w-80 items-center justify-between py-2 mt-5 border border-[#FFFFFF33] bg-[#03100C]">
                <input
                  type="email"
                  className="bg-transparent text-customlightgray text-sm focus:outline-none placeholder:text-customlightgray "
                  placeholder="Enter Your Email"
                />
                <button className="submit-btn flex gap-2 items-center text-sm py-2 px-5 rounded-full">
                  Submit <ArrowRight className="w-4 h-4" />{" "}
                </button>
              </div>

              <div className="flex  flex-row gap-2 items-center justify-center my-4">
                <FaInstagram className="icon-inner p-2 w-8 h-8 cursor-pointer rounded-full" />
                <FaDiscord className="icon-inner p-2 w-8 h-8 rounded-full cursor-pointer" />
                <FaFacebook className="icon-inner p-2 w-8 h-8 rounded-full cursor-pointer" />
              </div>
            </div>
            <div className=" md:block hidden md:w-1/4 ">
              <div className="flex flex-row gap-6 justify-between">
                <div className="">
                  <h1 className="text-lg font-semibold text-start">
                    Quick Links
                  </h1>
                  {quick_links.map((items) => (
                    <div className="mt-2 text-start" key={items.href}>
                      <Link href={items.href} className="text-sm  font-light">
                        {items.label}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="col-span-1">
                  <h1 className="text-lg text-start font-semibold">About Us</h1>
                  {About_us.map((items) => (
                    <div className="mt-2 text-start" key={items.href}>
                      <Link href={items.href} className="text-sm font-light ">
                        {items.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pb-5">
            <p className="text-sm 2xl:text-base">
              <span className="font-thin">Copyright</span> © THe ALGOS FIELD
            </p>
          </div>
        </div>
      </FadeInSection> */}
      {/* <FadeInSection>
        <div>
          <div className="flex  items-start justify-between  flex-row gap-4 p-8 mt-6">
            <div className="w-full md:block hidden   lg:flex items-start gap-12  justify-start">
              <div className=" ">
                <Image
                  src="/images/logo.svg"
                  width={140}
                  height={40}
                  alt="logo image"
                  className="
                  2xl:w-[180px]"
                />
                <div className="text-start">
                  <p className="2xl:text-lg py-8 2xl:py-10 font-semibold ">
                    Built for Traders, <br /> Powered by The Algos Field
                  </p>
                </div>
                <div className="flex  flex-row gap-2 items-center justify-start ">
                  <FaInstagram className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 cursor-pointer rounded-full" />
                  <FaDiscord className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 rounded-full cursor-pointer" />
                  <FaFacebook className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 rounded-full cursor-pointer" />
                </div>
              </div>
              <div className="">
                <h1 className="text-lg 2xl:text-xl font-semibold text-start  bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                  Quick Links
                </h1>
                {quick_links.map((items, index) => (
                  <div className="mt-4 text-start" key={index}>
                    <Link href={items.href} className="text-sm  font-light">
                      {items.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-full ">
              <h1 className="text-2xl font-bold tracking-wider bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent ">
                Smarter Trading, Right in Your Inbox
              </h1>
              <p className="text-sm 2xl:text-base pt-4 font-light ">
                Stay in the loop with algo insights, updates, and strategies. No
                spam, just the good stuff.
              </p>

              <div className="inline-flex rounded-full w-full p-4 md:min-w-80 items-center justify-between mt-5 border border-[#FFFFFF33] bg-[#03100C]">
                <input
                  type="email"
                  className="bg-transparent text-customlightgray w-full text-sm focus:outline-none placeholder:text-customlightgray "
                  placeholder="Enter Your Email To Stay Ahead"
                />
              </div>
              <div className="flex items-center justify-center gap-4 py-4 ">
                <button className="submit-btn flex gap-2 items-center text-sm py-2 2xl:py-3 px-5 2xl:px-6 rounded-full">
                  Get Updates
                </button>
                <button className="submit-btn flex gap-2 items-center text-sm py-2 2xl:py-3 px-5 2xl:px-6 rounded-full">
                  Get Insights
                </button>
              </div>
              <div className="flex md:hidden   flex-row gap-2 items-center justify-center ">
                <FaInstagram className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 cursor-pointer rounded-full" />
                <FaDiscord className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 rounded-full cursor-pointer" />
                <FaFacebook className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 rounded-full cursor-pointer" />
              </div>
              <p className="text-sm 2xl:text-base pt-4 text-center font-thin max-w-xs mx-auto ">
                We hate spam as much as bad trades - unsubscribe anytime. But
                you won’t want to.
              </p>
            </div>
            <div className=" md:block hidden w-full  ">
              <div className="flex flex-row pl-10 gap-6 justify-end">
                <div className="">
                  <h1 className="text-lg 2xl:text-xl font-semibold text-start  bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                    Quick Links
                  </h1>
                  <p className="text-xs leading-relaxed 2xl:leading-loose 2xl:text-sm  pt-4 font-thin max-w-xs text-start ">
                    Algorithmic trading involves risk, and results can vary
                    based on market conditions and individual strategies. While
                    our tools are designed to optimize trading and reduce
                    complexities, it’s important to trade responsibly and within
                    your own financial limits. We recommend consulting with a
                    licensed financial advisor before making any trading
                    decisions. Past performance does not guarantee future
                    results.
                  </p>
                </div>

                <div className="col-span-1">
                  {About_us.map((items, index) => (
                    <div
                      className="mb-4 text-sm 2xl:text-lg text-start"
                      key={index}
                    >
                      <Link href={items.href} className="text-sm font-light ">
                        {items.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pb-5  ">
            <p className="text-sm 2xl:text-base  w-fit mx-auto">
              <span className="font-thin">Copyright</span> © THe ALGOS FIELD
            </p>
          </div>
        </div>
      </FadeInSection> */}
      <FadeInSection>
        <div className=" mx-2">
          <div className="flex   items-start justify-between  flex-row gap-4 pt-8 mb-10 mx-8 sm:mx-16 2xl:mx-28 mt-6">
            <div className="w-full  flex-col  flex items-center sm:items-start  justify-start">
              <Image
                src="/images/logo.svg"
                width={140}
                height={40}
                alt="logo image"
                className="
                  2xl:w-[180px]"
              />
              <div className="text-start">
                <p className="2xl:text-lg py-8 2xl:py-10 font-semibold text-center sm:text-start ">
                  Built for Traders, <br /> Powered by The Algos Field
                </p>
              </div>
              <div className="sm:hidden flex  flex-row gap-2 items-center justify-start ">
                <FaInstagram className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 cursor-pointer rounded-full" />
                <FaDiscord className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 rounded-full cursor-pointer" />
                <FaFacebook className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 rounded-full cursor-pointer" />
              </div>
            </div>

            <div className=" md:block hidden w-full  ">
              <div className="flex flex-row pl-10 gap-12 2xl:gap-16 justify-end">
                {/* <div className="">
                  <h1 className="text-lg 2xl:text-xl font-semibold text-start  bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                    Quick Links
                  </h1>
                  <p className="text-xs leading-relaxed 2xl:leading-loose 2xl:text-sm  pt-4 font-thin max-w-xs text-start ">
                    Algorithmic trading involves risk, and results can vary
                    based on market conditions and individual strategies. While
                    our tools are designed to optimize trading and reduce
                    complexities, it’s important to trade responsibly and within
                    your own financial limits. We recommend consulting with a
                    licensed financial advisor before making any trading
                    decisions. Past performance does not guarantee future
                    results.
                  </p>
                </div> */}
                <div className="">
                  <h1 className="text-lg 2xl:text-xl font-semibold text-start  bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                    Quick Links
                  </h1>
                  {quick_links.map((items, index) => (
                    <div className="mt-4 text-start" key={index}>
                      <Link
                        href={items.href}
                        className="text-sm  2xl:text-base font-light"
                      >
                        {items.label}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="">
                  <h1 className="text-lg  2xl:text-xl font-semibold text-start  bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                    Legal
                  </h1>
                  {About_us.map((items, index) => (
                    <div className="mt-4 text-start" key={index}>
                      <Link
                        href={items.href}
                        className="text-sm 2xl:text-base font-light "
                      >
                        {items.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="  hidden pb-6 2xl:pb-8 border-b-2 border-customgreen/40 sm:flex items-center mx-8 sm:mx-16 2xl:mx-28 justify-between">
            <p className="text-sm 2xl:text-base">
              <span className="font-thin">Copyright</span> © THE ALGOS FIELD
            </p>
            <div className="flex  flex-row gap-2 items-center justify-start ">
              <Link href={"https://www.instagram.com/thealgosfield"}>
                <FaInstagram className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 cursor-pointer rounded-full" />
              </Link>
              <Link href={"https://www.facebook.com/thealgosfield"}>
                <FaDiscord className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 rounded-full cursor-pointer" />
              </Link>
              <Link href={"https://discord.gg/TJnaMHpw"}>
                <FaFacebook className="icon-inner p-2 w-8 h-8 2xl:w-10 2xl:h-10 2xl:p-2.5 rounded-full cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="py-8 px-2 grid grid-cols-1 sm:grid-cols-2 gap-5 2xl:gap-10 sm:mx-16 2xl:mx-28 mx-auto ">
            <p className="text-sm 2xl:text-base font-thin  text-pretty  w-fit ">
              Trading financial instruments, including but not limited to
              stocks, futures, forex, and cryptocurrencies carries a high level
              of risk and is not suitable for all investors. No trading
              strategy, algorithm, or system can guarantee profits or eliminate
              the risk of loss. Nothing on this website or our materials should
              be considered financial, investment, or trading advice.
            </p>
            <p className="text-sm 2xl:text-base font-thin  text-pretty  w-fit ">
              Algorithmic trading relies on market conditions, broker execution,
              and third-party platforms. Factors such as latency, slippage,
              illiquidity, system outages, and sudden market movements can
              result in unexpected losses. No trading system can predict or
              control market conditions, and execution quality may vary
              depending on liquidity and broker policies. Any reported
              backtests, simulated performance or past results do not guarantee
              future outcomes.
            </p>
            <p className="text-sm 2xl:text-base font-thin  text-pretty  w-fit ">
              Users of The Algos Field services are responsible for selecting
              their own brokers and trading platforms. We do not operate as a
              broker nor execute trades on behalf of users. The Algos Field
              assumes no liability for any technical failures, order execution
              issues, pricing errors, or policies of third-party brokers.
              Algorithmic trading may be subject to regulatory oversight
              depending on the jurisdiction. It is the sole responsibility of
              each user to ensure their trading activities comply with the laws,
              regulations, and licensing requirements in their respective
              country. The Algos Field does not provide legal, tax, or
              compliance advice regarding trading regulations.
            </p>
            <p className="text-sm 2xl:text-base font-thin  text-pretty  w-fit ">
              Algos Field and its affiliates assume no responsibility for
              trading losses incurred by users. By using our services, you
              acknowledge and accept that trading is inherently risky and assume
              full responsibility for your trading outcomes. Testimonials on
              this website reflect individual experiences and may not represent
              all users. No testimonial guarantees future success, and results
              will vary from trader to trader.
            </p>
          </div>

          {/* <div className="pb-5  ">
            <p className="text-sm 2xl:text-base  w-fit mx-auto">
              <span className="font-thin">Copyright</span> © THe ALGOS FIELD
            </p>
          </div> */}
        </div>
      </FadeInSection>
    </>
  );
};
