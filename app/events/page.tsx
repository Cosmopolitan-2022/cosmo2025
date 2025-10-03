"use client";
import React, { useState } from "react";

import { day } from "../Data/events/events";
import EventBox from "../../components/events/EventBox";
import { events } from "../Data/events/events";
import Background from "../../components/events/Background";

export default function Page() {
  const [activeDay, setActiveDay] = useState(day[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 4;

  const allEventsForDay = events[activeDay as "day1" | "day2" | "day3"];
  const totalPages = Math.ceil(allEventsForDay.length / eventsPerPage);
  const startIndex = currentPage * eventsPerPage;
  const currentEvents = allEventsForDay.slice(
    startIndex,
    startIndex + eventsPerPage
  );
  return (
    <div className="h-[530px] md:h-[600px] lg:h-[800px] xl:h-[900px] bg-[linear-gradient(90deg,#082B20_1.81%,#03523C_50.72%,#082B20_99.63%)]">
      <div className="relative w-full h-full  overflow-hidden">
        <Background />

        <div className=" absolute top-8 md:top-10 lg:top-10  left-1/2 -translate-x-1/2 z-10 p-2">
          <h1 className=" tracking-[5px] font-traditional font-bold text-4xl md:text-5xl xl:text-6xl  text-[#FFD9A4] ">
            EVENTS
          </h1>
        </div>
        <div className=" absolute p-2 top-24 md:top-28 xl:top-44 mx-3 sm:mx-0 inset-x-0 sm:inset-x-auto sm:right-[3%]  xl:right-[7%]">
          <div className=" flex flex-row items-center justify-center space-x-8 lg:space-x-10 ">
            <h1 className="text-[30px] font-montserrat md:text-[40px] lg:text-[50px] font-extrabold text-white">
              {" "}
              Day
            </h1>
            <div className="flex flex-row gap-4 lg:gap-5 ">
              {day.map((dayName) => (
                <button
                  key={dayName}
                  className=" cursor-pointer"
                  onClick={() => {
                    setActiveDay(dayName);
                    setCurrentPage(0);  
                  }}
                >
                  <div className="w-10 h-10 md:w-13 md:h-13 lg:w-16 lg:h-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 36 36"
                      fill="none"
                      className="w-full h-full"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="18"
                        fill={activeDay === dayName ? "#FFD9A4" : "white"}
                      />

                      <text
                        x="18"
                        y="20"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="16"
                        fill="#03523C"
                        fontFamily="Montserrat"
                        fontWeight="bold"
                      >
                        {dayName.replace("day", "")}
                      </text>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div> 

          <div className="mt-3 flex justify-center lg:mt-4 xl:mt-5">
            <div className=" grid grid-cols-2 gap-4 md:gap-5 lg:gap-8 min-w-[280px] md:min-w-[320px] lg:min-w-[450px] xl:min-w-[500px]">
              {currentEvents.map((event) => (
                <EventBox
                  key={event.id}
                  title={event.eventName}
                  description={event.alt}
                />
              ))}
            </div>
          </div>
          {allEventsForDay.length > eventsPerPage && (
            <div className=" mt-5 flex items-center space-x-5 justify-center">
              <button
                className={`cursor-pointer p-2 rounded-full transition-all ${
                  currentPage === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-[#FFD9A4] hover:bg-opacity-20"
                }`}
                onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={currentPage === 0 ? "#666" : "#03523C"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
              <span className="text-[#FFD9A4] px-4 py-2 text-sm font-semibold">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                className={`cursor-pointer p-2 rounded-full transition-all ${
                  currentPage >= totalPages - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-[#FFD9A4] hover:bg-opacity-20"
                }`}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
                }
                disabled={currentPage >= totalPages - 1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24" 
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={currentPage >= totalPages - 1 ? "#666" : "#03523C"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
