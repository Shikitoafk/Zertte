"use client";

import { LANDING_CONTENT } from "../constants/content";
import { Mail, Send, Instagram, Chrome } from "lucide-react";

export default function Footer() {
  const { copyright, contactEmail, socials } = LANDING_CONTENT.footer;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Map social name to corresponding Lucide Icon
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "telegram":
        return <Send className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      default:
        return <Chrome className="w-5 h-5" />;
    }
  };

  return (
    <footer className="bg-brand-ink text-brand-bg py-16 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand/Logo Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#")}
              className="inline-flex bg-white px-3 py-1.5 rounded-xl h-12 items-center justify-center focus-visible:outline-none"
            >
              <img
                src="/logo.png"
                alt="Zertte Biological Organization"
                className="h-full w-auto object-contain"
              />
            </a>
            <p className="font-sans text-xs sm:text-sm text-brand-bg/60 max-w-sm leading-relaxed">
              Главное соревнование по вычислительной биологии и клинической геномике для школьников 8–12 классов. Развиваем сообщество молодых биоинформатиков.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold text-white/50 tracking-wider uppercase">
              @NAVIGATION
            </h4>
            <div className="flex flex-col gap-2.5">
              {LANDING_CONTENT.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-sm text-brand-bg/70 hover:text-brand-teal transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts & Socials */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-white/50 tracking-wider uppercase mb-3">
                @SUPPORT_EMAIL
              </h4>
              <a
                href={`mailto:${contactEmail}`}
                className="font-sans text-sm text-brand-bg/70 hover:text-brand-teal flex items-center gap-2 transition-colors inline-flex"
              >
                <Mail className="w-4 h-4 text-brand-teal" />
                {contactEmail}
              </a>
            </div>

            <div>
              <h4 className="font-mono text-xs font-bold text-white/50 tracking-wider uppercase mb-3">
                @SOCIALS
              </h4>
              <div className="flex gap-3">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-brand-teal text-brand-bg/75 hover:text-white transition-all duration-200"
                    aria-label={`Zertte в ${social.name}`}
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-10" />

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-brand-bg/50">
            {copyright}
          </p>
          <div className="flex gap-6 font-sans text-xs text-brand-bg/40">
            <span>Разработано для Vercel</span>
            <span>Next.js 14 App Router</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
