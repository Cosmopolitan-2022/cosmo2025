import React from "react";
import { cn } from "@/app/lib/utils";
import { footerData } from "@/data/footer/footer";

function Address() {
  const { venue } = footerData;
  const { sectionsStyle: className } = footerData;
  return (
    <div className="w-full">
      <h1 className={cn(" text-center", className[0].className)}> VENUE</h1>
      <div className=" px-4 flex flex-col">
        {venue.map((item) => (
          <div
            key={item.id}
            className={cn(
              "md:text-base lg:text-[18px] text-center font-semibold capitalize  leading-normal text-[#03523C] font-montserrat"
            )}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Address;
