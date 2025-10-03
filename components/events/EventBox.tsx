import React from "react";

interface EventBoxProps {
  title: string;
  description?: string; // alt / extended text
  className?: string;
}

export default function EventBox({
  title,
  description,
  className = "",
}: EventBoxProps) {
  return (
    <div
      className={`group relative bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 h-32 md:h-36 lg:h-48 xl:h-52 shadow-lg border border-[#FFD9A4]/60 transition-colors duration-300 overflow-visible ${className}`}
    >
      {/* Base content */}
      <div className="h-full flex flex-col justify-center items-center transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#03523C] text-center font-montserrat px-2">
          {title}
        </h3>
      </div>

      {/* Hover overlay */}
      {description && (
        <div className="pointer-events-none absolute left-1/2 top-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-20">
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,217,164,0.22),transparent_65%),linear-gradient(150deg,#082B20_0%,#03523C_55%,#082B20_100%)] border border-[#FFD9A4]/50 shadow-[0_8px_25px_-6px_rgba(3,82,60,0.55),0_0_40px_-8px_rgba(255,217,164,0.55)]" />
          <div className="relative px-4 md:px-5 text-center max-h-full overflow-y-auto hide-scrollbar flex items-center">
            <p className="text-[0.62rem] xs:text-[0.7rem] sm:text-xs md:text-sm leading-snug font-montserrat text-[#FFD9A4] font-medium drop-shadow-[0_0_4px_rgba(0,0,0,0.4)]">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
