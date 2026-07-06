import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { Check, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 25
    }
  }
};

export function Features() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative min-h-screen bg-black px-4 py-20 md:py-32">
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col gap-2">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Production-ready code built for pure immersion.", className: "text-[#E1E0CC]" }
            ]}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal justify-start"
          />
          <WordsPullUpMultiStyle
            segments={[
              { text: "Driven by technical logic. Powered by motion design.", className: "text-gray-500" }
            ]}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal justify-start"
          />
        </div>

        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 lg:h-[480px]"
        >
          {/* Card 1 */}
          <motion.div variants={cardVariants} whileHover="hover" className="relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-0 bg-[#212121]">
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-[#E1E0CC] font-medium text-lg">Immersive Experiences.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <FeatureCard
            title="01 / Component Architecture"
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
            items={[
              "Clean Design Systems",
              "Reactive Dashboards",
              "Component Libraries",
              "High-Fidelity UI Animations"
            ]}
          />

          {/* Card 3 */}
          <FeatureCard
            title="02 / Interactive Shaders"
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
            items={[
              "Three.js Environments",
              "Physics Simulations",
              "Core WebGL Shaders",
              "Particle Systems"
            ]}
          />

          {/* Card 4 */}
          <FeatureCard
            title="03 / Defensive Design"
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
            items={[
              "OWASP Top 10 Mitigation",
              "Secure Architecture Coding",
              "System Administration Labs",
              "Network Profiling"
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ title, icon, items }: { title: string, icon: string, items: string[] }) {
  const handleDummyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast("tidak ada menu karna devloper malas membuat fitur");
  };

  return (
    <motion.div variants={cardVariants} whileHover="hover" className="bg-[#212121] rounded-2xl p-6 flex flex-col min-h-[300px] lg:min-h-0">
      <div className="flex justify-between items-start mb-12">
        <img src={icon} alt={title} className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover" />
      </div>

      <h3 className="text-[#E1E0CC] text-xl font-medium mb-6">{title}</h3>

      <ul className="space-y-3 mb-auto">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
            <span className="text-gray-400 text-sm leading-tight">{item}</span>
          </li>
        ))}
      </ul>

      <a href="#" onClick={handleDummyClick} className="mt-8 flex items-center gap-2 text-primary text-sm font-medium group w-fit">
        Learn more
        <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </motion.div>
  );
}
