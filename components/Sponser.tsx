"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { combined } from "@/data/sponsors";
import { sponsData } from "@/data/sponsors";
import { centerImageUrl } from "@/data/events";
import { intersectImageUrl } from "@/data/events";
import { backgroundImageUrl } from "@/data/events";
import { paraData } from "@/data/sponsors";

export default function Sponsors() {
  type Sponsor = (typeof sponsData)[number];
  const chunkSize = Math.ceil(sponsData.length / 3);
  const chunk1 = sponsData.slice(0, chunkSize);
  const chunk2 = sponsData.slice(chunkSize, chunkSize * 2);
  const chunk3 = sponsData.slice(chunkSize * 2);

  const renderSponsors = (sponsors: Sponsor[]) => {
    return sponsors.map((sponsor, index) => (
      <div
        key={`${sponsor.id}-${index}`}
        className="flex flex-col items-center mx-4 md:mx-6"
      >
        <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-2 border-[#FFD9A4]/70 p-1 shadow-[0_0_30px_-12px_rgba(255,217,164,0.65)] backdrop-blur">
          <div className="w-full h-full rounded-full border-2 border-dashed border-white/40 flex items-center justify-center p-5 overflow-hidden bg-[rgba(3,82,60,0.15)]">
            <div className="relative w-[100px] h-[100px] md:w-[140px] md:h-[140px]">
              <Image
                src={sponsor.data}
                alt={`Sponsor logo ${sponsor.id}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100px, 140px"
              />
            </div>
          </div>
        </div>
      </div>
    ));
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
          Sponser
        </h1>
      </div>

      {/* Content Section */}
      <section className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* Left Para */}
          <div className="text-white">
            <p className="font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl leading-7 sm:leading-8 md:leading-9 lg:leading-10 tracking-wide">
              {paraData}
            </p>
          </div>

          {/* Right box */}
          <div className="hidden md:block w-full max-w-[36rem] sm:max-w-[28rem] md:max-w-[32rem] lg:max-w-[34rem] xl:max-w-[36rem] aspect-square rounded-3xl md:rounded-[2.5rem] bg-white/10 border-[3px] border-[#FFD9A4] shadow-[0_0_60px_-10px_rgba(255,217,164,0.25)] backdrop-blur-sm mx-auto lg:mx-0 overflow-hidden relative">
            <Image
              src={combined}
              alt="combined spons"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mobile Sponsors Carousel */}
      <section className="relative z-10 mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 md:hidden">
        <div className="flex flex-col items-center justify-center w-full overflow-hidden rounded-3xl border border-[#FFD9A4]/40 bg-[linear-gradient(135deg,rgba(28,60,43,0.65),rgba(3,82,60,0.55))] px-4 sm:px-6 py-10 shadow-[0_0_60px_-10px_rgba(3,82,60,0.6)]">
          <div className="flex flex-col items-start self-stretch space-y-8">
            {/* First row - RTL */}
            <div className="w-full overflow-hidden">
              <Marquee
                speed={60}
                gradient
                gradientColor="#1C3C2B"
                gradientWidth={10}
                pauseOnHover
                direction="right"
              >
                {renderSponsors(chunk1)}
              </Marquee>
            </div>

            {/* Second row - LTR */}
            <div className="w-full overflow-hidden">
              <Marquee
                speed={60}
                gradient
                gradientColor="#1C3C2B"
                gradientWidth={10}
                pauseOnHover
                direction="left"
              >
                {renderSponsors(chunk2)}
              </Marquee>
            </div>

            {/* Third row - RTL */}
            <div className="w-full overflow-hidden">
              <Marquee
                speed={60}
                gradient
                gradientColor="#1C3C2B"
                gradientWidth={10}
                pauseOnHover
                direction="right"
              >
                {renderSponsors(chunk3)}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
