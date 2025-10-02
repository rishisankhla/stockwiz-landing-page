import React, { useState } from "react";
import logoImage from "/link---home.svg";
import userIcon from "/f123.svg";
import { SignupModal } from "../common/SignupModal";

interface LogoProps {}

interface SignUpButtonProps {
  onClick: () => void;
}

const Logo: React.FC<LogoProps> = () => (
  <img className="w-[120px] md:w-[159px] h-[36px] md:h-[48.4px]" alt="Stockwiz Logo" src={logoImage} />
);

const SignUpButton: React.FC<SignUpButtonProps> = ({ onClick }) => (
  <div className="inline-flex w-auto md:w-[192.91px] h-12 relative items-center gap-1 md:gap-2">
    <img className="relative w-8 h-8 md:w-12 md:h-12" alt="User Icon" src={userIcon} />

    <button
      onClick={onClick}
      className="h-auto inline-flex items-center justify-center gap-[8.69px] px-4 md:px-[39.95px] py-2 md:py-[12.16px] rounded-[10.42px] border-[0.87px] border-solid border-[#ffffff57] bg-transparent hover:bg-white/10 transition-colors cursor-pointer"
    >
      <span className="font-['DM_Sans',Helvetica] font-semibold text-white text-sm md:text-[15.6px] text-center tracking-[0] leading-[22.6px] whitespace-nowrap">
        Sign Up
      </span>
    </button>
  </div>
);

export const HeaderSection: React.FC = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleSignupClick = () => {
    setIsSignupModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <>
      <header className="w-full max-w-[1270px] mx-auto h-[67px] flex justify-between items-center px-4 bg-[#0000005c] rounded-xl backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] mb-4">
        <Logo />
        <SignUpButton onClick={handleSignupClick} />
      </header>

      <SignupModal isOpen={isSignupModalOpen} onClose={handleCloseModal} />
    </>
  );
};
