"use client";

import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import FunEvents from "@/components/Funevents/FunEvents";
import About from "@/components/About";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FunEvents/>
      <Events />
      <About/>
      <Highlights />
    </div>
  );
}
