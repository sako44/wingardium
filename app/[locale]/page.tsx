import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews.";
import StickyWhatsapp from "@/components/StickyWhatsapp";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <div>
      <Landing />
      <Benefits />
      <Reviews />
      <Faq />
      <StickyWhatsapp />
    </div>
  );
}
