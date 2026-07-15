"use client";

import { LANDING_CONTENT } from "../constants/content";
import { Terminal, Code, Cpu, Play } from "lucide-react";

// Commands mapped to steps to simulate a real bioinformatic analysis workflow
const MOCK_COMMANDS = [
  "curl -X POST https://api.zertte.org/v1/register \\\n  -d name=\"your_team\" \\\n  -d size=4",
  "wget https://dataset.zertte.org/case_file.tar.gz \\\n  && tar -xzvf case_file.tar.gz \\\n  && fastqc sample_R1.fastq.gz sample_R2.fastq.gz",
  "bwa mem -t 4 human_ref.fa sample_R1.fastq.gz sample_R2.fastq.gz \\\n  | samtools view -Sb - \\\n  | samtools sort -o sample.sorted.bam \\\n  && bcftools mpileup -f human_ref.fa sample.sorted.bam \\\n  | bcftools call -mv -o variants.vcf",
  "python3 evaluate_variants.py \\\n  --input variants.vcf \\\n  --reference database_clinvar.vcf \\\n  --output report.pdf"
];

export default function Timeline() {
  const { title, subtitle, steps } = LANDING_CONTENT.timeline;

  return (
    <section id="timeline" className="py-24 bg-brand-dark text-white relative overflow-hidden scroll-mt-12">
      {/* Grid Pattern overlay (Dark) */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-35" />

      {/* Decorative Neon Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-lavender/10 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="font-mono text-[10px] font-bold text-brand-yellow uppercase tracking-widest bg-brand-yellow/15 px-3 py-1 rounded-md border border-brand-yellow/20">
            [PIPELINE_WORKFLOW]
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-4">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-brand-yellow mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg text-white/70">
            {subtitle}
          </p>
        </div>

        {/* The Mock Terminal Block with Green Glowing outline and Scanlines */}
        <div className="reveal max-w-5xl mx-auto rounded-2xl border border-white/10 bg-slate-950/75 backdrop-blur-md shadow-2xl shadow-glow-teal overflow-hidden relative">
          
          {/* Terminal Scanline Visual Overlay */}
          <div className="absolute inset-0 pointer-events-none terminal-scanline opacity-10 z-20" />

          {/* Terminal Title Bar */}
          <div className="px-6 py-4 bg-slate-950 border-b border-white/10 flex items-center justify-between relative z-10">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-coral/80 block" />
              <span className="w-3 h-3 rounded-full bg-brand-yellow/80 block" />
              <span className="w-3 h-3 rounded-full bg-brand-teal/80 block" />
            </div>
            <span className="font-mono text-xs text-white/40 flex items-center gap-1.5 select-none">
              <Terminal className="w-3.5 h-3.5" />
              zertte@bioinfo-pipeline: ~ (bash)
            </span>
            <div className="w-10" />
          </div>

          {/* Terminal Console Area */}
          <div className="p-6 sm:p-10 space-y-12 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative group"
              >
                {/* Visual Connector Line between steps */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[26px] top-12 bottom-[-40px] w-0.5 border-l-2 border-dashed border-white/10 group-hover:border-brand-teal/40 transition-colors" />
                )}

                {/* Left: Step Index / Badge */}
                <div className="lg:col-span-1 flex lg:flex-col items-center justify-start">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center font-mono font-bold text-brand-yellow text-base shadow-inner group-hover:border-brand-teal/40 group-hover:text-brand-teal transition-all">
                    {step.step}
                  </div>
                </div>

                {/* Center: Stage text description */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display font-bold text-lg text-white">
                      {step.title}
                    </h3>
                    <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-white/5 text-brand-yellow/80 border border-white/5 uppercase tracking-wide">
                      {step.date}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Right: The Mock CLI Snippet */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl border border-white/5 bg-black/40 overflow-hidden shadow-inner relative group-hover:border-brand-teal/15 transition-all">
                    {/* Header bar of CLI snippet */}
                    <div className="px-4 py-2.5 bg-black/20 border-b border-white/5 flex items-center justify-between font-mono text-[10px] text-white/30 select-none">
                      <span className="flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5" />
                        bash_script_v{step.step}.sh
                      </span>
                      <span className="flex items-center gap-1">
                        <Cpu className="w-3 h-3 text-brand-teal" />
                        CPU: 4 cores
                      </span>
                    </div>

                    {/* Code display */}
                    <div className="p-4 overflow-x-auto font-mono text-[11px] sm:text-xs text-white/80 leading-relaxed whitespace-pre select-all">
                      <span className="text-brand-teal font-bold select-none">$ </span>
                      {MOCK_COMMANDS[idx]}
                    </div>

                    {/* Interactive Play Indicator */}
                    <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="p-1.5 rounded-lg bg-white/5 text-brand-yellow select-none">
                        <Play className="w-3 h-3 fill-brand-yellow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
