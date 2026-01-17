"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const aiPrompts = [
  "Summarize this meeting note...",
  "List action items from the discussion...",
  "Draft a follow-up email...",
  "Find connections to 'Project Aurora'..."
];

export default function AISection() {
  const [text, setText] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPrompt = aiPrompts[promptIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPrompt) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPromptIndex((prev) => (prev + 1) % aiPrompts.length);
      } else {
        setText(currentPrompt.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, promptIndex]);

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
            style={{ borderRadius: "24px" }} // STRICT: rounded-3xl
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 opacity-50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="text-[#94A3B8]">// AI Command Palette</div>
              <div className="text-[#A855F7] flex items-center">
                <span className="mr-2">&gt;</span>
                {text}
                <span className="w-2 h-4 bg-[#A855F7] ml-1 animate-pulse"/>
              </div>
              
              <div 
                className="p-4 bg-white/5 border border-[rgba(255,255,255,0.08)] mt-4 text-[#94A3B8] leading-relaxed"
                style={{ borderRadius: "12px" }} // STRICT: rounded-xl for inner
              >
                <span className="text-[#94A3B8] text-xs uppercase mb-2 block opacity-50">Output</span>
                Here is a summary of your meeting notes with action items highlighted...
              </div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A855F7]/20 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
