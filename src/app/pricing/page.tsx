"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";
import PageHeader from "@/components/layouts/PageHeader";

const plans = [
  {
    name: "Personal",
    monthlyPrice: 10,
    yearlyPrice: 8,
    description: "Perfect for individual note-takers",
    features: [
      "Unlimited notes",
      "Networked thought",
      "iOS & Mac apps",
      "End-to-end encryption",
      "Browser extension",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 12,
    description: "For power users and professionals",
    features: [
      "Everything in Personal",
      "AI assistant (GPT-4)",
      "Audio transcription",
      "Priority support",
      "Advanced search filters",
      "API access",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    monthlyPrice: 25,
    yearlyPrice: 20,
    description: "Collaborate with your team",
    features: [
      "Everything in Pro",
      "Shared workspaces",
      "Team permissions",
      "Admin dashboard",
      "SSO / SAML",
      "Dedicated support",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <PageHeader
          badge="Simple Pricing"
          title="One price, all features"
          description="No hidden fees. No complicated tiers. Just simple, transparent pricing."
        />

        {/* Monthly/Yearly Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div
            className="flex items-center gap-1 p-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]"
            style={{ borderRadius: "9999px" }} // STRICT: rounded-full
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`relative px-6 py-2.5 text-sm font-medium transition-colors ${
                !isYearly ? "text-white" : "text-[#94A3B8]"
              }`}
              style={{ borderRadius: "9999px" }}
            >
              {!isYearly && (
                <motion.div
                  layoutId="pricing-toggle"
                  className="absolute inset-0 bg-[#A855F7]"
                  style={{ borderRadius: "9999px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>

            <button
              onClick={() => setIsYearly(true)}
              className={`relative px-6 py-2.5 text-sm font-medium transition-colors ${
                isYearly ? "text-white" : "text-[#94A3B8]"
              }`}
              style={{ borderRadius: "9999px" }}
            >
              {isYearly && (
                <motion.div
                  layoutId="pricing-toggle"
                  className="absolute inset-0 bg-[#A855F7]"
                  style={{ borderRadius: "9999px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">Yearly</span>
              <span className="relative z-10 ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`glass-card p-8 flex flex-col ${
                plan.highlighted
                  ? "ring-2 ring-[#A855F7] ring-offset-2 ring-offset-black"
                  : ""
              }`}
              style={{ borderRadius: "24px" }} // STRICT: rounded-3xl
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#A855F7] text-white text-xs font-semibold"
                  style={{ borderRadius: "9999px" }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-[#94A3B8] text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold text-white">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-[#94A3B8] ml-2">/ month</span>
                {isYearly && (
                  <p className="text-sm text-[#94A3B8] mt-1">
                    Billed annually
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div
                      className="w-5 h-5 flex items-center justify-center bg-[#A855F7]/20"
                      style={{ borderRadius: "12px" }} // STRICT: rounded-xl for inner
                    >
                      <Check className="w-3 h-3 text-[#A855F7]" strokeWidth={2} />
                    </div>
                    <span className="text-[#94A3B8]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-[#A855F7] text-white btn-glow hover:bg-[#C084FC]"
                    : "bg-white/5 text-white border border-[rgba(255,255,255,0.08)] hover:bg-white/10"
                }`}
                style={{ borderRadius: "9999px" }} // STRICT: rounded-full for buttons
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
