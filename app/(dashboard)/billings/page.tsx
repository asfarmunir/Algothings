"use client";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Sidebar from "@/components/shared/Sidebar";
import Dropdown from "@/components/ui/Dropdown";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";
import InputField from "@/components/ui/InputField";
import useBillingDetails from "@/hooks/useBillingDetails";
import { useCart } from "@/lib/CartContext";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { useRouter } from "next//navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
export default function BillingDetails() {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    if (!subscription) {
      router.push("/subscription");
    }
    if (!cart.length) {
      router.push("/subscription");
    }
  }, []);
  const { formData, isSubmitting, error, handleInputChange, handleSubmit } =
    useBillingDetails();
  console.log("🚀 ~ BillingDetails ~ formData:", formData);

  const handleSelectCountry = (value: string) => {
    handleInputChange("country", value);
  };

  const checkout = async () => {
    if (!platform) {
      toast.error("Please select a platform");
      return;
    }
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.state ||
      !formData.city ||
      !formData.zip ||
      !formData.address
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/stripe-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cart: cart.map((product) => ({
          id: product.id,
          name: product.name,
          priceId: product.priceId,
          price: subscription?.price,
        })),
        metadata: {
          type: subscription?.type,
          //@ts-ignore
          userId: session!.user!.id,
          platform,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          zip: formData.zip,
          address: formData.address,
        },
      }),
    });
    setLoading(false);
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    // if (data.url) {
    //   window.open(data.url, "_blank"); // ✅ Open in a new tab
    // }
  };

  return (
    <>
      <div className="flex flex-row h-screen">
        {/* Sidebar: Static and non-scrollable */}
        <div className="">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full  h-full">
          {/* BillingDetails Navbar: Static and non-scrollable */}
          <DashboardNavbar />
          {/* Details Section: Scrollable */}
          <div className="flex-grow px-8 md:px-4 py-10 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-4">
              <div className="w-full lg:w-2/3">
                <h1 className="text-2xl 2xl:text-3xl font-bold">
                  Billing Details
                </h1>

                <div className="mt-4">
                  <form
                    className=" space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="flex w-full flex-col gap-4 md:flex-row">
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="First Name"
                          placeholder="Enter Your First Name"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />
                      </div>
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="Last Name"
                          placeholder="Enter Your Last Name"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />{" "}
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-4 md:flex-row">
                      <div className="w-full">
                        <InputField
                          type="email"
                          label="Email"
                          placeholder="email@gmail.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />{" "}
                      </div>
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="Phone"
                          placeholder="+03847584523"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />{" "}
                      </div>{" "}
                    </div>

                    <div className="flex w-full flex-col gap-4 md:flex-row">
                      <div className="w-full">
                        <div className="flex flex-col">
                          <label className="text-sm text-white pb-2">
                            Country
                          </label>
                          <Dropdown
                            options={[
                              "Pakistan",
                              "Australia",
                              "Canada",
                              "US",
                              "UK",
                            ]}
                            onSelect={handleSelectCountry}
                            placeholder="Select Country"
                            className="py-3 w-full text-[14px] placeholder:text-white text-white"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="State/Country"
                          placeholder="Enter Your State"
                          value={formData.state}
                          onChange={(e) =>
                            handleInputChange("state", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-white text-[14px] py-3 placeholder:text-[14px] w-full"
                        />{" "}
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-4 md:flex-row">
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="Town/City"
                          placeholder="Enter town"
                          value={formData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />
                      </div>
                      <div className="w-full">
                        <InputField
                          type="text"
                          label="Postcode/ZIP"
                          placeholder="494843"
                          value={formData.zip}
                          onChange={(e) =>
                            handleInputChange("zip", e.target.value)
                          }
                          labelClass="text-white text-sm"
                          inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                        />
                      </div>{" "}
                    </div>
                    <div className="w-full">
                      <InputField
                        type="text"
                        label="Street Address"
                        placeholder="Enter Address"
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        labelClass="text-white text-sm"
                        inputClass="bg-[#101C18] border-0 text-white placeholder:text-customgray text-[14px] py-3 placeholder:text-[14px] w-full"
                      />
                    </div>

                    <p className="text-[12px] text-[#848BAC]">
                      By providing your information, you allow Pickshero to
                      charge your card for future payments in accordance with
                      their terms.
                    </p>

                    {/* <div className="flex flex-row gap-3">
                      <Button
                        label="BACK"
                        className="bg-[#03100C] rounded-lg back-btn py-[10px] text-sm"
                      />

                      <Button
                        label={isSubmitting ? "Submitting..." : "NEXT"}
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-[#45F1753D] w-full border border-[#45F175] py-[10px] rounded-md text-sm text-[#45F175]"
                      />
                    </div> */}
                  </form>
                </div>
              </div>
              <div className=" w-full lg:w-[30%] max-w-xl">
                <h1 className="text-3xl lg:text-2xl font-semibold">Cart</h1>
                <div className="py-1">
                  {/* <Dropdown
                    
                    options={["MultiCharts", "TradeStation ", "MetaTrader "]}
                    onSelect={
                      //@ts-ignore
                      (platform: string) => updatePlatform(platform)
                    }
                    placeholder="Select Platform"
                    className="bg-[#03100C] py-2  text-sm w-full"
                    textclassName=""
                    dropdownClass=" w-60 lg:w-44"
                  /> */}
                  {cart.length ? (
                    <div className="text-end my-2">
                      <button
                        onClick={() => {
                          clearCart();
                          router.push("/subscription");
                        }}
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
                            )}
                          </p>
                        </div>
                      </div>

                      <Button
                        label={loading ? "Processing..." : "Checkout"}
                        disabled={loading}
                        onClick={checkout}
                        className="bg-gradient-to-r disabled:opacity-40  from-customgreen to-customblue py-2 2xl:py-3 text-sm  2xl:text-base text-black font-semibold rounded-md w-full"
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
      </div>
    </>
  );
}
