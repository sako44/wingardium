import BenefitsItem from "./BenefitsItem";
import Container from "./Container";
import { Button } from "./ui/button";
import zaman from "@/public/photos/zaman.svg";
import maliyet from "@/public/photos/maliyet.svg";
import verim from "@/public/photos/verimlilik.svg";
import hata from "@/public/photos/hata.svg";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import { useTranslations } from "next-intl";
import { animatedBenfitOne } from "@/utils/motionObjects";

function Benefits() {
  const t = useTranslations("Benefits");

  const benefits = [
    {
      id: 1,
      title: t("benefit1_title"),
      description: t("benefit1_description"),
      icon: zaman,
    },
    {
      id: 2,
      title: t("benefit2_title"),
      description: t("benefit2_description"),
      icon: maliyet,
    },
    {
      id: 3,
      title: t("benefit3_title"),
      description: t("benefit3_description"),
      icon: verim,
    },
    {
      id: 4,
      title: t("benefit4_title"),
      description: t("benefit4_description"),
      icon: hata,
    },
  ];
  return (
    <section className="md:px-3 2xl:px-16 3xl:px-32  my-32 ">
      <Container clas=" flex flex-col max-lg:space-y-16 lg:flex-row justify-center items-center overflow-hidden ">
        <div className="flex flex-col max-lg:items-center font-fontRaleway max-lg:text-center space-y-16 lg:max-xl:max-w-[45%]">
          <MotionH2
            {...animatedBenfitOne}
            className=" text-5xl md:text-6xl lg:text-7xl/[90px]
           font-fontNunito font-semibold text-primary max-w-[70%] 2xl:max-w-[48%] tracking-[5px]"
          >
            {t("title")}
          </MotionH2>
          <MotionH2
            {...animatedBenfitOne}
            transition={{ ...animatedBenfitOne.transition, delay: 1 }}
            className="text-xl md:text-2xl/[45px] font-normal  sm:max-w-[70%] lg:max-w-[80%] 2xl:max-w-[70%] "
          >
            {t("hero")}
          </MotionH2>
          <MotionDiv
            {...animatedBenfitOne}
            transition={{ ...animatedBenfitOne.transition, delay: 1.5 }}
          >
            <Button
              className="animate-shimmer rounded-full py-6 px-8 text-[18px] hover:text-gray-200 
             bg-[linear-gradient(110deg,#567d46,45%,#6b8f5a,55%,#567d46)]
             bg-[length:200%_100%]  text-white w-max"
            >
              {t("button")}
            </Button>
          </MotionDiv>
        </div>
        <div className="flex flex-col md:flex-row max-xl:space-y-5 py-3 md:space-x-5 lg:grow lg:max-2xl:w-full 2xl:max-3xl:w-[80%]">
          <MotionDiv {...animatedBenfitOne} className="flex flex-col gap-y-5">
            {benefits.map((item, index) =>
              index === 0 || index == 2 ? (
                <BenefitsItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ) : null
            )}
          </MotionDiv>
          <MotionDiv
            {...animatedBenfitOne}
            initial={{ ...animatedBenfitOne.initial, x: 30 }}
            whileInView={{ ...animatedBenfitOne.whileInView, x: 0 }}
            className="flex flex-col gap-y-5"
          >
            {benefits.map((item, index) =>
              index === 1 || index == 3 ? (
                <BenefitsItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ) : null
            )}
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}

export default Benefits;
