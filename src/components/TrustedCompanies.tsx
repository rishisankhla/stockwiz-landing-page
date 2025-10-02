import React, { useEffect } from "react";
import companyLogo1 from "/row logos/row-logos-1 (1).png";
import companyLogo2 from "/row logos/row-logos-1 (2).png";
import companyLogo3 from "/row logos/row-logos-1 (3).png";
import companyLogo4 from "/row logos/row-logos-1 (4).png";
import companyLogo5 from "/row logos/row-logos-1 (5).png";
import companyLogo6 from "/row logos/row-logos-1 (6).png";
import companyLogo7 from "/row logos/row-logos-1 (7).png";
import companyLogo8 from "/row logos/row-logos-1 (8).png";

interface CompanyLogo {
  id: number;
  src: string;
  alt: string;
}

const COMPANY_LOGOS: CompanyLogo[] = [
  { id: 1, src: companyLogo1, alt: "Company Logo 1" },
  { id: 2, src: companyLogo2, alt: "Company Logo 2" },
  { id: 3, src: companyLogo3, alt: "Company Logo 3" },
  { id: 4, src: companyLogo4, alt: "Company Logo 4" },
  { id: 5, src: companyLogo5, alt: "Company Logo 5" },
  { id: 6, src: companyLogo6, alt: "Company Logo 6" },
  { id: 7, src: companyLogo7, alt: "Company Logo 7" },
  { id: 8, src: companyLogo8, alt: "Company Logo 8" },
];

const CAROUSEL_STYLES = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes scrollMobile {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .carousel-track {
    animation: scroll 30s linear infinite;
  }

  .carousel-track:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    .carousel-track {
      animation: scrollMobile 25s linear infinite;
    }
  }

  @media (max-width: 480px) {
    .carousel-track {
      animation: scrollMobile 20s linear infinite;
    }
  }
`;

const LOGO_IMAGE_CLASSES =
  "w-auto h-10 sm:h-12 md:h-14 lg:max-h-16 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] opacity-70 transition-all duration-300 filter grayscale brightness-0 invert flex-shrink-0 hover:opacity-100 hover:scale-105 object-contain";

export const TrustedCompanies: React.FC = () => {
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = CAROUSEL_STYLES;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8  flex justify-center items-center bg-transparent overflow-hidden">
      <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
        <header className="text-center px-4">
          <h2 className="font-['DM_Sans'] font-medium text-white/90 text-sm sm:text-base md:text-lg tracking-wide leading-relaxed m-0">
            Trusted by <span className="font-semibold text-white">Professionals</span> Working at Top Companies Like
          </h2>
        </header>

        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

          <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="carousel-track flex items-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 w-max">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 min-w-max">
                {COMPANY_LOGOS.map((logo) => (
                  <img
                    key={`${setIndex}-${logo.id}`}
                    src={logo.src}
                    alt={logo.alt}
                    className={LOGO_IMAGE_CLASSES}
                    loading="lazy"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
