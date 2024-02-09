"use client";
import { ChildrenProps } from "danimahdani";
import { cxm } from "libs/helpers";
import { FC } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

interface MainProps extends ChildrenProps {
  className: string;
  absolute?: boolean | undefined;
}

const Main: FC<MainProps> = ({ children, className, absolute }) => {
  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      transition={{
        duration: 0.5,
      }}
      className={cxm("container mx-auto max-w-3xl  py-7 tracking-wide md:py-0", className)}
    >
      {children}
    </motion.main>
  );
};

export default Main;
