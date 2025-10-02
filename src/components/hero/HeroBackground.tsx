import React from "react";

interface HeroBackgroundProps {
  mousePosition: { x: number; y: number };
}

interface BlurValues {
  greenBlur: number;
  yellowBlur: number;
}

interface PositionValues {
  greenLeft: number;
  greenTop: number;
  yellowLeft: number;
  yellowTop: number;
}

interface SizeValues {
  greenSize: number;
  yellowSize: number;
}

interface OpacityValues {
  greenOpacity: number;
  yellowOpacity: number;
}

interface BackgroundBlurProps {
  blurValues: BlurValues;
  positionValues: PositionValues;
  sizeValues: SizeValues;
  opacityValues: OpacityValues;
}

interface CornerBlurProps {
  position: "bottom-left" | "bottom-right";
  blurValues: BlurValues;
  sizeValues: SizeValues;
  opacityValues: OpacityValues;
}

const BackgroundBlur: React.FC<BackgroundBlurProps> = ({
  blurValues,
  positionValues,
  sizeValues,
  opacityValues,
}) => {
  const { greenBlur, yellowBlur } = blurValues;
  const { greenLeft, greenTop, yellowLeft } = positionValues;
  const { greenSize, yellowSize } = sizeValues;
  const { greenOpacity, yellowOpacity } = opacityValues;

  return (
    <div
      className="absolute top-[-504px] left-[calc(50%_-_557px)] w-[1113px] h-[669px] flex opacity-[0.57]"
      aria-hidden="true"
    >
      <div
        className="w-[1186px] h-[757px] relative transition-all duration-300 ease-out"
        style={{
          marginTop: `${greenTop}px`,
          marginLeft: `${greenLeft}px`,
        }}
      >
        <div
          className="absolute top-0 bg-[#21b300] rounded-full transition-all duration-300 ease-out"
          style={{
            left: "0px",
            filter: `blur(${greenBlur}px)`,
            width: `${greenSize}px`,
            height: `${greenSize}px`,
            borderRadius: `${greenSize / 2}px`,
            opacity: greenOpacity,
          }}
        />
        <div
          className="absolute top-0 bg-[#fbcb15] rounded-full transition-all duration-300 ease-out"
          style={{
            left: `${yellowLeft - greenLeft}px`,
            filter: `blur(${yellowBlur}px)`,
            width: `${yellowSize}px`,
            height: `${yellowSize}px`,
            borderRadius: `${yellowSize / 2}px`,
            opacity: yellowOpacity,
          }}
        />
      </div>
    </div>
  );
};

const CornerBlur: React.FC<CornerBlurProps> = ({ position, blurValues, sizeValues, opacityValues }) => {
  const { greenBlur } = blurValues;
  const { greenSize } = sizeValues;
  const { greenOpacity } = opacityValues;

  const positionClasses =
    position === "bottom-left" ? "bottom-[-250px] left-[-250px]" : "bottom-[-250px] right-[-250px]";

  return (
    <div className={`absolute ${positionClasses} w-[500px] h-[500px] opacity-[0.57] rotate-180`} aria-hidden="true">
      <div className="w-full h-full relative transition-all duration-300 ease-out">
        <div
          className="absolute top-0 bg-[#21b300] rounded-full transition-all duration-300 ease-out"
          style={{
            filter: `blur(${greenBlur}px)`,
            width: `${greenSize * 0.7}px`,
            height: `${greenSize * 0.7}px`,
            borderRadius: `${(greenSize * 0.7) / 2}px`,
            opacity: greenOpacity,
          }}
        />
      </div>
    </div>
  );
};

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ mousePosition }) => {
  const mouseXPercent = mousePosition.x / window.innerWidth;
  const mouseYPercent = mousePosition.y / window.innerHeight;

  const blurValues: BlurValues = {
    greenBlur: 223.7 + mouseXPercent * 76.3,
    yellowBlur: 128.45 + mouseYPercent * 71.55,
  };

  const positionValues: PositionValues = {
    greenLeft: -37 + mouseXPercent * 74,
    greenTop: -101 + mouseYPercent * 50,
    yellowLeft: 429 + mouseXPercent * -100,
    yellowTop: -101 + mouseYPercent * 50,
  };

  const sizeValues: SizeValues = {
    greenSize: 757 + mouseXPercent * 93,
    yellowSize: 757 + mouseXPercent * 93,
  };

  const opacityValues: OpacityValues = {
    greenOpacity: 0.86 + mouseXPercent * 0.14,
    yellowOpacity: 0.86 + mouseYPercent * 0.14,
  };

  return (
    <div className="absolute inset-0 w-full h-full bg-[#1a1a1a] rounded-t-lg rounded-b-[20px] overflow-hidden">
      <BackgroundBlur
        blurValues={blurValues}
        positionValues={positionValues}
        sizeValues={sizeValues}
        opacityValues={opacityValues}
      />

      <CornerBlur position="bottom-left" blurValues={blurValues} sizeValues={sizeValues} opacityValues={opacityValues} />

      <CornerBlur position="bottom-right" blurValues={blurValues} sizeValues={sizeValues} opacityValues={opacityValues} />
    </div>
  );
};
