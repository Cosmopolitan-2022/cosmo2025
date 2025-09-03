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
      centerMobile,
      mobileHero,
    },
  } = navbarHeroData;

 return (
  
    <section className="relative flex flex-col md:flex-row items-center justify-center bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] w-full ">
      <div className="relative w-full md:w-1/2 flex items-center ">
        
        <div className="absolute  w-[500px] h-[1000px] mt-20 opacity-60">
          <Image
            src={leftBackground}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute left-0 w-[700px] h-[900px] mt-50">
          <Image
            src={leftImage}
            alt="Left image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <Image
          src={leftSmoke}
          alt="Smoke"
          width={700}
          height={800}
          className="absolute left-30 translate-y-1/4 z-20 opacity-60 object-contain"
        />
      </div>


      <div className="relative z-30 w-full flex flex-col ml-auto pr-0">
    <div className="w-full text-justify pr-0">
      <h1 className="text-5xl md:text-5xl xl:text-9xl font-bold text-[#FFD9A4] text-center">
        <span className="block font-[Orbitron]">{mainText.split(" ")[0]}</span>
        <span className="block text-5xl md:text-5xl xl:text-9xl  text-white">
          {mainText.split(" ")[1]}
        </span>
      </h1>
    </div>

    <div className="relative mt-6 w-full flex justify-end">
      <Image
        src={rightImage}
        alt="Hero image"
        width={180}
        height={150}
        className="object-contain relative top-10"
      />

      <p className="absolute mt-10 px-48 transform md:text-[16px] lg:text-xl xl:text-2xl text-[#e6e6c7] text-justify pr-12">
        {subText}
      </p>
    </div>
 

    <div className="flex md:px-40 lg:px-42 xl:px-48 mt-6 w-full">
      <button className="px-8 py-3 bg-[#e6e6c7] text-[#1c3c2b] rounded-lg md:text-[20px] lg:text-2xl xl:text-xl shadow font-bold hover:bg-[#d4d4b0] transition">
        EXPLORE
      </button>
    </div>
  </div>
    </section>


  );
}


export default Hero;