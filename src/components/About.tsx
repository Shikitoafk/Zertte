"use client";

import { LANDING_CONTENT } from "../constants/content";
import { Target, Users, Award } from "lucide-react";

export default function About() {
  const { title, subtitle, cards } = LANDING_CONTENT.about;

  const getIcon = (color: string) => {
    switch (color) {
      case "teal":
        return <Target className="w-6 h-6 text-brand-teal" />;
      case "coral":
        return <Users className="w-6 h-6 text-brand-coral" />;
      case "yellow":
        return <Award className="w-6 h-6 text-brand-yellow" style={{ filter: "brightness(0.9)" }} />;
      default:
        return <Target className="w-6 h-6 text-brand-teal" />;
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case "teal":
        return "hover:border-brand-teal/40 hover:shadow-brand-teal/5";
      case "coral":
        return "hover:border-brand-coral/40 hover:shadow-brand-coral/5";
      case "yellow":
        return "hover:border-brand-yellow/50 hover:shadow-brand-yellow/5";
      default:
        return "hover:border-brand-teal/40";
    }
  };

  const getBgGlowColor = (color: string) => {
    switch (color) {
      case "teal":
        return "bg-brand-teal/5 text-brand-teal";
      case "coral":
        return "bg-brand-coral/5 text-brand-coral";
      case "yellow":
        return "bg-brand-yellow/5 text-brand-yellow";
      default:
        return "bg-brand-teal/5 text-brand-teal";
    }
  };

  const getDNASequence = (color: string) => {
    switch (color) {
      case "teal":
        return "A T G C T G C T G C T G C T G C";
      case "coral":
        return "C G A T C G A T C G A T C G A T";
      case "yellow":
        return "T A C G T A C G T A C G T A C G";
      default:
        return "A T G C T G C";
    }
  };

  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden scroll-mt-12">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[15%] w-px bg-brand-ink/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[15%] w-px bg-brand-ink/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="font-mono text-[10px] font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3 py-1 rounded-md">
            [ABOUT_OVERVIEW]
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-ink mt-4 mb-4">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-brand-teal mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg text-brand-ink/75">
            {subtitle}
          </p>
        </div>

        {/* 3 Cards Grid - Lab notebooks/spec sheets structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`reveal flex flex-col p-8 rounded-2xl border border-brand-ink/8 bg-brand-bgAlt/40 hover:bg-brand-bg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative group overflow-hidden ${getBorderColor(
                card.color
              )}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Top spec sheet indexing */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[9px] font-bold text-brand-ink/30 tracking-wider">
                  [SPEC_ID: 0x0{idx + 1}]
                </span>
                <span className="font-mono text-[9px] font-bold text-brand-ink/30">
                  STATUS: VERIFIED
                </span>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${getBgGlowColor(card.color)}`}>
                  {getIcon(card.color)}
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-brand-ink">
                  {card.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="h-px bg-brand-ink/5 w-full mb-6" />

              {/* Content Description */}
              <p className="font-sans text-sm sm:text-base text-brand-ink/75 leading-relaxed flex-grow mb-8">
                {card.description}
              </p>

              {/* Bottom genomic sequence deco */}
              <div className="mt-auto flex items-center justify-between font-mono text-[8px] text-brand-ink/20 border-t border-brand-ink/5 pt-4">
                <span className="tracking-widest uppercase">
                  {getDNASequence(card.color)}
                </span>
                <span>[COMPLETED]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
