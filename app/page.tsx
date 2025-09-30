"use client";

import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import FunEvents from "@/components/Funevents/FunEvents";
import Sponsors from "@/components/Sponsor";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FunEvents/>
      <Events />
      <Highlights />
      <Sponsors />
    </div>
  );
}
