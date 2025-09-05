

// import React from "react";
// import { centerImageUrl } from "@/data/events";
// import { backgroundImageUrl } from "@/data/events";
// import { getTeamData } from "@/data/teams";
// import Image from "next/image";

// export default function Teams() {
//   const teamData = getTeamData();

//   return (
//     <div className="relative min-h-screen bg-gradient-to-r from-[#1c3c2b] via-[#03523C] to-[#1c3c2b] text-white">
//       <Image
//         src={backgroundImageUrl}
//         alt="Event background"
//         fill
//         className="object-cover"
//       />

//       <main className="relative z-10 flex flex-col items-center py-12 px-4 sm:px-8 lg:px-16">
//         <h1 className="text-3xl font-traditional tracking-widest sm:text-4xl md:text-5xl xl:text-7xl text-[#FFD9A4] mb-30">TEAM</h1>

//         <Section title={teamData.ourPatron.title} members={teamData.ourPatron.members} />

//         <Section title={teamData.sacOfficials.title} members={teamData.sacOfficials.members} />

//         <Section title={teamData.convener.title} members={teamData.convener.members} />

//         <div className="w-full text-center mb-16">
//           <h2 className="text-3xl font-traditional sm:text-4xl mt-20 md:text-5xl xl:text-7xl text-[#FFD9A4] mb-20">{teamData.coreTeam.title}</h2>
//           {teamData.coreTeam.sections.map((sub, idx) => (
//             <div key={idx} className="mb-12">
//               <h3 className="text-xl sm:text-2xl md:text-5xl mb-20 mt-40 tracking-widest font-traditional text-[#FFD9A4]">{sub.subtitle}</h3>
//               <div className="flex flex-wrap justify-center gap-20">
//                 {sub.members.map((m, i) => (
//                   <MemberCard key={i} {...m} />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// type MemberProps = {
//   name: string;
//   description: string;
//   personImg: string;
//   bgImg: string;
//   propImg: string;
// };

// function Section({ title, members }: { title: string; members: MemberProps[] }) {
//   return (
//     <div className="w-full text-center mb-16">
//       <h2 className="text-2xl sm:text-3xl md:text-5xl tracking-widest font-traditional mt-20 text-[#FFD9A4] mb-18">{title}</h2>
//       <div className="flex flex-wrap justify-center gap-20">
//         {members.map((m, idx) => (
//           <MemberCard key={idx} {...m} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function MemberCard({ name, description, personImg, bgImg, propImg }: MemberProps) {
//   return (

//     <div className="relative w-100 h-[408px] rounded-4xl overflow-hidden shadow-lg border-2 border-[#FFD9A4]">
//   <div className="relative flex  justify-center items-center h-auto bg-[linear-gradient(to_right,#082B20,#03523C,#082B20)]">
//     <Image
//       src={bgImg}
//       alt="Mandala Background"
//       width={200}   
//       height={200}
//       className="justify-center z-0 absolute w-80 h-88 object-contain opacity-80 "
//     />

//     <Image
//       src={personImg}
//       alt={name}
//       width={300}
//       height={200}
//       className="relative z-0 object-cover mt-0"
//     />
//   </div>

//   <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#FFD9A4] to-[#FFFFFF] text-center pt-3 pb-6">
//     <h4 className="text-4xl text-montserrat font-semibold text-[#03523C]">{name}</h4>
//     <p className="text-3xl text-montserrat font-normal text-[#03523C]">{description}</p>
//   </div>
// </div>
    
//   );
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { backgroundImageUrl } from "@/data/events";
import { getTeamData } from "@/data/teams";

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

      <main className="relative z-10 flex flex-col items-center py-12 px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl font-traditional tracking-widest sm:text-4xl md:text-5xl xl:text-7xl text-[#FFD9A4] md:mb-30">
          TEAM
        </h1>

        <Section title={teamData.ourPatron.title} members={teamData.ourPatron.members} perView={1} />

        <Section title={teamData.sacOfficials.title} members={teamData.sacOfficials.members} perView={2} />

        <Section title={teamData.convener.title} members={teamData.convener.members} perView={2} />

        <div className="w-full text-center mb-16">
          <h2 className="text-3xl font-traditional sm:text-4xl md:mt-20 md:text-5xl xl:text-7xl text-[#FFD9A4] md:mb-25">
            {teamData.coreTeam.title}
          </h2>
          {teamData.coreTeam.sections.map((sub, idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-xl sm:text-2xl md:text-5xl md:mb-20 md:mt-25 tracking-widest font-traditional text-[#FFD9A4]">
                {sub.subtitle}
              </h3>
              <Section title="" members={sub.members} perView={2} />
            </div>
          ))}
        </div>
      </main>
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
  perView = 2, 
}: {
  title: string;
  members: MemberProps[];
  perView?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = members.length;

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
            className="absolute left-0 z-20 p-3 rounded-full  bg-[#FFD9A4]/70 hover:bg-[#FFD9A4] text-[#03523C] shadow-lg"
          >
            <ChevronLeft size={30} />
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
            className="absolute right-0 z-20 p-3 rounded-full bg-[#FFD9A4]/70 hover:bg-[#FFD9A4] text-[#03523C] shadow-lg"
          >
            <ChevronRight size={30} />
          </button>
        )}
      </div>
    </div>
  );
}

function MemberCard({ name, description, personImg, bgImg, propImg }: MemberProps) {
  return (

    <div className="relative w-100 h-[408px] rounded-4xl overflow-hidden shadow-lg border-2 border-[#FFD9A4]">
  <div className="relative flex  justify-center items-center h-auto bg-[linear-gradient(to_right,#082B20,#03523C,#082B20)]">
    <Image
      src={bgImg}
      alt="Mandala Background"
      width={200}   
      height={200}
      className="justify-center z-0 absolute w-80 h-88 object-contain opacity-80 "
    />

    <Image
      src={personImg}
      alt={name}
      width={300}
      height={200}
      className="relative z-0 object-cover mt-0"
    />
  </div>

  <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#FFD9A4] to-[#FFFFFF] text-center pt-3 pb-6">
    <h4 className="text-4xl text-montserrat font-semibold text-[#03523C]">{name}</h4>
    <p className="text-3xl text-montserrat font-normal text-[#03523C]">{description}</p>
  </div>
</div>
    
  );
}
