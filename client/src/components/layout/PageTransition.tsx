import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1.000], // Cubic bezier for smooth easing
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.645, 0.045, 0.355, 1.000],
      when: "afterChildren",
    },
  },
};

const childVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.3,
    }
  },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.215, 0.610, 0.355, 1.000],
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.2,
      ease: [0.645, 0.045, 0.355, 1.000],
    }
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="min-h-full w-full"
    >
      <motion.div 
        variants={childVariants}
        className="h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}