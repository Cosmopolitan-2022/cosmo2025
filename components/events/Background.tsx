import React from "react";
import Image from "next/image";
import { backgroundelements } from "@/app/Data/events/events";

function Background() {
  const { pattern, lamp, decoration, women } = backgroundelements;
  return (
    <div className="relative">
      <Image
        src={pattern.src}
        alt={pattern.alt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-x-0 sm:-right-[10%] top-12 sm:top-10 flex justify-center items-center sm:justify-end">
        <Image
          src={lamp.src}
          alt={lamp.alt}
          width={lamp.width}
          height={lamp.height}
          className="self-center w-[250px] h-[450px] sm:w-[200px] sm:h-[400px] md:w-[250px] md:h-[450px] lg:w-[450px] lg:h-[800px]"
        />
      </div>
      <div className=" hidden sm:inline-block absolute  sm:left-[5%] lg:left-[2%] xl:left-[3%] top-28 md:top-36 lg:top-40 xl:top-44">
        <Image
          src={decoration.src}
          alt={decoration.alt}
          width={decoration.width}
          height={decoration.height}
          className="w-full max-w-[400px] md:max-w-3xl lg:max-w-4xl h-[350px] md:h-[400px] lg:h-[550px] xl:h-[650px] opacity-30"
        />
      </div>
      <div className=" hidden z-10 sm:inline-block absolute  sm:left-[19%] md:left-[19.5%] lg:left-[15.5%] xl:left-[16%] top-24 md:top-[130px] lg:top-36 xl:top-40">
        <Image
          src={women.src}
          alt={women.alt}
          width={women.width}
          height={women.height}
          className="w-full max-w-[400px] md:max-w-3xl lg:max-w-4xl h-[350px] md:h-[400px] lg:h-[570px] xl:h-[650px] "
        />
      </div>
    </div>
  );
}

export default Background;
