"use client";
import { Cross as Fade } from "hamburger-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import MotionDiv from "./MotionDiv";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, []);

  const navLinks = [
    {
      title: "Hizmetler",
      active: false,
      url: "#hizmet",
    },
    {
      title: "Özellikler",
      active: false,
      url: "#ozellik",
    },
    {
      title: "Planlar",
      active: false,
      url: "#plan",
    },
    {
      title: "İletişim",
      active: false,
      url: "#iletisim",
    },
  ];

  return (
    <MotionDiv
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 2, type: "spring", delay: 0.2 }}
      className="lg:hidden px-5 py-4  sm:px-7 max-lg:h-[66px] md:px-10 w-full overflow-hidden"
    >
      <div className="fixed inset-0 z-[3000] px-4 h-fit">
        <div className="flex justify-between items-center  pt-2">
          <h2 className="text-xl font-semibold uppercase ">Wingardium </h2>

          <div className="z-[100] flex gap-2  items-center  rounded-full">
            <Fade
              toggled={open}
              onToggle={() => setOpen((prev) => !prev)}
              duration={0.5}
              size={25}
              color="black"
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 w-full
             bg-[#585858] pt-[112px] text-popover-foreground px-4 flex justify-center flex-col  h-[100vh]"
          >
            <p className="text-lg text-muted-foreground "> </p>

            <div className="flex flex-col gap-8 mt-7 items-start ">
              {navLinks.map((link, index) => (
                <Button
                  key={index}
                  asChild
                  variant={"ghost"}
                  className={` ${
                    link.active ? "text-primary" : "text-secondary-foreground"
                  } " px-0 text-4xl hover:text-primary hover:bg-transparent "`}
                  onClick={closeMenu}
                >
                  <Link href={link.url}>{link.title}</Link>
                </Button>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-2">
              <p className="text-gray-300  text-lg">Get In Touch</p>

              <Link className="text-2xl" href={"mailto:itxti909@gmail.com"}>
                Social@troikaprod.com
              </Link>
            </div>
            <div className=" text-[#333] mt-10 flex flex-col gap-4">
              <p className="text-gray-300  text-lg">FOLLOW US</p>
              <div className="flex space-x-10 ">
                <a href="https://www.linkedin.com/company/troika-events-production/">
                  <i className="ri-linkedin-box-fill bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out  "></i>
                </a>
                <a href="https://x.com/troika_prod?s=21">
                  <i className="ri-twitter-x-line bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out  "></i>
                </a>
                <a href="https://www.instagram.com/troika_prod">
                  <i className="ri-instagram-fill bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out  "></i>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionDiv>
  );
};

export default MobileNavbar;
