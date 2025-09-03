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
        <div className=" md:hidden flex gap-x-5 flex-row w-full max-w-sm justify-center items-center">
          {logo.map((item) => (
            <Image
              key={item.id}
              src={item.src}
              alt={item.alt}
              width={0}
              height={0}
              className={cn(" w-16 h-16 mt-5", item.className)}
            />
          ))}
        </div>
        {social.map((item) => (
          <Link target="_blank" className="mt-5" key={item.id} href={item.href}>
            <Image
              src={item.src}
              alt={item.alt}
              width={100}
              height={100}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
