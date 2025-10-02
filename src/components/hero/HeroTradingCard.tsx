import React from "react";
import { motion } from "framer-motion";
import aiGenIcon from "/ai-gen-icon.svg";

interface HeroTradingCardProps {
  style?: React.CSSProperties;
  animate?: boolean;
}

export const HeroTradingCard = ({ style, animate = false }: HeroTradingCardProps): JSX.Element => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.5,
        staggerChildren: 0.15,
        delayChildren: 1.8
      }
    }
  };

  // Static variants for non-animated cards
  const staticVariants = {
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  // Individual element animation variants
  const elementVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Static element variants for non-animated cards
  const staticElementVariants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  // Progress bar specific variants
  const progressBarVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Static progress bar variants
  const staticProgressBarVariants = {
    visible: { scaleX: 1 }
  };

  // Progress dot variants
  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  };

  // Static dot variants
  const staticDotVariants = {
    visible: { scale: 1 }
  };

  // Choose variants based on animate prop
  const currentContainerVariants = animate ? containerVariants : staticVariants;
  const currentElementVariants = animate ? elementVariants : staticElementVariants;
  const currentProgressBarVariants = animate ? progressBarVariants : staticProgressBarVariants;
  const currentDotVariants = animate ? dotVariants : staticDotVariants;

  return (
    <motion.div 
      className="w-full max-w-[900px] min-w-[400px] shadow-2xl relative mx-auto p-[1.53px]"
      style={{
        borderRadius: '13.36px',
        background: 'linear-gradient(137.14deg, rgba(38, 188, 13, 1) 1.0407104156911373%, rgba(255, 203, 21, 1) 100%)',
        ...style
      }}
      variants={currentContainerVariants}
      initial={animate ? "hidden" : "visible"}
      animate="visible"
    >
      <div className="bg-[#101010] rounded-[11.83px] pt-3 p-5 relative">
        {/* Corner badges */}
        <motion.div 
          className="absolute -top-6 right-4 flex items-center gap-2 z-10"
          variants={currentElementVariants}
        >
          <div 
            className="text-black flex items-center justify-center flex-shrink-0 relative overflow-hidden"
            style={{
              background: '#ffcb15',
              borderRadius: '6.68px 6.68px 0px 0px',
              padding: '2px 10.02px 2px 10.02px',
            }}
          >
            <div 
              className="text-black text-left font-semibold relative"
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: '11.13px',
                lineHeight: '20.03px',
                fontWeight: '600'
              }}
            >
              Swing
            </div>
          </div>
          <div className="bg-blue-500 text-white  rounded-t-lg text-sm font-semibold"> 
            <div className="bg-blue-500 text-white rounded-t-lg font-semibold relative overflow-hidden flex items-center justify-center flex-shrink-0"
              style={{
                background: '#3b82f6',
                borderRadius: '6.68px 6.68px 0px 0px',
                padding: '2px 10.02px 2px 10.02px',
              }}
            >
              <div 
                className="text-white text-left font-semibold relative"
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '11.13px',
                  lineHeight: '20.03px',
                  fontWeight: '600'
                }}
              >
                Index Options
              </div>
            </div>
          </div>
        </motion.div>

        {/* Top badges */}
        <motion.div 
          className="absolute -top-6  left-4 z-10"
          variants={currentElementVariants}
        >
          <div
            className="flex items-center justify-center gap-[6.1px] text-white   overflow-hidden relative"
            style={{
              background: 'linear-gradient(91.64deg, rgba(18, 128, 0, 1) 0%, rgba(183, 145, 9, 1) 100%)',
              borderImageSlice: '1',
              borderRadius: '9.15px 9.15px 0px 0px',
              padding: '6.1px 12.21px 6.1px 12.21px',
              height: '22.88px',
              boxShadow: '0px 4.58px 44.43px 0px rgba(255, 255, 255, 0.6)',
              fontFamily: '"Poppins", sans-serif',
              fontSize: '15.256386756896973px',
              lineHeight: '27.46px',
              fontWeight: '500'
            }}
          >
            <img src={aiGenIcon} alt="AI" className="w-4 h-4" />
            <span>AI Generated</span>
          </div>
        </motion.div>

        {/* Stock info and price */}
        <motion.div 
          className="flex items-center justify-between mb-6"
          variants={currentElementVariants}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              50
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-xl">NIFTY</span>
                <span className="text-orange-500 text-sm font-medium">NSE</span>
              </div>
              <div className="text-gray-400 text-sm">NIFTY 24850 PE 31 Jul 2025</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white font-bold text-xl">₹118.50</div>
            <div className="text-green-400 text-xs font-medium">+₹74.30 (+168.24%)</div>
          </div>
        </motion.div>

        {/* Entry progress bar */}
        <motion.div 
          className="mb-4"
          variants={currentElementVariants}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Entry</span>
          </div>
          
          {/* Progress bar */}
          <div className="relative mb-16">
            {/* Progress bar track */}
            <div className="w-full h-1 bg-gray-700 rounded-full relative">
              {/* Red section (SL to Entry) */}
              <motion.div 
                className="absolute left-0 top-0 h-1 bg-red-500 rounded-l-full" 
                style={{ width: '35%' }}
                variants={currentProgressBarVariants}
              />
              {/* Green section (Entry to Target) */}
              <motion.div 
                className="absolute top-0 h-1 bg-green-500 rounded-r-full" 
                style={{ left: '35%', width: '65%' }}
                variants={currentProgressBarVariants}
              />
            </div>
            
            {/* Progress indicator dots */}
            <motion.div 
              className="absolute -top-1.5 left-0 w-4 h-4 bg-white rounded-full border-2 border-gray-800 transform -translate-x-1/2"
              variants={currentDotVariants}
            />
            <motion.div 
              className="absolute -top-1.5 left-[35%] w-4 h-4 bg-white rounded-full border-2 border-gray-800 transform -translate-x-1/2"
              variants={currentDotVariants}
            />
            <motion.div 
              className="absolute -top-1.5 left-[75%] w-4 h-4 bg-white rounded-full border-2 border-gray-800 ring-2 ring-white transform -translate-x-1/2"
              variants={currentDotVariants}
            >
              {/* Live badge positioned above third point */}
              <div className="absolute -top-8 left-1/2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap transform -translate-x-1/2">
                Live
              </div>
            </motion.div>
            <motion.div 
              className="absolute -top-1.5 right-0 w-4 h-4 bg-white rounded-full border-2 border-gray-800 transform translate-x-1/2"
              variants={currentDotVariants}
            />
            
            {/* Entry label above second point */}
            <div className="absolute -top-8 left-[35%] transform -translate-x-1/2">
              <span className="text-sm text-white font-medium">Entry</span>
            </div>
            
            {/* Date and time below second point */}
            <div className="absolute top-3 left-[35%] text-center transform -translate-x-1/2">
              <div className="text-white text-sm">26 July</div>
              <div className="text-gray-400 text-sm">12:02 PM</div>
            </div>
            
            {/* Labels */}
            <div className="absolute top-4 left-0 transform -translate-x-1/2">
              <span className="text-xs text-gray-400">SL</span>
            </div>
            <div className="absolute top-4 right-0 transform ">
              <span className="text-xs text-gray-400">Target</span>
            </div>
          </div>
        </motion.div>

        {/* Entry and Stop Loss */}
        <motion.div 
          className="flex justify-between items-center p-2"
          style={{
            borderRadius: '6.68px',
            borderStyle: 'solid',
            borderColor: '#2a2a2a',
            borderWidth: '1.11px'
          }}
          variants={currentElementVariants}
        >
          <div>
            <div className="text-gray-400 text-sm">Entry</div>
            <div className="text-white font-bold text-base">₹70.95</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400 text-sm">Stop Loss</div>
            <div className="text-white font-bold text-base">₹35.85</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};