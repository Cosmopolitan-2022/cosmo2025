import React from 'react'
import Image from 'next/image'
import { backgroundElements } from '@/data/funevents/funevents'


function Background() {
  const { background , centerDecoration, lamp , lightEffect1 ,lightEffect2 }= backgroundElements
  return (
    
    <div className="relative overflow-hidden w-full h-[1000px]"> 
      <Image
        src={background.src}
        alt={background.alt}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Image
          src={centerDecoration.src}
          alt={centerDecoration.alt}
          width={centerDecoration.width}
          height={centerDecoration.height}
          className="object-contain w-full max-w-3xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl h-[750px] lg:h-[950px] opacity-40"
        />
      </div>

      <div className="absolute bottom-0 -left-6 lg:-left-20">
        <Image
          src={lamp.src}
          alt={lamp.alt}
          width={lamp.width}
          height={lamp.height}
          className="w-[150px] h-[250px] lg:w-[300px] lg:h-[420px] xl:w-[350px] xl:h-[480px]"
        />
      </div>

      <div className="absolute top-50 left-28">
        <Image
          src={lightEffect1.src}
          alt={lightEffect1.alt}
          width={lightEffect1.width}
          height={lightEffect1.height}
          className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] blur-[80px] rounded-full"
        />
      </div>
      <div className="absolute top-50 right-0">
        <Image
          src={lightEffect2.src}
          alt={lightEffect2.alt}
          width={lightEffect2.width}
          height={lightEffect2.height}
          className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] blur-[80px] rounded-full"
        />
      </div>
    </div>
  );
}



export default Background
