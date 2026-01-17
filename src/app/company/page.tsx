"use client";

import Footer from "@/components/Footer";
import SectionReveal from "@/components/ui/SectionReveal";
import PageHeader from "@/components/layouts/PageHeader";

const team = [
  { name: "Alex Chen", role: "Founder & CEO" },
  { name: "Sarah Jones", role: "Head of Product" },
  { name: "Marcus Lee", role: "Lead Engineer" },
  { name: "Emily White", role: "Brand Designer" },
];

export default function CompanyPage() {
  return (
    <div className="flex flex-col items-center w-full bg-black min-h-screen pt-24">
      <SectionReveal>
        <PageHeader 
          title="About Us"
          description="We are a small team of designers and engineers obsessed with tools for thought. Based in San Francisco and Remote."
          badge="Company"
        />
      </SectionReveal>

      {/* Mission Section */}
      <SectionReveal>
        <div className="w-full max-w-4xl px-4 py-20 text-center mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            "To build the world's best interface for your mind. We believe that better tools for thinking lead to better decisions, better writing, and a better world."
          </p>
        </div>
      </SectionReveal>

      {/* Team Grid */}
      <div className="w-full max-w-6xl px-4 py-20">
        <h3 className="text-white text-xl font-semibold mb-12 border-b border-white/10 pb-4">The Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
             <SectionReveal key={member.name} delay={i * 0.1}>
               <div className="text-center group">
                 <div className="w-32 h-32 mx-auto bg-white/5 rounded-full mb-6 border border-white/10 group-hover:border-purple-500/50 transition-colors" />
                 <h4 className="text-white font-medium text-lg">{member.name}</h4>
                 <p className="text-slate-500 text-sm mt-1">{member.role}</p>
               </div>
             </SectionReveal>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
