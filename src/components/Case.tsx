"use client";

import { CASE_RELEASED, CASE_FILE_URL, LANDING_CONTENT } from "../constants/content";
import { Lock, Unlock, FileDown, CheckCircle2 } from "lucide-react";

export default function Case() {
  const { eyebrow, title, description, features, fileTitle, fileName, fileSize, lockStatusSoon, lockStatusOpen, downloadBtn } =
    LANDING_CONTENT.caseSection;

  return (
    <section id="case" className="py-24 bg-brand-bg relative overflow-hidden scroll-mt-12">
      {/* Decorative vertical blueprint lines (Dark) */}
      <div className="absolute top-0 bottom-0 left-[15%] w-px bg-white/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[15%] w-px bg-white/5 hidden md:block" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-[10%] w-72 h-72 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Description & Metadata Table */}
          <div className="lg:col-span-7 flex flex-col text-left reveal">
            {/* FASTQ eyebrow label */}
            <div className="mb-4">
              <span className="font-mono text-[9px] font-bold text-brand-teal bg-brand-teal/15 px-3 py-1 rounded-md border border-brand-teal/20 tracking-wider">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
              {title}
            </h2>

            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-8">
              {description}
            </p>

            {/* Checklist of Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="font-sans text-sm sm:text-base text-white/80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Structured Dataset Parameter Table (Glassmorphism Dark) */}
            <div className="border border-white/10 rounded-2xl overflow-hidden max-w-lg bg-slate-900/30 backdrop-blur-md">
              <div className="px-5 py-3.5 bg-slate-950/80 border-b border-white/10 flex justify-between items-center font-mono text-[10px] text-white/40">
                <span>[QC_REPORT: SUMMARY]</span>
                <span>METRICS: NORMAL</span>
              </div>
              <div className="divide-y divide-white/5">
                <div className="grid grid-cols-2 p-3.5 font-mono text-xs">
                  <span className="text-white/45 font-bold">SEQUENCE_FORMAT:</span>
                  <span className="text-white/80">FASTQ (.fastq.gz)</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 font-mono text-xs">
                  <span className="text-white/45 font-bold">TARGET_REGION:</span>
                  <span className="text-white/80">Whole Exome (WES)</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 font-mono text-xs">
                  <span className="text-white/45 font-bold">READS_COUNT:</span>
                  <span className="text-white/80">~45,000,000 reads</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 font-mono text-xs">
                  <span className="text-white/45 font-bold">COVERAGE_DEPTH:</span>
                  <span className="text-white/80">~50x mean depth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Dashboard Locked Card (Dark glassmorphism) */}
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: "0.2s" }}>
            <div
              className={`p-8 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden bg-gradient-to-b ${
                CASE_RELEASED
                  ? "bg-slate-900/60 border-brand-teal/40 shadow-2xl shadow-glow-teal"
                  : "bg-slate-900/30 border-white/10 shadow-lg shadow-black/40"
              }`}
            >
              {/* Header card info */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    {fileTitle}
                  </h3>
                  <p className="font-sans text-xs text-white/40">
                    GZIP Archive • {fileSize}
                  </p>
                </div>

                {/* Status Badge */}
                <div>
                  {CASE_RELEASED ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-teal/15 text-brand-teal border border-brand-teal/35 shadow-sm">
                      <Unlock className="w-3 h-3" />
                      {lockStatusOpen}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-coral/15 text-brand-coral border border-brand-coral/35 shadow-sm">
                      <Lock className="w-3 h-3" />
                      {lockStatusSoon}
                    </span>
                  )}
                </div>
              </div>

              {/* High-Tech Terminal Viewport for file Lock Graphic */}
              <div
                className={`p-6 rounded-2xl border border-dashed flex flex-col items-center justify-center mb-6 transition-all ${
                  CASE_RELEASED
                    ? "bg-slate-950/60 border-brand-teal/35 shadow-inner"
                    : "bg-slate-950/40 border-white/10"
                }`}
              >
                {/* Glow Ring Lock container */}
                <div
                  className={`p-4 rounded-full mb-4 transition-all duration-300 relative ${
                    CASE_RELEASED 
                      ? "bg-brand-teal/10 text-brand-teal shadow-[0_0_20px_rgba(14,157,107,0.2)]" 
                      : "bg-white/5 text-white/30 border border-white/10"
                  }`}
                >
                  {CASE_RELEASED ? <Unlock className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
                </div>

                <span className="font-mono text-sm font-bold text-white/80 tracking-wider">
                  {fileName}
                </span>
                
                {/* Simulated File Hash SHA-256 */}
                <span className="font-mono text-[9px] text-white/40 mt-2 bg-white/5 px-2.5 py-0.5 rounded border border-white/5 uppercase select-all">
                  SHA-256: {CASE_RELEASED ? "4e6f982a...c31b87a" : "SECURED_BY_SHA256"}
                </span>
              </div>

              {/* Additional Metadata specs inside the card */}
              <div className="space-y-2 mb-6 font-mono text-[10px] text-white/50">
                <div className="flex justify-between">
                  <span>COMPRESSION_TYPE:</span>
                  <span className="text-white/80">gzip (tar.gz)</span>
                </div>
                <div className="flex justify-between">
                  <span>ADAPTER_LIGATION:</span>
                  <span className="text-white/80">TruSeq Universal</span>
                </div>
                <div className="flex justify-between">
                  <span>REF_GENOME:</span>
                  <span className="text-white/80">HG38_HUMAN</span>
                </div>
              </div>

              {/* Action Button */}
              {CASE_RELEASED ? (
                <a
                  href={CASE_FILE_URL}
                  download
                  className="w-full py-4 bg-gradient-to-r from-brand-teal to-brand-tealDeep hover:brightness-110 text-white font-sans font-bold rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-teal/20 transition-all duration-200 cursor-pointer"
                >
                  <FileDown className="w-5 h-5" />
                  {downloadBtn}
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-4 bg-white/5 text-white/20 font-sans font-bold rounded-xl flex items-center justify-center gap-2 cursor-not-allowed border border-white/5"
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
