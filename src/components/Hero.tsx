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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative DNA sequencing pattern elements */}
      <div className="absolute top-10 left-10 text-brand-ink/5 font-mono text-xs select-none pointer-events-none hidden md:block leading-relaxed">
        ATGCTAGCTAGCTAGCTAGCTAGC<br />
        TCGATCGATCGATCGATCGATCGT<br />
        GCTAGCTAGCTAGCTAGCTAGCTA<br />
        CGATCGATCGATCGATCGATCGAT
      </div>
      <div className="absolute bottom-10 right-10 text-brand-ink/5 font-mono text-xs select-none pointer-events-none hidden md:block leading-relaxed">
        GCTAGCTAGCTAGCTAGCTAGCTA<br />
        CGATCGATCGATCGATCGATCGAT<br />
        ATGCTAGCTAGCTAGCTAGCTAGC<br />
        TCGATCGATCGATCGATCGATCGT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side text column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* FASTQ Eyebrow */}
            <div className="mb-6 inline-flex items-center">
              <span className="font-mono text-xs md:text-sm font-bold bg-brand-ink text-brand-bg px-3 py-1 rounded-md tracking-wider">
                {eyebrow}
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-teal ml-3 animate-ping" />
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-ink tracking-tight leading-[1.1] mb-6">
              {title} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-tealDeep to-brand-lavender">
                {titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-lg md:text-xl text-brand-ink/80 leading-relaxed mb-8 max-w-xl">
              {subtitle}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {badges.map((badge, idx) => {
                let colorClass = "";
                if (badge.type === "yellow") {
                  colorClass = "bg-brand-yellow/15 text-brand-ink border-brand-yellow/30";
                } else if (badge.type === "teal") {
                  colorClass = "bg-brand-teal/15 text-brand-tealDeep border-brand-teal/30";
                } else {
                  colorClass = "bg-brand-lavender/15 text-brand-lavender border-brand-lavender/30";
                }
                return (
                  <span
                    key={idx}
                    className={`font-sans font-semibold text-xs md:text-sm px-3.5 py-1.5 rounded-full border ${colorClass}`}
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
                className="px-8 py-4 bg-brand-teal hover:bg-brand-tealDeep text-white font-sans font-bold rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg focus:outline-none"
              >
                {primaryCta}
              </button>
              <button
                onClick={(e) => handleCtaClick(e, "#case")}
                className="px-8 py-4 bg-transparent hover:bg-brand-bgAlt border-2 border-brand-ink/20 hover:border-brand-ink text-brand-ink font-sans font-bold rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none"
              >
                {secondaryCta}
              </button>
            </div>
          </div>

          {/* Right side animation column */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <DNAHelix />
          </div>
        </div>
      </div>
    </section>
  );
}
