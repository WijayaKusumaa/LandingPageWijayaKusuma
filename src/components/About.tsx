import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { ScrollRevealText } from "./ScrollRevealText";

export function About() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    skipSnaps: false
  });

  const cards = [
    {
      tag: "Creative Development",
      heading: [
        { text: "I am Wijaya Kusuma, ", className: "font-normal" },
        { text: "a tech enthusiast. ", className: "font-serif italic text-primary" },
        { text: "I craft high-performance web applications, interactive 3D motion layouts, and secure digital code architectures.", className: "font-normal" }
      ],
      desc: "Balancing real-world professional commitments with rigorous academic computer science pursuits. Over the years, I have engineered custom digital business tools, interactive web interfaces, and security prototypes that blend cutting-edge frontend visual motion with ironclad system principles."
    },
    {
      tag: "WebGL & Motion Design",
      heading: [
        { text: "Designing immersive, ", className: "font-normal" },
        { text: "interactive interfaces. ", className: "font-serif italic text-primary" },
        { text: "I blend Three.js, custom WebGL shaders, and high-fidelity physics simulations.", className: "font-normal" }
      ],
      desc: "I believe the web should be an experience, not just a document. By mastering GPU shader logic and math-driven animations, I create 3D environments that run smoothly at 60 FPS while keeping the layout intuitive and highly responsive."
    },
    {
      tag: "Cybersecurity & Logic",
      heading: [
        { text: "Engineering with ", className: "font-normal" },
        { text: "defensive architecture. ", className: "font-serif italic text-primary" },
        { text: "I secure frontend assets and mitigate core system vulnerabilities from day one.", className: "font-normal" }
      ],
      desc: "A gorgeous interface is nothing without robust security. My passion for network profiling, system administration labs, and OWASP Top 10 mitigation drives me to write clean, secure, and resilient code that guards digital assets without sacrificing user experience."
    },
    {
      tag: "Academic Foundation",
      heading: [
        { text: "Driven by computer ", className: "font-normal" },
        { text: "science principles. ", className: "font-serif italic text-primary" },
        { text: "I translate rigorous mathematical theory into scalable real-world digital products.", className: "font-normal" }
      ],
      desc: "Currently pursuing my academic computer science journey, I apply theoretical algorithm design and data structures to optimize application performance. My goal is to build high-performance web systems that push the boundary of what's possible in web engineering."
    }
  ];

  return (
    <section className="bg-black py-20 md:py-32 overflow-hidden relative w-full">
      {/* Elegant Blur/Fade Edges of the entire section */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-r from-black via-black/85 to-transparent backdrop-blur-[3px] pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-l from-black via-black/85 to-transparent backdrop-blur-[3px] pointer-events-none z-10" />

      <div className="w-full relative">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="w-[85vw] max-w-5xl shrink-0 px-3 md:px-6 flex justify-center"
              >
                <motion.div
                  className="bg-[#101010] rounded-[2rem] p-8 md:p-16 lg:p-24 w-full flex flex-col items-center text-center select-none border border-white/5 cursor-grab active:cursor-grabbing"
                  whileHover={{ 
                    y: -5,
                    borderColor: "rgba(222, 219, 200, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-primary text-[10px] sm:text-xs uppercase tracking-wider mb-8 md:mb-12">
                    {card.tag}
                  </span>
                  
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12 md:mb-16">
                    <WordsPullUpMultiStyle segments={card.heading} />
                  </div>

                  <div className="max-w-2xl text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed text-center">
                    <ScrollRevealText
                      text={card.desc}
                      className="justify-center"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
