"use client";

import { useState } from "react";
import { LANDING_CONTENT } from "../constants/content";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const { title, subtitle, questions } = LANDING_CONTENT.faq;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-brand-bg relative overflow-hidden scroll-mt-12">
      {/* Decorative vertical blueprint lines (Dark) */}
      <div className="absolute top-0 bottom-0 left-[15%] w-px bg-white/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[15%] w-px bg-white/5 hidden md:block" />

      {/* Background blurs */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-brand-lavender/5 rounded-full blur-[100px] pointer-events-none select-none" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none select-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-[10px] font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-md border border-brand-teal/20">
            [FAQ_REGISTRY]
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-4">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-brand-teal mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg text-white/70">
            {subtitle}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {questions.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="reveal glass-panel rounded-2xl transition-all duration-300 overflow-hidden shadow-md"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-base sm:text-lg text-white hover:text-brand-teal focus:outline-none transition-colors group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`p-1.5 rounded-lg bg-white/5 group-hover:bg-brand-teal/10 text-white/40 group-hover:text-brand-teal shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="px-6 py-5 font-sans text-sm sm:text-base text-white/70 leading-relaxed bg-white/[0.02]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
