"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      
      {/* Spline 3D Background - Using iframe for reliable embedding */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://my.spline.design/nexbotrobotcharacterconcept-VG4xB8krdtO9M2TmTaWMFY7d/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Nexbot Robot Character"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "auto" }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        />
        
        {/* Gradient overlay to blend Spline with content */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent pointer-events-none" />
      </div>

      {/* Ambient Glow */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[100px] pointer-events-none z-0"
        style={{
          background: "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center max-w-[800px] px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-400">
              New: Our AI integration just landed
            </span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-[72px] leading-[1.1] font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-white to-gray-500 mb-4"
        >
          Think better with Aurora
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl leading-relaxed text-gray-400 max-w-2xl mb-10"
        >
          Never miss a note, idea or connection.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-4"
        >
          <Button size="lg" variant="primary">
            Download for Mac
          </Button>
          <Button size="lg" variant="secondary">
            Open in Browser
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
