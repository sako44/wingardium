import Container from "./Container";
import Form from "./Form";
import { MotionH2 } from "./MotionDiv";

function Contact() {
  return (
    <section id="contact" className="py-52 bg-secondary mt-24">
      <Container clas=" flex flex-col lg:flex-row max-lg:space-y-12 sm:px-8 md:px-12 3xl:px-20 justify-center items-center text-center justify-around ">
        <MotionH2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, type: "spring" }}
          className="text-4xl text-black order-first  xl:w-fit text-nowrap  lg:self-start xl:text-5xl md:text-start text-center uppercase font-fontNunito"
        >
          İletişim Formu
        </MotionH2>
        <Form />
      </Container>
    </section>
  );
}

export default Contact;
