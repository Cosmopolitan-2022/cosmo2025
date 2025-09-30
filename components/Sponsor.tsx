"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { sponsData } from "@/data/sponsors";
import { centerImageUrl } from "@/data/events";
import { intersectImageUrl } from "@/data/events";
import { backgroundImageUrl } from "@/data/events";

export default function Sponsors() {
  type Sponsor = (typeof sponsData)[number];

  const renderSponsors = (
    sponsors: Sponsor[],
    variant: "carousel" | "grid" = "carousel"
  ) => {
    return sponsors.map((sponsor, index) => {
      const outerWrapperClass =
        variant === "carousel"
          ? "flex flex-col items-center mx-4 md:mx-6"
          : "flex flex-col items-center";

      const circleClass =
        variant === "carousel"
          ? "relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border-2 border-[#FFD9A4]/70 p-1 shadow-[0_0_30px_-12px_rgba(255,217,164,0.65)] backdrop-blur"
          : "relative w-[160px] h-[160px] lg:w-[190px] lg:h-[190px] xl:w-[210px] xl:h-[210px] rounded-full border-2 border-[#FFD9A4]/70 p-1 shadow-[0_0_30px_-12px_rgba(255,217,164,0.65)] backdrop-blur";

      const innerRingClass =
        variant === "carousel"
          ? "w-full h-full rounded-full border-2 border-dashed border-white/40 flex items-center justify-center p-4 overflow-hidden bg-[rgba(3,82,60,0.15)]"
          : "w-full h-full rounded-full border-2 border-dashed border-white/40 flex items-center justify-center p-6 overflow-hidden bg-[rgba(3,82,60,0.18)]";

      const imageWrapperClass =
        variant === "carousel"
          ? "relative w-[90px] h-[90px] md:w-[130px] md:h-[130px]"
          : "relative w-[110px] h-[110px] lg:w-[140px] lg:h-[140px]";

      const imageSizes =
        variant === "carousel"
          ? "(max-width: 768px) 90px, 130px"
          : "(max-width: 1280px) 110px, 150px";

      return (
        <div key={`${sponsor.id}-${index}`} className={outerWrapperClass}>
          <div className={circleClass}>
            <div className={innerRingClass}>
              <div className={imageWrapperClass}>
                <Image
                  src={sponsor.data}
                  alt={`Sponsor logo ${sponsor.id}`}
                  fill
                  className="object-contain"
                  sizes={imageSizes}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

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
          Sponsors
        </h1>
      </div>

      {/* Desktop Sponsors Grid */}
      <section className="relative z-10 hidden md:block px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {renderSponsors(sponsData, "grid")}
          </div>
        </div>
      </section>

      {/* Mobile Sponsors Carousel */}
      <section className="relative z-10 mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 md:hidden">
        <div className="flex items-center justify-center w-full overflow-hidden rounded-3xl border border-[#FFD9A4]/40 bg-[linear-gradient(135deg,rgba(28,60,43,0.65),rgba(3,82,60,0.55))] px-4 sm:px-6 py-10 shadow-[0_0_60px_-10px_rgba(3,82,60,0.6)]">
          <div className="w-full overflow-hidden">
            <Marquee
              speed={60}
              gradient
              gradientColor="#1C3C2B"
              gradientWidth={10}
              pauseOnHover
              direction="right"
            >
              {renderSponsors(sponsData)}
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
}
