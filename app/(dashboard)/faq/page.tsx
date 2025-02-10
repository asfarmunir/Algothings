import { Algorithm } from "@/components/shared/Algorithm";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { Plans } from "@/components/shared/plans";
import Sidebar from "@/components/shared/Sidebar";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
    const faqItems = [
        { title: "How can I get started with Trade Tech Solutions?", content: "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals." },
        { title: "How can I get started with Trade Tech Solutions?", content: "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals." },
        { title: "How can I get started with Trade Tech Solutions?", content: "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals." },    ];


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
                        <h1 className="text-4xl font-bold text-center">Frequently Asked  Questions?</h1>

                        <div>
                            <div className="p-6">
                              
                                <Accordion
                                    items={faqItems}
                                    containerStyles=""
                                    titleStyles="bg-customcard text-[20px] py-4 font-semibold"
                                    contentStyles="bg-customcard font-light"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
