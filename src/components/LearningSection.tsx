import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import chartLineIcon from "/uil-chart-line.svg";
import chartLineIcon1 from "/uil-chart-line-1.svg";
import chartLineIcon2 from "/uil-chart-line-2.svg";
import chartLineIcon3 from "/uil-chart-line-3.svg";

interface LearningModule {
  id: number;
  icon: string;
  title: string;
  description: string | null;
  featured: boolean;
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

interface ModuleCardProps {
  module: LearningModule;
}

const LEARNING_MODULES: LearningModule[] = [
  {
    id: 1,
    icon: chartLineIcon,
    title: "Introduction To Institutional Trading Strategies",
    description:
      "Understand why, how and when stocks make big moves\nBuild your foundation with concepts such as liquidity and market structure",
    featured: true,
  },
  {
    id: 2,
    icon: chartLineIcon3,
    title: "Relative Strength Analysis",
    description: null,
    featured: false,
  },
  {
    id: 3,
    icon: chartLineIcon1,
    title: "Building A Game Plan",
    description: null,
    featured: false,
  },
  {
    id: 4,
    icon: chartLineIcon2,
    title: "Case Studies & Examples",
    description: null,
    featured: false,
  },
];

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const cardClassName = `flex flex-col items-start justify-center gap-2 md:gap-2.5 p-3 md:p-4 relative self-stretch w-full flex-1 rounded-xl border-0 ${
    module.featured
      ? "bg-[linear-gradient(167deg,rgba(0,0,0,0)_0%,rgba(42,184,12,0.2)_100%),linear-gradient(184deg,rgba(0,0,0,0.2)_0%,rgba(252,203,21,0.2)_100%)]"
      : "bg-[#ffffff1f]"
  }`;

  return (
    <Card className={cardClassName}>
      <CardContent className="p-0 w-full">
        <img
          className={`relative ${module.featured ? "flex-[0_0_auto] w-8 h-8 md:w-auto md:h-auto" : "w-8 h-8 md:w-10 md:h-10"}`}
          alt="Module icon"
          src={module.icon}
        />

        <div className="flex flex-col items-start gap-2 md:gap-3 relative self-stretch w-full flex-[0_0_auto] mt-2 md:mt-2.5">
          <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
            <h2 className="relative w-full max-w-96 mt-[-1.00px] [font-family:'Degular_Display-SemiBold',Helvetica] font-semibold text-white text-lg md:text-2xl tracking-[-0.20px] leading-6 md:leading-7">
              {module.title}
            </h2>
          </div>

          {module.description && (
            <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#ffffffbf] text-xs md:text-sm tracking-[0] leading-4 md:leading-[19px]">
              {module.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < module.description.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const LearningSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full max-w-[1272px] items-start gap-6 md:gap-8 relative px-4 md:px-0 pb-8">
      <header className="flex flex-col w-full max-w-[654px] items-start gap-2 md:gap-3 relative flex-[0_0_auto]">
        <h1 className="relative w-full mt-[-1.00px] [font-family:'Degular_Display-Regular',Helvetica] font-normal text-transparent text-3xl md:text-[64px] tracking-[0] leading-[40px] md:leading-[80px]">
          <span className="text-[#ffffff99]">What will you </span>
          <span className="text-white">Learn?</span>
        </h1>
      </header>

      <main className="flex flex-col lg:flex-row items-start gap-4 md:gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-full lg:w-[430px] items-start gap-3 md:gap-[21px] relative h-auto lg:h-[626px]">
          {LEARNING_MODULES.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        <aside className="relative w-full lg:w-[820px] h-[300px] md:h-[400px] lg:h-[626px] bg-[#ffffff1c] rounded-2xl" />
      </main>
    </section>
  );
};
