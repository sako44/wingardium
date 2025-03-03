import AnimatedHeader from "./AnimatedHeader";
import Container from "./Container";
import { HoverEffect } from "./ui/card-hover-effect";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("Features");
   const featuresData = [
    {
      id: 1,
      title: t("feature_1_title"),
      description: t("feature_1_description"),
    },
    {
      id: 2,
      title: t("feature_2_title"),
      description: t("feature_2_description"),
    },
    {
      id: 3,
      title: t("feature_3_title"),
      description: t("feature_3_description"),
    },
    {
      id: 4,
      title: t("feature_4_title"),
      description: t("feature_4_description"),
    },
    {
      id: 5,
      title: t("feature_5_title"),
      description: t("feature_5_description"),
    },
    {
      id: 6,
      title: t("feature_6_title"),
      description: t("feature_6_description"),
    },
  ];
  return (
    <Container clas=" my-16 overflow-x-hidden ">
      <div
        id="ozellik"
        className="flex flex-col  space-y-6 lg:space-y-8 xl:space-y-12 "
      >
        <AnimatedHeader title={t("title")} />
        <div className=" max-w-6xl mx-auto  ">
          <HoverEffect className="font-fontRaleway" items={featuresData} />
        </div>
      </div>
    </Container>
  );
}
