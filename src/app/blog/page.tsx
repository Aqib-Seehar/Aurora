"use client";

import Footer from "@/components/Footer";
import SectionReveal from "@/components/ui/SectionReveal";
import PageHeader from "@/components/layouts/PageHeader";
import { motion } from "framer-motion";

const posts = [
  {
    title: "The Future of AI in Note-taking",
    excerpt: "How LLMs are transforming personal knowledge management from static archives to active thinking partners.",
    date: "Oct 12, 2025",
    tag: "Thought Leadership"
  },
  {
    title: "Changelog v2.0: Speed & Sync",
    excerpt: "We rebuilt our sync engine from the ground up using CRDTs. Here is why that matters for your data integrity.",
    date: "Sep 28, 2025",
    tag: "Engineering"
  },
  {
    title: "Designing for Focus",
    excerpt: "A deep dive into our design philosophy. Why we chose black and white, and why typography matters more than you think.",
    date: "Sep 15, 2025",
    tag: "Design"
  },
  {
    title: "My Workflow: Sarah Drasner",
    excerpt: "Engineering Director at Google shares how she uses Reflect to manage her daily standups and technical specs.",
    date: "Aug 30, 2025",
    tag: "Community"
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center w-full bg-black min-h-screen pt-24">
      <SectionReveal>
        <PageHeader 
          title="Latest from Aurora"
          description="Thoughts on productivity, design, and engineering from the team behind Reflect."
          badge="Blog"
        />
      </SectionReveal>

      <div className="w-full max-w-6xl px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <SectionReveal key={post.title} delay={i * 0.1}>
              <motion.div 
                className="glass-card p-8 rounded-3xl h-full hover:bg-white/5 transition-colors cursor-pointer group"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">{post.tag}</span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{post.title}</h3>
                <p className="text-slate-400 leading-relaxed">{post.excerpt}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
