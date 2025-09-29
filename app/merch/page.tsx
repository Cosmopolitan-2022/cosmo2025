"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { backgroundDesign } from "@/data/merch";
import {centerDesign} from "@/data/merch"; 
import {groupDance} from "@/data/merch";
import {phone} from "@/data/highlights";
import { cosmo, button } from "@/data/merch"; 
import merch01Front from "@/public/merch2.jpeg";
import merch01Back from "@/public/merch1.jpeg";
import merch02Front from "@/public/merch4.jpeg";
import merch02Back from "@/public/merch3.jpeg";
const merchData = [
  {
    title: "Merch 01",
    description: "Obsidian Black",
    price: "Rs. 689",
    images: [merch01Front, merch01Back],
  },
  {
    title: "Merch 02",
    description: "Navy Blue",
    price: "Rs. 689",
    images: [merch02Front, merch02Back],
  },
];
function MerchCard({ title, description, price, images }: any) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Card className="relative flex flex-col lg:flex-row items-center justify-between rounded-2xl md:border md:border-[#FFD9A4]/30 bg-#FFFFFF0D md:backdrop-blur-[3px] overflow-hidden shadow-lg px-1 py-10 min-h-[450px]">
      <div className="w-80 h-80 md:w-100 md:h-100 rounded-[11px] md:rounded-xl flex items-center justify-center mb-8 md:mb-0 md:mr-16 flex-shrink-0 relative">
        <Image
          src={images[current]}
          alt={`${title} image`}
          width={320}
          height={320}
          className="object-contain rounded-xl"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_: any, idx: number) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${current === idx ? "bg-[#03523C]" : "bg-[#FFD9A4]"} border border-[#03523C]`}
              onClick={() => setCurrent(idx)}
              aria-label={`Show image ${idx + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
      <div className="flex-1 relative z-10  space-y-4 justify-center items-center flex flex-col md:items-start text-center md:text-left font-montserrat">
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white font-'Outfit'">{title}</h3>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFD9A4] font-'Outfit'">{description}</p>
        <p className="text-1xl md:text-3xl lg:text-3xl text-white font-'Montserrat'">Price : {price}</p>
        <Link href="https://forms.gle/4WLcFSbwfbkke1Hi6" target="_blank" rel="noopener noreferrer">
        <Button
          className="bg-[#FFD9A4] text-[#03523C] font-bold text-[19px] md:text-[28px] font-'Montserrat' rounded-md px-6 py-3 w-[120px] h-[55px] md:w-[200px] md:h-[62px] hover:bg-[#fce0b7] cursor-pointer transition duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${button})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#03523C",
            backgroundRepeat: "no-repeat",
          }}
        >
          BUY NOW
        </Button>
        </Link>
      </div>
    </Card>
  );
}
 

export default function Merch() {
  return (
    <div className="w-full min-h-[1650px] pt-10 pb-24 bg-[linear-gradient(90deg,#082B20_1.81%,#03523C_50.72%,#082B20_99.63%)] relative">
      <Image
        src={phone}
        alt="pattern"
        fill
        className="object-cover block md:hidden"
        priority
      />
      
      <div className="absolute left-0 bottom-[730px]  z-0 hidden md:block">
            <Image
              src={cosmo}
              alt="cosmo"
              width={400}
              height={150}
              className="object-cover opacity-70 w-36 sm:w-24 md:w-32 lg:w-60"
            />
        </div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] lg:w-[1000px] opacity-150 pointer-events-none select-none z-0 hidden md:block">
        <Image 
        src={centerDesign} 
        alt="centerImage" 
        width={2500}
        height={2500}
        className="opacity-100 scale-150 object-contain" />
      </div>

      <h2 className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-traditional font-bold text-[#FFD9A4] tracking-wide mt-0">
        MERCH
      </h2>

      <div className="relative max-w-7xl mx-auto px-4 md:px-12 mt-16">
        <MerchCard {...merchData[0]} />
      </div>

          <div className="absolute right-[150px] bottom-[900px] w-[280px] md:w-[350px] lg:w-[400px] pointer-events-none hidden xl:block">
            <Image 
            src={groupDance}
            alt="dancer" 
            width={1000}
            height={1000}
            className="object-cover scale-160 opacity-100" />
          </div>



          <div className="absolute left-0 bottom-0  z-0 hidden md:block">
            <Image
              src={cosmo}
              alt="cosmo"
              width={400}
              height={150}
              className="object-cover opacity-70 w-36 sm:w-24 md:w-32 lg:w-60"
            />
          </div>
          <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] lg:w-[1000px] opacity-150 hidden md:block pointer-events-none select-none z-0">
            <Image 
            src={centerDesign} 
            alt="centerImage" 
            width={2500}
            height={2500}
            className="opacity-100 scale-115 object-contain" />
        </div>
         <div className="relative max-w-7xl mx-auto px-6  mt-8 pt-0 md:px-12 md:pt-50 md:mt-16">
        <MerchCard {...merchData[1]} />
      </div>
      <div className="absolute right-[150px] bottom-[150px] w-[280px] md:w-[350px] lg:w-[400px] pointer-events-none hidden xl:block">
            <Image 
            src={groupDance}
            alt="dancer" 
            width={1000}
            height={1000}
            className="object-cover scale-160 opacity-100" />
          </div>    
    </div>
  );
}
