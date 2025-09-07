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
    <nav className="flex items-center h-[80px] md:h-[120px] overflow-visible  justify-between px-6 md:px-20 bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
    <Image
      src={backgroundImageUrl}
      alt="Event background"
      fill
      className="object-cover min-h-full min-w-full"
      
    />
  </div>
      <div className="relative z-10 h-12 w-28 sm:h-16 sm:w-36 md:h-20 md:w-44 lg:h-24 lg:w-52 xl:h-28 xl:w-40">
        <Image
          src={logo}
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      <ul className="hidden md:pr-6 md:flex space-x-8 text-xl lg:text-2xl font-light">
        {tabs.map((tab) => (
          <li key={tab}>
            <Link
              href={`/${tab.toLowerCase()}`}
              className="text-[#FFD9A4] hover:text-white hover:scale-105 transition duration-200"
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
        <div className="absolute transition duration-100 top-full left-0 w-full bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] flex flex-col items-center z-50 md:hidden">
          

    <div className="absolute font-light top-0 left-0 w-full h-screen bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] flex flex-col items-center space-y-4 z-50 md:hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
      <Image
        src={backgroundImageUrl}
        alt="Event background"
        fill
        className="object-cover"
      />
    </div>

  {tabs.map((tab) => (
    <Link
      key={tab}
      href={`/${tab.toLowerCase()}`}
      className="text-[#FFD9A4] hover:text-white  text-2xl transition duration-100"
      onClick={() => setIsOpen(false)}
    >
      {tab}
    </Link>
  ))}
</div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
