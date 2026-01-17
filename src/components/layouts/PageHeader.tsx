"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
  centered?: boolean;
}

export default function PageHeader({ 
  title, 
  description, 
  badge,
  centered = true 
}: PageHeaderProps) {
  return (
    <div className={`w-full max-w-4xl px-4 py-20 ${centered ? "text-center mx-auto" : ""} relative z-10`}>
      {badge && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono uppercase tracking-widest"
        >
          {badge}
        </motion.div>
      )}
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl"
      >
        {title}
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-purple-500/5 blur-[100px] pointer-events-none -z-10" />
    </div>
  );
}
