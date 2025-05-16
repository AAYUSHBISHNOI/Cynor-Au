"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/Images/Home/Svg/Logo.svg";
const currentYear = new Date().getFullYear();
import {
  Facebook,
  Linkdin,
  MailIcon,
  MapIcon,
  PhoneIcon,
  Twitter,
} from "./Icon";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" container max-w-[1440px] mx-auto px-4 py-10 lg:py-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-3/4 lg:w-[30%]">
            <Link href="/" className="relative z-50">
              <Image
                src={Logo || "/placeholder.svg"}
                alt="Cynor Media Logo"
                width={213}
                height={31}
                priority
              />
            </Link>
            <p className="text-white font-Manrope font-light text-base leading-[126%] mt-5 max-w-[318px]">
              We at Cynor honour and respect the Traditional Custodians of the
              lands on which we work. We recognise their continuing connection
              to land, waters, and culture, and extend our respects to Elders
              past, present, and emerging.
            </p>
            <div className="flex gap-4 mt-4 lg:mt-8">
              <Facebook />
              <Linkdin />
              <Twitter />
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 lg:w-[20%] mt-8 md:mt-0">
            <ul>
              <li className="font-Manrope text-white ">Explore</li>
              <li className="mt-3 lg:mt-6">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cccccc] hover:text-[#fb7221] transition-all duration-500 font-Manrope font-light text-base leading-[126%]"
                >
                  Resources
                </a>
              </li>
              <li className="mt-1 lg:mt-3">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cccccc] hover:text-[#fb7221] transition-all duration-500 font-Manrope font-light text-base leading-[126%]"
                >
                  Blog
                </a>
              </li>
              <li className="mt-1 lg:mt-3">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cccccc] hover:text-[#fb7221] transition-all duration-500 font-Manrope font-light text-base leading-[126%]"
                >
                  Documents
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 lg:w-[20%] mt-8 lg:mt-0">
            <ul>
              <li className="font-Manrope text-white ">Menu</li>
              <li className="mt-3 lg:mt-6">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cccccc] hover:text-[#fb7221] transition-all duration-500 font-Manrope font-light text-base leading-[126%]"
                >
                  Home
                </a>
              </li>
              <li className="mt-1 lg:mt-3">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cccccc] hover:text-[#fb7221] transition-all duration-500 font-Manrope font-light text-base leading-[126%]"
                >
                  About
                </a>
              </li>
              <li className="mt-1 lg:mt-3">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cccccc] hover:text-[#fb7221] transition-all duration-500 font-Manrope font-light text-base leading-[126%]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-[30%] mt-8 lg:mt-0">
            <ul>
              <li className="max-w-[280px] flex items-center gap-4 md:gap-7">
                <a href="">
                  <MapIcon />
                </a>
                <a
                  href="#"
                  className="text-base text-[#cccccc] hover:text-[#fb7221] transition-all duration-500 font-Manrope font-medium leading-[126%] max-w-[220px]"
                >
                  22 Andrew St, Mount Waverley VIC 3149, Australia
                </a>
              </li>
              <li className="max-w-[280px] flex items-center gap-4 md:gap-7 mt-4 lg:mt-8">
                <a href="">
                  <PhoneIcon />
                </a>
                <a
                  href="tel:++61 469 571 891"
                  className="text-base text-[#cccccc] hover:text-[#fb7221] transition-all duration-500 font-Manrope font-medium leading-[126%] max-w-[220px]"
                >
                  +61 469 571 891
                </a>
              </li>
              <li className="max-w-[280px] flex items-center gap-4 md:gap-7 mt-4 lg:mt-8">
                <a href="">
                  <MailIcon />
                </a>
                <a
                  href="mailto:varun@cynormedia.com"
                  className="text-base text-[#cccccc] hover:text-[#fb7221] transition-all duration-500 font-Manrope font-medium leading-[126%] max-w-[220px]"
                >
                  varun@cynormedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-0.5 w-full bg-[#404040] mt-8 lg:mt-20" />
        <p className="text-[#cccccc] mb-0 font-medium leading-[116%] font-Manrope text-base mt-5">
          © {currentYear} Cynor. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
