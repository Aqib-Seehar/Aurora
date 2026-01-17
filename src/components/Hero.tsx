"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to this container (200vh height)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Phase 1 (0-50%): Text fades out
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, 100]);

  // Phase 2 (50-100%): Scene scales up and blurs as content covers it
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const sceneBlur = useTransform(scrollYProgress, [0.4, 0.9], ["blur(0px)", "blur(10px)"]);
  const sceneOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.2]); // Fade out slightly at very end

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full bg-black">
      {/* Sticky Viewport - Pinned 3D Scene */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Animated 3D Scene Container */}
        <motion.div 
          style={{ 
            scale: sceneScale, 
            filter: sceneBlur,
            opacity: sceneOpacity
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* MASKING WRAPPER: Cuts off bottom-right logo */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
             <iframe 
               src="https://my.spline.design/nexbotrobotcharacterconcept-VG4xB8krdtO9M2TmTaWMFY7d/"
               frameBorder="0"
               width="100%"
               height="100%"
               title="Nexbot Robot Character"
               className="w-full h-full object-cover scale-[1.05]" // Scaling up slightly pushes logo out of view if masked
               style={{ pointerEvents: "auto", transformOrigin: "center center" }}
               allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
             />
          </div>
          {/* Gradient overlay for seamless blending */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* Hero Content Layer - Fades out on scroll AND Fades in on mount */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 p-6 text-center">
          <motion.div 
            style={{ opacity: textOpacity, y: textY }} // Scroll transform
            className="flex flex-col items-center"
          >
             {/* Inner Motion for Initial Fade In */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
               className="max-w-4xl mx-auto space-y-8"
             >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white drop-shadow-2xl">
              Think Better with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#A855F7] to-[#ec4899]">
                Aurora
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              A networked note-taking tool that mirrors the way your mind works. 
              Secure, end-to-end encrypted, and beautiful.
            </p>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
