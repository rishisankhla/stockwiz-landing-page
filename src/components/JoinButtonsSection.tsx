import React from "react";
import { ArrowRight } from "lucide-react";

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
}

interface PriceDisplayProps {
  config: ButtonConfig;
}

interface LimitedSeatsTextProps {
  config: ButtonConfig;
}

interface JoinButtonProps {
  config: ButtonConfig;
  onClick?: () => void;
}

const BUTTON_CONFIGS: ButtonConfig[] = [
  {
    id: "hindi",
    language: "Hindi",
    bgColor: "bg-white",
    textColor: "text-black",
    hoverBg: "hover:bg-gray-50",
    iconBg: "bg-black",
    iconColor: "text-white",
    priceTextColor: "text-gray-600",
  },
  {
    id: "english",
    language: "English",
    bgColor: "bg-black",
    textColor: "text-white",
    hoverBg: "hover:bg-gray-900",
    borderColor: "border-[1px] border-white hover:border-gray-600",
    iconBg: "bg-white",
    iconColor: "text-black",
    priceTextColor: "text-gray-300",
  },
];

const PRICING_CONFIG = {
  currentPrice: "Free",
  originalPrice: "₹499",
  limitedSeatsText: "(Limited Seats Only)",
};

const GradientBlur: React.FC = () => (
  <>
    <div
      className="absolute -top-2 -left-3 w-full h-[40px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        filter: "blur(10.83px)",
        background: "linear-gradient(-87.13deg, rgba(76, 115, 255, 0.73) 0%, rgba(0, 162, 183, 0.73) 100%)",
      }}
    />
    <div
      className="absolute bottom-4 -right-3 w-full h-[40px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        filter: "blur(10.83px)",
        background: "linear-gradient(-87.13deg, rgba(76, 115, 255, 0.73) 0%, rgba(0, 162, 183, 0.73) 100%)",
      }}
    />
  </>
);

const PriceDisplay: React.FC<PriceDisplayProps> = ({ config }) => (
  <div className="flex items-center gap-1 md:gap-2">
    <span className={`text-sm md:text-lg font-semibold ${config.textColor}`}>
      Join Now {config.language}
    </span>
    <span className={`text-xs md:text-base ${config.priceTextColor}`}>({PRICING_CONFIG.currentPrice}</span>
    <div className="relative">
      <span className={`text-xs md:text-sm ${config.priceTextColor}`}>{PRICING_CONFIG.originalPrice}</span>
      <div
        className="absolute top-1/2 left-0 w-full h-0.5 transform -translate-y-1/2"
        style={{
          background: "linear-gradient(92.44deg, rgba(13, 181, 11, 1) 0%, rgba(255, 203, 21, 1) 100%)",
          transform: "translateY(-50%) rotate(16.699deg) scale(1, 1)",
        }}
      />
    </div>
    <span className={`text-xs md:text-base ${config.priceTextColor}`}>)</span>
  </div>
);

const LimitedSeatsText: React.FC<LimitedSeatsTextProps> = ({ config }) => (
  <span className="text-xs md:text-base mt-1 font-medium" style={{ color: "#FFFFFF" }}>
    {PRICING_CONFIG.limitedSeatsText}
  </span>
);

const JoinButton: React.FC<JoinButtonProps> = ({ config, onClick }) => {
  const buttonClasses = [
    "relative",
    config.bgColor,
    config.hoverBg,
    config.textColor,
    config.borderColor || "",
    "font-semibold",
    "pl-2 md:pl-4",
    "pr-1 md:pr-1",
    "py-1 md:py-[3px]",
    "rounded-full",
    "flex items-center",
    "gap-3 md:gap-4",
    "transition-all duration-300",
    "transform hover:scale-105",
    "shadow-lg hover:shadow-xl",
    "w-full max-w-[320px] md:max-w-[390px]",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="relative group flex flex-col items-center">
      <GradientBlur />
      <button className={buttonClasses} onClick={onClick}>
        <PriceDisplay config={config} />
        <div className="ml-auto flex-shrink-0">
          <div className={`${config.iconBg} rounded-full p-2 md:p-3 flex-shrink-0`}>
            <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 ${config.iconColor} -rotate-45`} />
          </div>
        </div>
      </button>
      <LimitedSeatsText config={config} />
    </div>
  );
};

export const JoinButtonsSection: React.FC = () => {
  const handleHindiClick = () => {
    console.log("Hindi webinar registration clicked");
  };

  const handleEnglishClick = () => {
    console.log("English webinar registration clicked");
  };

  const clickHandlers = {
    hindi: handleHindiClick,
    english: handleEnglishClick,
  };

  return (
    <section className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-6 md:gap-[110px] w-full px-4 md:px-8">
      {BUTTON_CONFIGS.map((config) => (
        <div key={config.id} className="w-full md:w-auto flex justify-center">
          <JoinButton config={config} onClick={clickHandlers[config.id as keyof typeof clickHandlers]} />
        </div>
      ))}
    </section>
  );
};
