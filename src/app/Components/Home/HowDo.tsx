"use client";

import React from "react";

const HowDo = () => {
  const handleClick = () => {
    window.open("https://wa.me/+919306209926", "_blank");
  };
  return (
    <div className="py-10 lg:py-20">
      <div className="container max-w-[1320px] mx-auto px-4">
        <h2 className="uppercase text-2xl md:text-4xl lg:text-7xl font-Manrope font-semibold leading-[120%] text-center">
          HOW DO WE DO THAT?
        </h2>
        <p className=" text-base md:text-xl lg:text-3xl font-normal font-Manrope text-center leading-[110%]">
          Harnessing the unmatched power of digital media.
        </p>
        <div className="mt-5 lg:mt-16 flex flex-wrap justify-center xl:justify-between text-center">
          <div className="w-full md:w-1/2 xl:w-[32%]">
            <div className="w-full max-w-[447px] md:max-w-[350px] lg:max-w-[475px] h-full min-h-[460px] sm:min-h-[360px] lg:min-h-[625px] px-3 md:px-6 py-8 rounded-4xl bg-[#fb7221]">
              <h4 className="font-Manrope font-semibold text-3xl uppercase text-white leading-[120%]">
                Social Media
              </h4>
              <p className="text-white text-base md:text-xl lg:text-[24px] font-normal font-Manrope leading-[140%] mt-4">
                Facebook, Instagram, Twitter, LinkedIn, Pinterest, TikTok — no
                matter the platform, we’ve got it covered. Whether you're
                looking for full-scale social media management or a single
                standout campaign, social is what we do best. We craft tailored
                strategies for every client, aligning with your brand’s voice
                and goals to ensure consistent, long-term growth and engagement.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-[32%] mt-5 md:mt-0">
            <div className="w-full max-w-[447px] md:max-w-[350px] lg:max-w-[475px] h-full min-h-[460px] sm:min-h-[360px] lg:min-h-[625px] px-3 md:px-6 py-8 rounded-4xl bg-[#fb7221]">
              <h4 className="font-Manrope font-semibold text-3xl uppercase text-white leading-[120%]">
                Digital Content
              </h4>
              <p className="text-white text-base md:text-xl lg:text-[24px] font-normal font-Manrope leading-[140%] mt-4">
                Content drives everything — and we help you do it right. Whether
                you're launching a blog, building your content marketing
                strategy, or looking to enhance your brand storytelling, we
                deliver end-to-end solutions. From compelling copy and creative
                design to high-quality photography and videography, our team
                covers it all. With a fully equipped in-house studio — complete
                with a green screen, prop library, and podcast setup — or the
                option to shoot on location, we bring your content vision to
                life.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-[32%] mt-5 xl:mt-0">
            <div className="w-full max-w-[447px] md:max-w-[350px] lg:max-w-[475px] h-full min-h-[460px] sm:min-h-[360px] lg:min-h-[625px] px-3 md:px-6 py-8 rounded-4xl bg-[#fb7221]">
              <h4 className="font-Manrope font-semibold text-3xl uppercase text-white leading-[120%]">
                One stop shop
              </h4>
              <p className="text-white text-base md:text-xl lg:text-[24px] font-normal font-Manrope leading-[140%] mt-4">
                Feeling overwhelmed or unsure where to start? Whether you need a
                complete digital makeover or a fresh build from the ground up,
                we’re here to help. From websites and blogs to social media
                channels and beyond — just share your vision, and we’ll take it
                from there. Best of all, everything is done in-house. The team
                you connect with is the same team that brings your project to
                life — no hand-offs, no outsourcing, just seamless
                collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5 lg:mt-10">
          <a href="tel:+"></a>
          <button
            onClick={handleClick}
            className="px-5 py-3 bg-black text-white rounded-full font-Manrope font-medium text-base lg:text-2xl leading-[120%] hover:bg-[#fb7221] transition duration-700 ease-in-out"
          >
            Start the Conversation
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowDo;
