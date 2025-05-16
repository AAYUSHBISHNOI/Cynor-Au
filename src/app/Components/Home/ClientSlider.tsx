"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const ClientSlider = () => {
  const logos = [
    "Tata",
    "Epson",
    "Hyundai",
    "John-Deere",
    "Kubota",
    "Mahindra",
    "Mahindra-M",
    "Maruti",
    "Massey",
    "Suzuki",
    "Tafe",
    "Tvs",
  ];

  // Duplicate logos to ensure enough width for smooth looping
  const repeatedLogos = [...logos, ...logos]; // 2x

  return (
    <div className="bg-[#d9d9d9]  overflow-hidden">
      <Marquee speed={100} gradient={false} className="gap-10" pauseOnHover>
        {repeatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="ms-5 lg:ms-10 min-h-[100px] lg:min-h-[200px] flex items-center justify-center"
          >
            <img
              src={`/Images/Home/Svg/${logo}.svg`}
              alt={`${logo} Logo`}
              loading="eager"
              className="h-[100px] lg:h-[150px] w-[150px] lg:w-[200px] object-contain box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientSlider;
