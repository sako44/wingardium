import { Button } from "@/components/ui/button";
import Container from "./Container";
// import Link from "next/link";
import { Link } from "@/i18n/navigation";
import MobileNavbar from "./MobileMenu";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import { animatedNavBar } from "@/utils/motionObjects";
import TranslateButton from "@/components/TranslateButton";
import { useTranslations } from "next-intl";
import NavBarLinks from "./NavBarLinks";

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
    <MotionDiv className="bg-bgColor max-lg:h-16 w-full z-30 relative">
      <MotionDiv className=" hidden lg:block ">
        <Container clas="  py-7 justify-between items-center flex   ">
          <MotionH2
            {...animatedNavBar}
            className="text-2xl font-semibold  font-fontRaleway uppercase "
          >
            <Link href="/">Wingardium</Link>
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
                <NavBarLinks href={item.href} title={item.title} />
              </MotionDiv>
            ))}
          </nav>
          <div className="flex space-x-3 items-center">
            <TranslateButton />
            <Button
              asChild
              variant={"ghost"}
              className=" shadow-xl border-primary
               hover:bg-secondary hover:text-primary border text-[16px] rounded-[15px] px-7 py-5 transition duration-300 ease-in-out"
            >
              <Link href="/contact">{t("button")}</Link>
            </Button>
          </div>
        </Container>
      </MotionDiv>
      <MobileNavbar />
    </MotionDiv>
  );
}

export default NavBar;
