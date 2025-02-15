"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/button";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import { animatedLanding } from "@/utils/motionObjects";

function Landing() {
  const wordsOne = "Wingardium";
  const wordsTwo = "ile Tarımda Verimliliği Yükseltin!";
  return (
    <section className="relative w-full overflow-hidden h-[93vh] lg:h-[89vh]  3xl:h-[89vh] ">
      <div className=" inset-0 bg-black bg-opacity-30  w-full h-full flex items-center justify-center relative overflow-hidden ">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          className=" w-full h-full object-cover z-[-1]  "
        >
          <source src="/videos/farming2.mp4" />
          <source src="/videos/farming2.mp4" />
          <source src="/videos/farming2.mp4" />
          <source src="/videos/farming2.mp4" />
        </video>
        <div className="absolute z-10 flex flex-col space-y-8 font-fontNunito max-w-[90%]">
          <h1 className="text-center">
            <TextGenerateEffect
              words={wordsOne}
              duration={1.7}
              className=" text-5xl md:text-6xl  lg:text-7xl 2xl:text-7xl  font-bold inline-block  text-primary "
            />
            <TextGenerateEffect
              words={wordsTwo}
              duration={2}
              className="text-white text-xl md:text-2xl lg:text-3xl inline-block font-semibold  text-center max-lg:leading-10 "
            />
          </h1>
          <MotionDiv
            {...animatedLanding}
            className="items-center flex flex-col space-y-5"
          >
            <MotionH2 className="text-textColor text-lg md:text-xl lg:text-2xl  ml-1 text-center">
              Tarladan hasada, tüm süreçler bir arada.
            </MotionH2>
            <Button
              className="animate-shimmer rounded-full py-6 px-8 text-[18px] hover:text-gray-200 
             bg-[linear-gradient(110deg,#567d46,45%,#6b8f5a,55%,#567d46)]
             bg-[length:200%_100%]  text-white w-max "
            >
              Hemen Dene
            </Button>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}

export default Landing;
