import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Landing />
      <Features />
      <Services />
      <Benefits />
    </div>
  );
}
