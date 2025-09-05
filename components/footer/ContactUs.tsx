import React from "react";
import Link from "next/link";
import { footerData } from "@/data/footer/footer";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { logo } from "@/data/footer/footer";

function ContactUs() {
  const { contact } = footerData;
  const { social, sectionsStyle: className } = footerData;

  return (
    <div className="w-full">
      <h1 className={cn(" text-center md:text-right", className[0].className)}>
        Contact Us
      </h1>
      <div className=" md:pl-4 flex flex-col items-center md:items-end ">
        {contact.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              "md:text-base lg:text-[18px] font-semibold capitalize leading-normal text-[#03523C] hover:underline"
            )}
          >
            {item.value}
          </a>
        ))}
        <div className=" mt-2 md:hidden flex gap-x-3 flex-row w-full max-w-sm justify-center items-center">
          {logo.map((item) => (
            <Image
              key={item.id}
              src={item.src}
              alt={item.alt}
              width={0}
              height={0}
              className={cn(" w-10 h-10 ", item.className)}
            />
          ))}
        </div>
        <div className=" flex flex-row items-center space-x-2">
           {social.map((item) => (
          <Link target="_blank" className="mt-3" key={item.id} href={item.href}>
            <Image
              src={item.src}
              alt={item.alt}
              width={30}
              height={30}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
