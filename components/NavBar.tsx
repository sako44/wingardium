import { Button } from "@/components/ui/button";
import Container from "./Container";
import Link from "next/link";
import MobileNavbar from "./MobileMenu";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import { navButtons } from "@/data/allData";
import { animatedNavBar } from "@/utils/motionObjects";

function NavBar() {
  return (
    <MotionDiv className="bg-[#d6c9ac] max-lg:h-16 w-full z-30 relative">
      <MotionDiv className=" hidden lg:block ">
        <Container clas="  py-8 justify-between items-center flex   ">
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
        </Container>
      </MotionDiv>
      <MobileNavbar />
    </MotionDiv>
  );
}

export default NavBar;
