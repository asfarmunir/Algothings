"use client";
import { Algorithm } from "@/components/shared/Algorithm";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { Plans } from "@/components/shared/plans";
import Sidebar from "@/components/shared/Sidebar";
import Accordion from "@/components/ui/Accordion";
import AnimationSection from "@/components/ui/AnimationSection";
import FAQComponent from "@/components/ui/FaqComponent";
import Image from "next/image";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What makes The Algos Field better than manual trading?",
      answer:
        "The Algos Field eliminates emotional bias, stress, and the time commitment of manual trading.<br />Our fully automated system executes trades faster and more precisely than a human can, ensuring optimal entries and exits.<br />Unlike manual trades, our algorithm follows a data-driven approach to maximize efficiency and maintain consistent strategy execution, risk management, and market monitoring without requiring supervision.",
    },
    {
      question:
        "Is The Algos Field suitable for beginners, and how much experience do I need?",
      answer:
        "Yes! The Algos Field is designed for all experience levels, from beginners to advanced traders.<br /><br />✔ No coding or advanced trading knowledge required<br />✔ Fully automated system, just set up and let it trade<br />✔ Guides & support available to help you understand how it works",
    },
    {
      question: "How do I set up The Algos Field to start trading?",
      answer:
        "Setting up The Algos Field takes just a few steps:<br /><br />1️. Choose Your Strategy – Select Starter (single-strategy) or Master (diversified portfolio).<br />2️. Download & Set Up – Grab your strategy files, unzip them, and import them into your trading platform.<br />3️. Activate & Go Live – Apply the configurations, link your account, and connect to real-time market data.<br />4️. Trade on Robopilot – Sit back while Algos takes over. You focus on your goals—we handle the trades.<br /><br />Need help? Our support team is available to guide you through the setup process.",
    },
    {
      question:
        "What strategies does The Algos Field use, and are they proven?",
      answer:
        "The Algos Field offers 10 individual trading algorithms, each optimized for different market conditions.<br /><br />Traders can:<br />✔ Use specific algorithms tailored to their strategy<br />✔ Combine all 10 algos into a diversified portfolio strategy<br /><br />These strategies have been back-tested for over three years with a 75%+ win rate. Visit the Products Page to explore each strategy in detail.",
    },
    {
      question:
        "Is The Algos Field 100% automated, and can I stop or cancel anytime?",
      answer:
        "Yes! The Algos Field is fully automated and requires no manual intervention.<br />The only action you need to take is to enable or disable the bot directly from your trading platform.<br />If you wish to stop using the service, you can cancel your subscription anytime through your member dashboard.",
    },
    {
      question: "What trading platforms are supported?",
      answer:
        "The Algos Field currently supports:<br /><br />✔ MultiCharts<br />✔ TradeStation<br />✔ MetaTrader (MT5) coming soon<br /><br />Make sure your selected platform is compatible with your broker for seamless execution.",
    },
    {
      question: "How is risk managed with automated strategies?",
      answer:
        "The Algos Field integrates built-in risk management to protect your capital:<br /><br />✔ Stop-Losses – Limits potential losses per trade<br />✔ Max Drawdown Protection – Prevents excessive account losses<br />✔ Position Sizing – Adjusts trade sizes dynamically based on risk settings<br />✔ Diversified Strategies – Spreads risk across multiple market conditions<br /><br />These safeguards help maintain consistent, controlled trading while minimizing exposure to volatility.",
    },
    {
      question: "What’s the average monthly profit I can expect?",
      answer:
        "The Algos Field's portfolio strategy has been back-tested for over three years, achieving an average monthly return of 8%+. However, actual results depend on market conditions, and past performance does not guarantee future profits.",
    },
    {
      question: "Is my money safe while using The Algos Field?",
      answer:
        "Yes! The Algos Field does not have access to your account funds. Your money remains in your broker account, and the bot only executes trades based on market conditions. You have full control over your funds and can enable or disable the bot at any time directly from your trading platform.",
    },
    {
      question:
        "What payment methods do you accept, and is my information secure?",
      answer:
        "We accept credit and debit card payments, which are securely processed through Stripe, our trusted payment provider. All transactions are encrypted and protected to ensure your payment details remain safe.",
    },
    {
      question: "Will I be charged automatically on renewal?",
      answer:
        "Yes, all subscriptions are set to auto-renew unless canceled before the renewal date.Your payment method will be automatically charged through Stripe to ensure uninterrupted access.",
    },
    {
      question: "What happens if I miss a payment?",
      answer:
        "If a payment fails:<br />✔ Your account will be revoked, losing access to the bot until the payment is completed.<br />✔ Stripe will automatically retry the charge. If unsuccessful, you’ll need to update your payment details in your member dashboard to restore access.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "No, all purchases are final, and refunds are unavailable once a subscription is activated.Since The Algos Field provides immediate access to automated trading strategies, we recommend reviewing all plan details before subscribing. If you experience an issue, please contact our support team for assistance.",
    },
    {
      question: "How do I contact customer support if I need help?",
      answer:
        "Our support team is available 24/7 to assist you! You can reach us through:<br /><br />✔ Email: support@thealgosfield.com<br />✔ Discord Community: Join our community for real-time support and discussions<br />✔ FAQ Section: Check our FAQ for quick answers<br /><br />For any further assistance, feel free to reach out!",
    },
  ];

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

            <section id="faqs">
              <div className="mx-6  md:my-3">
                <div className="flex justify-center mt-4 py-6 md:py-12 ">
                  <div className="w-full mx-4 md:mx-12 lg:mx-[120px] 2xl:mx-[150px]">
                    <FAQComponent question_ans={faqs} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

// "use client";
// import AnimationSection from "@/components/ui/AnimationSection";
// import FAQComponent from "@/components/ui/FaqComponent";
// import Image from "next/image";
// import { useState } from "react";

// export default function FAQ() {
//   const [activeStep, setActiveStep] = useState(1);
//   return (
//     <>
//       <section id="faqs">
//         <div className="bg-[#FFFFFF05] ">
//           <div className="mx-6  md:my-3">
//             <AnimationSection>
//               <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
//                 <Image
//                   src="/images/welcomestar.svg"
//                   width={20}
//                   height={30}
//                   alt="welcome star"
//                 />
//                 <p className="text-[16px] gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
//                   FAQs
//                 </p>
//               </div>

//               <div className="mt-3">
//                 <h1 className="text-[34px] font-spaceGrotesk font-semibold">
//                   Frequently Asked Questions?
//                 </h1>
//                 {/* <p className="text-[20px] font-thin mt-1">
//                   Revolutionize your trading game with BTFT.
//                 </p> */}
//               </div>
//               {/* <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-6 lg:grid-cols-3  gap-5  2xl:gap-7 w-full sm:w-fit py-3 px-2">
//                 {["Category 1", "Category 2", "Category 3"].map(
//                   (item, index) => (
//                     <div
//                       key={index}
//                       className="w-full bg-gradient-to-r from-customgreen to-customblue bg-clip-border p-[1px] rounded-md"
//                     >
//                       <button
//                         onClick={() => setActiveStep(index + 1)}
//                         className={` py-[10px] w-full rounded-md px-12 transition duration-300 uppercase ${
//                           activeStep === index + 1
//                             ? "bg-gradient-to-r from-customgreen text-black to-customblue"
//                             : "bg-black text-customgreen "
//                         } text-sm sm:text-[23px]  tracking-wider`}
//                       >
//                         <span
//                           className={`${
//                             activeStep === index + 1
//                               ? "text-black"
//                               : "bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent"
//                           }`}
//                         >
//                           {item}
//                         </span>
//                       </button>
//                     </div>
//                   )
//                 )}
//               </div> */}
//             </AnimationSection>

//             {/* Center the Accordion container */}
//             <div className="flex justify-center mt-4 ">
//               <div className="w-full mx-4 md:mx-12 lg:mx-[120px] 2xl:mx-[150px]">
//                 <FAQComponent question_ans={faqs} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
