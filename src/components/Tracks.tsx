"use client";

import { LANDING_CONTENT } from "../constants/content";
import { Check, ShieldAlert } from "lucide-react";

export default function Tracks() {
  const { title, subtitle, list } = LANDING_CONTENT.tracks;

  const handleSelectTrack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector("#registration");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="tracks" className="py-24 bg-brand-bgAlt relative overflow-hidden scroll-mt-12">
      {/* Structural horizontal blueprint line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-ink/5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-ink/5" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Accent glow lights */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="font-mono text-[10px] font-bold text-brand-lavender uppercase tracking-widest bg-brand-lavender/10 px-3 py-1 rounded-md">
            [PARTICIPATION_ROLES]
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-ink mt-4 mb-4">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-brand-lavender mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg text-brand-ink/75">
            {subtitle}
          </p>
        </div>

        {/* Global Warning Banner highlighting the Unified Category rating */}
        <div className="reveal max-w-2xl mx-auto mb-12 p-4 bg-brand-yellow/10 border border-brand-yellow/30 rounded-2xl flex items-center gap-3.5 shadow-sm">
          <ShieldAlert className="w-6 h-6 text-brand-yellow shrink-0" style={{ filter: "brightness(0.9)" }} />
          <p className="font-sans text-xs sm:text-sm text-brand-ink/80 leading-relaxed font-semibold">
            Обратите внимание: индивидуальные исследователи и команды соревнуются в <span className="text-brand-tealDeep underline decoration-wavy">единой категории</span>. Критерии оценивания решений полностью идентичны.
          </p>
        </div>

        {/* Tracks Grid (2 Columns, Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {list.map((track, idx) => (
            <div
              key={idx}
              className={`reveal flex flex-col p-8 rounded-3xl border-2 bg-brand-bg/75 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative group bg-gradient-to-b ${
                track.gradient
              } ${track.borderColor}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Header Badge */}
              <div className="mb-6 flex justify-between items-center">
                <span className={`font-sans font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm ${track.tagColor}`}>
                  {track.role}
                </span>
                
                <span className="font-mono text-[9px] text-brand-ink/40 font-bold">
                  [STANDINGS: UNIFIED]
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-2xl text-brand-ink mb-3">
                {track.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-brand-ink/75 leading-relaxed mb-6 flex-grow">
                {track.description}
              </p>

              {/* Divider */}
              <div className="h-px bg-brand-ink/10 my-6" />

              {/* Features List */}
              <ul className="space-y-3.5 mb-8">
                {track.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2.5">
                    <div className="p-0.5 rounded-full bg-brand-ink/5 text-brand-ink shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-brand-ink/80 font-semibold">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Trigger */}
              <button
                onClick={handleSelectTrack}
                className={`w-full py-4 font-sans font-bold text-sm rounded-xl transition-all duration-200 focus:outline-none cursor-pointer ${
                  track.title.includes("Командный")
                    ? "bg-brand-teal text-white hover:bg-brand-tealDeep shadow-md hover:shadow-brand-teal/20"
                    : "bg-brand-ink text-brand-bg hover:bg-brand-teal hover:text-white"
                }`}
              >
                Зарегистрироваться
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
