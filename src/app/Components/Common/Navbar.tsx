"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/Images/Home/Svg/Logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Service",
    hasDropdown: true,
    subLinks: [
      { name: "Web Development/Seo", path: "/service/web-development-seo-geo" },
      { name: "Ppc", path: "/service/ppc" },
      { name: "Brand Development", path: "/service/brand-development" },
    ],
  },
  { name: "About Us", path: "/about-us" },
  { name: "Our Clients", path: "/our-clients" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", show);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setShow(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    setShow(false);
  };

  return (
    <div className="container max-w-[1320px] mx-auto px-4 pt-3 md:pt-5">
      <div className="relative rounded-full">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-[#0e1011] opacity-50 rounded-full z-0" />

        {/* Foreground Content */}
        <div className="relative z-50 flex items-center justify-between h-[50px] md:h-[70px] lg:h-[100px] border-[2px] border-[#2b2b2b] rounded-full py-5 lg:py-9 px-3 lg:px-10">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src={Logo || "/placeholder.svg"}
              alt="Cynor Media Logo"
              width={213}
              height={31}
              priority
            />
          </Link>

          {/* Desktop + Mobile Nav */}
          <nav
            className={`xl:static fixed top-0 ${
              show ? "left-0" : "-left-full"
            } duration-500 transition-all bg-transparent backdrop-blur-[32px] xl:bg-transparent xl:flex xl:flex-row flex flex-col gap-10 xl:gap-12 justify-center items-center w-full h-full xl:w-auto xl:h-auto z-40`}
          >
            {navLinks.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onClick={() => handleLinkClick(index)}
              >
                {item.path ? (
                  <Link
                    href={item.path}
                    className={`text-base font-dm font-medium transition-all duration-300 leading-[126%] ${
                      activeLink === index ? "text-[#fb7231]" : "text-white"
                    } hover:text-[#fb7231]`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    className={`text-base font-dm font-medium leading-[126%] transition-all duration-300 ${
                      activeLink === index ? "text-[#fb7231]" : "text-white"
                    } group-hover:text-[#fb7231] cursor-pointer`}
                  >
                    {item.name}
                  </span>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && item.subLinks && (
                  <div className="absolute left-0 top-[50%] mt-2 hidden xl:group-hover:block bg-[#0e1011] border border-[#2b2b2b] rounded-lg shadow-lg z-50 min-w-[200px]">
                    <ul className="py-2 text-sm text-white ">
                      {item.subLinks.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.path}
                            className="block font-Manrope text-base font-normal px-4 py-2 hover:bg-[#fb7231] hover:text-white transition-all"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              className="font-dm font-medium text-lg leading-[126%] text-white bg-[#fb7221] py-3 px-4 rounded-full duration-300 hover:bg-white hover:text-black"
              onClick={() =>
                window.open("https://wa.me/+919306209926", "_blank")
              }
              aria-label="Get in touch on WhatsApp"
            >
              Get in touch
            </button>
          </div>

          {/* Toggle Button */}
          <button
            className="xl:hidden z-50 sm:mr-[25px]"
            onClick={() => setShow((prev) => !prev)}
            aria-label={show ? "Close menu" : "Open menu"}
          >
            {show ? (
              <div className="relative w-6 h-6">
                <span className="absolute left-0 top-2 rotate-45 w-6 h-[3px] bg-white rounded transition-transform" />
                <span className="absolute left-0 top-2 -rotate-45 w-6 h-[3px] bg-white rounded transition-transform" />
              </div>
            ) : (
              <div className="flex flex-col gap-[5px]">
                <span className="w-6 h-[3px] bg-white rounded" />
                <span className="w-6 h-[3px] bg-white rounded" />
                <span className="w-6 h-[3px] bg-white rounded" />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
