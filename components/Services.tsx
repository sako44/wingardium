import bildirim from "@/public/photos/bildirim.png";
import ilac from "@/public/photos/ilac.png";
import parsel from "@/public/photos/parsel.png";
import satin from "@/public/photos/satin.png";
import Container from "./Container";
import { Timeline } from "@/components/ui/timeline";
import Images from "./images";
import MotionDiv from "./MotionDiv";
import { useTranslations } from "next-intl";
import { animatedTimelineTwo } from "@/utils/motionObjects";

export default function Services() {
  const t = useTranslations("Services");
  const data = [
    {
      title: "1. Adım",
      content: (
        <MotionDiv
          {...animatedTimelineTwo}
          initial={{ ...animatedTimelineTwo.initial, x: 30 }}
          whileInView={{ ...animatedTimelineTwo.whileInView, x: 0 }}
        >
          <p className="text-neutral-800 pl-1 text-start dark:text-neutral-200 text-xl md:text-2xl font-normal mb-8">
            {t("titleOne")}
          </p>
          <Images
            url={parsel}
            addClass="w-[320px]  h-[250px] md:h-[170px] md:w-[330px] lg:w-[480px] lg:h-[250px] xl:w-[600px] xl:h-[250px] 2xl:w-[750px] 2xl:h-[300px] "
            clas=" object-contain object-center  "
          />
        </MotionDiv>
      ),
    },
    {
      title: "2. Adım",
      content: (
        <MotionDiv
          {...animatedTimelineTwo}
          initial={{ ...animatedTimelineTwo.initial, x: 30 }}
          whileInView={{ ...animatedTimelineTwo.whileInView, x: 0 }}
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-normal mb-8">
            {t("titleTwo")}
          </p>
          <Images
            url={ilac}
            addClass="w-full  h-[250px] md:h-[170px] md:w-[330px] lg:w-[480px] lg:h-[150px] xl:w-[600px] 2xl:w-[750px] 2xl:h-[300px] "
            clas=" object-contain object-center  "
          />
        </MotionDiv>
      ),
    },
    {
      title: "3. Adım",
      content: (
        <MotionDiv
          {...animatedTimelineTwo}
          initial={{ ...animatedTimelineTwo.initial, x: 30 }}
          whileInView={{ ...animatedTimelineTwo.whileInView, x: 0 }}
        >
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-normal mb-4">
            {t("titleThree")}
          </p>
          <Images
            url={satin}
            addClass=" w-full  h-[250px] md:h-[170px] md:w-[330px] lg:w-[480px] lg:h-[150px] xl:w-[600px]  2xl:w-[750px] 2xl:h-[300px] "
            clas=" object-contain object-center  "
          />
        </MotionDiv>
      ),
    },
    {
      title: "4. Adım",
      content: (
        <MotionDiv
          {...animatedTimelineTwo}
          initial={{ ...animatedTimelineTwo.initial, x: 30 }}
          whileInView={{ ...animatedTimelineTwo.whileInView, x: 0 }}
        >
          <p className="text-neutral-800  dark:text-neutral-200 text-xl md:text-2xl font-normal mb-4">
            {t("titleFour")}{" "}
          </p>
          <Images
            url={bildirim}
            addClass="w-[320px]  h-[250px] md:h-[170px] md:w-[330px] lg:w-[480px] lg:h-[150px] xl:w-[600px] xl:h-[200px] 2xl:w-[750px] 2xl:h-[300px] "
            clas=" object-contain object-center  "
          />
        </MotionDiv>
      ),
    },
  ];
  return (
    <div id="hizmet" className="w-full bg-secondary">
      <Container>
        <div id="#hizmet" className="w-full">
          <Timeline
            hero={t("hero")}
            description={t("description")}
            data={data}
          />
        </div>
      </Container>
    </div>
  );
}
