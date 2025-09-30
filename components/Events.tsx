"use client";
import Image from "next/image";
import { useState } from "react";
import { backgroundImageUrl } from "@/data/events";
import { cardEvents } from "@/data/events";
import { centerImageUrl } from "@/data/events";
import { intersectImageUrl } from "@/data/events";

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cardEvents.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + cardEvents.length) % cardEvents.length
    );
  };

  return (
    <div className="smooth-scroll w-full h-[50%] py-12 sm:py-16 md:py-20 lg:py-32 xl:py-40  bg-[linear-gradient(90deg,#082B20_1.81%,#03523C_50.72%,#082B20_99.63%)] relative ">
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
          Events
        </h1>
      </div>

      {/* Event cards */}
      <div className="relative z-10">
        {/* Mobile carousel */}
        <div className="block sm:hidden px-2">
          <div className="relative flex items-center justify-center">
            {/* Previous button */}
            <button
              onClick={prevCard}
              className="absolute left-0 z-20 p-2 text-[#FFD9A4] hover:text-white transition-colors duration-200"
              aria-label="Previous event"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Single card for mobile */}
            <div className="w-3/4 max-w-xs mx-auto">
              <div className="rounded-xl bg-white/10 border-[3px] border-[#FFD9A4] h-80 relative cursor-pointer will-change-transform transition-[transform,box-shadow,background-color] duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#FFD9A4]/20 hover:bg-white/20">
                <Image
                  src={cardEvents[currentIndex].src}
                  alt={cardEvents[currentIndex].alt}
                  fill
                  className="rounded-xl object-contain p-2"
                  priority={true}
                />
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={nextCard}
              className="absolute right-0 z-20 p-2 text-[#FFD9A4] hover:text-white transition-colors duration-200"
              aria-label="Next event"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {cardEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-[#FFD9A4]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:flex sm:flex-row sm:flex-wrap md:flex-wrap justify-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-6 px-4 md:px-6 lg:px-8 xl:px-12">
          {cardEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl md:rounded-[2.6875rem] bg-white/10 border-[3px] border-[#FFD9A4] flex-1 min-w-[11.25rem] max-w-[13.75rem] md:max-w-[21.875rem] lg:max-w-[23.75rem] xl:max-w-[25.4375rem] h-[17.5rem] md:h-[23.75rem] lg:h-[27.5rem] xl:h-[30.6875rem] flex-shrink-0 relative cursor-pointer will-change-transform transition-[transform,box-shadow,background-color] duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#FFD9A4]/20 hover:bg-white/20"
            >
              <Image
                src={event.src}
                alt={event.alt}
                fill
                className="rounded-2xl md:rounded-[2.6875rem] object-contain p-2 md:p-4"
                sizes="(max-width: 640px) 75vw, (max-width: 768px) 220px, (max-width: 1024px) 350px, (max-width: 1280px) 380px, 407px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
