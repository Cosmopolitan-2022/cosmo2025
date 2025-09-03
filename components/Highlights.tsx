"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselImage } from "@/data/highlights";
import { backgroundDesign,cosmo, centerDesign } from "@/data/highlights";

export default function Highlights() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? carouselImage.length - 1 : prev - 1));
  const nextSlide = useCallback(() =>
    setCurrent((prev) => (prev === carouselImage.length - 1 ? 0 : prev + 1)),
    []
  );

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextSlide();
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  return (
    <div className="relative min-h-screen w-full py-16 bg-[#03523C] overflow-hidden">
      <Image
        src={backgroundDesign}
        alt="pattern"
        fill
        className="object-cover opacity-20"
      />
      <div className="absolute left-0 bottom-0 z-0">
      <Image
        src={cosmo}
        alt="cosmo"
        width={200}
        height={150}
        className="object-cover opacity-70"
      />
      </div>
      <div className="absolute inset-0 z-0 flex items-center justify-center">
      <Image
        src={centerDesign}
        alt="craft"
        width={1100}
        height={1100}
        className=" opacity-100 object-contain bg-green"
      />
        </div>

      <h2 className="relative z-10 text-center text-6xl font-bold text-[#F5E1A4] mb-12 tracking-wide">
        HIGHLIGHTS
      </h2>

      <div className="relative z-10 flex items-center justify-center gap-8 px-4 max-w-7xl mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="text-white hover:bg-white/10 hover:text-[#F5E1A4] transition-colors rounded-full w-24 h-24 flex items-center justify-center bg-white/5"
        >
          <ChevronLeft size={60} />
        </Button>

        <div 
          className="flex items-center -space-x-24"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {carouselImage.map((item, index) => {
            const isActive = index === current;
            return (
              <Card
                key={item.id}
                className={`transition-all duration-500 overflow-hidden bg-transparent border-0 ${
                  isActive
                    ? "scale-90 shadow-2xl z-20 "
                    : "scale-75 opacity-40 blur-[1px]"
                }`}
              >
                <div className="relative w-[400px] h-[400px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={400}
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </Card>
            );
          })}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="text-white hover:bg-white/10 hover:text-[#F5E1A4] transition-colors rounded-full w-24 h-24 flex items-center justify-center bg-white/5"
        >
          <ChevronRight size={60} />
        </Button>
      </div>
    </div>
  );
}