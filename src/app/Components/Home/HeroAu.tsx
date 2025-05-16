"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"; // Import MorphSVGPlugin
import Navbar from "./../Common/Navbar";

const HeroAu = () => {
  useEffect(() => {
    // Register the MorphSVGPlugin
    gsap.registerPlugin(MorphSVGPlugin);

    // Select the SVG path for animation
    const path = document.querySelector("#curvedCardPath");

    // Define the square and curved paths
    const squarePath = "M0,0 H548 V426 H0 Z"; // Square path
    const curvedPath =
      "M40,0 H420 A40,40 0 0 1 460,40 V70 Q460,80 470,85 Q490,95 510,105 Q520,110 520,130 V386 A40,40 0 0 1 500,426 H320 Q300,426 270,410 T220,394 H40 A40,40 0 0 1 0,354 V40 A40,40 0 0 1 40,0 Z"; // Curved path

    // Set initial square path
    path.setAttribute("d", squarePath);

    // Animate the path from square to curved using MorphSVGPlugin
    gsap.to(path, {
      duration: 2, // Increased duration for smoother transition
      morphSVG: {
        d: curvedPath, // Final curved path
        align: "center", // Align paths to the center
      },
      ease: "power2.inOut", // Steeper easing function for smoother transition
    });
  }, []);

  return (
    <div>
      <div className="relative bg-[url('/Images/Home/Webp/Hero.webp')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10">
          <Navbar />
          <div className="container max-w-[1320px] mx-auto px-4 pt-10 pb-5 lg:py-[160px]">
            <div className="flex flex-wrap text-center md:text-start">
              <div className="w-full md:w-1/2 lg:w-3/5">
                <h1 className="uppercase text-white font-Manrope text-2xl md:text-4xl lg:text-[86px] font-semibold leading-100 max-w-[590px] lg:max-w-[543px]">
                  Welcome to Cynor
                </h1>
                <p className="text-white font-Manrope text-base md:text-lg lg:text-[20px] font-normal leading-[126%] mt-2 md:mt-4 max-w-[620px] md:max-w-[315px] lg:max-w-[450px]">
                  At{" "}
                  <span className="uppercase text-[#fb7221] font-semibold">
                    Cynor
                  </span>
                  , we don’t just market , we transform. As your growth partners
                  in the digital age, we combine strategy, creativity, and
                  performance to build impactful brand experiences and deliver
                  measurable results.
                </p>
              </div>

              <div className="w-full md:w-1/2 lg:w-2/5">
                {/* RIGHT SIDE CARD */}
                <div className="relative w-full max-w-[310px] md:max-w-[548px] min-h-[255px] md:min-h-[270px] lg:min-h-[426px] ml-auto lg:mr-6 lg:mt-6">
                  {/* Orange Arrow Button */}
                  <div className="absolute top-[10%] md:top-[5%] lg:top-[7%] right-[3%] md:right-[5%] lg:right-[2%] w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg z-10 -rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 7L7 17M7 7h10v10"
                      />
                    </svg>
                  </div>

                  {/* Custom Shape Background with GSAP morph animation */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 548 426"
                    className="absolute top-0 lg:-top-10 xl:top-0 left-0 w-full h-full"
                  >
                    <path
                      id="curvedCardPath" // ID for GSAP targeting
                      d="M0,0 H548 V426 H0 Z" // Initial square path
                      fill="rgba(43, 43, 43, 0.8)"
                      stroke="white"
                      strokeOpacity="0.1"
                      strokeWidth="0.8"
                    />
                  </svg>

                  {/* Card Content */}
                  <div className="absolute top-4 md:-top-3 lg:top-0 text-start inset-0 p-4 md:p-10 xl:p-12 text-white flex flex-col justify-between">
                    <div>
                      <h2 className="font-Manrope text-base md:text-xl lg:text-3xl xl:text-[54px] text-white font-medium leading-[126%]">
                        SOCIAL MEDIA STRATEGY
                      </h2>
                      <p className="mt-4 font-Manrope text-base md:text-[20px] font-normal leading-[142%]">
                        From planning to posting, our social media strategies
                        drive real conversations and measurable results.
                      </p>
                      <div className="flex justify-end mt-3 pe-4 md:pe-0">
                        <button className="flex items-center gap-1 bg-orange-500 px-4 md:px-8 py-2 rounded-full z-30 relative font-Manrope text-base md:text-[20px] font-normal leading-[126%] text-white">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END RIGHT SIDE CARD */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAu;
