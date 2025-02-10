import React from 'react';
import Button from '../ui/Button';
import FadeInSection from '@/lib/FadeInAnimation';

export function DiscordCommunity() {
  return (
    <>
     <section  id='contact-us'>
     <FadeInSection>
     <div
        className="px-8 py-12 mx-4 md:mx-12 lg:mx-[98px]  h-auto lg:h-[420px] rounded-3xl border border-[#FFFFFF33] flex justify-center items-center discord-border relative overflow-hidden"
       
      >
       

        {/* Text container */}
        <div style={{ zIndex: 1, position: 'relative' }} className="">
          <h1 className="text-[30px] font-outfit md:text-[40px] lg:text-[60px] xl:text-[60px] md:leading-[80px] font-semibold text-center">Discord Our Community</h1>
          <p className="py-3 text-[16px] font-outfit text-white capitalize font-thin text-center">
            Talk with thousands of other like-minded individuals all looking to succeed.
          </p>
          <div className="flex justify-center">
            <Button label="Join Our Discord" className=" text-[16px] font-outfit md:text-[20px] discord-btn rounded-full py-[16px] px-[40px]" />
          </div>
        </div>
      </div>
     </FadeInSection>
     </section>
    </>
  );
}
