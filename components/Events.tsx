import Image from "next/image";
import { backgroundImageUrl } from "@/data/events";
import { cardEvents } from "@/data/events";
import { centerImageUrl } from "@/data/events";
import { intersectImageUrl } from "@/data/events";

export default function Events() {
  return (
    <div className="w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-32 xl:py-40  bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] relative ">
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
          className="object-cover sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[480px] lg:w-[200px] lg:h-[500px]"
        />
      </div>

      {/* Lighting effects */}
      <div className="absolute top-10 left-5 w-[250px] h-[250px] sm:top-16 sm:left-12 sm:w-[300px] sm:h-[300px] md:top-20 md:left-20 md:w-[400px] md:h-[400px] rounded-full opacity-50 bg-[#FFD9A4] blur-[150px] sm:blur-[200px] md:blur-[250px] z-0"></div>
      <div className="absolute bottom-16 right-8 w-[200px] h-[200px] sm:bottom-24 sm:right-16 sm:w-[250px] sm:h-[250px] md:bottom-32 md:right-32 md:w-[300px] md:h-[300px] rounded-full opacity-50 bg-[#FFD9A4] blur-[150px] sm:blur-[200px] md:blur-[250px] z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full opacity-30 bg-[#FFD9A4] blur-[150px] sm:blur-[200px] md:blur-[250px] z-0"></div>

      {/* Title */}
      <div className="flex justify-center relative z-10 mb-8 sm:mb-10 md:mb-16 lg:mb-20">
        <h1 className="text-[var(--cream,#FFD9A4)] text-center font-traditional text-5xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal leading-normal tracking-[0.1rem] xs:tracking-[0.15rem] sm:tracking-[0.2rem] md:tracking-[0.3rem] lg:tracking-[0.5rem] xl:tracking-[0.6rem] 2xl:tracking-[0.772rem] px-2 sm:px-4">
          Events
        </h1>
      </div>

      {/* Event cards */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-6 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
        {cardEvents.map((event) => (
          <div
            key={event.id}
            className="rounded-[20px] sm:rounded-[30px] md:rounded-[43px] bg-white/10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[407px] h-[240px] xs:h-[280px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[491px] flex-shrink-0 relative mx-auto"
          >
            <Image
              src={event.src}
              alt={event.alt}
              fill
              className="rounded-[20px] sm:rounded-[30px] md:rounded-[43px] object-contain p-2 sm:p-3 md:p-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
