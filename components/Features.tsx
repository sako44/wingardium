import AnimatedHeader from "./AnimatedHeader";
import Container from "./Container";
import { HoverEffect } from "./ui/card-hover-effect";
import { features } from "@/data/allData";

export default function Features() {
  return (
    <Container clas=" my-16 overflow-x-hidden ">
      <div
        id="#ozellik"
        className="flex flex-col  space-y-6 lg:space-y-8 xl:space-y-12 "
      >
        <AnimatedHeader title="Uygulamanın özellİklerİ" />
        <div className=" max-w-6xl mx-auto  ">
          <HoverEffect className="font-fontRaleway" items={features} />
        </div>
      </div>
    </Container>
  );
}
