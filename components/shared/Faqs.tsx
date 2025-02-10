import AnimationSection from '../ui/AnimationSection';
import FAQComponent from '../ui/FaqComponent';
import Image from 'next/image';

const question_ans = [
  {

    title: "How can I get started with Trade Tech Solutions?",
    answer:
      "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {

    title: "How long does it typically take to launch a prop firm with us?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },
  {

    title: "Can I retain all the profits I generate with my prop firm?",
    answer:
      "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {

    title: "What types of payment methods does Trade Tech Solutions support?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },
  {

    title: "Can Trade Tech Solutions assist with marketing my prop firm?",
    answer:
      "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {

    title: "Which trading platforms do you support?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },
  {

    title: "Which Prop Firms are using Trade Tech Solutions services?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },
  {

    title: "Do you only provide tech, or do you offer other services as well?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },
  {

    title: "Why choose Trade Tech Solutions? What makes you stand out?",
    answer:
      "We offer a variety of services including technical consultations, custom software development, and ongoing tech support tailored to your business needs.",
  },

  // Additional FAQ items
];

export default function FAQ() {

  return (
    <>
      <section id='faqs' >
        <div className="bg-[#FFFFFF05] ">
          <div className="mx-6  md:my-3">
            <AnimationSection>
              <div className="inline-flex flex-row gap-3 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#45F17533] to-[#00C3CE33]">
                <Image
                  src="/images/welcomestar.svg"
                  width={20}
                  height={30}
                  alt="welcome star"
                />
                <p className="text-[16px] gap-4 bg-gradient-to-b from-customgreen to-customblue bg-clip-text text-transparent">
                  FAQs
                </p>
              </div>

              <div className='mt-3'>
                <h1 className='text-[34px] font-spaceGrotesk font-semibold'>Frequently Asked Questions?</h1>
                <p className='text-[20px] font-thin mt-1'>Revolutionize your trading game with BTFT.</p>
              </div>
            </AnimationSection>

            {/* Center the Accordion container */}
            <div className="flex justify-center mt-7 ">
              <div className="w-full mx-4 md:mx-12 lg:mx-[90px]">
                <FAQComponent question_ans={question_ans} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}