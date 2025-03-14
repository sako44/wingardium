import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews.";
import StickyWhatsapp from "@/components/StickyWhatsapp";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <div>
      <Landing />
      <Benefits />
      <Reviews />
      <StickyWhatsapp />
    </div>
  );
}
