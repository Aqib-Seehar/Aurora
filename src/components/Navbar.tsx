"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Product", "Pricing", "Company", "Blog"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ${
        scrolled ? "pt-4" : "pt-6"
      }`}
    >
      <div
        className={`glass-card flex items-center justify-between px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "w-[90%] max-w-5xl"
            : "w-[95%] max-w-6xl bg-transparent shadow-none"
        }`}
        style={{
          borderRadius: "9999px", // STRICT: rounded-full for nav container
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
            <div className="w-4 h-4 bg-black rounded-full" />
          </div>
          <span className="font-semibold text-white tracking-tight text-lg text-glow-hover">
            Aurora
          </span>
        </Link>

        {/* Navigation Links with Magnetic Effect */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <MagneticButton key={item} magneticStrength={0.2}>
              <Link
                href={item === "Pricing" ? "/pricing" : "#"}
                className="px-4 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors duration-200 text-glow-hover"
              >
                {item}
              </Link>
            </MagneticButton>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <MagneticButton magneticStrength={0.15}>
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-[#94A3B8] transition-colors px-4 py-2"
            >
              Log in
            </Link>
          </MagneticButton>

          <MagneticButton magneticStrength={0.2}>
            <button
              className="bg-[#A855F7] text-white px-5 py-2.5 text-sm font-semibold transition-all hover:bg-[#C084FC] btn-glow"
              style={{ borderRadius: "9999px" }} // STRICT: rounded-full for buttons
            >
              Start Free Trial
            </button>
          </MagneticButton>
        </div>
      </div>
    </motion.nav>
  );
}
