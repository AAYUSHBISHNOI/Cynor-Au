"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  MarketingIcon,
  SliderArrow,
  SocialIcon,
  WebsiteIcon,
} from "./../Common/Icon";

const OurService = () => {
  useEffect(() => {
    const nextButton = document.querySelector(".custom-next");
    const prevButton = document.querySelector(".custom-prev");

    if (nextButton && prevButton) {
      nextButton.classList.remove("swiper-button-disabled");
      prevButton.classList.remove("swiper-button-disabled");
    }
  }, []);
  return (
    <div className="relative">
      <div className="container max-w-[1440px] mx-auto px-4 py-10 lg:py-16">
        <h3 className="font-Manrope font-bold text-2xl lg:text-7xl leading-[120%] text-center">
          Our Services
        </h3>
        <p className="font-Manrope font-normal text-base lg:text-2xl leading-[150%] text-center mt-2 md:mt-4 max-w-[1180px]">
          From India to Melbourne ,{" "}
          <span className="uppercase font-bold text-[#fb7221]">Cynor</span>{" "}
          blends bold ideas with smart strategy to craft digital content,
          marketing, and social magic that makes brands unforgettable.
        </p>

        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1490: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            className="mySwiper mt-0 lg:mt-16 h-[290px] lg:h-[360px]"
          >
            <SwiperSlide>
              <div className="relative">
                {/* Social Icon Outside the Card */}
                <div className="absolute top-[12%] md:top-[10%] lg:top-0 left-0">
                  <SocialIcon />
                </div>

                {/* Card with SVG Background and Text */}
                <div className="relative w-[280px] lg:w-[449px] h-[280px] md:h-[370px] lg:h-[348px]">
                  {/* Background SVG */}
                  <svg
                    className="absolute top-0 md:-top-10 lg:top-0 left-0 w-full h-full z-0"
                    viewBox="0 0 449 348"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.3799 81.9405C13.9173 81.9405 0.571658 95.2575 0.571656 111.685L0.571629 312.459C0.571627 331.82 16.3004 347.515 35.7028 347.515L413.409 347.515C432.811 347.515 448.54 331.82 448.54 312.46L448.54 35.1994C448.54 15.8385 432.811 0.143489 413.409 0.143487L112.353 0.143447C95.8901 0.143445 82.5444 13.4605 82.5444 29.8878L82.5444 46.8846C82.5444 66.2454 66.8156 81.9405 47.4132 81.9405L30.3799 81.9405Z"
                      fill="white"
                    />
                    <path
                      d="M0.964207 312.46L0.964234 111.685C0.964236 95.4757 14.1338 82.3337 30.3803 82.3337L47.4135 82.3337C67.032 82.3336 82.9369 66.4631 82.9369 46.8845L82.9369 29.8875C82.9371 13.6781 96.1066 0.536878 112.353 0.53688L413.409 0.536919C432.595 0.536922 448.147 16.0562 448.147 35.199L448.147 312.46C448.147 331.603 432.595 347.123 413.409 347.123L35.7025 347.123C16.8163 347.123 1.45153 332.084 0.975926 313.354L0.964207 312.46Z"
                      stroke="black"
                      strokeOpacity="0.22"
                      strokeWidth="0.785909"
                    />
                  </svg>

                  {/* Text Content Inside the Card */}
                  <div className="relative z-10">
                    <p className="font-Manrope text-[#fb7221] text-base lg:text-[26px] font-bold max-w-[180px] md:max-w-[275px] ms-[75px] lg:ms-28 pt-10  lg:pt-4">
                      Social Media Growth
                    </p>
                    <p className="font-Manrope font-normal text-base lg:text-2xl leading-[150%] text-[#000000] max-w-[248px] lg:max-w-[400px] ms-4 md:ms-5 mt-7 md:mt-8 lg:mt-14">
                      Engage, grow, convert. We manage your social media
                      presence with curated strategies that build community,
                      trust, and long-term brand loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                {/* Social Icon Outside the Card */}
                <div className="absolute top-[12%] md:top-[10%] lg:top-0 left-0">
                  <MarketingIcon />
                </div>

                {/* Card with SVG Background and Text */}
                <div className="relative w-[280px] lg:w-[449px] h-[280px] md:h-[370px] lg:h-[348px]">
                  {/* Background SVG */}
                  <svg
                    className="absolute top-0 md:-top-10 lg:top-0 left-0 w-full h-full z-0"
                    viewBox="0 0 449 348"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.3799 81.9405C13.9173 81.9405 0.571658 95.2575 0.571656 111.685L0.571629 312.459C0.571627 331.82 16.3004 347.515 35.7028 347.515L413.409 347.515C432.811 347.515 448.54 331.82 448.54 312.46L448.54 35.1994C448.54 15.8385 432.811 0.143489 413.409 0.143487L112.353 0.143447C95.8901 0.143445 82.5444 13.4605 82.5444 29.8878L82.5444 46.8846C82.5444 66.2454 66.8156 81.9405 47.4132 81.9405L30.3799 81.9405Z"
                      fill="white"
                    />
                    <path
                      d="M0.964207 312.46L0.964234 111.685C0.964236 95.4757 14.1338 82.3337 30.3803 82.3337L47.4135 82.3337C67.032 82.3336 82.9369 66.4631 82.9369 46.8845L82.9369 29.8875C82.9371 13.6781 96.1066 0.536878 112.353 0.53688L413.409 0.536919C432.595 0.536922 448.147 16.0562 448.147 35.199L448.147 312.46C448.147 331.603 432.595 347.123 413.409 347.123L35.7025 347.123C16.8163 347.123 1.45153 332.084 0.975926 313.354L0.964207 312.46Z"
                      stroke="black"
                      strokeOpacity="0.22"
                      strokeWidth="0.785909"
                    />
                  </svg>

                  {/* Text Content Inside the Card */}
                  <div className="relative z-10">
                    <p className="font-Manrope text-[#fb7221] text-base lg:text-[26px] font-bold max-w-[180px] md:max-w-[275px] ms-[75px] lg:ms-28 pt-10 lg:pt-4">
                      Marketing Automation & AI Tools
                    </p>
                    <p className="font-Manrope font-normal text-base lg:text-2xl leading-[150%] text-[#000000] max-w-[248px] lg:max-w-[400px] ms-4 md:ms-5 mt-2 lg:mt-4 xl:mt-4">
                      Smarter marketing starts here. We implement automation
                      systems and AI tools that streamline your campaigns,
                      enhance efficiency, and scale your impact.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                {/* Social Icon Outside the Card */}
                <div className="absolute top-[12%] md:top-[10%] lg:top-0 left-0">
                  <WebsiteIcon />
                </div>

                {/* Card with SVG Background and Text */}
                <div className="relative w-[280px] lg:w-[449px] h-[280px] md:h-[370px] lg:h-[348px]">
                  {/* Background SVG */}
                  <svg
                    className="absolute top-0 md:-top-10 lg:top-0 left-0 w-full h-full z-0"
                    viewBox="0 0 449 348"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.3799 81.9405C13.9173 81.9405 0.571658 95.2575 0.571656 111.685L0.571629 312.459C0.571627 331.82 16.3004 347.515 35.7028 347.515L413.409 347.515C432.811 347.515 448.54 331.82 448.54 312.46L448.54 35.1994C448.54 15.8385 432.811 0.143489 413.409 0.143487L112.353 0.143447C95.8901 0.143445 82.5444 13.4605 82.5444 29.8878L82.5444 46.8846C82.5444 66.2454 66.8156 81.9405 47.4132 81.9405L30.3799 81.9405Z"
                      fill="white"
                    />
                    <path
                      d="M0.964207 312.46L0.964234 111.685C0.964236 95.4757 14.1338 82.3337 30.3803 82.3337L47.4135 82.3337C67.032 82.3336 82.9369 66.4631 82.9369 46.8845L82.9369 29.8875C82.9371 13.6781 96.1066 0.536878 112.353 0.53688L413.409 0.536919C432.595 0.536922 448.147 16.0562 448.147 35.199L448.147 312.46C448.147 331.603 432.595 347.123 413.409 347.123L35.7025 347.123C16.8163 347.123 1.45153 332.084 0.975926 313.354L0.964207 312.46Z"
                      stroke="black"
                      strokeOpacity="0.22"
                      strokeWidth="0.785909"
                    />
                  </svg>

                  {/* Text Content Inside the Card */}
                  <div className="relative z-10">
                    <p className="font-Manrope text-[#fb7221] text-base lg:text-[26px] font-bold max-w-[180px] md:max-w-[275px] ms-[75px] lg:ms-28 pt-10 lg:pt-4">
                      Website Design
                    </p>
                    <p className="font-Manrope font-normal text-base lg:text-2xl leading-[150%] text-[#000000] max-w-[248px] lg:max-w-[400px] ms-4 md:ms-5 mt-7 lg:mt-14">
                      Your digital storefront, redesigned. We build modern,
                      user-focused websites that are beautiful, functional, and
                      built to convert.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                {/* Social Icon Outside the Card */}
                <div className="absolute top-[12%] md:top-[10%] lg:top-0 left-0">
                  <SocialIcon />
                </div>

                {/* Card with SVG Background and Text */}
                <div className="relative w-[280px] lg:w-[449px] h-[280px] md:h-[370px] lg:h-[348px]">
                  {/* Background SVG */}
                  <svg
                    className="absolute top-0 md:-top-10 lg:top-0 left-0 w-full h-full z-0"
                    viewBox="0 0 449 348"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.3799 81.9405C13.9173 81.9405 0.571658 95.2575 0.571656 111.685L0.571629 312.459C0.571627 331.82 16.3004 347.515 35.7028 347.515L413.409 347.515C432.811 347.515 448.54 331.82 448.54 312.46L448.54 35.1994C448.54 15.8385 432.811 0.143489 413.409 0.143487L112.353 0.143447C95.8901 0.143445 82.5444 13.4605 82.5444 29.8878L82.5444 46.8846C82.5444 66.2454 66.8156 81.9405 47.4132 81.9405L30.3799 81.9405Z"
                      fill="white"
                    />
                    <path
                      d="M0.964207 312.46L0.964234 111.685C0.964236 95.4757 14.1338 82.3337 30.3803 82.3337L47.4135 82.3337C67.032 82.3336 82.9369 66.4631 82.9369 46.8845L82.9369 29.8875C82.9371 13.6781 96.1066 0.536878 112.353 0.53688L413.409 0.536919C432.595 0.536922 448.147 16.0562 448.147 35.199L448.147 312.46C448.147 331.603 432.595 347.123 413.409 347.123L35.7025 347.123C16.8163 347.123 1.45153 332.084 0.975926 313.354L0.964207 312.46Z"
                      stroke="black"
                      strokeOpacity="0.22"
                      strokeWidth="0.785909"
                    />
                  </svg>

                  {/* Text Content Inside the Card */}
                  <div className="relative z-10">
                    <p className="font-Manrope text-[#fb7221] text-base lg:text-[26px] font-bold max-w-[180px] md:max-w-[275px] ms-[75px] lg:ms-28 pt-10  lg:pt-4">
                      Social Media Growth
                    </p>
                    <p className="font-Manrope font-normal text-base lg:text-2xl leading-[150%] text-[#000000] max-w-[248px] lg:max-w-[400px] ms-4 md:ms-5 mt-7 md:mt-8 lg:mt-14">
                      Engage, grow, convert. We manage your social media
                      presence with curated strategies that build community,
                      trust, and long-term brand loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                {/* Social Icon Outside the Card */}
                <div className="absolute top-[12%] md:top-[10%] lg:top-0 left-0">
                  <MarketingIcon />
                </div>

                {/* Card with SVG Background and Text */}
                <div className="relative w-[280px] lg:w-[449px] h-[280px] md:h-[370px] lg:h-[348px]">
                  {/* Background SVG */}
                  <svg
                    className="absolute top-0 md:-top-10 lg:top-0 left-0 w-full h-full z-0"
                    viewBox="0 0 449 348"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.3799 81.9405C13.9173 81.9405 0.571658 95.2575 0.571656 111.685L0.571629 312.459C0.571627 331.82 16.3004 347.515 35.7028 347.515L413.409 347.515C432.811 347.515 448.54 331.82 448.54 312.46L448.54 35.1994C448.54 15.8385 432.811 0.143489 413.409 0.143487L112.353 0.143447C95.8901 0.143445 82.5444 13.4605 82.5444 29.8878L82.5444 46.8846C82.5444 66.2454 66.8156 81.9405 47.4132 81.9405L30.3799 81.9405Z"
                      fill="white"
                    />
                    <path
                      d="M0.964207 312.46L0.964234 111.685C0.964236 95.4757 14.1338 82.3337 30.3803 82.3337L47.4135 82.3337C67.032 82.3336 82.9369 66.4631 82.9369 46.8845L82.9369 29.8875C82.9371 13.6781 96.1066 0.536878 112.353 0.53688L413.409 0.536919C432.595 0.536922 448.147 16.0562 448.147 35.199L448.147 312.46C448.147 331.603 432.595 347.123 413.409 347.123L35.7025 347.123C16.8163 347.123 1.45153 332.084 0.975926 313.354L0.964207 312.46Z"
                      stroke="black"
                      strokeOpacity="0.22"
                      strokeWidth="0.785909"
                    />
                  </svg>

                  {/* Text Content Inside the Card */}
                  <div className="relative z-10">
                    <p className="font-Manrope text-[#fb7221] text-base lg:text-[26px] font-bold max-w-[180px] md:max-w-[275px] ms-[75px] lg:ms-28 pt-10 lg:pt-4">
                      Marketing Automation & AI Tools
                    </p>
                    <p className="font-Manrope font-normal text-base lg:text-2xl leading-[150%] text-[#000000] max-w-[248px] lg:max-w-[400px] ms-4 md:ms-5 mt-2 lg:mt-4 xl:mt-4">
                      Smarter marketing starts here. We implement automation
                      systems and AI tools that streamline your campaigns,
                      enhance efficiency, and scale your impact.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                {/* Social Icon Outside the Card */}
                <div className="absolute top-[12%] md:top-[10%] lg:top-0 left-0">
                  <WebsiteIcon />
                </div>

                {/* Card with SVG Background and Text */}
                <div className="relative w-[280px] lg:w-[449px] h-[280px] md:h-[370px] lg:h-[348px]">
                  {/* Background SVG */}
                  <svg
                    className="absolute top-0 md:-top-10 lg:top-0 left-0 w-full h-full z-0"
                    viewBox="0 0 449 348"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.3799 81.9405C13.9173 81.9405 0.571658 95.2575 0.571656 111.685L0.571629 312.459C0.571627 331.82 16.3004 347.515 35.7028 347.515L413.409 347.515C432.811 347.515 448.54 331.82 448.54 312.46L448.54 35.1994C448.54 15.8385 432.811 0.143489 413.409 0.143487L112.353 0.143447C95.8901 0.143445 82.5444 13.4605 82.5444 29.8878L82.5444 46.8846C82.5444 66.2454 66.8156 81.9405 47.4132 81.9405L30.3799 81.9405Z"
                      fill="white"
                    />
                    <path
                      d="M0.964207 312.46L0.964234 111.685C0.964236 95.4757 14.1338 82.3337 30.3803 82.3337L47.4135 82.3337C67.032 82.3336 82.9369 66.4631 82.9369 46.8845L82.9369 29.8875C82.9371 13.6781 96.1066 0.536878 112.353 0.53688L413.409 0.536919C432.595 0.536922 448.147 16.0562 448.147 35.199L448.147 312.46C448.147 331.603 432.595 347.123 413.409 347.123L35.7025 347.123C16.8163 347.123 1.45153 332.084 0.975926 313.354L0.964207 312.46Z"
                      stroke="black"
                      strokeOpacity="0.22"
                      strokeWidth="0.785909"
                    />
                  </svg>

                  {/* Text Content Inside the Card */}
                  <div className="relative z-10">
                    <p className="font-Manrope text-[#fb7221] text-base lg:text-[26px] font-bold max-w-[180px] md:max-w-[275px] ms-[75px] lg:ms-28 pt-10 lg:pt-4">
                      Website Design
                    </p>
                    <p className="font-Manrope font-normal text-base lg:text-2xl leading-[150%] text-[#000000] max-w-[248px] lg:max-w-[400px] ms-4 md:ms-5 mt-7 lg:mt-14">
                      Your digital storefront, redesigned. We build modern,
                      user-focused websites that are beautiful, functional, and
                      built to convert.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <button className="custom-prev w-[40px] h-[40px] absolute bottom-5 md:-bottom-[5%] left-[35%] md:left-[43%] lg:left-[45%] xl:left-[46.5%] cursor-pointer z-20 flex items-center justify-center rotate-180">
          <SliderArrow />
        </button>
        <button className="custom-next w-[40px] h-[40px] absolute bottom-5 md:-bottom-[5%] right-[35%] md:right-[43%] lg:right-[45%] xl:right-[46.5%] cursor-pointer z-20 flex items-center justify-center">
          <SliderArrow />
        </button>
      </div>
    </div>
  );
};

export default OurService;
