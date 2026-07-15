"use client";

import { LANDING_CONTENT } from "../constants/content";
import { Target, Users, Award } from "lucide-react";

export default function About() {
  const { title, subtitle, cards } = LANDING_CONTENT.about;

  // Map icon strings or index to Lucide Icons
  const getIcon = (color: string) => {
    switch (color) {
      case "teal":
        return <Target className="w-8 h-8 text-brand-teal" />;
      case "coral":
        return <Users className="w-8 h-8 text-brand-coral" />;
      case "yellow":
        return <Award className="w-8 h-8 text-brand-yellow" style={{ filter: "brightness(0.9)" }} />;
      default:
        return <Target className="w-8 h-8 text-brand-teal" />;
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case "teal":
        return "border-brand-teal/30 hover:border-brand-teal focus-within:border-brand-teal";
      case "coral":
        return "border-brand-coral/30 hover:border-brand-coral focus-within:border-brand-coral";
      case "yellow":
        return "border-brand-yellow/40 hover:border-brand-yellow focus-within:border-brand-yellow";
      default:
        return "border-brand-teal/30";
    }
  };

  const getBgGlow = (color: string) => {
    switch (color) {
      case "teal":
        return "bg-brand-teal/5";
      case "coral":
        return "bg-brand-coral/5";
      case "yellow":
        return "bg-brand-yellow/5";
      default:
        return "bg-brand-teal/5";
    }
  };

  return (
    <section id="about" className="py-24 bg-brand-bgAlt/50 relative overflow-hidden scroll-mt-12">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

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

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`reveal relative p-8 rounded-2xl border bg-brand-bg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-start ${getBorderColor(
                card.color
              )}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Card Icon container */}
              <div className={`p-4 rounded-xl mb-6 ${getBgGlow(card.color)}`}>
                {getIcon(card.color)}
              </div>

              {/* Card Title */}
              <h3 className="font-display font-bold text-xl text-brand-ink mb-4">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="font-sans text-sm sm:text-base text-brand-ink/80 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
