// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react"; 
// import { navbarHeroData } from "../app/Data/NavbarHero/NavbarHero";

// function Navbar() {
//   const { logo } = navbarHeroData;
//   const tabs = navbarHeroData.navbar.tabs;
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between px-6 md:px-20 py-4 bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] relative">
//       {/* Logo */}
//       <div className="relative h-12 w-28 sm:h-16 sm:w-36 md:h-20 md:w-44 lg:h-24 lg:w-52 xl:h-28 xl:w-60">
//         <Image
//           src={logo}
//           alt="Logo"
//           fill
//           className="object-contain"
//           priority
//         />
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex space-x-10 text-xl lg:text-2xl font-light">
//         {tabs.map((tab) => (
//           <li key={tab}>
//             <Link
//               href={`/${tab.toLowerCase()}`}
//               className="text-[#FFD9A4] hover:text-white hover:scale-105 transition duration-200"
//             >
//               {tab}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Hamburger */}
//       <button
//         className="md:hidden text-[#FFD9A4] hover:text-white transition"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X size={32} /> : <Menu size={32} />}
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-[#03523C] flex flex-col items-center space-y-6 py-6 z-50 md:hidden">
//           {tabs.map((tab) => (
//             <Link
//               key={tab}
//               href={`/${tab.toLowerCase()}`}
//               className="text-[#FFD9A4] hover:text-white text-lg transition"
//               onClick={() => setIsOpen(false)}
//             >
//               {tab}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 
import { navbarHeroData } from "../app/Data/NavbarHero/NavbarHero";

function Navbar() {
  const { logo } = navbarHeroData;
  const tabs = navbarHeroData.navbar.tabs;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center transparent justify-between px-6 md:px-20 py-4 bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] relative z-50">
      {/* Logo */}
      <div className="relative h-12 w-28 sm:h-16 sm:w-36 md:h-20 md:w-44 lg:h-24 lg:w-52 xl:h-28 xl:w-60">
        <Image src={logo} alt="Logo" fill className="object-contain" priority />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 text-xl lg:text-2xl font-light">
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

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-[#FFD9A4] hover:text-white transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#03523C] flex flex-col items-center space-y-6 py-6 z-50 md:hidden">
          {tabs.map((tab) => (
            <Link
              key={tab}
              href={`/${tab.toLowerCase()}`}
              className="text-[#FFD9A4] hover:text-white text-lg transition"
              onClick={() => setIsOpen(false)}
            >
              {tab}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
