"use client";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import Link from "next/link";
import MobileNavbar from "./MobileMenu";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import { animatedNavBar } from "@/utils/motionObjects";
import TranslateButton from "@/components/TranslateButton";
import { useTranslations } from "next-intl";

//bg-[#d6c9ac]

function NavBar() {
  const t = useTranslations("NavBar");
  const navButtons = [
    {
      id: 1,
      title: t("nav_button_1_title"),
      href: t("nav_button_1_href"),
    },
    {
      id: 2,
      title: t("nav_button_2_title"),
      href: t("nav_button_2_href"),
    },
    {
      id: 3,
      title: t("nav_button_3_title"),
      href: t("nav_button_3_href"),
    },
    {
      id: 4,
      title: t("nav_button_4_title"),
      href: t("nav_button_4_href"),
    },
  ];

  return (
    <MotionDiv className="bg-transparent max-lg:h-16 w-full z-30 relative">
      <MotionDiv className=" hidden lg:block ">
        <Container clas="  py-7 justify-between items-center flex   ">
          <MotionH2
            {...animatedNavBar}
            className="text-2xl font-semibold  font-fontRaleway uppercase "
          >
            Wingardium
          </MotionH2>
          <nav className="space-x-12 xl:space-x-20 font-fontRaleway items-center  flex">
            {navButtons.map((item) => (
              <MotionDiv
                key={item.id}
                {...animatedNavBar}
                transition={{
                  ...animatedNavBar.transition,
                  delay: item.id * 0.4,
                }}
              >
                <Button
                  asChild
                  className="hover:text-primary text-[16px] rounded-full transition duration-300 ease-in-out"
                  variant={"ghost"}
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              </MotionDiv>
            ))}
          </nav>
          <div className="flex space-x-3 items-center">
            <TranslateButton />
            <Button
              variant={"ghost"}
              className=" shadow-xl border-primary border text-[16px] rounded-[15px] px-7 py-5 transition duration-300 ease-in-out"
            >
              {t("button")}
            </Button>
          </div>
        </Container>
      </MotionDiv>
      <MobileNavbar />
    </MotionDiv>
  );
}

export default NavBar;
