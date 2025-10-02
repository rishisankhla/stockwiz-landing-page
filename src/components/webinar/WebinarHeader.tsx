import React from "react";

export const WebinarHeader: React.FC = () => {
  return (
    <header className="flex flex-col w-full max-w-[1272px] gap-3 mb-6 md:mb-9">
      <h1 className="w-full max-w-[1076px] font-normal text-3xl md:text-6xl leading-[40px] md:leading-[64px] tracking-normal">
        <span className="text-white leading-[59.7px]">Webinar Highlights </span>
        <span className="text-white/60 leading-[40px] md:leading-[74px]">– What Will Be Covered?</span>
      </h1>
      <p className="w-full font-normal text-white/75 text-lg md:text-2xl tracking-normal leading-[24px] md:leading-[33px]">
        Learn the secrets sauce of how professional institutional traders leverage the power of artificial
        intelligence and algo trading for breakthrough results.
      </p>
    </header>
  );
};
