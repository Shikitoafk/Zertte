"use client";

import { CASE_RELEASED, CASE_FILE_URL, LANDING_CONTENT } from "../constants/content";
import { Lock, Unlock, FileDown, CheckCircle2 } from "lucide-react";

export default function Case() {
  const { eyebrow, title, description, features, fileTitle, fileName, fileSize, lockStatusSoon, lockStatusOpen, downloadBtn } =
    LANDING_CONTENT.caseSection;

  return (
    <section id="case" className="py-24 bg-brand-bg relative overflow-hidden scroll-mt-12">
      {/* Decorative background visual dividers */}
      <div className="absolute top-0 bottom-0 left-[15%] w-px bg-brand-ink/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[15%] w-px bg-brand-ink/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Description & Metadata Table */}
          <div className="lg:col-span-7 flex flex-col text-left reveal">
            {/* FASTQ eyebrow label */}
            <div className="mb-4">
              <span className="font-mono text-[9px] font-bold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-md tracking-wider">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-ink mb-6">
              {title}
            </h2>

            <p className="font-sans text-sm sm:text-base text-brand-ink/80 leading-relaxed mb-8">
              {description}
            </p>

            {/* Checklist of Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="font-sans text-sm sm:text-base text-brand-ink/80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Structured Dataset Parameter Table */}
            <div className="border border-brand-ink/10 rounded-2xl overflow-hidden max-w-lg bg-brand-bgAlt/30">
              <div className="px-5 py-3.5 bg-brand-bgAlt border-b border-brand-ink/10 flex justify-between items-center font-mono text-[10px] text-brand-ink/50">
                <span>[QC_REPORT: SUMMARY]</span>
                <span>METRICS: NORMAL</span>
              </div>
              <div className="divide-y divide-brand-ink/5">
                <div className="grid grid-cols-2 p-3.5 font-mono text-xs">
                  <span className="text-brand-ink/40 font-bold">SEQUENCE_FORMAT:</span>
                  <span className="text-brand-ink/80">FASTQ (.fastq.gz)</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 font-mono text-xs">
                  <span className="text-brand-ink/40 font-bold">TARGET_REGION:</span>
                  <span className="text-brand-ink/80">Whole Exome (WES)</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 font-mono text-xs">
                  <span className="text-brand-ink/40 font-bold">READS_COUNT:</span>
                  <span className="text-brand-ink/80">~45,000,000 reads</span>
                </div>
                <div className="grid grid-cols-2 p-3.5 font-mono text-xs">
                  <span className="text-brand-ink/40 font-bold">COVERAGE_DEPTH:</span>
                  <span className="text-brand-ink/80">~50x mean depth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Dashboard Locked Card */}
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: "0.2s" }}>
            <div
              className={`p-8 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden bg-gradient-to-b ${
                CASE_RELEASED
                  ? "bg-brand-bgAlt/80 border-brand-teal/40 shadow-xl shadow-brand-teal/5"
                  : "bg-brand-bgAlt/50 border-brand-ink/10 shadow-md"
              }`}
            >
              {/* Header card info */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-ink mb-1">
                    {fileTitle}
                  </h3>
                  <p className="font-sans text-xs text-brand-ink/50">
                    GZIP Archive • {fileSize}
                  </p>
                </div>

                {/* Status Badge */}
                <div>
                  {CASE_RELEASED ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-teal/10 text-brand-tealDeep border border-brand-teal/20">
                      <Unlock className="w-3 h-3" />
                      {lockStatusOpen}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-coral/10 text-brand-coral border border-brand-coral/20">
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
                    ? "bg-brand-bg border-brand-teal/20 shadow-inner-sm"
                    : "bg-brand-bg/40 border-brand-ink/10"
                }`}
              >
                {/* Glow Ring Lock container */}
                <div
                  className={`p-4 rounded-full mb-4 transition-all duration-300 relative ${
                    CASE_RELEASED 
                      ? "bg-brand-teal/10 text-brand-teal shadow-[0_0_20px_rgba(14,157,107,0.15)]" 
                      : "bg-brand-ink/5 text-brand-ink/30"
                  }`}
                >
                  {CASE_RELEASED ? <Unlock className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
                </div>

                <span className="font-mono text-sm font-bold text-brand-ink/80 tracking-wider">
                  {fileName}
                </span>
                
                {/* Simulated File Hash SHA-256 */}
                <span className="font-mono text-[9px] text-brand-ink/35 mt-2 bg-brand-ink/5 px-2 py-0.5 rounded uppercase">
                  SHA-256: {CASE_RELEASED ? "4e6f982a...c31b87a" : "SECURED_BY_SHA256"}
                </span>
              </div>

              {/* Additional Metadata specs inside the card */}
              <div className="space-y-2 mb-6 font-mono text-[10px] text-brand-ink/55">
                <div className="flex justify-between">
                  <span>COMPRESSION_TYPE:</span>
                  <span>gzip (tar.gz)</span>
                </div>
                <div className="flex justify-between">
                  <span>ADAPTER_LIGATION:</span>
                  <span>TruSeq Universal</span>
                </div>
                <div className="flex justify-between">
                  <span>REF_GENOME:</span>
                  <span>HG38_HUMAN</span>
                </div>
              </div>

              {/* Action Button */}
              {CASE_RELEASED ? (
                <a
                  href={CASE_FILE_URL}
                  download
                  className="w-full py-4 bg-brand-teal hover:bg-brand-tealDeep text-white font-sans font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-brand-teal/20 transition-all duration-200 cursor-pointer"
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
