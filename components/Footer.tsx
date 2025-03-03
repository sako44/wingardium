import Link from "next/link";
import Container from "./Container";
import Images from "./images";
import MotionDiv from "./MotionDiv";
import logo from "@/public/photos/logo.png";
import { animatedFooter } from "@/utils/motionObjects";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");
  const supportNavData = [
    {
      title: t("support_nav_1_title"),
      url: t("support_nav_1_url"),
    },
    {
      title: t("support_nav_2_title"),
      url: t("support_nav_2_url"),
    },
    {
      title: t("support_nav_3_title"),
      url: t("support_nav_3_url"),
    },
  ];
  return (
    <section className="w-full bg-zinc-950 pt-24">
      <Container clas=" flex flex-col space-y-10 font-fontRaleway  ">
        <MotionDiv
          {...animatedFooter}
          className="flex flex-col lg:flex-row  justify-around  2xl:-space-y-7 3xl:-space-y-10 lg:items-center w-full px-3 md:max-lg:px-7"
        >
          <Images
            url={logo}
            addClass=" w-96 lg:w-72 2xl:w-96 h-44 self-center lg:-ml-12 "
            clas="object-cover object-center"
          />
          <div className="flex flex-col lg:flex-row lg:space-x-12 xl:space-x-20 max-lg:space-y-10  text-textColor text-start lg:items-center ">
            <nav className="flex flex-col space-y-5 ">
              <h2 className="text-xl font-semibold ">{t("herOne")}</h2>
              <ul className="space-y-4">
                {supportNavData.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="hover:text-primary transition-all duration-300 ease-in-out"
                      href={item.url}
                      target={index === 2 ? "_blank" : undefined}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="flex flex-col space-y-5 self-start">
              <h2 className="text-xl  font-semibold">{t("herTwo")}</h2>
              <ul className="space-y-4">
                <li>
                  {" "}
                  <span className="font-semibold">Telefon :</span> 0(212) 123 45
                  67
                </li>
                <li>
                  {" "}
                  <span className="font-semibold">Email :</span>{" "}
                  Social@wingardium.com{" "}
                </li>
                <li>
                  {" "}
                  <span className="font-semibold">WhatsApp :</span> +900 59 890
                  7735
                </li>
              </ul>
            </nav>
            <nav className="flex flex-col space-y-12 self-start">
              <h2 className="text-xl font-semibold">{t("herThree")}</h2>
              <div className=" text-primary ">
                <div className="flex space-x-7 ">
                  <a href="https://www.discord.com/wingardium">
                    <i className="ri-discord-fill bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out  "></i>
                  </a>
                  <a href="https://x.com/wingardium">
                    <i className="ri-twitter-x-line bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out  "></i>
                  </a>
                  <a href="https://www.instagram.com/wingardium">
                    <i className="ri-instagram-fill bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out  "></i>
                  </a>
                  <a href="https://www.facebook.com/wingardium">
                    <i className="ri-facebook-circle-fill bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out  "></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </MotionDiv>
        <div>
          <hr className="lg:w-[103%] w-full lg:-ml-[17px] 2xl:-ml-[23px] h-[3px]  bg-textColor" />
          <MotionDiv
            {...animatedFooter}
            transition={{ ...animatedFooter.transition, delay: 1 }}
            className="py-7 text-textColor flex flex-col max-lg:space-y-5 lg:flex-row lg:justify-between"
          >
            <p className="xs:text-center">All Rights Reserved</p>
            <div className="flex flex-col xs:flex-row max-xs:space-y-5 xs:justify-around  lg:space-x-8 xl:space-x-12 2xl:space-x-16">
              <p>Privacy Policy</p>
              <p>Terms and Services</p>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
