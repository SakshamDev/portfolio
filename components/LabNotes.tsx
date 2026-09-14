"use client";

import { Activity, ShieldCheck, Cpu, Binary } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./Section";

const LAB_FOCUSES = [
  {
    id: "focus-01",
    tag: "AI HARDWARE · APPLICATIONS LAYER",
    title: "Applied Neuromorphic Computing & Event-Driven AI Hardware",
    description:
      "Investigating application-layer implementations of neuromorphic AI hardware architectures at NSDL (CREST) under Dr. Parikshit Sahatiya. Focusing on event-based data representations, low-latency streaming inference, and temporal processing models.",
    icon: Cpu,
    status: "PRIMARY LAB FOCUS",
    keyMetric: "EVENT-DRIVEN STREAMING INFERENCE",
    deliverables: "NSDL · CREST · Dr. Parikshit Sahatiya",
  },
  {
    id: "focus-02",
    tag: "EMERGING ARCHITECTURES",
    title: "Emerging AI Hardware Paradigms & Spiking Dynamics",
    description:
      "Exploring algorithmic models that exploit temporal sparsity and spike timing for efficient real-time anomaly detection and signal classification in constrained edge hardware environments.",
    icon: Activity,
    status: "ACTIVE EXPLORATION",
    keyMetric: "TEMPORAL SPARSITY & DYNAMICS",
    deliverables: "Algorithmic & Hardware Applications",
  },
  {
    id: "focus-03",
    tag: "PHYSICS-INFORMED ML",
    title: "Physical Telemetry & High-Dimensional Sensor Fusion",
    description:
      "Leveraging foundational experience from physical sensor telemetry to develop robust, noise-resilient machine learning pipelines that translate complex multi-channel hardware signals into actionable diagnostics.",
    icon: Binary,
    status: "METHODOLOGICAL BRIDGE",
    keyMetric: "MULTI-CHANNEL SENSOR FUSION",
    deliverables: "Physical Telemetry · Interpretability",
  },
];

export default function LabNotes() {
  return (
    <section
      id="lab"
      className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-24 border-t border-border"
    >
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <SectionLabel number="03" label="LAB RESEARCH & AI HARDWARE FOCUS" showLine={false} />
          <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>NSDL · CREST · BITS PILANI</span>
          </div>
        </div>
        <div className="w-full h-px bg-border mb-12" />
      </Reveal>

      {/* Institutional Banner Card */}
      <Reveal delay={100}>
        <div className="bg-bg-card border border-border rounded-xl p-8 sm:p-10 mb-12 shadow-xl corner-frame">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="font-mono text-xs tracking-widest text-accent-teal font-medium uppercase mb-2">
                RESEARCH LABORATORY
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary mb-3">
                Nanoscale Devices Lab (NSDL)
              </h2>
              <div className="font-mono text-xs sm:text-sm text-text-secondary mb-4">
                Centre for Research Excellence in Semiconductor Technologies (CREST) ·{" "}
                <span className="text-text-primary font-medium">BITS Pilani, Hyderabad Campus</span>
              </div>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                Conducting research under the supervision of <strong className="text-text-primary font-medium">Dr. Parikshit Sahatiya</strong> at the 
                Nanoscale Devices Lab (NSDL), under the Centre for Research Excellence in Semiconductor Technologies (CREST). 
                While open to all emerging domains across the broader <strong className="text-text-primary font-medium">AI Hardware</strong> spectrum, 
                my active lab research centers on the <strong className="text-accent-teal font-medium">applications layer of neuromorphic computing</strong>, 
                spiking dynamics, and low-latency edge intelligence, grounded in prior physical telemetry and ML foundations from <strong className="text-text-primary font-medium">SSPL, DRDO</strong>.
              </p>
            </div>

            <div className="lg:col-span-4 bg-bg-subtle border border-border rounded-lg p-6 font-mono text-xs space-y-3">
              <div className="text-text-muted uppercase tracking-wider text-[11px] pb-2 border-b border-border">
                LAB SPECIFICATIONS
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-text-muted">LABORATORY:</span>
                <span className="text-accent-teal font-medium">NSDL</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-text-muted">CENTRE:</span>
                <span className="text-accent-teal font-medium">CREST</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-text-muted">ADVISOR:</span>
                <span className="text-accent-teal font-medium">Dr. Parikshit Sahatiya</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-text-muted">DOMAIN:</span>
                <span className="text-accent-teal/80 font-medium">AI Hardware (Neuromorphic Apps)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-text-muted">INSTITUTION:</span>
                <span className="text-emerald-400 font-medium">BITS Pilani</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 3 Unified Focus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LAB_FOCUSES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.id} delay={150 + idx * 80}>
              <div className="bg-bg-card border border-border hover:border-accent-teal/40 rounded-xl p-7 flex flex-col justify-between h-full shadow-lg group transition-all duration-300 card-glow hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-bg-subtle border border-border text-accent-teal">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded bg-bg-subtle border border-border text-emerald-400 font-medium">
                      {item.status}
                    </span>
                  </div>

                  <div className="font-mono text-xs tracking-widest text-accent-teal/90 font-medium mb-2 uppercase">
                    {item.tag}
                  </div>

                  <h3 className="font-sans font-bold text-lg text-text-primary group-hover:text-accent-teal transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 font-mono text-xs space-y-2">
                  <div className="text-[11px] text-accent-teal font-medium">
                    {item.keyMetric}
                  </div>
                  <div className="text-[11px] text-text-muted truncate">
                    {item.deliverables}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
