"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  Shield, 
  Share2, 
  Search, 
  Smartphone, 
  Globe 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Built for speed",
    description: "Instantly syncs across all your devices. Offline-first architecture ensures you never lose a thought.",
    gradient: "from-amber-500/20 to-orange-500/20",
    accent: "text-amber-400"
  },
  {
    icon: Shield,
    title: "End-to-end encryption",
    description: "Your notes are encrypted locally before they ever touch our servers. Only you can read them.",
    gradient: "from-green-500/20 to-emerald-500/20",
    accent: "text-emerald-400"
  },
  {
    icon: Share2,
    title: "Seamless sharing",
    description: "Share notes with a single click. Collaborate with your team in real-time with perfect sync.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "text-cyan-400"
  },
  {
    icon: Search,
    title: "Instant search",
    description: "Find anything in milliseconds. Our fuzzy search algorithm understands what you mean.",
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400"
  },
  {
    icon: Smartphone,
    title: "Mobile first",
    description: "A native iOS app that feels like magic. Capture thoughts on the go with zero friction.",
    gradient: "from-rose-500/20 to-red-500/20",
    accent: "text-rose-400"
  },
  {
    icon: Globe,
    title: "Publish to web",
    description: "Turn any note into a public webpage. Perfect for blogs, documentation, or sharing ideas.",
    gradient: "from-indigo-500/20 to-violet-500/20",
    accent: "text-indigo-400"
  }
];

// Reusable card component without 3D rotation, just subtle physics
function FeatureCard({ feature, index }: { feature: any, index: number }) {
  return (
    <motion.div
      className="glass-card relative overflow-hidden p-8 flex flex-col h-full"
      style={{ borderRadius: "24px" }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Icon */}
      <div className="icon-wrapper w-14 h-14 mb-6 flex items-center justify-center">
        <feature.icon className={`w-7 h-7 ${feature.accent}`} strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">
        {feature.title}
      </h3>
      <p className="text-slate-400 leading-relaxed text-base">
        {feature.description}
      </p>

      {/* Subtle Gradient Blob */}
      <div className={`absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br ${feature.gradient} blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
    </motion.div>
  );
}

export default function FeatureGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax Lift: Odd columns move slightly differently than even ones to create depth
  // We use a spring to smooth out the parallax movement itself
  const physicsSpring = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const yEven = useSpring(useTransform(scrollYProgress, [0, 1], [0, 0]), physicsSpring);
  const yOdd = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), physicsSpring);

  return (
    <section ref={containerRef} className="w-full max-w-6xl px-4 py-40 mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
          Everything you need <br /> to think clearly.
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Powerful features wrapped in a beautiful, distraction-free interface.
        </p>
      </div>

      {/* Grid Layout - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          // Determine column for parallax logic (simplified for 3-col grid)
          // Col 0, 3, 6... (Mod 3 == 0) -> Even (No lift)
          // Col 1, 4, 7... (Mod 3 == 1) -> Odd (Lift)
          // Col 2, 5, 8... (Mod 3 == 2) -> Even (No lift, or different lift)
          
          const isParallax = index % 2 !== 0; // Simple even/odd logic for visual interest
          const y = isParallax ? yOdd : yEven;

          return (
            <motion.div key={feature.title} style={{ y }} className="h-full">
              <FeatureCard feature={feature} index={index} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
