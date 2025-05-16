"use client";

import React from "react";

const AboutTeam = () => {
  return (
    <div className="bg-black mt-8 md:mt-30">
      <div className="bg-[#fb7221] h-3 w-full"></div>
      <div className=" container max-w-[1440px] mx-auto px-4 py-10 md:pb-20">
        <div className="flex flex-col items-center">
          <h3 className="text-white font-Manrope font-semibold text-2xl md:text-4xl lg:text-6xl text-center">
            About US
          </h3>
          <p className="text-white font-Manrope font-normal text-base leading-[116%] text-center mt-2 lg:mt-5 mb-5 lg:mb-10 max-w-[756px]">
            At{" "}
            <span className=" uppercase font-semibold text-[#fb7221]">
              Cynor
            </span>
            , we blend creativity, strategy, and passion to help brands grow,
            engage, and inspire. Our team of thinkers and doers drives bold
            ideas and meaningful results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <div className="bg-[#efefef] rounded-2xl w-full max-w-[269px] min-h-[209px]">
            <img
              src="/Images/Home/Webp/Founder.png"
              alt="Send Message"
              className="h-[279px] max-w-[269px] w-full rounded-2xl"
            />
            <h3 className="font-Manrope font-bold text-2xl leading-[116%] text-[#fb7221] px-3 mt-2 mb-0">
              XXXXXX
            </h3>
            <p className="font-Manrope font-medium text-xl leading-[116%] px-3 mt-2 mb-0">
              Founder & CEO
            </p>
            <p className="font-Manrope font-normal text-base leading-[116%] px-3 mt-2 mb-0 pb-9">
              The driving force behind Cynor , XXXX combines industry insight
              with a bold vision for innovation and impact.
            </p>
          </div>
          <div className="bg-[#efefef] rounded-2xl w-full max-w-[269px] min-h-[209px]">
            <img
              src="/Images/Home/Webp/Founder.png"
              alt="Send Message"
              className="h-[279px] max-w-[269px] w-full rounded-2xl"
            />
            <h3 className="font-Manrope font-bold text-2xl leading-[116%] text-[#fb7221] px-3 mt-2 mb-0">
              XXXXXXX
            </h3>
            <p className="font-Manrope font-medium text-xl leading-[116%] px-3 mt-2 mb-0">
              Co-Founder
            </p>
            <p className="font-Manrope font-normal text-base leading-[116%] px-3 mt-2 mb-0 pb-9">
              With an eye for aesthetics and storytelling,XXXXX leads the
              creative vision of the agency, ensuring every project stands out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
