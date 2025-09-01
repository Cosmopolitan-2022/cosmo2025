import React from "react";
import { navbarHeroData } from "../app/Data/NavbarHero/NavbarHero";
import Image from "next/image";

function Hero() {
  const {
    hero: {
      leftBackground,
      leftImage,
      rightImage,
      leftSmoke,
      mainText,
      subText,
    },
  } = navbarHeroData;

 return (
  
    <section className="relative flex flex-col md:flex-row items-center justify-center bg-[#1c3c2b] w-full min-h-screen ">
      {/* Left side */}
      <div className="relative w-full md:w-1/2 flex items-center ">
        
        {/* Background pattern */}
        <div className="absolute  w-[500px] h-[1000px] mt-20 opacity-60">
          <Image
            src={leftBackground}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main left image */}
        <div className="absolute left-0 w-[700px] h-[900px] mt-50">
          <Image
            src={leftImage}
            alt="Left image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Smoke effect (still absolute for overlay) */}
        <Image
          src={leftSmoke}
          alt="Smoke"
          width={700}
          height={800}
          className="absolute left-40 translate-y-1/4 z-20 opacity-80 object-contain"
        />
      </div>

      {/* Center text */}
      <div className="relative z-30 w-full md:w-1/2 flex flex-col items-center text-center px-4">
        <h1 className="text-xl md:text-xl xl:text-9xl font-bold text-[#FFD9A4] leading-none tracking-wide">
          <span className="block font-[Orbitron]">
            {mainText.split(" ")[0]}
          </span>
          <span className="block text-xl md:text-xl xl:text-9xl tracking-[0.5em] text-white font-sans">
            {mainText.split(" ")[1]}
          </span>
        </h1>
       <p className="mt-6 text-xl md:text-2xl text-[#e6e6c7] text-justify  md:ml-auto">
  {subText}
</p>


        <button className="mt-8 px-8 py-3 bg-[#e6e6c7] text-[#1c3c2b] rounded shadow font-semibold hover:bg-[#d4d4b0] transition">
          EXPLORE
        </button>
      </div>

      {/* Right image */}
      <div className="hidden md:flex items-center justify-end relative w-1/4">
        <Image
          src={rightImage}
          alt="Hero image"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    </section>
  );
}


export default Hero;