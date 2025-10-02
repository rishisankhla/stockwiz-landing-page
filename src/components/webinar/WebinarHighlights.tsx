import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WebinarHeader } from "./WebinarHeader";
import { WebinarCard } from "./WebinarCard";
import { webinarData } from "./webinarData";
import { WebinarItem } from "./WebinarCard";

interface StackingCardProps {
  item: WebinarItem;
  index: number;
  total: number;
}

const StackingCard: React.FC<StackingCardProps> = ({ item, index, total }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const isNotLastCard = index < total - 1;
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale: 1,
        opacity: 1,
        y: isNotLastCard ? y : 0,
        position: isNotLastCard ? "sticky" : "relative",
        top: isNotLastCard ? `${120 + index * 40}px` : "auto",
        zIndex: index + 1,
      }}
    >
      <WebinarCard item={item} />
    </motion.div>
  );
};

export const WebinarHighlights: React.FC = () => {
  return (
    <section className="min-h-screen p-4 md:p-8 pb-1 flex justify-center items-start overflow-hidden">
      <div className="w-full max-w-[1272px] flex flex-col">
        <WebinarHeader />

        <main className="relative flex flex-col gap-4 md:gap-7 w-full">
          {webinarData.map((item, index) => (
            <StackingCard key={item.id} item={item} index={index} total={webinarData.length} />
          ))}
        </main>
      </div>
    </section>
  );
};
