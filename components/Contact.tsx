"use client";
import Container from "./Container";
import { useForm, type FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MotionForm, MotionH2 } from "./MotionDiv";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <section id="contact" className="py-52 bg-secondary mt-24">
      <Container
        clas=" flex flex-col lg:flex-row max-lg:space-y-12
        sm:px-8 md:px-12 3xl:px-20 justify-center items-center text-center justify-around "
      >
        <MotionH2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, type: "spring" }}
          className="text-4xl text-black  
         order-first  xl:w-fit text-nowrap  lg:self-start xl:text-5xl 
         md:text-start text-center uppercase"
        >
          İletişim Formu
        </MotionH2>
        <MotionForm
          initial={{ y: -30, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", delay: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
          className=" relative
          w-[80%] sm:w-[65%] lg:max-w-[50%] xl:max-w-[550px] flex flex-col order-last
           items-center justify-center space-y-5 lg:space-y-8 2xl:sapce-y-12"
        >
          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Ad Soyad"
            className="w-[100%] py-2 rounded-none text-textColorSec focus:text-black placeholder:text-zinc-800  bg-transparent outline-none border-b-2 border-zinc-800"
          />
          {errors.name && (
            <p className="text-red-500 self-start ">{`${errors.name.message}`}</p>
          )}
          <input
            {...register("phone", {
              required: "Phone is required",
            })}
            type="text"
            placeholder="Telefon No"
            className="w-[100%] py-2 rounded-none text-zinc-800 focus:text-black placeholder:text-zinc-800  bg-transparent outline-none border-b-2 border-zinc-800"
          />
          {errors.phone && (
            <p className="text-red-500 self-start ">{`${errors.phone.message}`}</p>
          )}
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Email Adresi"
            className="w-[100%] py-2 rounded-none text-zinc-800 focus:text-black placeholder:text-zinc-800  bg-transparent outline-none border-b-2 border-zinc-800"
          />
          {errors.email && (
            <p className="text-red-500 self-start ">{`${errors.email.message}`}</p>
          )}
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            placeholder="Mesajınız"
            rows={4}
            className="w-[100%] py-2 rounded-none text-zinc-800 focus:text-black placeholder:text-zinc-800  bg-transparent outline-none border-b-2 border-zinc-800"
          />
          {errors.message && (
            <p className="text-red-500 self-start ">{`${errors.message.message}`}</p>
          )}

          <Button
            disabled={isSubmitting}
            type="submit"
            className=" bg-primary text-white rounded-lg absolute -bottom-28 px-12 self-start
           disabled:bg-gray-500 text-lg py-6  "
          >
            Gönder
          </Button>
        </MotionForm>
      </Container>
    </section>
  );
}

export default Contact;
