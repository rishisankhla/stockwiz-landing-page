import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface ButtonConfig {
  id: string;
  language: string;
  bgColor: string;
  textColor: string;
  hoverBg: string;
  borderColor?: string;
  iconBg: string;
  iconColor: string;
  priceTextColor: string;
  limitedSeatsColor: string;
}

interface PriceDisplayProps {
  config: ButtonConfig;
}

interface LimitedSeatsTextProps {
  config: ButtonConfig;
}

interface ArrowIconProps {
  config: ButtonConfig;
}

interface JoinButtonProps {
  config: ButtonConfig;
  index: number;
  onClick?: () => void;
}

const BUTTON_CONFIGS: ButtonConfig[] = [
  {
    id: "english",
    language: "English",
    bgColor: "bg-white",
    textColor: "text-black",
    hoverBg: "hover:bg-gray-50",
    iconBg: "bg-black",
    iconColor: "text-white",
    priceTextColor: "text-gray-600",
    limitedSeatsColor: "text-white",
  },
  {
    id: "hindi",
    language: "Hindi",
    bgColor: "bg-black",
    textColor: "text-white",
    hoverBg: "hover:bg-gray-900",
    borderColor: "border border-gray-700 hover:border-gray-600",
    iconBg: "bg-white",
    iconColor: "text-black",
    priceTextColor: "text-gray-300",
    limitedSeatsColor: "text-white",
  },
];

const PRICING_CONFIG = {
  currentPrice: "Free",
  originalPrice: "₹299",
  limitedSeatsText: "(Limited Seats Only)",
};

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.6,
    },
  },
};

const createButtonVariants = (index: number): Variants => ({
  hidden: {
    rotateY: -90,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 1.8 + index * 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
});

const createLimitedSeatsVariants = (index: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 2.2 + index * 0.3,
      ease: "easeOut",
    },
  },
});

const GradientBlur: React.FC = () => (
  <>
    <div className="absolute -top-2 -left-2 w-full h-full rounded-full blur-xl bg-gradient-to-r from-green-400/30 to-yellow-400/30 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute -bottom-2 -right-2 w-full h-full rounded-full blur-xl bg-gradient-to-r from-green-400/20 to-yellow-400/20 opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
  </>
);

const PriceDisplay: React.FC<PriceDisplayProps> = ({ config }) => (
  <div className="flex items-center gap-2">
    <span className={`text-base md:text-lg font-semibold ${config.textColor}`}>
      Join Now {config.language}
    </span>
    <span className={`text-sm md:text-base ${config.priceTextColor}`}>
      ({PRICING_CONFIG.currentPrice}
    </span>
    <div className="relative">
      <span className={`text-xs md:text-sm ${config.priceTextColor}`}>
        {PRICING_CONFIG.originalPrice}
      </span>
      <div 
        className="absolute top-1/2 left-0 w-full h-0.5 transform -translate-y-1/2"
        style={{
          background: "linear-gradient(92.44deg, rgba(13, 181, 11, 1) 0%, rgba(255, 203, 21, 1) 100%)",
          transform: "translateY(-50%) rotate(16.699deg) scale(1, 1)",
        }}
      />
    </div>
    <span className={`text-sm md:text-base ${config.priceTextColor}`}>)</span>
  </div>
);

const LimitedSeatsText: React.FC<LimitedSeatsTextProps> = ({ config }) => (
  <span className="text-sm md:text-base text-white mt-1 font-medium">
    {PRICING_CONFIG.limitedSeatsText}
  </span>
);

const ArrowIcon: React.FC<ArrowIconProps> = ({ config }) => (
  <div className={`${config.iconBg} rounded-full p-2 md:p-3  flex-shrink-0`}>
    <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 ${config.iconColor} -rotate-45`} />
  </div>
);

const JoinButton: React.FC<JoinButtonProps> = ({ config, index, onClick }) => {
  const buttonClasses = [
    "relative",
    config.bgColor,
    config.hoverBg,
    config.textColor,
    config.borderColor || "",
    "font-semibold",
    "pl-3 md:pl-4",
    "pr-[2px] md:pr-[4px]",
    "py-[2px] md:py-[4px]",
    "rounded-full",
    "flex items-center",
    "gap-3 md:gap-4",
    "transition-all duration-300",
    "transform hover:scale-105",
    "shadow-lg hover:shadow-xl",
    "min-w-[240px] md:min-w-[280px]",
  ]
    .filter(Boolean)
    .join(" ");

  const buttonVariants = createButtonVariants(index);
  const limitedSeatsVariants = createLimitedSeatsVariants(index);

  return (
    <motion.div
      className="relative group flex flex-col items-center"
      style={{ perspective: "1000px" }}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
    >
      <GradientBlur />
      <motion.button
        className={buttonClasses}
        onClick={onClick}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.98,
          transition: { duration: 0.1 },
        }}
      >
        <PriceDisplay config={config} />
        <ArrowIcon config={config} />
      </motion.button>
      <motion.div variants={limitedSeatsVariants} initial="hidden" animate="visible">
        <LimitedSeatsText config={config} />
      </motion.div>
    </motion.div>
  );
};

export const HeroCTASection: React.FC = () => {
  const handleEnglishClick = () => {
    console.log("English webinar registration clicked");
  };

  const handleHindiClick = () => {
    console.log("Hindi webinar registration clicked");
  };

  const clickHandlers = {
    english: handleEnglishClick,
    hindi: handleHindiClick,
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full px-4 md:px-0 mt-4 md:mt-8"
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
    >
      {BUTTON_CONFIGS.map((config, index) => (
        <JoinButton
          key={config.id}
          config={config}
          index={index}
          onClick={clickHandlers[config.id as keyof typeof clickHandlers]}
        />
      ))}
    </motion.div>
  );
};