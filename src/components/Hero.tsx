import { motion } from "framer-motion";
import { WordsPullUp } from "./WordsPullUp";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function Hero() {
  const handleDummyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast("tidak ada menu karna devloper malas membuat fitur");
  };

  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoinLabClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const navItems = [
    { name: "Story", href: "#story", onClick: handleScrollTo("story") },
    { name: "Tech Stack", href: "#features", onClick: handleScrollTo("features") },
    { name: "Experiments", href: "#features", onClick: handleScrollTo("features") },
    { name: "Open Source", href: "https://github.com/WijayaKusumaa", target: "_blank", rel: "noopener noreferrer" },
    { name: "Contact", href: "https://www.instagram.com/haswaltch_/", target: "_blank", rel: "noopener noreferrer" },
  ];

  return (
    <section className="h-screen w-full p-4 sm:p-6 md:p-8">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black">
        {/* Background Video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-14">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.target}
                rel={item.rel}
                onClick={item.onClick}
                className="text-[9px] sm:text-xs md:text-sm whitespace-nowrap transition-colors duration-300 inline-block origin-top"
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
                whileHover={{ scale: 1.1, y: 2, color: "#E1E0CC" }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 lg:items-end">
            <motion.div
              className="lg:col-span-8 origin-bottom-left cursor-default"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <WordsPullUp
                text="Wijaya"
                showAsterisk={true}
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC]"
              />
            </motion.div>
            <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:pb-[2vw]">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5, color: "#E1E0CC" }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] cursor-default origin-left"
              >
                Wijaya is a digital playground and portfolio showcasing the synergy of creative web development, high-performance interfaces, and robust security architecture. Built to explore limits, not to follow labels.
              </motion.p>

              <motion.button
                onClick={handleJoinLabClick}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="group flex items-center gap-2 hover:gap-3 bg-primary text-black rounded-full pl-6 pr-2 py-2 transition-all duration-300"
              >
                <span className="font-medium text-sm sm:text-base">Join the lab</span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="text-[#E1E0CC] w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
