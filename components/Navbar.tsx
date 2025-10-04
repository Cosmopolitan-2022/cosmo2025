"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 
import { navbarHeroData } from "../app/Data/NavbarHero/NavbarHero";
import { backgroundImageUrl } from "@/data/events"; 


function Navbar() {
  const { logo } = navbarHeroData;
  const tabs = navbarHeroData.navbar.tabs;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="smooth-scroll flex items-center h-[80px] md:h-[120px] overflow-visible  justify-between px-5 sm:px-10 md:px-16 bg-[linear-gradient(90deg,#082B20_1.81%,#03523C_50.72%,#082B20_99.63%)] relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
    <Image
      src={backgroundImageUrl}
      alt="Event background"
      fill
      priority
      className="object-cover min-h-full min-w-full"
      
    />
  </div>
      
      <Link href="/" passHref>
      <div className="relative md:top-0 md:left-[-20px] z-10">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={60} 
          className="object-contain  h-16 w-20 md:h-20 md:w-24 lg:h-24 lg:w-36 xl:h-28 xl:w-40"
        />
      </div>
    </Link>

      <ul className="hidden md:pr-6 md:flex space-x-8 text-xl lg:text-2xl font-light font-montserrat">
        {tabs.map((tab) => (
          <li key={tab}>
            <Link
              href={`/${tab.toLowerCase()}`}
              className="text-[#FFD9A4] hover:text-white hover:scale-105 transition duration-200 font-normal font-montserrat"
            >
              {tab}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden text-[#FFD9A4] hover:text-white transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {isOpen && (
        <div className="absolute transition duration-100 top-full left-0 w-full bg-[linear-gradient(90deg,#082B20_1.81%,#03523C_50.72%,#082B20_99.63%)] flex flex-col items-center z-50 md:hidden">
          

    <div className="absolute font-light top-0 left-0 w-full h-screen bg-[linear-gradient(90deg,#082B20_1.81%,#03523C_50.72%,#082B20_99.63%)] flex flex-col items-center justify-center space-y-4 z-50 md:hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
      <Image
        src={backgroundImageUrl}
        alt="Event background"
        fill
        className="object-cover"
      />
    </div>

     <div className="relative z-10 flex flex-col items-center space-y-4 -mt-30">

  {tabs.map((tab) => (
    <Link
      key={tab}
      href={`/${tab.toLowerCase()}`}
      className="text-[#FFD9A4] hover:text-white font-normal text-2xl transition duration-100 font-montserrat"
      onClick={() => setIsOpen(false)}
    >
      {tab}
    </Link>
  ))}
</div>
</div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
