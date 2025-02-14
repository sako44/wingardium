import { Button } from "@/components/ui/button";
import Container from "./Container";
import Link from "next/link";
import MobileNavbar from "./MobileMenu";
import MotionDiv from "./MotionDiv";
import { navButtons } from "@/data/navButtons";

function NavBar() {
  return (
    <MotionDiv className="bg-[#d6c9ac] max-lg:h-16 w-full z-30 relative">
      <MotionDiv
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, type: "spring", delay: 0.2 }}
        className=" hidden lg:block "
      >
        <Container clas="  py-8 justify-between items-center flex   ">
          <h2 className="text-2xl font-semibold  font-fontRaleway uppercase ">
            Wingardium
          </h2>
          <nav className="space-x-12 xl:space-x-20 font-fontRaleway items-center  flex">
            {navButtons.map((item) => (
              <Button
                key={item.id}
                asChild
                className="hover:text-primary text-[16px] rounded-full transition duration-300 ease-in-out"
                variant={"ghost"}
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            ))}
          </nav>
        </Container>
      </MotionDiv>
      <MobileNavbar />
    </MotionDiv>
  );
}

export default NavBar;
