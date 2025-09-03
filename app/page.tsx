import Events from "@/components/Events";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Events />
      <Highlights/>
    </div>
  );
}
