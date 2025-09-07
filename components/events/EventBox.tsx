import React from "react";

export default function EventBox({
  title,

  className = "",
}: {
  title: string;

  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-lg p-4 md:p-6 h-32 md:h-36 lg:h-48 xl:h-52 shadow-lg ${className}`}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#03523C] text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}
