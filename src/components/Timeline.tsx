"use client";

import { LANDING_CONTENT } from "../constants/content";

const STEP_COLORS = [
  "bg-brand-lavender text-white ring-brand-lavender/30",
  "bg-brand-yellow text-brand-ink ring-brand-yellow/30",
  "bg-brand-teal text-white ring-brand-teal/30",
  "bg-brand-coral text-white ring-brand-coral/30",
];

export default function Timeline() {
  const { title, subtitle, steps } = LANDING_CONTENT.timeline;

  return (
    <section id="timeline" className="py-24 bg-brand-dark text-white relative overflow-hidden scroll-mt-12">
      {/* Background genetic grid decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

      {/* Decorative colored glow orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-brand-coral/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            {title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/70">
            {subtitle}
          </p>
        </div>

        {/* Pipeline Container */}
        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-white/20 z-0" />

          {/* Grid Layout: 2 columns on mobile, 4 columns on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-10 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center reveal" style={{ transitionDelay: `${idx * 0.15}s` }}>
                {/* Step circle */}
                <div className="relative mb-6">
                  {/* Step ID tag */}
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold text-white/50 tracking-widest">
                    @STEP:{step.step}
                  </span>

                  {/* Circular nucleotide-style node */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-lg ring-8 transition-transform duration-300 hover:scale-110 z-10 ${STEP_COLORS[idx]}`}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Step Metadata & Content */}
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-brand-yellow mb-2 px-2.5 py-0.5 bg-white/5 rounded">
                  {step.date}
                </span>

                <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3">
                  {step.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-white/70 max-w-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
