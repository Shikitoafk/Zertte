"use client";

import { LANDING_CONTENT } from "../constants/content";
import DNAHelix from "./DNAHelix";

export default function Hero() {
  const { eyebrow, title, titleHighlight, subtitle, badges, primaryCta, secondaryCta } = LANDING_CONTENT.hero;

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-brand-bg bg-grid-pattern">
      {/* Structural Thin Lines - Scientific UI Blueprint layout (Dark) */}
      <div className="absolute inset-y-0 left-[10%] w-px bg-white/5 hidden md:block" />
      <div className="absolute inset-y-0 right-[10%] w-px bg-white/5 hidden md:block" />
      <div className="absolute inset-x-0 top-[18%] h-px bg-white/5 hidden md:block" />
      <div className="absolute inset-x-0 bottom-[18%] h-px bg-white/5 hidden md:block" />

      {/* Floating Blueprint Coordinates */}
      <div className="absolute top-24 left-[11%] font-mono text-[9px] text-white/35 uppercase tracking-widest hidden md:block select-none">
        [SYS_LOC: NODE_01 // SEC_HERO]
      </div>
      <div className="absolute bottom-24 right-[11%] font-mono text-[9px] text-white/35 uppercase tracking-widest hidden md:block select-none">
        [MATRIX: X_782.1 // Y_-112.5]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Title & Sequencing Status Dashboard */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* FASTQ styled read header */}
            <div className="mb-6 inline-flex items-center self-start bg-slate-900 text-white px-3.5 py-1.5 rounded-lg shadow-md border border-white/10">
              <span className="font-mono text-xs font-bold tracking-wider text-brand-yellow">
                {eyebrow}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal ml-3.5 animate-ping" />
            </div>

            {/* Main Header */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6.5xl text-white tracking-tight leading-[1.05] mb-6">
              {title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-tealDeep to-brand-lavender">
                {titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              {subtitle}
            </p>

            {/* Bioinformatic Metadata Panel (Bespoke Dashboard design element) */}
            <div className="mb-8 p-5 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl max-w-lg shadow-inner shadow-black/40">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px] text-white/80">
                <div>
                  <span className="text-white/40 font-bold">INSTRUMENT:</span> <br />
                  <span>Illumina NovaSeq 6000</span>
                </div>
                <div>
                  <span className="text-white/40 font-bold">READ TYPE:</span> <br />
                  <span>Paired-End (2x150bp)</span>
                </div>
                <div>
                  <span className="text-white/40 font-bold">FLOWCELL TYPE:</span> <br />
                  <span>S4 Reagent Kit v1.5</span>
                </div>
                <div>
                  <span className="text-white/40 font-bold">AUDIENCE:</span> <br />
                  <span>School students (Grades 8–12)</span>
                </div>
              </div>
            </div>

            {/* Target Audience Badges */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {badges.map((badge, idx) => {
                let colorClass = "";
                if (badge.type === "yellow") {
                  colorClass = "bg-brand-yellow/10 text-brand-yellow border-brand-yellow/25";
                } else if (badge.type === "teal") {
                  colorClass = "bg-brand-teal/10 text-brand-teal border-brand-teal/25";
                } else {
                  colorClass = "bg-brand-lavender/10 text-brand-lavender border-brand-lavender/25";
                }
                return (
                  <span
                    key={idx}
                    className={`font-sans font-bold text-xs px-3.5 py-1.5 rounded-full border shadow-sm ${colorClass}`}
                  >
                    {badge.text}
                  </span>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={(e) => handleCtaClick(e, "#registration")}
                className="px-8 py-4 bg-gradient-to-r from-brand-teal to-brand-tealDeep hover:brightness-110 text-white font-sans font-bold rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-brand-teal/20 focus:outline-none cursor-pointer"
              >
                {primaryCta}
              </button>
              <button
                onClick={(e) => handleCtaClick(e, "#case")}
                className="px-8 py-4 bg-transparent hover:bg-white/5 border-2 border-white/10 hover:border-white text-white font-sans font-bold rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none cursor-pointer"
              >
                {secondaryCta}
              </button>
            </div>
          </div>

          {/* Right Column: DNA Helix enclosed in a scientific viewer frame */}
          <div className="lg:col-span-5 flex items-center justify-center reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="p-4 rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl relative max-w-sm w-full">
              {/* Corner coordinate tags for tech styling */}
              <span className="absolute top-3 left-4 font-mono text-[8px] text-white/30">REF_GENOME: GRCh38</span>
              <span className="absolute top-3 right-4 font-mono text-[8px] text-white/30">[LIVE_DNA]</span>
              <span className="absolute bottom-3 left-4 font-mono text-[8px] text-white/30">SCALE: 1:1.2e-9</span>
              <span className="absolute bottom-3 right-4 font-mono text-[8px] text-white/30">GRID: C-12</span>
              
              {/* Border lines inside container */}
              <div className="border border-white/5 rounded-2xl p-6 bg-slate-950/80 shadow-inner-sm overflow-hidden flex items-center justify-center">
                <DNAHelix />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
