"use client";

import { LANDING_CONTENT } from "../constants/content";
import { Check } from "lucide-react";

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
      {/* Decorative floating grids */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-ink mb-4">
            {title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-ink/75">
            {subtitle}
          </p>
        </div>

        {/* Tracks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {list.map((track, idx) => (
            <div
              key={idx}
              className={`reveal flex flex-col p-8 rounded-3xl border-2 bg-brand-bg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-b ${
                track.gradient
              } ${track.borderColor}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Header Badge */}
              <div className="mb-6 flex justify-between items-start">
                <span className={`font-sans font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider ${track.tagColor}`}>
                  {track.role}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-2xl text-brand-ink mb-3">
                {track.title}
              </h3>
              <p className="font-sans text-sm text-brand-ink/75 leading-relaxed mb-6 flex-grow">
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
                    <span className="font-sans text-xs sm:text-sm text-brand-ink/80 font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Trigger */}
              <button
                onClick={handleSelectTrack}
                className={`w-full py-3.5 font-sans font-bold text-sm rounded-xl transition-all duration-200 focus:outline-none ${
                  track.title.includes("Основной")
                    ? "bg-brand-teal text-white hover:bg-brand-tealDeep shadow-md hover:shadow-lg"
                    : "bg-brand-ink text-brand-bg hover:bg-brand-teal hover:text-white"
                }`}
              >
                Выбрать направление
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
