"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function TranslateButton() {
  const [locale, setLocale] = useState<string>("");
  const [lang, setLang] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((item) => item.startsWith("LOCALE="))
      ?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const userLocale = navigator.language.slice(0, 2);
      setLocale(userLocale);
      document.cookie = `LOCALE=${userLocale};`;
      router.refresh();
    }
    console.log("locale", locale);
  }, [router, locale]);

  function changeLocale(e: string) {
    document.cookie = `LOCALE=${e};`;
    setLocale(e); // تحديث الحالة فورًا
    router.refresh();
  }

  function changeLang() {
    setLang((prev) => !prev);
  }
  return (
    <Button
      variant={"ghost"}
      onClick={() => {
        changeLang();
        changeLocale(lang === true ? "tr" : "en");
      }}
      className=" shadow-xl border-primary text-primary bg-black border text-[16px] rounded-[15px] px-3 py-5 transition duration-300 ease-in-out"
    >
      {locale === "tr" ? "EN" : "TR "}
    </Button>
  );
}

export default TranslateButton;
