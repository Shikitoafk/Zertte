"use client";

import { LANDING_CONTENT } from "../constants/content";
import { Target, Users, Award, ShieldCheck } from "lucide-react";

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

  const getHoverGlow = (color: string) => {
    switch (color) {
      case "teal":
        return "hover:border-brand-teal/40 hover:shadow-glow-teal";
      case "coral":
        return "hover:border-brand-coral/40 hover:shadow-glow-coral";
      case "yellow":
        return "hover:border-brand-yellow/50 hover:shadow-glow-yellow";
      default:
        return "hover:border-brand-teal/40";
    }
  };

  const getBgGlowColor = (color: string) => {
    switch (color) {
      case "teal":
        return "bg-brand-teal/10 text-brand-teal";
      case "coral":
        return "bg-brand-coral/10 text-brand-coral";
      case "yellow":
        return "bg-brand-yellow/10 text-brand-yellow";
      default:
        return "bg-brand-teal/10 text-brand-teal";
    }
  };

  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden scroll-mt-12">
      {/* Decorative vertical blueprint lines (Dark) */}
      <div className="absolute top-0 bottom-0 left-[15%] w-px bg-white/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[15%] w-px bg-white/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="font-mono text-[10px] font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-md border border-brand-teal/20">
            [ABOUT_OVERVIEW]
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-4">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-brand-teal mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg text-white/70">
            {subtitle}
          </p>
        </div>

        {/* Bento Grid Layout (6-Column grid framework) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-stretch">
          
          {/* Card 1: Цель чемпионата (md:col-span-3) */}
          <div
            className={`reveal flex flex-col p-8 rounded-3xl glass-panel hover:bg-slate-900/60 transition-all duration-300 hover:-translate-y-0.5 relative group overflow-hidden md:col-span-3 ${getHoverGlow(
              cards[0].color
            )}`}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-[9px] font-bold text-white/30 tracking-wider">[SECTION: PURPOSE // 0x01]</span>
              <span className="font-mono text-[9px] font-bold text-brand-teal">ACTIVE</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl ${getBgGlowColor(cards[0].color)}`}>
                {getIcon(cards[0].color)}
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                {cards[0].title}
              </h3>
            </div>
            <div className="h-px bg-white/5 w-full mb-6" />
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed flex-grow mb-8">
              {cards[0].description}
            </p>
            <div className="mt-auto flex items-center justify-between font-mono text-[8px] text-white/20 border-t border-white/5 pt-4">
              <span>A T G C T G C T G C T G C</span>
              <span>[TARGET: BIOINFO]</span>
            </div>
          </div>

          {/* Card 2: Кто может участвовать? (md:col-span-3) */}
          <div
            className={`reveal flex flex-col p-8 rounded-3xl glass-panel hover:bg-slate-900/60 transition-all duration-300 hover:-translate-y-0.5 relative group overflow-hidden md:col-span-3 ${getHoverGlow(
              cards[1].color
            )}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-[9px] font-bold text-white/30 tracking-wider">[SECTION: ELIGIBILITY // 0x02]</span>
              <span className="font-mono text-[9px] font-bold text-brand-coral">GRADES_8_12</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl ${getBgGlowColor(cards[1].color)}`}>
                {getIcon(cards[1].color)}
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                {cards[1].title}
              </h3>
            </div>
            <div className="h-px bg-white/5 w-full mb-6" />
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed flex-grow mb-6">
              {cards[1].description}
            </p>
            
            {/* Visual Mini Parameter (Bento Grid decoration) */}
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 mb-6 flex items-center justify-between font-mono text-[10px] text-white/60">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-coral" /> Биология + IT</span>
              <span>Вход свободный</span>
            </div>

            <div className="mt-auto flex items-center justify-between font-mono text-[8px] text-white/20 border-t border-white/5 pt-4">
              <span>C G A T C G A T C G A T C</span>
              <span>[LOC: SCHOOL_STUDENTS]</span>
            </div>
          </div>

          {/* Card 3: Что получают участники? (md:col-span-6 - Wide Bento Cell) */}
          <div
            className={`reveal flex flex-col p-8 rounded-3xl glass-panel hover:bg-slate-900/60 transition-all duration-300 hover:-translate-y-0.5 relative group overflow-hidden md:col-span-6 ${getHoverGlow(
              cards[2].color
            )}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-[9px] font-bold text-white/30 tracking-wider">[SECTION: OUTCOMES // 0x03]</span>
              <span className="font-mono text-[9px] font-bold text-brand-yellow">PRIZES_RELEASED</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${getBgGlowColor(cards[2].color)}`}>
                    {getIcon(cards[2].color)}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
                    {cards[2].title}
                  </h3>
                </div>
                <div className="h-px bg-white/5 w-full" />
                <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
                  {cards[2].description}
                </p>
              </div>

              {/* Right Mini metrics block (Premium Bento detail) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950/40 border border-white/5 rounded-2xl text-center">
                  <span className="block font-mono text-[9px] text-white/40 mb-1">ФИНДБЭК</span>
                  <span className="font-display font-bold text-base text-brand-teal">100% Эксперты</span>
                </div>
                <div className="p-4 bg-slate-950/40 border border-white/5 rounded-2xl text-center">
                  <span className="block font-mono text-[9px] text-white/40 mb-1">МАТЕРИАЛЫ</span>
                  <span className="font-display font-bold text-base text-brand-yellow">Колоночный QC</span>
                </div>
                <div className="p-4 bg-slate-950/40 border border-white/5 rounded-2xl text-center col-span-2">
                  <span className="block font-mono text-[9px] text-white/40 mb-1">ПОРТФОЛИО ДЛЯ ВУЗА</span>
                  <span className="font-display font-bold text-base text-brand-lavender">Сертификаты и призы</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between font-mono text-[8px] text-white/20 border-t border-white/5 pt-4">
              <span>T A C G T A C G T A C G T A C G T A C G T A C G</span>
              <span>[REWARDS: VALUABLE_PRIZES]</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
