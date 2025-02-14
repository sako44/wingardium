import Container from "./Container";
import { HoverEffect } from "./ui/card-hover-effect";
import { features } from "@/data/features";

export default function Features() {
  return (
    <Container clas=" my-16 ">
      <div
        id="#ozellik"
        className="flex flex-col  space-y-6 lg:space-y-8 xl:space-y-12 "
      >
        <h3 className="text-center text-4xl uppercase md:text-5xl xl:text-6xl font-fontNunito  text-black  pb-8 border-b border-black">
          Uygulamanın özellİklerİ
        </h3>
        <div className=" max-w-6xl mx-auto  ">
          <HoverEffect className="font-fontRaleway" items={features} />
        </div>
      </div>
    </Container>
  );
}
