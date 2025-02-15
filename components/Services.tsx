import Container from "./Container";
import { Timeline } from "@/components/ui/timeline";
import { services } from "@/data/allData";

export default function Services() {
  return (
    <div id="#hizmet" className="w-full bg-secondary">
      <Container clas=" overflow-hidden ">
        <div id="#hizmet" className="w-full">
          <Timeline data={services} />
        </div>
      </Container>
    </div>
  );
}
