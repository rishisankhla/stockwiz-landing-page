import React from "react";
import verifiedIcon from "/material-symbols-verified.svg";
import lotBookedImage from "/Lot Booked 21 10.png";
import innerDivImage from "/inner-div.png";

export interface WebinarItem {
  id: number;
  icon: string;
  backgroundColor: string;
  titleNormal: string;
  titleBold: string;
  description: string;
  hasVerifiedBadge?: boolean;
}

interface WebinarCardProps {
  item: WebinarItem;
}

interface CardContentProps {
  item: WebinarItem;
}

interface CardImageProps {
  item: WebinarItem;
}

const CardContent: React.FC<CardContentProps> = ({ item }) => {
  const renderTitle = () => {
    if (item.id === 3) {
      return (
        <>
          <span className="font-semibold text-white transition-colors duration-300 hover:text-white">
            {item.titleBold}{" "}
          </span>
          <span className="text-white/60 transition-colors duration-300 hover:text-white/80">
            {item.titleNormal}
          </span>
        </>
      );
    }

    return (
      <>
        <span className="text-white/60 transition-colors duration-300 hover:text-white/80">
          {item.titleNormal}
        </span>
        {item.titleBold && (
          <>
            <span className="font-semibold text-white transition-colors duration-300 hover:text-white">
              &nbsp;
            </span>
            <span className="font-semibold text-white transition-colors duration-300 hover:text-white">
              {item.titleBold}
            </span>
          </>
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col w-full lg:flex-1 lg:max-w-[602px] items-start gap-4 md:gap-5">
      <img
        className="w-[40px] h-[40px] md:w-[51px] md:h-[51px] transition-transform duration-300 hover:scale-110"
        alt="Feature icon"
        src={item.icon}
      />

      <div className="flex flex-col items-start gap-3 md:gap-3.5 w-full">
        <h2 className="w-full font-normal text-xl md:text-[32px] tracking-normal leading-[28px] md:leading-[44px]">
          {renderTitle()}
        </h2>

        <p className="w-full font-medium text-white/75 text-sm md:text-lg tracking-normal leading-5 md:leading-7 transition-colors duration-300 hover:text-white/90">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const CardImage: React.FC<CardImageProps> = ({ item }) => {
  const imagePositionClasses = item.hasVerifiedBadge
    ? "top-[30px] md:top-[44px] left-[30px] md:left-[48px] right-[30px] md:right-[48px] bottom-[30px]"
    : "top-[20px] md:top-[34px] left-[20px] md:left-[38px] right-[20px] md:right-[38px] bottom-[20px]";

  return (
    <div className="relative w-full lg:flex-1 lg:max-w-[570px] h-[250px] md:h-[300px] lg:h-[425px] bg-white/[0.06] rounded-3xl overflow-hidden transition-all duration-300 hover:bg-white/10">
      <img
        src={item.hasVerifiedBadge ? lotBookedImage : innerDivImage}
        alt="Inner content"
        className={`absolute w-auto h-auto ${item.hasVerifiedBadge ? "object-fill" : "object-cover"} rounded-[8.8px] transition-all duration-300 ${imagePositionClasses}`}
      />

      {item.hasVerifiedBadge && (
        <div className="absolute top-6 md:top-9 left-[15px] md:left-[25px] flex flex-col items-start gap-2 md:gap-3 p-2 md:p-3 bg-white rounded-[10px] md:rounded-[15.27px] transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)]">
          <div className="flex items-center gap-[2px] md:gap-[2.55px] w-full">
            <img
              className="w-[20px] h-[20px] md:w-[30.55px] md:h-[30.55px]"
              alt="Verified symbol"
              src={verifiedIcon}
            />
            <div className="font-normal text-black text-sm md:text-[22.6px] tracking-normal leading-normal">
              Verified P&L
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const WebinarCard: React.FC<WebinarCardProps> = ({ item }) => {
  return (
    <article
      className={`w-full h-auto rounded-3xl overflow-hidden border-0 transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${item.backgroundColor}`}
    >
      <div className="flex flex-col items-start gap-2.5 p-4 md:p-8">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-6 lg:gap-6">
          <CardContent item={item} />
          <CardImage item={item} />
        </div>
      </div>
    </article>
  );
};
