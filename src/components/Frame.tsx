import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface SessionConfig {
  id: number;
  date: string;
  time: string;
  language: string;
  price: string;
  bgGradient: string;
  buttonConfig: {
    bgColor: string;
    textColor: string;
    hoverBg: string;
    borderColor?: string;
    iconBg: string;
    iconColor: string;
    priceTextColor: string;
  };
}

interface GradientBlurProps {}

interface CountdownTimerProps {
  timeLeft: TimeLeft;
}

interface SessionCardProps {
  session: SessionConfig;
}

const SESSIONS: SessionConfig[] = [
  {
    id: 1,
    date: "Sunday, 21 March 2025",
    time: "8:00 PM",
    language: "English",
    price: "₹299",
    bgGradient: "bg-[linear-gradient(180deg,rgba(47,47,47,0)_0%,rgba(20,168,0,1)_100%)]",
    buttonConfig: {
      bgColor: "bg-white",
      textColor: "text-black",
      hoverBg: "hover:bg-gray-50",
      iconBg: "bg-black",
      iconColor: "text-white",
      priceTextColor: "text-gray-600",
    },
  },
  {
    id: 2,
    date: "Sunday, 21 March 2025",
    time: "8:00 PM",
    language: "Hindi",
    price: "₹299",
    bgGradient: "bg-[linear-gradient(180deg,rgba(47,47,47,0)_0%,rgba(20,168,0,1)_100%)]",
    buttonConfig: {
      bgColor: "bg-black",
      textColor: "text-white",
      hoverBg: "hover:bg-gray-900",
      borderColor: "border border-gray-700 hover:border-gray-600",
      iconBg: "bg-white",
      iconColor: "text-black",
      priceTextColor: "text-gray-300",
    },
  },
];

const GradientBlur: React.FC<GradientBlurProps> = () => (
  <>
    <div
      className="absolute -top-3 -left-3 w-full h-[50px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        filter: "blur(10.83px)",
        background: "linear-gradient(90deg, rgba(19, 168, 0, 0.68) 0%, rgba(255, 210, 47, 0.68) 100%)",
      }}
    />
    <div
      className="absolute -bottom-6 -right-3 w-full h-[50px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        filter: "blur(10.83px)",
        background: "linear-gradient(90deg, rgba(19, 168, 0, 0.68) 0%, rgba(255, 210, 47, 0.68) 100%)",
      }}
    />
  </>
);

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft }) => {
  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 w-full" role="timer" aria-label="Countdown timer">
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className="w-[160px] md:w-[214px] h-[100px] md:h-[125px] rounded-2xl md:rounded-3xl border border-white/50 backdrop-blur-[5px] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-4">
            <time className="font-bold text-white text-3xl md:text-5xl leading-8 md:leading-10">
              {String(unit.value).padStart(2, "0")}
            </time>
            <span className="font-normal text-white text-lg md:text-2xl leading-[16px] md:leading-[19px]">
              {unit.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const { buttonConfig } = session;

  const buttonClasses = [
    "relative",
    buttonConfig.bgColor,
    buttonConfig.hoverBg,
    buttonConfig.textColor,
    buttonConfig.borderColor || "",
    "font-semibold",
    "pl-3 md:pl-4",
    "pr-1",
    "py-[2px] md:py-[4px]",
    "rounded-full",
    "flex items-center",
    "justify-between",
    "transition-all duration-300",
    "transform hover:scale-105",
    "shadow-lg hover:shadow-xl",
    "w-full",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={`w-full max-w-[620px] h-auto md:h-[204px] rounded-2xl md:rounded-3xl overflow-hidden ${session.bgGradient} p-4 md:p-0`}>
      <div className="flex flex-col w-full md:w-[553px] items-start gap-4 md:gap-8 md:pt-[34px] md:pl-[34px]">
        <header className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-[15px] w-full">
          <img
            className="w-10 h-10"
            alt="Calendar icon"
            src="https://c.animaapp.com/zVRzwp5o/img/uis-calender-1.svg"
          />
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
            <time className="font-medium text-white text-lg md:text-[32px] tracking-[-0.5px] md:tracking-[-1.16px] leading-6 md:leading-[44.8px]">
              {session.date}
            </time>
            <div className="hidden md:block w-0.5 h-10 bg-white/50" />
            <time className="font-medium text-white text-lg md:text-[32px] tracking-[-0.5px] md:tracking-[-1.16px] leading-6 md:leading-[44.8px]">
              {session.time}
            </time>
          </div>
        </header>

        <div className="relative group w-full md:w-[553px]">
          <GradientBlur />

          <button className={buttonClasses}>
            <div className="flex items-center gap-2">
              <span className={`text-sm md:text-lg font-semibold ${buttonConfig.textColor}`}>
                Join Now {session.language}
              </span>
              <span className={`text-xs md:text-base ${buttonConfig.priceTextColor}`}>(Free</span>
              <div className="relative">
                <span className={`text-xs md:text-sm ${buttonConfig.priceTextColor}`}>{session.price}</span>
                <div
                  className="absolute top-1/2 left-0 w-full h-0.5 transform -translate-y-1/2"
                  style={{
                    background: "linear-gradient(92.44deg, rgba(13, 181, 11, 1) 0%, rgba(255, 203, 21, 1) 100%)",
                    transform: "translateY(-50%) rotate(16.699deg) scale(1, 1)",
                  }}
                />
              </div>
              <span className={`text-xs md:text-base ${buttonConfig.priceTextColor}`}>)</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <span className={`text-xs md:text-sm ${buttonConfig.priceTextColor} hidden sm:inline`}>
                (Limited Seats Only)
              </span>

              <div className={`${buttonConfig.iconBg} rounded-full p-2 md:p-3 flex-shrink-0`}>
                <ArrowRight className={`w-3 h-3 md:w-5 md:h-5 ${buttonConfig.iconColor} -rotate-45`} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </article>
  );
};

export const Frame: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 6,
    hours: 6,
    minutes: 6,
    seconds: 6,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col w-full max-w-[1272px] items-center gap-5 px-4 md:px-0">
      <section className="flex flex-col w-full max-w-[916px] items-center gap-4">
        <h1 className="font-normal text-white text-2xl md:text-[32px] text-center leading-8 md:leading-[48px]">
          Next Live Q&A in
        </h1>
        <CountdownTimer timeLeft={timeLeft} />
      </section>

      <section className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full">
        {SESSIONS.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </section>
    </main>
  );
};
