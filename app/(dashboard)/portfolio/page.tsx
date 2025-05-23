"use client";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { Plans } from "@/components/shared/plans";
import Sidebar from "@/components/shared/Sidebar";
import Dropdown from "@/components/ui/Dropdown";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useCart } from "@/lib/CartContext";
import { TiShoppingCart } from "react-icons/ti";
import toast from "react-hot-toast";
export default function Algorithm() {
  const [activeButton, setActiveButton] = useState("Monthly");
  const handleSelect = (plan: string) => {
    console.log("values is", plan);
  };

  const {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    clearCart,
    subscription,
    setSubscription,
    updatePlatform,
    platform,
  } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (!subscription) {
      router.push("/getting-started");
    }
    if (subscription) clearCart();
  }, []);

  return (
    <>
      <div className="flex h-screen">
        {" "}
        {/* Prevent horizontal scrolling */}
        {/* Sidebar */}
        <div className="">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex-grow flex flex-col">
          {/* Dashboard Navbar */}
          <DashboardNavbar />

          {/* Content Section */}
          <div className="py-4  px-6 md:px-10 mt-4 flex flex-col lg:flex-row gap-8 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
            {/* Left Section: Algorithms */}
            <div className="w-full lg:w-2/3 ">
              <h1 className="text-xl font-semibold">
                <span className="bg-gradient-to-r from-customgreen to-customblue bg-clip-text text-transparent">
                  Unlock the Full Power of All 10 Algorithms
                </span>{" "}
                in a Single Powerful Strategy
              </h1>

              <div className="grid grid-cols-1 gap-3 my-5">
                {Array.from({ length: 1 }).map((_, index) => (
                  <div
                    key={index}
                    className=" bg-gradient-to-b from-customgreen to-customblue bg-clip-border p-[2px] rounded-[20px]"
                  >
                    <div className="bg-[#04110D] py-8  px-[30px] md:px-[40px] rounded-[20px] h-auto ">
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex flex-row gap-2">
                          <Image
                            src="/images/logo1.svg"
                            width={40}
                            height={20}
                            alt="Logo"
                          />
                          <div className="text-start">
                            <h1 className="text-[16px] text-start  tracking-wide capitalize font-semibold">
                              TAF Genesis
                            </h1>
                            <p className="text-customgray text-[12px]">
                              The Ultimate Strategy Trading Portfolio
                            </p>
                          </div>
                        </div>
                        <div className="w-full sm:w-auto bg-gradient-to-r from-customgreen to-customblue bg-clip-border p-[1px] rounded-lg">
                          <Button
                            className="rounded-lg text-sm px-6 w-full sm:w-auto py-3 bg-[#04110D]"
                            label="Most Popular"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-4 relative">
                        <div className="w-full">
                          <img
                            src="/images/portfolio.webp"
                            alt="card image"
                            className="w-full h-auto sm:w-auto"
                          />
                        </div>
                        <div className="ml-0 sm:ml-4 w-full lg:w-2/3 flex flex-col justify-between">
                          <div className=" md:mt-6 md:text-start w-full md:pl-6">
                            <p className="text-customgray text-[12px]  font-semibold">
                              Profit last month
                            </p>
                            <p className="text-customgreen tracking-wider  text-3xl sm:text-4xl md:text-[45px] font-semibold py-6 ">
                              +3.89%
                            </p>
                          </div>
                          <div className="w-full flex flex-row gap-4 items-center">
                            <Button
                              disabled={cart.some(
                                (item) => item.id === "portfolio"
                              )}
                              onClick={() =>
                                addToCart({
                                  id: "taf-genesis",
                                  name: "TAF Genesis",
                                  priceId:
                                    subscription?.type === "monthly"
                                      ? "price_1QuXBfC5ofyYVWUT1FOYcOmp"
                                      : "price_1R4pVgC5ofyYVWUTB0Vggbip",
                                })
                              }
                              label="Add to Cart"
                              className="bg-gradient-to-r disabled:opacity-35 w-full text-nowrap font-semibold py-[12px] px-[20px] uppercase text-sm from-customgreen to-customblue text-black rounded-md"
                            />
                            {/* <button className="flex flex-row gap-2 items-center uppercase text-nowrap p-0 text-sm">
                              <GoArrowUpRight />
                              <span>LEARN MORE</span>
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section: Cart */}
            {/* <div className="w-full lg:w-1/3  ">
              <h1 className="text-3xl lg:text-2xl  font-semibold">Cart</h1>
              <div className="pt-2 pb-12">
                <p className="text-sm py-2">Choose Trading Platform</p>
                <div className=" w-80">
                  <Dropdown
                    options={["Select 1", "Select 2", "Select 3"]}
                    onSelect={handleSelect}
                    placeholder="Select Platform"
                    className="bg-[#03100C] py-2  text-sm w-full"
                    textclassName=""
                    dropdownClass=" w-60 lg:w-44"
                  />
                </div>

                <div className="text-end my-2">
                  <Link href={""} className="text-sm hover:underline">
                    Remove All
                  </Link>
                </div>

                <div className="flex flex-col gap-4 mt-2">
                  {Array.from({ length: 1 }).map((_, item) => (
                    <div
                      key={item}
                      className="bg-[#03100C] py-2 px-4 lg:px-2 rounded-lg flex flex-row gap-3"
                    >
                      <Image
                        src="/images/logo1.svg"
                        width={35}
                        height={20}
                        alt="Logo"
                      />
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row  justify-between ">
                          <p className="truncate text-xs">
                            Asuras Dragonair Bot #169
                          </p>
                          <p className="text-xs">€148</p>
                        </div>
                        <div className="w-full flex flex-row justify-between gap-16 items-center">
                          <p className="text-customgray text-nowrap text-xs sm:text-sm">
                            Profit Target
                          </p>
                          <div>
                            <button>
                              <IoMdRemoveCircleOutline className="text-xl text-customgreen" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="w-full  flex justify-center items-center">
                    <div className="w-full inline-flex bg-gradient-to-r from-customgreen to-customblue p-[1px] rounded-xl">
                      <div className="w-full bg-black rounded-xl p-1 flex">
                        <button
                          onClick={() => setActiveButton("Monthly")}
                          className={`${
                            activeButton === "Monthly"
                              ? "bg-gradient-to-r from-customgreen to-customblue text-black"
                              : "bg-black text-white"
                          } rounded-md px-4 py-1 w-full`}
                        >
                          Monthly
                        </button>
                        <button
                          onClick={() => setActiveButton("Annually")}
                          className={`${
                            activeButton === "Annually"
                              ? "bg-gradient-to-r from-customgreen to-customblue text-black"
                              : "bg-black text-white"
                          } rounded-md px-4 py-1 text-[14px] w-full`}
                        >
                          Annually(-10%)
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex flex-row justify-between gap-5">
                      <p className="text-customlightgray">Subtotal</p>
                      <p>€200</p>
                    </div>
                    <div className="flex flex-row justify-between gap-5">
                      <p className="text-customlightgray">Tax</p>
                      <p>€0.00</p>
                    </div>
                    <div className="flex flex-row justify-between gap-5">
                      <p className="text-customlightgray">Total</p>
                      <p className="font-semibold">€208</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full border-b border-customgray pb-5">
                    <div className="inline-flex bg-gradient-to-r w-full from-customgreen to-customblue p-[1px] rounded-xl">
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        className="rounded-tl-xl rounded-bl-xl bg-black text-sm lg:text-xs w-full  text-center focus:outline-none"
                      />

                      <div className="bg-black rounded-tr-xl rounded-br-xl p-1 flex">
                        <button
                          className={`bg-gradient-to-r text-xs 2xl:text-sm from-customgreen to-customblue text-black
                               rounded-md px-6 hover:px-8 transition-all py-2 `}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                  <Button
                    label="Checkout"
                    onClick={() => router.push("/billings")}
                    className="bg-gradient-to-r from-customgreen to-customblue py-2 2xl:py-3 font-semibold text-sm 2xl:text-base text-black rounded-md w-full"
                  />
                </div>
              </div>
            </div> */}
            <div className=" w-full lg:w-[30%] max-w-xl">
              <h1 className="text-3xl lg:text-2xl font-semibold">Cart</h1>
              <div className="py-1">
                <Dropdown
                  options={["MultiCharts", "TradeStation ", "MetaTrader "]}
                  onSelect={
                    //@ts-ignore
                    (platform: string) => updatePlatform(platform)
                  }
                  placeholder="Select Platform"
                  className="bg-[#03100C] py-2  text-sm w-full"
                  textclassName=""
                  dropdownClass=" w-60 lg:w-44"
                />
                {cart.length ? (
                  <div className="text-end my-2">
                    <button
                      onClick={clearCart}
                      className="text-xs 2xl:text-sm hover:underline"
                    >
                      Remove All
                    </button>
                  </div>
                ) : null}
                {cart.length ? (
                  <div className="flex flex-col gap-4">
                    {/* Item 1 */}
                    {cart.map((item, index) => (
                      <div
                        key={index}
                        className="bg-[#03100C] py-2 px-4 lg:px-2 rounded-lg flex flex-row gap-3"
                      >
                        <Image
                          src="/images/logo1.svg"
                          width={35}
                          height={20}
                          alt="Logo"
                        />
                        <div className="w-full flex flex-col gap-2">
                          <div className="flex flex-row justify-between  ">
                            <p className="truncate capitalize text-sm 2xl:text-base">
                              {item.name}
                            </p>
                            <p className="text-sm 2xl:text-base font-semibold">
                              €{subscription?.price}
                            </p>
                          </div>
                          <div className="w-full flex flex-row justify-between gap-16 items-center">
                            <p className="text-customgray text-nowrap text-xs 2xl:text-[14px]">
                              Profit Target
                            </p>
                            <div>
                              {/* <Dropdown
                                            options={["0", "1", "2", "3"]}
                                            onSelect={handleSelect}
                                            placeholder="1"
                                            className="bg-[#D9D9D91A] text-sm lg:text-xs w-[50px] border border-black text-center"
                                          /> */}
                              <button onClick={() => removeFromCart(item.id)}>
                                <IoMdRemoveCircleOutline className="text-xl text-customgreen" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="flex justify-center items-center w-full">
                      <div className="inline-flex bg-gradient-to-r w-full from-customgreen to-customblue p-[1px] rounded-xl">
                        <div className="bg-black rounded-xl p-1 flex w-full">
                          <button
                            disabled={subscription?.type === "monthly"}
                            onClick={() => {
                              setSubscription(
                                //@ts-ignore
                                (subscription: Subscription) => ({
                                  ...subscription,
                                  type: "monthly",
                                  price: 698,
                                })
                              );
                              //@ts-ignore
                              setCart((prevCart) =>
                                prevCart.map((item: any) => ({
                                  ...item,
                                  priceId: "price_1QuXBfC5ofyYVWUT1FOYcOmp", // Monthly Plan ID
                                }))
                              );
                            }}
                            className={`${
                              subscription?.type === "monthly"
                                ? "bg-gradient-to-r from-customgreen to-customblue text-black"
                                : "bg-black text-white"
                            } rounded-md px-4 py-1 w-full  `}
                          >
                            Monthly
                          </button>
                          <button
                            disabled={subscription?.type === "annual"}
                            onClick={() => {
                              setSubscription(
                                //@ts-ignore
                                (subscription: Subscription) => ({
                                  ...subscription,
                                  type: "annual",
                                  price: 629,
                                })
                              );
                              //@ts-ignore
                              setCart((prevCart) =>
                                prevCart.map((item: any) => ({
                                  ...item,
                                  priceId: "price_1R4pVgC5ofyVWUTB0Vggbip", // Annual Plan ID
                                }))
                              );
                            }}
                            className={`${
                              subscription?.type === "annual"
                                ? "bg-gradient-to-r from-customgreen to-customblue text-black"
                                : "bg-black text-white"
                            } rounded-md px-4 py-1 text-[14px] w-full`}
                          >
                            Annually(-10%)
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* details */}
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex flex-row justify-between gap-5">
                        <p className="text-customlightgray">Subtotal</p>
                        <p>
                          €
                          {cart.reduce(
                            (acc, item) => acc + subscription!.price,
                            0
                          )}
                          /mo
                        </p>
                      </div>
                      <div className="flex flex-row justify-between gap-5">
                        <p className="text-customlightgray">Tax</p>
                        <p>€0.00</p>
                      </div>
                      <div className="flex flex-row justify-between gap-5">
                        <p className="text-customlightgray">Total</p>
                        <p className="font-semibold">
                          €
                          {cart.reduce(
                            (acc, item) => acc + subscription!.price,
                            0
                          ) * (subscription?.type === "annual" ? 12 : 1)}
                          {subscription?.type === "annual" ? "/year" : "/mo"}
                        </p>
                      </div>
                      {subscription?.type === "annual" && (
                        <p className="text-customgreen">
                          Billed annually – 10% discount applied
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center items-center w-full border-b border-customgray pb-5">
                      <div className="inline-flex bg-gradient-to-r w-full from-customgreen to-customblue p-[1px] rounded-xl">
                        <input
                          type="text"
                          placeholder="Coupon Code"
                          className="rounded-tl-xl rounded-bl-xl bg-black text-sm lg:text-xs w-full  text-center focus:outline-none"
                        />

                        <div className="bg-black rounded-tr-xl rounded-br-xl p-1 flex">
                          <button
                            className={`bg-gradient-to-r text-xs 2xl:text-sm from-customgreen to-customblue text-black
                                           rounded-md px-6 hover:px-8 transition-all py-2 `}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* <Button
                      label="Checkout"
                      onClick={() => router.push("/billings")}
                      className="bg-gradient-to-r  from-customgreen to-customblue py-2 2xl:py-3 text-sm  2xl:text-base text-black font-semibold rounded-md w-full"
                    /> */}
                    <Button
                      label="Checkout"
                      onClick={() => {
                        if (!platform) {
                          toast.error("Please select a platform");
                          return;
                        }
                        router.push("/billings");
                      }}
                      className="bg-gradient-to-r  from-customgreen to-customblue py-2 2xl:py-3 text-sm  2xl:text-base text-black font-semibold rounded-md w-full"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-4 flex-col bg-customgreen/10 rounded-lg p-7 my-4">
                    <p className="pt-4">
                      <TiShoppingCart className="text-5xl  text-customgreen" />
                    </p>
                    <p className="text-sm 2xl:text-base font-semibold text-customgreen">
                      Your cart is empty
                    </p>
                    <p className="text-xs 2xl:text-sm text-customlight pb-6">
                      Add your favourite strategies to the cart
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
