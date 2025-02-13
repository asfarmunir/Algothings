import Image from "next/image";
import { DottedBackground } from "@/components/shared/DottedBackground";
import Navbar from "@/components/shared/Navbar";
import { Welcome } from "@/components/shared/Welcome";
import { Algorithm } from "@/components/shared/Algorithm";
import Pricing from "@/components/shared/Pricing";
import Comparsion from "@/components/shared/Comparsion";
import ChooseUs from "@/components/shared/ChooseUs";
import Blogs from "@/components/shared/Blogs";
import FAQ from "@/components/shared/Faqs";
import { Footer } from "@/components/shared/Footer";
import { DiscordCommunity } from "@/components/shared/Discord";

export default function Home() {
  return (
    <>
      <div
        className="relative w-full "
        style={{
          backgroundImage: "url(/images/image.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Keep the background fixed while scrolling
          minHeight: "100vh", // Ensure that the div at least takes the full screen height
        }}
      >
        {/* Content Layer */}
        <div className="relative z-10 font-sans scrollbar-custom">
          <Navbar />
          <div className="w-full ">
            <div className="text-center overflow-x-hidden sm:overflow-x-visible  ">
              <Welcome />

              <Algorithm />
              <Pricing />
              <Comparsion />
              <ChooseUs />
              <Blogs />
              <FAQ />
              <DiscordCommunity />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
