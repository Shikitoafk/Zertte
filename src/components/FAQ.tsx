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
    <section id="faq" className="py-24 bg-brand-bgAlt/50 relative overflow-hidden scroll-mt-12">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-brand-lavender/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-ink mb-4">
            {title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-ink/75">
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
                className="reveal bg-brand-bg rounded-2xl border border-brand-ink/10 shadow-sm overflow-hidden transition-all duration-300"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-base sm:text-lg text-brand-ink hover:text-brand-teal focus:outline-none transition-colors group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`p-1.5 rounded-lg bg-brand-ink/5 group-hover:bg-brand-teal/10 text-brand-ink/50 group-hover:text-brand-teal shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100 border-t border-brand-ink/5" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="px-6 py-5 font-sans text-sm sm:text-base text-brand-ink/75 leading-relaxed bg-brand-bgAlt/20">
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
