import Container from "./Container";
import Form from "./Form";
import { MotionH2 } from "./MotionDiv";
import { useTranslations } from "next-intl";
import { animatedBenfitOne } from "@/utils/motionObjects";

function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="iletisim" className="py-52 bg-secondary mt-24">
      <Container clas=" flex flex-col lg:flex-row max-lg:space-y-12 sm:px-8 md:px-12 3xl:px-20 justify-center items-center text-center justify-around ">
        <MotionH2
          {...animatedBenfitOne}
          className="text-4xl text-black order-first  xl:w-fit text-nowrap  lg:self-start xl:text-5xl md:text-start text-center uppercase font-fontNunito"
        >
          {t("title")}
        </MotionH2>
        <Form />
      </Container>
    </section>
  );
}

export default Contact;
