"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
// import Images from "../images";
// import { StaticImageData } from "next/image";
import MotionDiv from "../MotionDiv";
import { animatedTimeline, animatedTimelineTwo } from "@/utils/motionObjects";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className=" w-full dark:bg-neutral-950 font-sans md:px-3 2xl:px-5 overflow-hidden "
      ref={containerRef}
    >
      <MotionDiv
        {...animatedTimeline}
        className=" mx-auto py-20 font-fontNunito px-4 md:px-8 lg:px-16 max-lg:text-center"
      >
        <h2 className="text-4xl sm:text-4xl md:text-5xl mb-4 text-black dark:text-white font-semibold max-w-4xl">
          Nasıl Çalışır?
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl lg:max-w-[70%] 3xl:max-w-[50%] ">
          İlaçlama, gübreleme, stok yönetimi, gider takibi ve diğer tarımsal
          operasyonların izlenmesi gibi kritik işlevleri entegre bir yapıda
          sunar.
        </p>
      </MotionDiv>
      <div
        ref={ref}
        className="relative font-fontNunito max-w-full mx-auto pb-20 "
      >
        {data.map((item, index) => (
          <div
            key={index}
            className=" flex justify-center items-center pt-10 md:pt-40 md:justify-between  "
          >
            <MotionDiv
              {...animatedTimelineTwo}
              className="sticky max-md:ml-12 flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full"
            >
              <div className="h-10 absolute hidden md:flex md:left-3 w-10 rounded-full bg-white dark:bg-black  items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 border-neutral-300 dark:border-neutral-700 p-2 dark:border-neutral-800" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 -mt-3 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </MotionDiv>
            {item.content}{" "}
          </div>
        ))}
        <MotionDiv
          {...animatedTimelineTwo}
          style={{
            height: height + "px",
          }}
          className="absolute md:left-[30px] left-8 top-0 overflow-hidden w-[4px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[4px] bg-gradient-to-t from-primary via-primary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </MotionDiv>
      </div>
    </div>
  );
};
