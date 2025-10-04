"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { backgroundImageUrl } from "@/data/events";
import { cardEvents } from "@/data/events";
import { centerImageUrl } from "@/data/events";
import { intersectImageUrl } from "@/data/events";
import useEmblaCarousel from "embla-carousel-react";
import { events } from "@/data/events";

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0); // mobile index
  // Flatten events data (day1 + day2 + day3) for desktop carousel mapping
  const flattenedEvents = [...events.day1, ...events.day2, ...events.day3];
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    slidesToScroll: 1,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

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
        <h1 className="text-[var(--cream,#FFD9A4)] text-center font-traditional text-4xl sm:text-5xl md:text-6xl leading-normal tracking-wide px-2 sm:px-4 font-bold">
          EVENTS
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

        {/* Desktop Embla carousel (exactly 3 visible) */}
        <div className="hidden sm:block px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="relative max-w-[82rem] mx-auto">
            {/* Nav buttons */}
            <button
              onClick={scrollPrev}
              aria-label="Previous events"
              className="hidden md:flex absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FFD9A4]/80 text-[#03523C] shadow hover:bg-[#FFD9A4] transition disabled:opacity-30 disabled:cursor-not-allowed items-center justify-center"
              disabled={selected === 0}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next events"
              className="hidden md:flex absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FFD9A4]/80 text-[#03523C] shadow hover:bg-[#FFD9A4] transition disabled:opacity-30 disabled:cursor-not-allowed items-center justify-center"
              disabled={
                emblaApi
                  ? selected >= emblaApi.scrollSnapList().length - 1
                  : false
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4 md:gap-6 lg:gap-8 xl:gap-10">
                {flattenedEvents.map((evt, index) => {
                  // Fallback image mapping since evt.src currently placeholder "src"
                  const imageSource = cardEvents[index % cardEvents.length].src;
                  const imageAlt = `${evt.eventName} image`;
                  return (
                    <div
                      key={`${evt.eventName}-${index}`}
                      className="group embla__slide shrink-0 rounded-2xl md:rounded-[2.6875rem] bg-white/10 border-[3px] border-[#FFD9A4]
                      w-[13.75rem] md:w-[21.875rem] lg:w-[23.75rem] xl:w-[25.4375rem]
                      h-[17.5rem] md:h-[23.75rem] lg:h-[27.5rem] xl:h-[30.6875rem]
                      relative cursor-pointer will-change-transform transition-[transform,box-shadow,background-color] duration-300 ease-in-out hover:scale-105 focus-within:scale-105 hover:shadow-2xl hover:shadow-[#FFD9A4]/20 hover:bg-white/20"
                      tabIndex={0}
                      role="button"
                      aria-label={`${evt.eventName} details`}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          (e.currentTarget as HTMLElement).blur();
                        }
                        if (e.key === "Enter" || e.key === " ") {
                          // Prevent page scroll on Space
                          e.preventDefault();
                          // Focus inside overlay paragraph for reading
                          const p = e.currentTarget.querySelector("p");
                          if (p) (p as HTMLElement).focus();
                        }
                      }}
                    >
                      <Image
                        src={imageSource}
                        alt={imageAlt}
                        fill
                        className="pointer-events-none select-none rounded-2xl md:rounded-[2.6875rem] object-contain p-2 md:p-4"
                        sizes="(max-width: 640px) 75vw, (max-width: 768px) 220px, (max-width: 1024px) 350px, (max-width: 1280px) 380px, 407px"
                        priority={index < 3}
                      />

                      {/* Pop-out overlay */}
                      <div className="absolute inset-0 rounded-2xl md:rounded-[2.6875rem] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                        <div className="absolute -inset-3 md:-inset-4 rounded-3xl md:rounded-[3.25rem] bg-[linear-gradient(135deg,#03523C_0%,#082B20_60%)] border border-[#FFD9A4]/60 shadow-[0_0_25px_-5px_rgba(255,217,164,0.5)] scale-[1.02] group-hover:scale-[1.05] group-focus-within:scale-[1.05] transition-transform duration-300 pointer-events-none" />
                        <div className="relative z-10 h-full flex flex-col p-4 md:p-6 text-[#FFD9A4]">
                          <h3 className="font-semibold font-traditional text-lg md:text-2xl mb-2 tracking-wide">
                            {evt.eventName}
                          </h3>
                          <div className="w-12 h-1 bg-[#FFD9A4]/70 rounded mb-3" />
                          <p
                            className="text-xs md:text-sm leading-relaxed whitespace-pre-line overflow-y-auto pr-1 hide-scrollbar flex-1 outline-none focus:ring-2 focus:ring-[#FFD9A4]/60 rounded"
                            tabIndex={-1}
                          >
                            {evt.alt}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Dots */}
            <div className="hidden md:flex justify-center mt-6 gap-2 flex-wrap">
              {emblaApi &&
                emblaApi
                  .scrollSnapList()
                  .map((_, i) => (
                    <button
                      key={i}
                      onClick={() => emblaApi && emblaApi.scrollTo(i)}
                      aria-label={`Go to slide group ${i + 1}`}
                      className={`w-2.5 h-2.5 rounded-full transition ${
                        i === selected
                          ? "bg-[#FFD9A4]"
                          : "bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
