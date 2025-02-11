import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews.";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Landing />
      <Features />
      <Services />
      <Benefits />
      <Reviews />
      <Pricing />
    </div>
  );
}
