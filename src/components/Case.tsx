"use client";

import { CASE_RELEASED, CASE_FILE_URL, LANDING_CONTENT } from "../constants/content";
import { Lock, Unlock, FileDown, CheckCircle2 } from "lucide-react";

export default function Case() {
  const { eyebrow, title, description, features, fileTitle, fileName, fileSize, lockStatusSoon, lockStatusOpen, downloadBtn } =
    LANDING_CONTENT.caseSection;

  return (
    <section id="case" className="py-24 bg-brand-bg relative overflow-hidden scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description */}
          <div className="lg:col-span-7 flex flex-col text-left reveal">
            {/* FASTQ eyebrow label */}
            <div className="mb-4">
              <span className="font-mono text-xs font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-md tracking-wider">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-ink mb-6">
              {title}
            </h2>

            <p className="font-sans text-sm sm:text-base text-brand-ink/80 leading-relaxed mb-8">
              {description}
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="font-sans text-sm sm:text-base text-brand-ink/80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lockable Card */}
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: "0.2s" }}>
            <div
              className={`p-8 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden ${
                CASE_RELEASED
                  ? "bg-brand-bgAlt border-brand-teal/40 shadow-xl"
                  : "bg-brand-bgAlt/50 border-brand-ink/10 shadow-md"
              }`}
            >
              {/* Header card info */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-ink mb-1">
                    {fileTitle}
                  </h3>
                  <p className="font-sans text-xs text-brand-ink/50">
                    ZIP/TAR.GZ архив • {fileSize}
                  </p>
                </div>

                {/* Status Badge */}
                <div>
                  {CASE_RELEASED ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-teal/10 text-brand-tealDeep border border-brand-teal/20">
                      <Unlock className="w-3.5 h-3.5" />
                      {lockStatusOpen}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-coral/10 text-brand-coral border border-brand-coral/20">
                      <Lock className="w-3.5 h-3.5" />
                      {lockStatusSoon}
                    </span>
                  )}
                </div>
              </div>

              {/* Central Box with Lock Graphic */}
              <div
                className={`py-12 rounded-2xl border border-dashed flex flex-col items-center justify-center mb-8 transition-all ${
                  CASE_RELEASED
                    ? "bg-brand-bg border-brand-teal/20"
                    : "bg-brand-bg/40 border-brand-ink/10"
                }`}
              >
                <div
                  className={`p-4 rounded-2xl mb-4 transition-colors ${
                    CASE_RELEASED ? "bg-brand-teal/10 text-brand-teal" : "bg-brand-ink/5 text-brand-ink/40"
                  }`}
                >
                  {CASE_RELEASED ? <Unlock className="w-10 h-10" /> : <Lock className="w-10 h-10" />}
                </div>

                <span className="font-mono text-sm font-bold text-brand-ink/70">
                  {fileName}
                </span>
                <span className="font-sans text-xs text-brand-ink/40 mt-1">
                  {CASE_RELEASED ? "Файл проверен антивирусом" : "Будет доступно в день старта"}
                </span>
              </div>

              {/* Action Button */}
              {CASE_RELEASED ? (
                <a
                  href={CASE_FILE_URL}
                  download
                  className="w-full py-4 bg-brand-teal hover:bg-brand-tealDeep text-white font-sans font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <FileDown className="w-5 h-5" />
                  {downloadBtn}
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-4 bg-brand-ink/10 text-brand-ink/30 font-sans font-bold rounded-xl flex items-center justify-center gap-2 cursor-not-allowed border border-brand-ink/5"
                >
                  <FileDown className="w-5 h-5" />
                  {downloadBtn}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
