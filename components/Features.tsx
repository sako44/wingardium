"use client";
import AnimatedHeader from "./AnimatedHeader";
import Container from "./Container";
import Images from "./images";
import featuresBg from "@/public/photos/feat.png";
import featuresHasat from "@/public/photos/hasatfeat.png";
import featuresStok from "@/public/photos/stokfeat.png";
import featuresIlac from "@/public/photos/ilacfeat.png";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Features() {
  const t = useTranslations("Features");
  const [hovered, setHovered] = useState(0);
  //  const featuresData = [
  //   {
  //     id: 1,
  //     title: t("feature_1_title"),
  //     description: t("feature_1_description"),
  //   },
  //   {
  //     id: 2,
  //     title: t("feature_2_title"),
  //     description: t("feature_2_description"),
  //   },
  //   {
  //     id: 3,
  //     title: t("feature_3_title"),
  //     description: t("feature_3_description"),
  //   },
  //   {
  //     id: 4,
  //     title: t("feature_4_title"),
  //     description: t("feature_4_description"),
  //   },
  //   {
  //     id: 5,
  //     title: t("feature_5_title"),
  //     description: t("feature_5_description"),
  //   },
  //   {
  //     id: 6,
  //     title: t("feature_6_title"),
  //     description: t("feature_6_description"),
  //   },
  // ];

  const featuresData = [
    {
      id: 1,
      title: t("features_titleOne"),
      description: t("features_textOne"),
      icon: "ri-plant-line",
    },
    {
      id: 2,
      title: t("features_titleTwo"),
      description: t("features_textTwo"),
      icon: "ri-stack-line",
    },
    {
      id: 3,
      title: t("features_titleThree"),
      description: t("features_textThree"),
      icon: "ri-folder-chart-line",
    },
  ];
  const featuresImages = [
    {
      image: featuresBg,
    },
    {
      image: featuresHasat,
    },
    {
      image: featuresStok,
    },
    {
      image: featuresIlac,
    },
  ];
  return (
    <Container clas=" mt-16 lg:my-12 overflow-x-hidden ">
      <div className="flex  flex-col lg:items-center overflow-y-hidden space-y-6 lg:space-y-8  ">
        <AnimatedHeader title={t("title")} />
        <h3
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-fontNunito mx-auto
         font-medium text-center max-w-[80%] xs:max-w-[60%]  2xl:max-w-[40%] "
        >
          {t("hero")}
        </h3>
        <div className=" px-3 2xl:px-24  font-fontRaleway  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
          {featuresData.map((item) => (
            <div
              key={item.id}
              onClick={() => setHovered(item.id)}
              className="flex hover:cursor-pointer hover:bg-[#e5e7eb] transition duration-300
               ease-in-out circle flex-col max-md:items-center
                max-md:text-center space-y-3 border-x border-t py-5 px-[6%] sm:px-16 md:px-3 lg:px-4 xl:px-12"
            >
              <i className={` ${item.icon} " text-5xl text-primary " `}></i>
              <p className="text-md ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" mb-5 px-3 2xl:px-24 relative z-10 -mt-14 lg:-mt-16 overflow-hidden">
        <div className="relative py-12 rounded-3xl bg-primary z-[-1] w-full max-lg:h-[400px] mt-12 mx-auto ">
          <Images
            url={featuresImages[hovered].image}
            addClass=" mx-auto hover:scale-105 transition duration-300 ease-in-out rounded-3xl w-[90%] h-[550px] "
            clas=" rounded-3xl border-2  border-textColor max-lg:object-left object-cover "
          />
          <div className="absolute bottom-0 left-0 w-full h-24 lg:h-64 rounded-3xl bg-gradient-to-t from-white to-transparent"></div>{" "}
        </div>
      </div>
    </Container>
  );
}

{
  /* <div className=" max-w-6xl mx-auto  ">
          <HoverEffect className="font-fontRaleway" items={featuresData} />
        </div> */
}
