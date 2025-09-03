import Events from "@/components/Events";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { backgroundImageUrl } from "@/data/events";
import Image
 from "next/image";
export default function Home() {
  return (
    <div>
          <Navbar />
      <Hero />
      <Events />
    </div>
  );
}
