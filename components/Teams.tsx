
"use client";
import React, { useState, useEffect } from "react";
import { backgroundImageUrl } from "@/data/events";
import { getTeamData } from "@/data/teams";
import { centerImageUrl } from "@/data/events";
import Image from "next/image";

export default function Teams() {
  const teamData = getTeamData();

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#1c3c2b] via-[#03523C] to-[#1c3c2b] text-white">
      <Image
        src={backgroundImageUrl}
        alt="Event background"
        fill
        className="object-cover"
      />
      
      <div
  className="relative min-h-screen text-white gap-y-50"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(28, 60, 43, 0.9), rgba(3, 82, 60, 0.9), rgba(28, 60, 43, 0.9)),
      url(${centerImageUrl})
    `,
    backgroundRepeat: "no-repeat, repeat-y", // gradient = no-repeat, mandala = repeat vertically
    backgroundPosition: "center, top",       // gradient = center, image = top
    backgroundSize: "cover, 1100px 1100px",   // gradient = cover, image = 400x400px
  }}
>
  {/* your content goes here */}



      <main className="relative z-10 flex flex-col items-center py-12 px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl font-traditional tracking-widest sm:text-4xl md:text-5xl xl:text-7xl text-[#FFD9A4] md:mb-30">
          TEAM
        </h1>

        <Section title={teamData.ourPatron.title} members={teamData.ourPatron.members} forcePerView={1} />

        <Section title={teamData.sacOfficials.title} members={teamData.sacOfficials.members} />

        <Section title={teamData.convener.title} members={teamData.convener.members} />

        <div className="w-full text-center mb-16">
          <h2 className="text-3xl font-traditional sm:text-4xl md:mt-20 md:text-5xl xl:text-7xl text-[#FFD9A4] md:mb-25">
            {teamData.coreTeam.title}
          </h2>
          {teamData.coreTeam.sections.map((sub, idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-xl sm:text-2xl md:text-5xl mb-10 mt-10 md:mb-20 md:mt-25 tracking-widest font-traditional text-[#FFD9A4]">
                {sub.subtitle}
              </h3>
              <Section title="" members={sub.members} />
            </div>
          ))}
        </div>
      </main>
    </div>
    </div>
  );
}

type MemberProps = {
  name: string;
  description: string;
  personImg: string;
  bgImg: string;
  propImg: string;
};

function Section({
  title,
  members,
  forcePerView,
}: {
  title: string;
  members: MemberProps[];
  forcePerView?: number;
}) {
  const [perView, setPerView] = useState(forcePerView || 2);
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = members.length;

  useEffect(() => {
    if (forcePerView) {
      setPerView(forcePerView);
      return;
    }
    const handleResize = () => {
      if (window.innerWidth < 1110) {
        setPerView(1); 
      } else if (window.innerWidth < 1280) {
        setPerView(2); 
      } else {
        setPerView(2); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [forcePerView]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(total - perView, 0) : prev - perView
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + perView >= total ? 0 : prev + perView
    );
  };

  return (
    <div className="w-full text-center mb-16">
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-5xl tracking-widest font-traditional mt-10 text-[#FFD9A4] mb-15">
          {title}
        </h2>
      )}

      <div className="relative flex items-center justify-center">
        {total > perView && (
          <button
            onClick={prevSlide}
            className="absolute left-2 z-20 text-[#FFD9A4] hover:text-white text-3xl sm:text-4xl md:text-5xl leading-none"
          >
            &lt;
          </button>
        )}

        <div className="flex gap-8 justify-center">
          {members
            .slice(currentIndex, currentIndex + perView)
            .map((m, idx) => (
              <MemberCard key={idx} {...m} />
            ))}
        </div>

        {total > perView && (
          <button
            onClick={nextSlide}
            className="absolute right-2 z-20 text-[#FFD9A4] hover:text-white text-3xl sm:text-4xl md:text-5xl leading-none"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}

function MemberCard({ name, description, personImg, bgImg }: MemberProps) {
  return (
    <div className="relative w-56 h-[300px] sm:w-100 sm:h-[408px] rounded-4xl overflow-hidden shadow-lg border-2 border-[#FFD9A4]">
      <div className="relative flex justify-center items-center h-auto bg-[linear-gradient(to_right,#082B20,#03523C,#082B20)]">
        <Image
          src={bgImg}
          alt="Mandala Background"
          width={200}
          height={200}
          className="absolute w-80 h-88 object-contain opacity-80"
        />
        <Image
          src={personImg}
          alt={name}
          width={300}
          height={200}
          className="relative object-cover mt-0"
        />
      </div>

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#FFD9A4] to-[#FFFFFF] text-center pt-3 pb-6">
        <h4 className="text-4xl font-montserrat font-semibold text-[#03523C]">
          {name}
        </h4>
        <p className="text-3xl font-montserrat font-normal text-[#03523C]">
          {description}
        </p>
      </div>
      
    </div>
  );
}
