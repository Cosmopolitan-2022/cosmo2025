import React from "react";
import Link from "next/link";
import { navbarHeroData } from "../app/Data/NavbarHero/NavbarHero";

function Navbar() {
  const { logo } = navbarHeroData;
  const tabs = navbarHeroData.navbar.tabs;

  return (
    <nav className="flex items-center justify-between px-20 py-4 bg-[#1c3c2b]">
      <div>
        <img src={logo} alt="Logo" className="h-28 px-10" />
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