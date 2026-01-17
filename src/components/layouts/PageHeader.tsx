"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  badge,
  title,
  description,
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`pt-32 pb-16 text-center ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#A855F7] bg-[#A855F7]/10 border border-[#A855F7]/30"
            style={{ borderRadius: "9999px" }} // STRICT: rounded-full for badges
          >
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-6xl font-bold text-gradient mb-6"
      >
        {title}
      </motion.h1>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-[#94A3B8] max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

export default PageHeader;
