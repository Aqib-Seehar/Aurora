"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { Zap, Network, Shield, Smartphone, Calendar, Share2, Search, Sparkles } from "lucide-react";

const features = [
  {
    title: "Built for speed",
    description: "Instantly capture ideas with a global hotkey. No loading, no friction.",
    icon: Zap,
    colSpan: "md:col-span-2",
  },
  {
    title: "Networked notes",
    description: "Connect your thoughts with back-links and see how ideas relate.",
    icon: Network,
    colSpan: "md:col-span-1",
  },
  {
    title: "End-to-end encryption",
    description: "Your data is secure and private by default. We can't read your notes.",
    icon: Shield,
    colSpan: "md:col-span-1",
  },
  {
    title: "iOS app",
    description: "Capture on the go, sync instantly across all your devices.",
    icon: Smartphone,
    colSpan: "md:col-span-2",
  },
  {
    title: "Calendar integration",
    description: "Sync with Google and Outlook to capture meeting notes automatically.",
    icon: Calendar,
    colSpan: "md:col-span-1",
  },
  {
    title: "Publishing",
    description: "Share your notes with a single click. Beautiful by default.",
    icon: Share2,
    colSpan: "md:col-span-1",
  },
  {
    title: "Instant search",
    description: "Find anything in milliseconds with our blazing fast search.",
    icon: Search,
    colSpan: "md:col-span-1",
  },
  {
    title: "AI assistant",
    description: "Let AI help you organize, summarize, and expand your thoughts.",
    icon: Sparkles,
    colSpan: "md:col-span-1",
  },
];

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for spotlight
  const springConfig = { stiffness: 100, damping: 30 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card relative overflow-hidden p-8 ${className}`}
      style={{ borderRadius: "24px" }} // STRICT: rounded-3xl
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          left: spotlightX,
          top: spotlightY,
          transform: "translate(-50%, -50%)",
        }}
      />
      
      {children}
    </motion.div>
  );
}

export default function FeatureGrid() {
  return (
    <section className="w-full max-w-6xl px-4 py-40 mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Everything you need
        </h2>
        <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
          A complete toolkit for capturing, organizing, and connecting your thoughts.
        </p>
      </motion.div>

      {/* Feature Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {features.map((feature, index) => (
          <SpotlightCard
            key={index}
            className={`col-span-1 ${feature.colSpan} group min-h-[200px] flex flex-col justify-between`}
          >
            {/* Icon Wrapper - STRICT: bg-white/5, rounded-xl */}
            <div className="icon-wrapper mb-6">
              <feature.icon 
                className="w-5 h-5 text-[#A855F7]" 
                strokeWidth={1.5} // STRICT: Fine/Premium look
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2 text-glow-hover">
                {feature.title}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </motion.div>
    </section>
  );
}
