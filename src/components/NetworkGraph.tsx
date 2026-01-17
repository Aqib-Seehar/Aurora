"use client";

import { motion } from "framer-motion";

export default function NetworkGraph() {
  return (
    <section className="w-full relative py-32 overflow-hidden flex flex-col items-center text-center">
      
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[var(--color-accent-purple)]/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 px-4 mb-16"
      >
        <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4 block">Networked Thought</span>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Give your brain <br/> superpowers.</h2>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
          Mirror the way your mind works by associating notes through back-links. No folders, no silos—just a web of ideas.
        </p>
      </motion.div>

      {/* Network Visual */}
      <div className="relative w-full max-w-5xl h-[500px] mx-auto">
        {/* Central Node */}
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center z-20 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
          animate={{ boxShadow: ["0 0 20px rgba(255,255,255,0.2)", "0 0 60px rgba(255,255,255,0.4)", "0 0 20px rgba(255,255,255,0.2)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center border border-[var(--color-border)]">
            <span className="font-bold text-white">Idea</span>
          </div>
        </motion.div>

        {/* Orbiting Nodes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 w-4 h-4 bg-[var(--color-accent-purple)] rounded-full z-10"
            style={{
              x: Math.cos(i * 60 * (Math.PI / 180)) * 200,
              y: Math.sin(i * 60 * (Math.PI / 180)) * 150,
            }}
            animate={{ 
              x: Math.cos((i * 60 + 20) * (Math.PI / 180)) * 210,
              y: Math.sin((i * 60 + 20) * (Math.PI / 180)) * 160,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${Math.cos(i * 60 * (Math.PI / 180)) * 200}px)`}
              y2={`calc(50% + ${Math.sin(i * 60 * (Math.PI / 180)) * 150}px)`}
              stroke="rgba(168, 85, 247, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
