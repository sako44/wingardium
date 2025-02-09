import { Button } from "@/components/ui/button";
import Container from "./Container";
import Link from "next/link";
import MobileNavbar from "./MobileMenu";
import MotionDiv from "./MotionDiv";

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
          <h2 className="text-2xl font-semibold uppercase ">Wingardium </h2>
          <nav className="space-x-12 xl:space-x-20 font-light items-center  flex">
            <Button
              asChild
              className="hover:text-primary  text-[16px] rounded-full transition duration-300 ease-in-out"
              variant={"ghost"}
            >
              <Link href="#hizmet">Hizmetler</Link>
            </Button>
            <Button
              asChild
              className="hover:text-primary text-[16px] rounded-full transition duration-300 ease-in-out"
              variant={"ghost"}
            >
              <Link href="#ozellik">Özellikler</Link>
            </Button>
            <Button
              asChild
              className="hover:text-primary text-[16px] rounded-full transition duration-300 ease-in-out"
              variant={"ghost"}
            >
              <Link href="#plan">Planlar</Link>
            </Button>
            <Button
              asChild
              className="hover:text-primary text-[16px] rounded-full transition duration-300 ease-in-out"
              variant={"ghost"}
            >
              <Link href="#iletisim">İletişim</Link>
            </Button>
          </nav>
        </Container>
      </MotionDiv>
      <MobileNavbar />
    </MotionDiv>
  );
}

export default NavBar;
