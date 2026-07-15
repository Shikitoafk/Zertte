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
    <section id="tracks" className="py-24 bg-brand-bg relative overflow-hidden scroll-mt-12">
      {/* Structural horizontal blueprint lines (Dark) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Accent glow lights */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="font-mono text-[10px] font-bold text-brand-lavender uppercase tracking-widest bg-brand-lavender/15 px-3 py-1 rounded-md border border-brand-lavender/20">
            [PARTICIPATION_ROLES]
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-4">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-brand-lavender mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg text-white/70">
            {subtitle}
          </p>
        </div>

        {/* Global Warning Banner highlighting the Unified Category rating */}
        <div className="reveal max-w-2xl mx-auto mb-12 p-4 bg-brand-yellow/10 border border-brand-yellow/25 rounded-2xl flex items-center gap-3.5 shadow-sm">
          <ShieldAlert className="w-6 h-6 text-brand-yellow shrink-0" style={{ filter: "brightness(0.9)" }} />
          <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">
            Обратите внимание: индивидуальные исследователи и команды соревнуются в <span className="text-brand-teal underline decoration-wavy">единой категории</span>. Критерии оценивания решений полностью идентичны.
          </p>
        </div>

        {/* Tracks Grid (2 Columns, Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {list.map((track, idx) => (
            <div
              key={idx}
              className={`reveal flex flex-col p-8 rounded-3xl glass-panel hover:bg-slate-900/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative group bg-gradient-to-b ${
                track.gradient
              } ${track.borderColor}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Header Badge */}
              <div className="mb-6 flex justify-between items-center">
                <span className={`font-sans font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm ${track.tagColor}`}>
                  {track.role}
                </span>
                
                <span className="font-mono text-[9px] text-white/40 font-bold">
                  [STANDINGS: UNIFIED]
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                {track.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-6 flex-grow">
                {track.description}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/10 my-6" />

              {/* Features List */}
              <ul className="space-y-3.5 mb-8">
                {track.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2.5">
                    <div className="p-0.5 rounded-full bg-white/5 text-white/80 border border-white/5 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-white/80 font-semibold">
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
                    ? "bg-gradient-to-r from-brand-teal to-brand-tealDeep text-white shadow-md shadow-brand-teal/20"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
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
