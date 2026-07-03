import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState<"default" | "text" | "link">("default");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isLink = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button');
      const isText = target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'P' || target.tagName === 'SPAN' || target.tagName === 'LI' || target.tagName === 'DIV' && target.textContent && target.children.length === 0;

      if (isLink) {
        setHoverState("link");
      } else if (isText) {
        setHoverState("text");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      opacity: 1,
    },
    text: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      opacity: 1,
    },
    link: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      opacity: 1,
    }
  };

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      
      {/* The Difference Blend Mode Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden md:block bg-[#DEDBC8] mix-blend-difference"
        variants={variants}
        animate={hoverState}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5
        }}
      />

      {/* The Text Overlay (No Blend Mode) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center font-bold tracking-widest text-[10px] text-black"
        variants={variants}
        animate={hoverState}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5
        }}
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: hoverState !== 'default' ? 1 : 0,
            scale: hoverState !== 'default' ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
        >
          {hoverState === 'link' ? 'TAP' : hoverState === 'text' ? 'READ' : ''}
        </motion.span>
      </motion.div>
    </>
  );
}
