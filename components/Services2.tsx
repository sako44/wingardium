import AnimatedHeader from "./AnimatedHeader";
import Container from "./Container";
import Images from "./images";
import testone from "@/public/photos/testone.png";
import testtwo from "@/public/photos/testtwo.png";
import testthree from "@/public/photos/testthree.png";
import hasatwork from "@/public/photos/hasatwork.png";
import leftupone from "@/public/photos/leftupone.png";
import leftuptwo from "@/public/photos/leftuptwo.png";
import rightupone from "@/public/photos/rightupone.png";
import rightuptwo from "@/public/photos/rightuptwo.png";
import rightupthree from "@/public/photos/rightupthree.png";
import { useTranslations } from "next-intl";

function Services2() {
  const t = useTranslations("Services");
  return (
    <section className=" mt-16 lg:mt-12">
      <Container clas=" flex flex-col space-y-10 mb-12 ">
        <AnimatedHeader title={t("hero")} />
        <h3 className=" text-3xl md:text-4xl lg:text-5xl text-center mx-auto lg:max-w-[70%] font-fontRaleway font-medium">
          {t("description")}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-7 font-fontRaleway gap-5 xs:px-10 sm:px-20 md:px-[15%] lg:px-2 2xl:px-0 3xl:px-28">
          <div className="flex items-center justify-center 2xl:col-span-3 xl:col-span-2 bg-bgColor shadow-xl rounded-xl py-2 ">
            <div className=" flex flex-col items-center justify-center space-y-7 ">
              <Images
                url={leftupone}
                addClass="   translate-y-[10%] -rotate-6  w-[220px] h-[220px] "
                clas=" object-cover rounded-xl object-top "
              />
              <Images
                url={leftuptwo}
                addClass=" translate-x-[10%] translate-y-[-30%]   z-10  rotate-3 w-[240px] h-[220px] "
                clas=" object-cover rounded-xl object-center "
              />
              <div className="flex flex-col space-y-5 text-center pb-10 px-3">
                <h3 className="text-2xl text-primary font-medium">
                  {" "}
                  {t("stepOne_title")}{" "}
                </h3>
                <p className="text-black text-md  mx-auto xl:px-6">
                  {t("stepOne_text")}
                </p>
              </div>
            </div>
          </div>
          <div
            className=" 2xl:col-span-4 xl:col-span-3 overflow-hidden flex flex-col items-center
           justify-center space-y-7 lg:space-y-[143px] xl:space-y-[73px] 3xl:xl:space-y-[120px] bg-bgColor shadow-xl rounded-xl   3xl:pb-12 "
          >
            <div className="flex justify-between items-center w-full pt-12 ">
              <Images
                url={rightupthree}
                clas=" object-cover "
                addClass=" w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] xl:h-[200px] xl:w-[200px] rounded-xl -ml-24 xl:-ml-10"
              />
              <Images
                url={rightuptwo}
                clas=" object-cover "
                addClass=" w-[170px] h-[150px] lg:w-[200px] lg:h-[200px] xl:h-[250px] z-[10] xl:w-[250px] scale-125 rounded-xl "
              />
              <Images
                url={rightupone}
                clas=" object-cover "
                addClass=" w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] xl:h-[200px] xl:w-[200px] rounded-xl -mr-24 xl:-mr-12 "
              />
            </div>
            <div className="flex flex-col space-y-5 text-center pt-16 ">
              <h3 className="text-2xl text-primary font-medium">
                {" "}
                {t("stepTwo_title")}{" "}
              </h3>
              <p className="text-black text-md  mx-auto px-3 lg:max-w-[95%] xl:px-12">
                {t("stepTwo_text")}
              </p>
            </div>
          </div>
          <div
            className=" 2xl:col-span-5 xl:col-span-3  overflow-hidden flex flex-col
           2xl:flex-row -space-y-16 xl:max-2xl:-space-y-28  bg-bgColor shadow-xl rounded-xl py-2"
          >
            <div className="flex flex-col space-y-7 max-2xl:justify-between max-2xl:p-7 2xl:py-12 2xl:pl-7 2xl:space-y-28">
              <i className="ri-arrow-right-double-line text-6xl w-fit text-primary bg-white rounded-xl shadow-xl"></i>
              <div className="flex flex-col items-start space-y-5 text-start  ">
                <h3 className="text-2xl text-primary font-medium">
                  {t("stepThree_title")}{" "}
                </h3>
                <p className="text-black text-md  ">{t("stepThree_text")}</p>
              </div>
            </div>
            <div className="relative ">
              <Images
                url={hasatwork}
                clas=" object-cover object-left "
                addClass=" absolute 2xl:top-52 top-28 left-10 w-[650px] h-[500px] rounded-xl "
              />
            </div>
          </div>
          <div className=" 2xl:col-span-2 xl:col-span-2 overflow-hidden flex flex-col  justify-between items-center justify-center bg-transparent border-2 border-textColor border-dashed shadow-xl rounded-xl py-2">
            <div className="flex -space-x-4 pt-10">
              <Images
                url={testone}
                clas=" object-cover "
                addClass=" h-[120px] w-[120px] shadow-xl -rotate-12 rounded-xl "
              />
              <Images
                url={testtwo}
                clas=" object-cover "
                addClass=" z-[10] h-[120px] w-[120px] -mt-3 shadow-xl rounded-xl "
              />
              <Images
                url={testthree}
                clas=" object-cover "
                addClass=" h-[120px] w-[120px] shadow-xl rotate-12 rounded-xl "
              />
            </div>
            <h3 className="font-medium text-center text-xl xl:text-2xl w-[90%] mx-auto py-12 ">
              {t("stepFour_text")}
            </h3>
            <div
              className=" -mb-12 -mr-12 w-[90%] h-[200px] border-2 border-white
             gap-1 p-1 bg-gray-400 grid rounded-xl grid-cols-3"
            >
              <div className="col-span-1 row-span-3 bg-white rounded-lg"></div>
              <div className="col-span-1  bg-white rounded-lg"></div>
              <div className="col-span-1  bg-white rounded-lg"></div>
              <div className="col-span-1  bg-white rounded-lg"></div>
              <div className="col-span-1 bg-white rounded-lg"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services2;
