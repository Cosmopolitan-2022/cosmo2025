"use client";
import Image from "next/image";
import { music, dance, drama } from "@/data/gallery";

const sections = [
  { title: "Music", data: music },
  { title: "Dance", data: dance },
  { title: "Drama", data: drama },
];

export default function Gallery() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#1c3c2b] via-[#03523C] to-[#1c3c2b] py-12 px-2 sm:px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {sections.map((section) => (
          <div key={section.title} className="mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-[#FFD9A4] mb-8 text-center">{section.title}</h1>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {section.data.map((img: { src: string; alt: string }, idx: number) => (
                <div
                  key={idx}
                  className="bg-[#082B20] rounded-xl shadow-lg flex items-center justify-center aspect-square overflow-hidden"
                  style={{ width: "100%", maxWidth: 260, minWidth: 120 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={260}
                    height={260}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}