import React from "react";
import q1Image from "/q1.png";
import q2Image from "/q2.png";
import q3Image from "/q3.png";

interface ProfileImageProps {
  src: string;
  index: number;
}

const PROFILE_IMAGES = [
  { id: 1, src: q1Image, alt: "Attendee profile" },
  { id: 2, src: q2Image, alt: "Attendee profile" },
  { id: 3, src: q3Image, alt: "Attendee profile" },
];

const ProfileImage: React.FC<ProfileImageProps> = ({ src, index }) => (
  <div
    className={`${index > 0 ? "-ml-[15.38px]" : ""} rounded-[61.77px] flex-shrink-0 w-[35.83px] h-[35.83px] relative overflow-hidden`}
  >
    <img className="w-full h-full object-cover" alt="Attendee profile" src={src} />
  </div>
);

export const HeroImagesSection: React.FC = () => {
  return (
    <div className="bg-white/10 transition-colors rounded-[111.2px] px-[17.79px] py-[8.9px] flex-shrink-0 w-[280px] h-[43px] relative box-border">
      <div className="flex flex-row gap-[10.06px] items-center justify-start absolute left-[3.65px] top-1/2 -translate-y-1/2">
        <div className="flex flex-row items-center justify-start flex-shrink-0 relative">
          {PROFILE_IMAGES.map((image, index) => (
            <ProfileImage key={image.id} src={image.src} index={index} />
          ))}
        </div>

        <div className="text-white text-center font-normal text-[20.13px] leading-[30.94px] relative flex items-center justify-center">
          <span>
            <span className="font-semibold">1,00,000+</span>
            <span className="font-medium" />
            <span className="font-normal">Attendees</span>
          </span>
        </div>
      </div>
    </div>
  );
};
