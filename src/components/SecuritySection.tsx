"use client";

import { motion } from "framer-motion";

export default function SecuritySection() {
  return (
    <section className="w-full py-32 flex flex-col items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-[var(--color-accent-purple)]/10 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mb-8"
      >
        <div className="w-24 h-24 mx-auto bg-linear-to-br from-gray-800 to-black rounded-3xl flex items-center justify-center border border-[var(--color-border)] shadow-[0_0_40px_rgba(168,85,247,0.2)]">
          {/* Lock Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Hardened security.</h2>
        <p className="text-[var(--color-text-secondary)] text-lg mb-8">
          End-to-end encryption means only you can see your notes. Not even we can read them. Your data is yours.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {["E2E Encrypted", "No ads", "No tracking"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white/5 text-sm text-[var(--color-text-secondary)] backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
