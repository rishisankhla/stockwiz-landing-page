import React, { useState, useEffect, useRef } from "react";
import { HeroContentSection } from "./HeroContentSection";
import { HeroBackground } from "./HeroBackground";
import { HeaderSection } from "./HeaderSection";
import { HeroImagesSection } from "./HeroImagesSection";
import { HeroCTASection } from "./HeroCTASection";
import { HeroTradingCard } from "./HeroTradingCard";
import { HeroSideCards } from "./HeroSideCards";

interface MousePosition {
  x: number;
  y: number;
}

const SIDE_CARDS_DELAY = 3000;

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [showSideCards, setShowSideCards] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();

        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setMousePosition({ x, y });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSideCards(true);
    }, SIDE_CARDS_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={heroRef}
      className="h-[calc(100vh-20px)] relative mx-[10px] md:mx-[20px] overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      <HeroBackground mousePosition={mousePosition} />

      <div className="relative z-50 pt-2 md:pt-4 px-2 md:px-4" style={{ pointerEvents: "auto" }}>
        <HeaderSection />
      </div>

      <div className="flex-1 flex items-center justify-center overflow-hidden" style={{ pointerEvents: "auto" }}>
        <div className="w-full flex flex-col items-center justify-center z-10 gap-2 md:gap-4 py-4 md:py-8">
          <HeroImagesSection />
          <HeroContentSection />
          <HeroCTASection />

          <div className="flex items-start justify-center mt-5 md:mt-12 mb-4 md:mb-8 w-full px-2 md:px-0 relative">
            {showSideCards && <HeroSideCards />}

            <div className="transform scale-75 sm:scale-85 md:scale-100 z-10 transition-all relative">
              <HeroTradingCard
                animate={true}
                style={{ boxShadow: "0px 4px 36.4px 0px rgba(255, 255, 255, 0.25)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
