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
      border1,
      border2},
  } = navbarHeroData;

 return (
  <>
    <section className="relative  pt-[50px] pb-[117px] flex flex-col md:flex-row items-center overflow-visible justify-center bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] w-full">
      <div className="relative w-full md:w-1/2 flex items-center ">
        
        <div className="absolute md:w-[400px] md:h-[800px] lg:w-[500px] lg:h-[1000px] opacity-60">
          <Image
            src={leftBackground}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute left-0 md:w-[500px] md:h-[800px] lg:w-[700px] lg:h-[900px] mt-25">
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
    <div className="w-full text-justify pr-8">
      <h1 className="text-5xl right-8 md:text-5xl xl:text-9xl font-bold text-[#FFD9A4] text-center">
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
    width={200} 
    height={200}
    className="h-auto"
  />

  <div className="absolute top-0 right-10 flex flex-col items-end p-6 md:p-8 lg:p-x-10">
    <p className="text-right text-[#e6e6c7] 
              text-sm md:text-base lg:text-lg xl:text-2xl 
              max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl">
  {subText}
</p>

    <button className="mt-20 px-8 py-3 bg-[#e6e6c7]/90 text-[#1c3c2b] rounded-lg md:text-[20px] lg:text-2xl xl:text-3xl shadow font-bold">
      EXPLORE
    </button>
  </div>
</div>

  </div>

  
    </section>

 <div className="relative w-screen bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] overflow-visible">
  <div className="relative w-screen md:h-8 lg:h-8 xl:h-10 z-20 bg-amber-200">
    <Image
      src={border1}
      alt="Border 1"
      fill
      className="object-fill"
    />
  </div>

  <div className="relative w-screen md:h-22 lg:h-25 xl:h-30 -mt-10 z-10">
    <Image
      src={border2}
      alt="Border 2"
      fill
      className="object-fill"
    />
  </div>
</div>




    </>
  );
}


export default Hero;