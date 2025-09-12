"use client";
import React, { useState } from "react";

import { cn } from "@/app/lib/utils";

import { carousel } from "@/data/funevents/funevents";
import Background from "./Background";

function FunEvents() {
  const [activeTab, setActiveTab] = useState(0);
  const activeEvent = carousel[activeTab];

  const Previous = () => {
    setActiveTab((prev) => (prev === 0 ? carousel.length - 1 : prev - 1));
  };

  const Next = () => {
    setActiveTab((prev) => (prev === carousel.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative py-5 h-[750px] sm:h-[800px] lg:h-[1024px]  bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)]">
      <Background />

      <div className="absolute  flex flex-col justify-center items-center inset-x-0 top-4 sm:top-24">
        <h1 className=" font-traditional text-3xl sm:text-[6vw] xl:text-7xl text-[#FFD9A4] leading-normal tracking-widest">
          FUN EVENTS
        </h1>
        <div className=" hidden sm:flex mt-10 p-4 items-center justify-around w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl  ">
          {carousel.map((event, index) => (
            <button
              className={cn(
                "text-white px-5 py-1 text-center text-base lg:text-xl font-medium leading-normal border-2 rounded-md transition-all duration-300 font-montserrat",
                activeTab === index
                  ? "border-[#FFD9A4] bg-[#FFD9A4]/20"
                  : "border-transparent hover:border-[#FFD9A4]"
              )}
              key={event.id}
              onClick={() => setActiveTab(index)}
            >
              {event.title}
            </button>
          ))}
        </div>

        <div className="absolute top-16 sm:top-52 lg:top-60 xl:top-64 inset-x-0 flex items-center justify-center px-8">
          <button
            onClick={Previous}
            className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#FFD9A4]/80 hover:bg-[#FFD9A4] text-[#03523C] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>

          <div className="flex flex-col sm:flex-row h-[600px] sm:h-[300px] md:h-[350px] lg:h-[450px] justify-between w-full max-w-[300px] sm:max-w-[74vw] xl:max-w-4xl   rounded-2xl p-1">
            <div className="h-[40%] sm:h-full sm:w-1/2 ">
              <div className="relative w-full h-full bg-white rounded-xl overflow-hidden">
                {/* <Image
                  src={activeEvent.src}
                  alt={activeEvent.alt}
                  fill
                  className="object-cover transition-all duration-500"
                /> */}
              </div>
            </div>

            <div className="h-[55%] sm:h-full sm:w-1/2 relative sm:pl-5 sm:py-3 ">
              <h2 className=" text-4xl text-center sm:text-left md:text-5xl lg:text-7xl font-bold text-[#FFD9A4] sm:mb-4 font-montserrat">
                {activeEvent.title}
              </h2>
              <p className="text-[#FFD9A4] mt-2 md:mt-6 text-xl text-center sm:text-left sm:text-2xl lg:text-4xl mb-4 font-semibold font-montserrat">
                {activeEvent.date}
              </p>
              <p className="text-white text-center text-[16px] lg:text-2xl sm:text-justify font-light font-sans leading-relaxed sm:leading-none px-2 sm:px-0 sm:absolute sm:bottom-0 font-montserrat">
                {activeEvent.desc}
              </p>
            </div>
          </div>

          <button
            onClick={Next}
            className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#FFD9A4]/80 hover:bg-[#FFD9A4] text-[#03523C] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-50 shadow-lg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>

          <div className="sm:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {carousel.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeTab === index ? "bg-[#FFD9A4] w-6" : "bg-white/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunEvents;
