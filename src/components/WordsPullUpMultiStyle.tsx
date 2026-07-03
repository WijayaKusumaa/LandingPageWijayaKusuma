import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className }: WordsPullUpMultiStyleProps) {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: "-10%" });
  
  // Flatten segments into individual words with their segment class
  const wordsWithStyles = segments.flatMap((segment) => 
    segment.text.split(" ").map((word) => ({ word, className: segment.className }))
  );
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };
  
  const childVariants = {
    hidden: { y: 30, opacity: 0, filter: "blur(4px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={container}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("inline-flex flex-wrap justify-center", className)}
    >
      {wordsWithStyles.map((item, i) => (
        <motion.span
          key={i}
          variants={childVariants}
          className={cn("inline-block mr-[0.2em] last:mr-0", item.className)}
        >
          {item.word}
        </motion.span>
      ))}
    </motion.div>
  );
}
