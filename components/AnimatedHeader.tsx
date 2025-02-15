import MotionDiv, { MotionH2 } from "./MotionDiv";
import { animatedHeaderOne,animatedHeaderTwo } from "@/utils/motionObjects";

function AnimatedHeader({ title }: { title: string }) {
  return (
    <>
      <MotionH2
        {...animatedHeaderOne}
        className="text-center text-4xl uppercase md:text-5xl xl:text-6xl font-fontNunito -mb-3 mt-1 text-black"
      >
        {title}
      </MotionH2>
      <MotionDiv
        {...animatedHeaderTwo}
        className="bg-black h-[2px] w-full"
      ></MotionDiv>
    </>
  );
}

export default AnimatedHeader;
