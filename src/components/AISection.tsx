"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Simulation steps for the AI terminal
const aiSteps = [
  { text: "Scanning recent meeting notes...", color: "text-blue-400" },
  { text: "Identifying action items...", color: "text-amber-400" },
  { text: "Finding correlations...", color: "text-purple-400" },
  { text: "Generating summary...", color: "text-green-400" },
];

export default function AISection() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % aiSteps.length);
    }, 2000); // Change step every 2 seconds for a lively feel

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-48 overflow-hidden">
      {/* Spline 3D Background - Glass Disc Rotating */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://my.spline.design/glassdiscrotating-C1LyE8bdu62sZK7AmPZPnpRX/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Glass Disc Rotating"
          className="absolute inset-0 w-full h-full scale-150"
          style={{ pointerEvents: "none" }}
        />
        
        {/* Gradient overlays for blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#A855F7] font-semibold tracking-wide uppercase text-sm mb-4 block">Aurora AI</span>
            <h2 className="text-5xl font-bold mb-6 leading-tight text-gradient">Notes with an <br/> AI assistant.</h2>
            <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">
              Aurora uses GPT-4 to help you organize your thoughts, summarize meetings, and clear up your writing. It's like having a second brain that works for you.
            </p>
            
            <ul className="space-y-4">
              {["Audio transcription", "Backlink detection", "Style & grammar checks"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#94A3B8]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="flex-1 w-full">
          <motion.div 
            className="glass-card p-8 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ borderRadius: "24px" }}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 opacity-50 border-b border-white/10 pb-4">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500" />
                 <div className="w-3 h-3 rounded-full bg-green-500" />
               </div>
               <div className="text-xs font-mono text-slate-500">ai_processor.exe</div>
            </div>

            <div className="space-y-4 font-mono text-sm h-[200px] relative">
              <div className="text-[#94A3B8] opacity-50">// Initializing neural link...</div>
              
              <AnimatePresence mode="popLayout">
                <motion.div 
                  key={stepIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                     <span className="text-[#A855F7]">➜</span>
                     <span className={aiSteps[stepIndex].color}>{aiSteps[stepIndex].text}</span>
                  </div>
                  
                  {/* Fake Progress Bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
                    <motion.div 
                      className="h-full bg-[#A855F7]" 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Persistent Output Card */}
               <motion.div 
                 className="absolute bottom-0 left-0 right-0 p-4 bg-white/5 border border-white/10 mt-4 text-[#94A3B8] leading-relaxed backdrop-blur-md"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 style={{ borderRadius: "12px" }}
               >
                 <div className="flex items-center gap-2 mb-2">
                    <ZapIcon className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs uppercase tracking-wider text-slate-400">Insight Generated</span>
                 </div>
                 <p className="text-xs">
                   Found 3 potential conflicts in "Q4 Strategy" and "Budget Review". Suggested rescheduling per team availability.
                 </p>
               </motion.div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A855F7]/20 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
