import Events from "@/components/Events";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Events />
      <Highlights/>
      <Footer/>
    </div>
  );
}
