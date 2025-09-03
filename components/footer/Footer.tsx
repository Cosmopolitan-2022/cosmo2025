import React from "react";
import Image from "next/image";
import { footerData } from "@/data/footer/footer";
import { cn } from "@/app/lib/utils";
import { div } from "motion/react-client";
import Information from "./Information";
import Address from "./Address";
import ContactUs from "./ContactUs";

function Footer() {
  const { cosmo } = footerData;

  return (
    <div className="bg-[#03523C] ">
      <div className=" pt-8 px-2 md:pr-4 lg:pr-16 w-full h-max rounded-t-[48px] bg-[#FFD9A4] bg-[linear-gradient(90deg,rgba(210,96,8,0.20)_43.27%,rgba(255,217,164,0.20)_100%)] md:bg-gradient-to-b from-[#FFD9A4] to-white">
        <div className=" flex flex-col w-full max-w-[400px] md:max-w-full mx-auto md:mx-0 md:flex-row p-2 space-x-2 ">
          <div>
            <Image src={cosmo.src} alt={cosmo.alt} width={320} height={172} className=" hidden md:inline-block w-[300px] h-[140px] mt-2" />
          </div>
          <div className="flex w-full  flex-col md:flex-row gap-5 justify-between ">
            <Information />
            <Address   />
            <ContactUs   />
          </div>
           
        </div>
        <div className=" h-[1px] mx-auto w-[90%] mt-10 bg-[#03523C]"></div>
        <div className="w-full mt-5">
            <h1 className="text-center text-sm md:text-base font-semibold uppercase   text-[#03523C]  leading-normal">  2024 ©  Multi Ethnic Fest. All rights reserved.</h1>
          </div>
      </div>
    </div>
  ); 
}

export default Footer;
