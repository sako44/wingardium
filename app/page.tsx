import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews.";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import StickyWhatsapp from "@/components/StickyWhatsapp";
import Footer from "@/components/Footer";
import LandingTwo from "@/components/LandingTwo";

export default function Home() {
  return (
    <div>
      <NavBar />
      <LandingTwo />
      <Features />
      <Services />
      <Benefits />
      <Reviews />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
      <StickyWhatsapp />
    </div>
  );
}
