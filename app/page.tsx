import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import FunEvents from "@/components/Funevents/FunEvents";
export default function Home() {
  return (
    <div className="scroll-smooth">
       
      <Hero />
      <FunEvents/>
      <Events />
      <Highlights/>
       
    </div>
  );
}
