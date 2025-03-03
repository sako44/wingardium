"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MotionForm } from "./MotionDiv";
import { useTranslations } from "next-intl";
import { animatedBenfitOne } from "@/utils/motionObjects";

function Form() {
  const t = useTranslations("Contact");
  const formData = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: t("name_placeholder"),
      required: t("name_required"),
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: t("email_placeholder"),
      required: t("email_required"),
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: t("phone_placeholder"),
      required: t("phone_required"),
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };
  return (
    <MotionForm
      {...animatedBenfitOne}
      initial={{ ...animatedBenfitOne.initial, x: 30 }}
      whileInView={{ ...animatedBenfitOne.whileInView, x: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className=" relative font-fontRaleway
    w-[80%] sm:w-[65%] lg:max-w-[50%] xl:max-w-[550px] flex flex-col order-last
     items-center justify-center space-y-5 lg:space-y-8 2xl:sapce-y-12"
    >
      {formData.map((item) => (
        <React.Fragment key={item.id}>
          <input
            key={item.id}
            {...register(item.name, {
              required: item.required,
            })}
            type={item.type}
            placeholder={item.placeholder}
            className="w-[100%] py-2 rounded-none text-textColorSec focus:text-black placeholder:text-zinc-800  bg-transparent outline-none border-b-2 border-zinc-800"
          />
          {errors.name && (
            <p className="text-red-500 self-start ">{`${
              errors[item.name]?.message
            }`}</p>
          )}
        </React.Fragment>
      ))}
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
        {t("button")}
      </Button>
    </MotionForm>
  );
}

export default Form;
