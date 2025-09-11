"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { backgroundDesign } from "@/data/merch";
import {centerDesign} from "@/data/merch"; 
import {groupDance} from "@/data/merch";
import {phone} from "@/data/highlights";
import { cosmo, button } from "@/data/merch";

export default function Merch() {
  return (
    <div className="w-full min-h-[1650px] pt-10 pb-24 bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] relative">
      <Image
        src={phone}
        alt="pattern"
        fill
        className="object-cover block md:hidden"
        priority
      />
      <Image
        src={backgroundDesign}
        alt="pattern"
        fill
        className="object-cover hidden md:block"
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

      <h2 className="relative z-10 text-center text-4xl mb-12 sm:mb-16 md:mb-20 lg:mb-24 md:text-6xl font-traditional font-bold text-[#FFD9A4] tracking-wide mt-0">
        MERCH
      </h2>

      <div className="relative max-w-7xl mx-auto px-4 md:px-12 mt-16">
        <Card className="relative flex flex-col md:flex-row items-center justify-between rounded-2xl md:border md:border-[#FFD9A4]/30 bg-#FFFFFF0D md:backdrop-blur-[3px] overflow-hidden shadow-lg px-8 py-10 min-h-[450px] ">
          <div className="w-80 h-80 md:w-100 md:h-100 bg-[#FFD9A4CC] rounded-[11px] md:rounded-xl flex items-center justify-center mb-8 md:mb-0 md:mr-16 flex-shrink-0">
            <span className="text-[#03523C] font-semibold"></span>
          </div>
          <div className="flex-1 relative z-10 text-left space-y-4 font-montserrat">
            <h3 className="text-6xl font-bold text-white font-'Outfit'">Merch 01</h3>
            <p className="text-4xl font-semibold text-[#FFD9A4] font-'Outfit'">Description</p>
            <p className="text-2xl text-white font-'Montserrat'">Price : Rs xyz</p>
            <Button className="bg-[#FFD9A4] text-[#03523C] font-bold text-[28px] font-'Montserrat' rounded-md px-6 py-3 w-[200px] h-[62px] hover:bg-[#fce0b7] cursor-pointer transition duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${button})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#03523C",
              backgroundRepeat: "no-repeat",
            }}>
              BUY NOW
            </Button>
          </div>
        </Card>
      </div>

          <div className="absolute right-[150px] bottom-[900px] w-[280px] md:w-[350px] lg:w-[400px] pointer-events-none hidden md:block">
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
        <Card className="relative flex flex-col md:flex-row items-center justify-between rounded-2xl md:border md:border-[#FFD9A4]/30 bg-#FFFFFF0D backdrop-blur-[3px] overflow-hidden shadow-lg px-8 py-10 min-h-[450px]">
          <div className="w-80 h-80 md:w-100 md:h-100 bg-[#FFD9A4CC] rounded-[11px] md:rounded-xl flex items-center justify-center mb-8 md:mb-0 md:mr-16 flex-shrink-0">
            <span className="text-[#03523C] font-semibold"></span>
          </div>
          <div className="flex-1 relative z-10 text-left space-y-4">
            <h3 className="text-6xl font-bold text-white font-'Outfit'">Merch 02</h3>
            <p className="text-4xl font-semibold text-[#FFD9A4] font-'Outfit'">Description</p>
            <p className="text-2xl text-white font-'Montserrat'">Price : Rs yz</p>
            <Button className="bg-[#FFD9A4] text-[#03523C] font-bold text-[28px] font-'Montserrat' rounded-md px-6 py-3 w-[200px] h-[62px] hover:bg-[#fce0b7] cursor-pointer transition duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${button})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#03523C",
              backgroundRepeat: "no-repeat",
            }}>
              BUY NOW
            </Button>
          </div>
        </Card>
      </div>
      <div className="absolute right-[150px] bottom-[150px] w-[280px] md:w-[350px] lg:w-[400px] pointer-events-none hidden md:block">
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
