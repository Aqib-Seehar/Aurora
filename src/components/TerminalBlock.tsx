"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TerminalBlockProps {
  code: string;
  typingSpeed?: number;
  className?: string;
}

// Syntax highlighting function
function highlightSyntax(text: string): React.ReactNode[] {
  const tokens: React.ReactNode[] = [];
  const patterns = [
    { regex: /(\/\/.*$)/gm, className: "syntax-comment" },
    { regex: /\b(const|let|var|function|return|import|export|from|async|await|if|else|for|while)\b/g, className: "syntax-keyword" },
    { regex: /("[^"]*"|'[^']*'|`[^`]*`)/g, className: "syntax-string" },
    { regex: /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, className: "syntax-function" },
  ];

  // Simple word-by-word highlighting
  const words = text.split(/(\s+)/);
  
  return words.map((word, i) => {
    // Check for keywords
    if (/^(const|let|var|function|return|import|export|from|async|await|if|else|for|while)$/.test(word)) {
      return <span key={i} className="syntax-keyword">{word}</span>;
    }
    // Check for strings
    if (/^["'`].*["'`]$/.test(word)) {
      return <span key={i} className="syntax-string">{word}</span>;
    }
    // Check for comments
    if (word.startsWith("//")) {
      return <span key={i} className="syntax-comment">{word}</span>;
    }
    // Default
    return <span key={i} className="text-white">{word}</span>;
  });
}

export function TerminalBlock({ code, typingSpeed = 30, className = "" }: TerminalBlockProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + code[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, code, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`terminal-window ${className}`}
    >
      {/* Terminal Header with Traffic Lights */}
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="ml-4 text-xs text-[#94A3B8]">reflect.ts</span>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        <pre className="whitespace-pre-wrap">
          {highlightSyntax(displayedText)}
          {!isComplete && (
            <motion.span
              className="inline-block w-2 h-4 bg-[#A855F7] ml-0.5"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          )}
        </pre>
      </div>
    </motion.div>
  );
}

// Pre-configured terminal with sample code
export function WorkflowTerminal() {
  const sampleCode = `import { Reflect } from "@reflect/core"

const notes = await Reflect.search("quarterly goals")

// AI-powered summarization
const summary = await Reflect.ai.summarize(notes, {
  format: "bullet-points",
  maxLength: 150
})

console.log(summary)
// ✓ Q1: Launch mobile app
// ✓ Q2: Integrate AI features
// → Q3: Scale to 1M users`;

  return (
    <TerminalBlock 
      code={sampleCode}
      typingSpeed={25}
      className="max-w-2xl mx-auto"
    />
  );
}

export default TerminalBlock;
