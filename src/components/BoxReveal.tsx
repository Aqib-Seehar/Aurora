"use client";

import { motion } from "framer-motion";

export default function BoxReveal() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black flex items-center justify-center">
      {/* Container with masking to hide top UI elements of the Spline scene */}
      <div className="relative w-full max-w-7xl h-[800px] -mt-24 pointer-events-none">
        <iframe 
          src="https://my.spline.design/boxeshover-qYepDAi1ZKpwEMbnkpfpv4Hd/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full scale-110" // Scale up slightly to push edges out
          title="Interconnected Boxes"
          style={{ pointerEvents: "auto" }} // Allow interaction with the boxes
        />
        
        {/* Top mask to hide "Home, Cases..." text */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black via-black to-transparent z-10" />
        
        {/* Side masks for seamless blending */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
        
        {/* Bottom blend */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      <motion.div 
        className="absolute bottom-12 z-20 text-center cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#94A3B8] text-sm uppercase tracking-widest bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          Interactive Architecture
        </p>
      </motion.div>
    </section>
  );
}
