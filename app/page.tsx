import Events from "@/components/Events";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Footer from "@/components/footer/Footer";
import FunEvents from "@/components/Funevents/FunEvents";
export default function Home() {
  return (
    <div>
       
      <Hero />
      <FunEvents/>
      <Events />
      <Highlights/>
       
    </div>
  );
}
