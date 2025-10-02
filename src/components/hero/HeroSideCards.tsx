import React from "react";
import { motion, Variants } from "framer-motion";
import { HeroTradingCard } from "./HeroTradingCard";

const SIDE_CARD_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const SIDE_CARD_CONTAINER_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const ANIMATION_DELAY = 0.5;

export const HeroSideCards: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="hidden md:block absolute left-1/2 transform scale-75 translate-y-8 -translate-x-[calc(100%+145px)] transition-all"
        variants={SIDE_CARD_CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={SIDE_CARD_VARIANTS}
          initial="hidden"
          animate="visible"
          transition={{ delay: ANIMATION_DELAY }}
        >
          <HeroTradingCard />
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden md:block absolute left-1/2 transform scale-75 translate-y-8 translate-x-[145px] transition-all"
        variants={SIDE_CARD_CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={SIDE_CARD_VARIANTS}
          initial="hidden"
          animate="visible"
          transition={{ delay: ANIMATION_DELAY }}
        >
          <HeroTradingCard />
        </motion.div>
      </motion.div>
    </div>
  );
};
