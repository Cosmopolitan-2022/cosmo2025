"use client";
import Image from "next/image";

import { backgroundImageUrl } from "@/data/events";
import { para } from "@/data/about";
import { centerImageUrl } from "@/data/events";
import { intersectImageUrl } from "@/data/events";
import { cardEvents } from "@/data/events";

export default function About() {
  return (
    <div className="smooth-scroll w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-32 xl:py-40  bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] relative ">
      <Image
        src={backgroundImageUrl}
        alt="Event background"
        fill
        className="object-cover"
      />

      {/* Center decorative image */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Image
          src={centerImageUrl}
          alt="Center decoration"
          width={900}
          height={600}
          className="object-contain opacity-30 scale-75 sm:scale-90 md:scale-100"
        />
      </div>

      {/* Intersect decorative images */}
      <div className="absolute bottom-0 right-0 z-0 overflow-visible">
        <Image
          src={intersectImageUrl}
          alt="Decorative element"
          width={150}
          height={150}
          className="object-cover sm:w-[9.375rem] sm:h-[9.375rem] md:w-[11.25rem] md:h-[30rem] lg:w-[12.5rem] lg:h-[31.25rem]"
        />
      </div>

      {/* Title */}
      <div className="flex justify-center relative z-10 mb-8 sm:mb-10 md:mb-16 lg:mb-20">
        <h1 className="text-[var(--cream,#FFD9A4)] text-center font-traditional text-5xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal leading-normal tracking-[0.1rem] xs:tracking-[0.15rem] sm:tracking-[0.2rem] md:tracking-[0.3rem] lg:tracking-[0.5rem] xl:tracking-[0.6rem] 2xl:tracking-[0.772rem] px-2 sm:px-4">
          ABOUT
        </h1>
      </div>

      {/* Content Section */}
      <section className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* Left decorative/translucent box with image (always square) */}
          <div className="w-full max-w-[36rem] sm:max-w-[28rem] md:max-w-[32rem] lg:max-w-[34rem] xl:max-w-[36rem] aspect-square rounded-3xl md:rounded-[2.5rem] bg-white/10 border-[3px] border-[#FFD9A4] shadow-[0_0_60px_-10px_rgba(255,217,164,0.25)] backdrop-blur-sm mx-auto lg:mx-0 overflow-hidden relative">
            <Image
              src={cardEvents[0].src}
              alt={cardEvents[0].alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right paragraph */}
          <div className="text-white">
            <p className="font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl leading-7 sm:leading-8 md:leading-9 lg:leading-10 tracking-wide">
              {para}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
