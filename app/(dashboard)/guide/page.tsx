import { Algorithm } from "@/components/shared/Algorithm";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { Plans } from "@/components/shared/plans";
import Sidebar from "@/components/shared/Sidebar";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Guide() {
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
          <div className="flex-grow px-6 gradient-corners-main py-6 overflow-y-auto scrollbar-thin scrollbar-track-customcard scrollbar-thumb-customgreen">
            <h1 className="text-xl font-bold uppercase">GUIDE</h1>
            <div className="px-3 md:px-6 space-y-5">
              <div className="h-72 bg-[#D9D9D91A] mt-5 flex items-center justify-center rounded-xl">
                <Image
                  src="/images/logo.svg"
                  width={300}
                  height={300}
                  alt="image"
                  className=" "
                />
              </div>

              <p className="text-sm leading-6 tracking-wider font-light">
                <span className="font-semibold">
                  Black Friday and Cyber Monday
                </span>{" "}
                (BFCM) bring a massive surge in traffic and sales, but the true
                value comes from turning these one-time shoppers into{" "}
                <span className="font-semibold">long-term loyal customers</span>
                . Once the frenzy of the holiday shopping season settles, the
                goal shifts from acquiring new customers to{" "}
                <span className="font-semibold">retaining them</span> for
                continued growth.
              </p>

              <p className="text-sm leading-6 tracking-wider font-light">
                In this guide, we’ll walk through{" "}
                <span className="font-semibold">7 proven strategies</span> to
                help you retain customers after BFCM and build lasting
                relationships that drive repeat purchases.
              </p>

              <h1 className="font-semibold text-xl">
                1. Send Personalized Thank-You Emails
              </h1>

              <p className="text-sm leading-6 tracking-wider font-light">
                Once your customers have made their purchases during{" "}
                <span className="font-semibold">
                  Black Friday and Cyber Monday
                </span>
                , a simple yet effective way to start nurturing loyalty is
                through a{" "}
                <span className="font-semibold">
                  personalized thank-you email.
                </span>
              </p>

              <p className="text-sm font-semibold">Why It Works:</p>
              <ul className="list-disc pl-5">
                <li className="text-sm leading-6 tracking-wider font-light pl-4">
                  Once your customers have made their purchases during{" "}
                  <span className="font-semibold">
                    Black Friday and Cyber Monday
                  </span>
                  , a simple yet effective way to start nurturing loyalty is
                  through a{" "}
                  <span className="font-semibold">
                    Black Friday and Cyber Monday
                  </span>
                  , a simple yet effective way to start nurturing loyalty is
                  through a{" "}
                  <span className="font-semibold">
                    personalized thank-you email.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-row justify-between my-6">
              <Button
                label="Previous"
                className="bg-gradient-to-r text-xs 2xl:text-sm from-customgreen to-customblue text-black font-semibold rounded-full px-4 py-1.5"
              />

              <Button
                label="Next"
                className="bg-gradient-to-r text-xs 2xl:text-sm from-customgreen to-customblue text-black font-semibold rounded-full px-4 py-1.5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
