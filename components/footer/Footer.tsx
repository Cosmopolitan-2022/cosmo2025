import React from "react";
import Image from "next/image";
import { footerData } from "@/data/footer/footer";
import { background } from "@/data/footer/footer";

import Information from "./Information";
import Address from "./Address";
import ContactUs from "./ContactUs";

function Footer() {
  const { cosmo } = footerData;

  return (
    <div className=" bg-[linear-gradient(90deg,#082B20_1.81%,#03523C_50.72%,#082B20_99.63%)] relative">
      <div className="relative z-10 pt-4 md:pt-6 px-2 md:pr-4 lg:pr-16 w-full h-max rounded-t-[48px] bg-[#FFD9A4] bg-gradient-to-b from-[#FFD9A4] to-white">
        <div className=" flex flex-col w-full max-w-[400px] md:max-w-full mx-auto md:mx-0 md:flex-row p-2 space-x-2 ">
          <div>
            <Image
              src={cosmo.src}
              alt={cosmo.alt}
              width={320}
              height={172}
              className=" hidden md:inline-block w-[300px] h-[140px] mt-2"
            />
          </div>
          <div className="flex w-full  flex-col md:flex-row gap-3 justify-between ">
            <Information />
            <Address />
            <ContactUs />
          </div>
        </div>
        <div className=" h-[1px] mx-auto w-[90%] mt-2 bg-[#03523C]"></div>
        <div className="w-full mt-2">
          <h1 className="text-center text-[8px] md:text-[10px] font-semibold uppercase   text-[#03523C]  leading-normal">
            {" "}
            2025 © Webwiz X Cosomo. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
