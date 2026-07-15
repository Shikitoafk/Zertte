"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LANDING_CONTENT } from "../constants/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Premium white pill wrapper for dark-theme contrast */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center focus-visible:outline-none"
            aria-label="На главную"
          >
            <div className="bg-white px-3.5 py-1.5 rounded-xl h-11 flex items-center justify-center border border-white/10 shadow-sm transition-all hover:bg-white/95">
              <img
                src="/logo.png"
                alt="Zertte Biological Organization"
                className="h-full w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {LANDING_CONTENT.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans font-medium text-sm text-white/80 hover:text-brand-teal transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button - Soft Gradient */}
          <div className="hidden md:flex items-center">
            <a
              href="#registration"
              onClick={(e) => handleNavClick(e, "#registration")}
              className="px-5 py-2.5 bg-gradient-to-r from-brand-teal to-brand-tealDeep hover:brightness-110 text-white font-sans font-bold text-sm rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-brand-teal/10"
            >
              {LANDING_CONTENT.hero.primaryCta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-brand-teal transition-colors focus-visible:outline-none"
              aria-expanded={isOpen}
              aria-label="Открыть меню навигации"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col items-center">
          {LANDING_CONTENT.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="w-full text-center py-3 font-sans font-medium text-base text-white/80 hover:text-brand-teal hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#registration"
            onClick={(e) => handleNavClick(e, "#registration")}
            className="w-full text-center py-3 mt-2 bg-gradient-to-r from-brand-teal to-brand-tealDeep text-white font-sans font-bold text-sm rounded-lg transition-all"
          >
            {LANDING_CONTENT.hero.primaryCta}
          </a>
        </div>
      </div>
    </header>
  );
}
