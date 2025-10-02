import React from "react";
import { motion, Variants } from "framer-motion";
import aiIcon from "/ff.svg";

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const TEXT_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const AI_POWERED_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const SIGNALS_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ICON_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    rotate: -180,
    scale: 0,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export const HeroContentSection: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 md:gap-4 w-full px-4 md:px-0"
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
        <motion.h1 className="text-white text-4xl md:text-7xl font-normal" variants={TEXT_VARIANTS}>
          Introducing
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
          <div className="flex items-center gap-1 md:gap-2">
            <motion.img src={aiIcon} alt="AI Icon" className="w-10 h-10 md:w-16 md:h-16" variants={ICON_VARIANTS} />
            <motion.span
              className="text-4xl md:text-7xl font-medium bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent"
              variants={AI_POWERED_VARIANTS}
            >
              AI Powered
            </motion.span>
          </div>
          <motion.h1 className="text-white text-4xl md:text-7xl font-normal" variants={SIGNALS_VARIANTS}>
            Signals
          </motion.h1>
        </div>
      </div>

      <motion.p
        className="text-white text-base md:text-xl text-center max-w-xs md:max-w-3xl leading-relaxed px-2 md:px-0"
        variants={TEXT_VARIANTS}
      >
        Trade smarter with AI-Generated Signals — built with institutional precision, made for everyday traders.
      </motion.p>
    </motion.div>
  );
};
