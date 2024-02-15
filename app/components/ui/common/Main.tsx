"use client";
import { ChildrenProps } from "danimahdani";
import { cxm } from "libs/helpers";
import { FC } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

interface MainProps extends ChildrenProps {
  className?: string | string[];
  useFooter: boolean;
}

const Main: FC<MainProps> = ({ children, className, useFooter = false }) => {
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
      {useFooter && <Footer />}
    </motion.main>
  );
};

export default Main;
