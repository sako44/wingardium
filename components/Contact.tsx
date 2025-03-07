import Container from "./Container";
import Form from "./Form";
import { useTranslations } from "next-intl";
import contactImage from "@/public/photos/21.png";
import AnimatedHeader from "./AnimatedHeader";
import Images from "./images";

function Contact() {
  const t = useTranslations("Contact");
  const emailTitle =
    "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMgBvfWMCWwdzfVklVwdnmjxRlnsVdKpWwLgGXCDSFVhQwWvKxGdrfKGJXTzSxKnXhxjdcl";

  return (
    <section
      id="iletisim"
      className="pt-12 pb-32 mb-12 border-[#dad4d4] border-2 rounded-[15px] mx-auto w-[98%] lg:w-[99.3%]"
    >
      <Container clas=" flex flex-col justify-center items-center text-center ">
        <AnimatedHeader title={t("title")} />
        <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:justify-between mt-24 sm:w-[80%] md:w-[70%] lg:w-full 2xl:w-[90%]">
          <div className="flex flex-col mt-4 items-start text-start font-fontNunito space-y-20">
            <div>
              <h3 className="text-5xl font-bold">{t("contact_title")}</h3>
              <p className="max-w-[90%] lg:max-w-[70%] mt-3 font-medium text-lg">
                {t("contact_description")}
              </p>
            </div>
            <div>
              <h3 className="text-2xl">{t("follow_title")}</h3>
              <div className="flex space-x-7 mt-5 ">
                <a href="https://www.discord.com/wingardium">
                  <i className="ri-discord-fill bg-primary text-white rounded-[50%] px-2 py-2 text-[25px] hover:text-black hover:cursor-pointer transition duration-300 ease-in-out  "></i>
                </a>
                <a href="https://x.com/wingardium">
                  <i className="ri-twitter-x-line bg-primary text-white rounded-[50%] px-2 py-2 text-[25px] hover:text-black hover:cursor-pointer transition duration-300 ease-in-out  "></i>
                </a>
                <a href="https://www.instagram.com/wingardium">
                  <i className="ri-instagram-fill bg-primary text-white rounded-[50%] px-2 py-2 text-[25px] hover:text-black hover:cursor-pointer transition duration-300 ease-in-out  "></i>
                </a>
                <a href="https://www.facebook.com/wingardium">
                  <i className="ri-facebook-circle-fill bg-primary text-white rounded-[50%] px-2 py-2 text-[25px] hover:text-black hover:cursor-pointer transition duration-300 ease-in-out  "></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl">{t("follow_description")}</h3>
              <ul className="space-y-3 mt-5 underline text-primary ">
                <li className=" hover:text-black transition duration-300 ease-in-out">
                  <a href="https://wa.me/+905347926583?text=Merhaba%20">
                    0(212) 123 45 67
                  </a>
                </li>
                <li className=" hover:text-black transition duration-300 ease-in-out">
                  <a href={emailTitle}>Social@wingardium.com</a>
                </li>
              </ul>
            </div>
          </div>
          <Form />
        </div>
      </Container>
      <div className="relative z-[-1] w-full -mt-40 -mb-28">
        <Images
          url={contactImage}
          addClass=" w-full h-[500px] "
          clas=" object-cover object-center "
        />
      </div>
    </section>
  );
}

export default Contact;

{
  /* <MotionH2
          {...animatedBenfitOne}
          className="text-4xl text-black order-first  xl:w-fit text-nowrap  lg:self-start xl:text-5xl md:text-start text-center uppercase font-fontNunito"
        >
          {t("title")}
        </MotionH2> */
}
