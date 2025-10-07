import React from "react";

export default function EventBox({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  const isEventsList = className.includes("events-list");

  return (
    <div
      className={`bg-[#FFD9A4] rounded-lg transition-all duration-200 hover:scale-[1.02] ${
        isEventsList
          ? "p-3 md:p-4 lg:p-4 h-12 md:h-14 lg:h-16 w-full"
          : "p-4 md:p-6 h-32 md:h-36 lg:h-48 xl:h-52"
      } ${className}`}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <h3
          className={`font-bold text-[#03523C] text-center font-montserrat ${
            isEventsList
              ? "text-sm md:text-base lg:text-lg"
              : "text-sm md:text-base lg:text-lg"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
