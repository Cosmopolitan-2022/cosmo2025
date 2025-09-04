import React from "react";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
function FunEvents() {
  return (
    <div className="relative my-40 h-[800px] lg:h-[1024px]  bg-[linear-gradient(to_right,#1c3c2b,#03523C,#1c3c2b)] ">
      <Image
        src={
          "https://res.cloudinary.com/dsjxx976j/image/upload/v1756720468/Frame_9590_vttipu.png"
        }
        alt="background image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center z-0">
              <Image
                src={"https://res.cloudinary.com/du5qoczcn/image/upload/v1756998522/Pngtree_ethnic_luxury_mandala_golden_art_8786185_1_lql4sb.svg"}
                alt="Center decoration"
                width={0}
                height={0}
                className="object-contain w-full max-w-3xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl  h-[750px] lg:h-[950px] opacity-40  hidden md:inline-block  "
              />
            </div>
      <div className=" absolute bottom-0 -left-6 lg:-left-16 ">
        <Image src={"https://res.cloudinary.com/du5qoczcn/image/upload/v1757017414/Group_1000001423_zspjgn.svg"}
        alt="lamp"
        width={0}
        height={0}
        className="  w-[150px] h-[250px] lg:w-[300px] lg:h-[420px] xl:w-[350px] xl:h-[480px]  "/>
      </div>

      <div className=" absolute top-50 left-28 ">
        <Image
        src={"https://res.cloudinary.com/du5qoczcn/image/upload/v1757018474/Ellipse_65_zncbuk.svg"}
        alt="light"
        width={0}
        height={0}
        className=" w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] blur-[80px] rounded-full     "/>
      </div>
      <div className=" absolute top-50 -right-40">
        <Image
        src={"https://res.cloudinary.com/du5qoczcn/image/upload/v1757018474/Ellipse_65_zncbuk.svg"}
        alt="light"
        width={0}
        height={0}
        className=" w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] blur-[80px] rounded-full     "/>
      </div>
       <div>
        <h1 className=" font-">FUN EVENTS </h1>
       </div>
        
     
      
       
      

      
       
    </div>
  );
}

export default FunEvents;
