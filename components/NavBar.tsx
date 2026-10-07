"use client";

import { Button, MotionButton } from "@/components/ui/button";
import { navItems } from "@/constants/nav-items";
import { Github, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import FlipText, { FlipMultipleText } from "./motion/FlipText";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

const NavBar = () => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const today = new Date();
  const isMobile = useIsMobile();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={"overlay"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6, height: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        animate={{ height: isOpen ? (isMobile ? "400px" : "485px") : "50px" }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        exit={{ animationDuration: 0.1 }}
        className="h-[45px] bg-muted/90 backdrop-blur-sm rounded-b-2xl p-[6px] top-0 z-100 fixed inset-0 md:mx-[50px] xl:mx-[180px] flex flex-col justify-between"
      >
        <div className="flex-between">
          <div className="flex-center gap-2 px-2">
            <Link href={"/"}>
              <h1 className="text-lg font-medium tracking-tighter">
                Kalu&reg;
              </h1>
            </Link>
            <p className="text-muted-dark text-sm max-sm:hidden">
              {today.toLocaleString("en-US", options)}
            </p>
          </div>

          <div className="flex-center gap-4">
            <Link href={"https://github.com/KALU-c"} target="_blank">
              <Button variant={"ghost"}>
                <Github />
              </Button>
            </Link>
            <div className="hidden gap-4 md:flex">
              {/* <AnimatePresence>
								{!isOpen && (
									<motion.div
										initial={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="flex gap-4"
									>
										{/* <MotionButton size={"noPadding"} variant={"transparent"} textClassName="text-[14px]">Projects</MotionButton> */}
              {/* <MotionButton size={"noPadding"} variant={"transparent"} textClassName="text-[14px]">Blog</MotionButton> */}
              {/* </motion.div> */}
              {/* )} */}
              {/* </AnimatePresence> */}
              <Link href={"/contact"}>
                <MotionButton
                  textClassName="text-[14px]"
                  className="rounded-full h-7"
                >
                  Contact
                </MotionButton>
              </Link>
            </div>
            <Button
              size={"icon"}
              className="bg-white rounded-full p-0 hover:bg-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Plus
                color="#000"
                size={24}
                className={`transform transition-transform duration-500 ease-in-out ${
                  isOpen ? "-rotate-45" : "rotate-0"
                }`}
              />
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="px-4 flex flex-col md:justify-between flex-1 pb-4"
            >
              <div className="flex flex-row justify-between items-center gap-8 py-8">
                <ul className="flex flex-col gap-2 flex-1">
                  {navItems.map((item, index) => (
                    <li
                      key={index}
                      className="py-2 border-b-1 border-b-zinc-400 tracking-tight font-semibold flex flex-row justify-between items-center"
                    >
                      <Link href={item.link} onClick={() => setIsOpen(false)}>
                        <FlipMultipleText
                          text1={item.label}
                          className1="text-[clamp(1.25rem,1.1786rem+0.3571vw,1.5rem)]"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="relative h-[275px] w-[725px] flex-1 rounded-2xl overflow-hidden hidden md:block">
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black opacity-30 z-10" />

                  {/* Background image */}
                  <Image
                    src="https://framerusercontent.com/images/7P2v0b7fdEwf2A2lE1d37Fu8c.jpeg"
                    className="absolute inset-0 w-full h-full object-cover"
                    height={300}
                    width={700}
                    alt="r-image"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between items-end">
                <div className="flex flex-col">
                  <Link href={"mailto:endekalu.dev@gmail.com"}>
                    <FlipText className="text-lg font-semibold">
                      endekalu.dev@gmail.com
                    </FlipText>
                  </Link>
                  <Link href={"tel:+251934898608"}>
                    <FlipText className="text-sm text-muted-dark">
                      +251 934 898 608
                    </FlipText>
                  </Link>
                </div>
                <div className="hidden md:flex flex-row gap-3">
                  {/* <FlipText className="text-sm">Twitter/X</FlipText> */}
                  <Link href={"https://github.com/KALU-c"} target="_blank">
                    <FlipText className="text-sm">Github</FlipText>
                  </Link>
                  <Link
                    href={"https://linkedin.com/in/endekalu"}
                    target="_blank"
                  >
                    <FlipText className="text-sm">LinkedIn</FlipText>
                  </Link>
                  <Link href={"https://t.me/real_kal"} target="_blank">
                    <FlipText className="text-sm">Telegram</FlipText>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default NavBar;
