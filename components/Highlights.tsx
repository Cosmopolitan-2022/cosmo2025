"use client";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { left, right } from "@/data/highlights";
import { carouselImage } from "@/data/highlights";
import { cosmo, centerDesign } from "@/data/highlights";

export default function Highlights() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection observer to only animate when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? carouselImage.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === carouselImage.length - 1 ? 0 : prev + 1));
  }, []);

  // Only run timer when component is in view and not paused
  useEffect(() => {
    if (!isPaused && isInView) {
      const timer = setInterval(nextSlide, 2000);
      return () => clearInterval(timer);
    }
  }, [isPaused, isInView, nextSlide]);

  // Memoize card styles to prevent recalculation on every render
  const cardStyles = useMemo(() => {
    return carouselImage.map((_, index) => {
      const diff =
        (current - index + carouselImage.length) % carouselImage.length;
      let transformClass = "";
      let scaleOpacityClass = "";

      if (diff === 0) {
        transformClass = "translate-x-0";
        scaleOpacityClass = "scale-100 z-20 shadow-2xl";
      } else if (diff === 1 || diff === carouselImage.length - 1) {
        transformClass =
          index === (current + 1) % carouselImage.length
            ? "translate-x-[150px] sm:translate-x-[200px] md:translate-x-[250px] lg:translate-x-[300px]"
            : "-translate-x-[150px] sm:-translate-x-[200px] md:-translate-x-[250px] lg:-translate-x-[300px]";
        scaleOpacityClass = "scale-85 opacity-40 blur-[1px]";
      } else {
        transformClass = "translate-x-0";
        scaleOpacityClass = "scale-0 opacity-0";
      }

      return `transition-transform duration-500 ease-out absolute w-[250px] sm:w-[450px] md:w-[600px] lg:w-[700px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden bg-transparent border-0 !shadow-none ${scaleOpacityClass} ${transformClass}`;
    });
  }, [current]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[56vh] w-full py-12 sm:py-12 md:py-28 lg:py-40 bg-gradient-to-r from-[#082B20] via-[#03523C] to-[#082B20] overflow-hidden"
    >
      {/* Background elements with will-change for GPU acceleration */}
      <div className="absolute left-0 bottom-0 z-0 will-change-transform">
        <Image
          src={cosmo}
          alt="cosmo"
          width={200}
          height={150}
          className="object-cover opacity-70 w-28 sm:w-24 md:w-32 lg:w-44"
          priority={false}
          loading="lazy"
        />
      </div>

      <div className="hidden md:block absolute bottom-[-30px] right-[0px] z-0 w-full sm:w-[200px] sm:inset-0 md:w-[1000px] lg:w-[1400px] items-center justify-center will-change-transform">
        <Image
          src={centerDesign}
          alt="craft"
          width={1600}
          height={1600}
          className="opacity-200 object-contain w-full h-auto translate-y-5 translate-x-8"
          priority={false}
          loading="lazy"
        />
      </div>

      <div className="absolute flex items-center bottom-[-50px] justify-center pointer-events-none -z-10 md:hidden will-change-transform">
        <Image
          src={centerDesign}
          alt="craft"
          width={400}
          height={400}
          className="object-contain w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] opacity-80"
          priority={false}
          loading="lazy"
        />
      </div>

      <h2 className="relative z-10 text-center text-4xl sm:text-5xl md:text-6xl font-traditional font-bold text-[#FFD9A4] mb-12 sm:mb-16 md:mb-20 lg:mb-24 tracking-wide ">
        HIGHLIGHTS
      </h2>

      <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 -mt-8 sm:-mt-12 md:-mt-16 px-2 sm:px-4 max-h-[800px] mx-auto top-[-30px]">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          onTouchStart={prevSlide}
          className="text-white hover:bg-white/10 hover:text-[#F5E1A4] transition-colors rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white/5 will-change-transform"
          aria-label="Previous slide"
        >
          <Image
            src={left}
            alt="left arrow"
            width={16}
            height={16}
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 opacity-130"
          />
        </Button>

        <div
          className="flex items-center justify-center w-full sm:w-[800px] md:w-[1200px] lg:w-[1800px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] relative mt-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {carouselImage.map((item, index) => (
            <Card
              key={item.id}
              className={cardStyles[index]}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={700} 
                  height={450} 
                  className="object-contain rounded-lg w-full h-full"
                  priority={index === current}
                  loading={index === current ? "eager" : "lazy"}
                />
              </div>
            </Card>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          onTouchStart={nextSlide}
          className="text-white hover:bg-white/10 hover:text-[#F5E1A4] transition-colors rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white/5 will-change-transform"
          aria-label="Next slide"
        >
          <Image
            src={right}
            alt="right arrow"
            width={16}
            height={16}
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 opacity-130"
          />
        </Button>
      </div>
    </div>
  );
}
