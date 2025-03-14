import bildirim from "@/public/photos/bildirim.png";
import ilac from "@/public/photos/ilac.png";
import ilacworkone from "@/public/photos/ilacworkone.png";
import satin from "@/public/photos/satin.png";
import Container from "./Container";
import { Timeline } from "@/components/ui/timeline";
import Images from "./images";
import MotionDiv from "./MotionDiv";
import { useTranslations } from "next-intl";
import { animatedTimelineTwo } from "@/utils/motionObjects";

export default function Services() {
  const t = useTranslations("Services");
  // const features = [
  //     {
  //       title: "Parsel ve ürün tanımlama.",
  //       description:
  //         "Parsel ve ürün tanımlama, ürünlerinizi ve parsellerinizi tanımlayarak, ürünlerinizi ve parsellerinizi takip edebilirsiniz.",
  //       skeleton: <SkeletonOne />,
  //       className:
  //         "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
  //     },
  //     {
  //       title: "İlaçlama ve gübreleme planlarını yapma.",
  //       description:
  //         "İlaçlama ve gübreleme planlarını yaparak, ürünlerinizi daha verimli bir şekilde yetiştirebilirsiniz.",
  //       skeleton: <SkeletonTwo />,
  //       className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
  //     },
  //     {
  //       title: "Hasat ve satın alma süreçlerini takip etme.",
  //       description:
  //         "Hasat ve satın alma süreçlerini takip ederek, ürünlerinizi daha verimli bir şekilde satın alabilirsiniz.",
  //       skeleton: <SkeletonThree />,
  //       className:
  //         "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
  //     },
  //     {
  //       title: "Anlık bildirimlerle yönetim.",
  //       description:
  //         "Anlık bildirimlerle yönetim, anlık bildirimlerle yönetim, anlık bildirimlerle yönetim, anlık bildirimlerle yönetim.",
  //       skeleton: <SkeletonFour />,
  //       className: "col-span-1 lg:col-span-3 border-b lg:border-none",
  //     },
  //   ];
  const data = [
    {
      title: "1. Adım",
      content: (
        <MotionDiv
          {...animatedTimelineTwo}
          initial={{ ...animatedTimelineTwo.initial, x: 30 }}
          whileInView={{ ...animatedTimelineTwo.whileInView, x: 0 }}
          className=" w-[50%]"
        >
          <p
            className="text-neutral-800 pl-1 text-start  dark:text-neutral-200
           text-xl md:text-lg font-normal  mb-8"
          >
            <span className="font-bold text-xl">Bu Sayfayı</span>{" "}
            görüntüleyebilmek için önce giriş yapıp bilgilerinizi doldurmanız
            gerekmektedir. Bu sayfada, parsel bilgisi, ilaç, gübre, ilaçlama,
            gübreleme, stoğu azalan ilaçlar, stoğu azalan gübreler, en çok
            kullanılan ilaçlar ve en çok kullanılan gübreler bilgileri özet
            olarak bulunmaktadır.
          </p>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="p-2 rounded-xl border-2 border-dashed border-white bg-[#737373]">
              <Images
                url={bildirim}
                clas=" object-cover object-center  "
                addClass=" rounded-lg object-cover h-20 md:h-44  lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
              />
            </div>
            <div className="p-2 rounded-xl border-2 border-dashed border-white bg-[#737373]">
              <Images
                url={ilacworkone}
                clas=" object-cover object-center  "
                addClass=" rounded-lg object-cover h-20 md:h-44  lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
              />
            </div>
          </div>
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
    <div id="hizmet" className="w-full bg-bgColor">
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
