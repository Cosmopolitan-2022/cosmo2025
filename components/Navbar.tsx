import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navbarHeroData } from "../app/Data/NavbarHero/NavbarHero";

function Navbar() {
  const { logo } = navbarHeroData;
  const tabs = navbarHeroData.navbar.tabs;

  return (
    <nav className="flex items-center justify-between px-20 py-4  bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] ">
      <div className="relative h-12 w-28 sm:h-16 sm:w-36 md:h-20 md:w-44 lg:h-24 lg:w-52 xl:h-28 xl:w-60">
    <Image
      src={logo}
      alt="Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
      <ul className="flex space-x-10 text-2xl font-light">
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
    </nav>
  );
}

export default Navbar;