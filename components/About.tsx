"use client";

import Image from "next/image";
import { Award, GraduationCap, Terminal, Users, Cpu, FileText, ShieldCheck, Atom } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./Section";

const RESEARCH_VECTORS = [
  "AI Hardware & Compute Architectures",
  "Applied Neuromorphic Systems",
  "Event-Driven Sensing & Edge Intelligence",
  "Quantum Key Distribution (BBM92) Telemetry",
  "Physics-Informed Machine Learning",
  "Temporal Spiking Dynamics & Sparsity",
  "Hardware-Aware Deep Learning Pipelines",
  "High-Dimensional Physical Sensor Fusion",
];

const TIMELINE = [
  {
    period: "2026 to PRESENT",
    badge: "CURRENT FOCUS · AI HARDWARE",
    badgeColor: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    title: "Undergraduate Researcher · NSDL @ CREST",
    institution: "Advisor: Dr. Parikshit Sahatiya · BITS Pilani",
    desc: "Focusing broadly on AI hardware and intelligent physical systems, with current active research in the applications layer of neuromorphic computing, event-driven temporal architectures, and edge sensing at the Nanoscale Devices Lab (NSDL) under CREST.",
    icon: Cpu,
  },
  {
    period: "MAY 2026 to JUL 2026",
    badge: "DEFENCE R&D INTERNSHIP",
    badgeColor: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    title: "Research Intern · Solid State Physics Laboratory (SSPL)",
    institution: "DRDO, Ministry of Defence, Govt. of India · New Delhi",
    desc: "Selected as one of the few first-year engineering students for a research internship at a national defence R&D institution. Built a real-time anomaly detection system for entanglement-based Quantum Key Distribution (BBM92) under Dr. Lalit Kumar (Scientist F) and Dr. Vikhen Kumar (Scientist E): developed an optical channel physics simulator, four attack models, a temporal ML pipeline, and an explainable live dashboard.",
    icon: ShieldCheck,
  },
  {
    period: "2026 to PRESENT",
    badge: "IEEE STUDENT CHAPTER",
    badgeColor: "text-text-secondary border-border bg-bg-subtle",
    title: "Quantum Computing & Machine Learning Team",
    institution: "IEEE Student Branch · BITS Pilani",
    desc: "Active member of the Quantum Computing & ML Team, working on technical projects, quantum algorithms, and specialized computing workshops for the student community.",
    icon: Atom,
  },
  {
    period: "2026 to PRESENT",
    badge: "ACM CHAPTER",
    badgeColor: "text-text-secondary border-border bg-bg-subtle",
    title: "Machine Learning Team",
    institution: "ACM - BPHC Chapter",
    desc: "Contributing to research-driven machine learning initiatives and organizing technical computing workshops across campus.",
    icon: Users,
  },
  {
    period: "2025 to 2029",
    badge: "DEGREE PROGRAM",
    badgeColor: "text-text-secondary border-border bg-bg-subtle",
    title: "B.E. Electrical & Electronics Engineering",
    institution: "BITS Pilani, Hyderabad Campus",
    desc: "Rigorous coursework across Microelectronics, Digital Signal Processing, Machine Learning, Circuit Analysis, and Computer Programming.",
    icon: GraduationCap,
  },
];

const TOOLKIT = [
  { category: "AI HARDWARE & ARCHITECTURES", items: "Neuromorphic Applications, Spiking Dynamics, Edge AI" },
  { category: "ML & TELEMETRY MODELING", items: "XGBoost, Scikit-Learn, SHAP, NumPy, Pandas, SciPy" },
  { category: "LANGUAGES & SYSTEMS", items: "Python, C++, C, MATLAB, Streamlit, JavaScript" },
  { category: "RESEARCH FOUNDATIONS", items: "BBM92 QKD Simulation, Free-Space Telemetry, Temporal Features" },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-24 border-t border-border"
    >
      <Reveal>
        <SectionLabel number="05" label="ABOUT & ACADEMIC TRAJECTORY" />
      </Reveal>

      {/* Grid: Narrative + Timeline on Left (7 cols), Portrait + Vectors on Right (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bio + Timeline */}
        <div className="lg:col-span-7 space-y-12">
          {/* Philosophical Epigraph */}
          <Reveal delay={100}>
            <blockquote className="border-l-2 border-accent-teal/60 pl-6 py-2">
              <p className="font-serif italic text-xl sm:text-2xl text-text-primary leading-relaxed font-normal">
                &ldquo;True security in physical channels emerges not from arbitrary thresholds, but from{" "}
                <span className="text-accent-teal">deciphering the temporal physics</span> of the medium.&rdquo;
              </p>
            </blockquote>
          </Reveal>

          {/* Biographical Statement */}
          <Reveal delay={150}>
            <div className="space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
              <p>
                I am <strong className="text-text-primary font-semibold">Saksham Gupta</strong>, an undergraduate engineer 
                in the <strong className="text-text-primary font-medium">Department of Electrical & Electronics Engineering</strong> at{" "}
                <strong className="text-text-primary font-medium">BITS Pilani, Hyderabad Campus</strong>.
              </p>
              <p>
                My overarching research interest is in <strong className="text-text-primary font-medium">AI Hardware</strong>, exploring 
                how emerging physical architectures, novel compute substrates, and specialized hardware accelerators can redefine machine intelligence. 
                While I am open to all domains across AI hardware, my current active research focuses on the <strong className="text-accent-teal font-medium">applications layer of neuromorphic computing</strong> at 
                the <strong className="text-text-primary font-medium">Nanoscale Devices Lab (NSDL)</strong> under 
                the <strong className="text-text-primary font-medium">Centre for Research Excellence in Semiconductor Technologies (CREST)</strong>, 
                supervised by <strong className="text-accent-teal font-medium">Dr. Parikshit Sahatiya</strong>.
              </p>
              <p>
                Prior to this, I completed an 8-week research internship at the <strong className="text-text-primary font-medium">Solid State Physics Laboratory (SSPL), DRDO</strong> under 
                <strong className="text-text-primary font-medium"> Dr. Lalit Kumar (Scientist F)</strong> and <strong className="text-text-primary font-medium">Dr. Vikhen Kumar (Scientist E)</strong>. 
                There, I built a real-time anomaly detection pipeline and temporal cross-channel ML framework for free-space BBM92 Quantum Key Distribution, research 
                resulting in an accepted paper at <strong className="text-accent-teal font-medium">IEEE INDISCON 2026</strong>.
              </p>
              <p className="text-sm sm:text-base text-text-muted">
                On campus, I contribute to the <strong className="text-text-secondary font-medium">Quantum Computing & Machine Learning Team</strong> at the 
                IEEE Student Branch and the <strong className="text-text-secondary font-medium">Machine Learning Team</strong> at the ACM BPHC Chapter.
              </p>
            </div>
          </Reveal>

          {/* Academic Trajectory Timeline */}
          <Reveal delay={200}>
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-border">
                <span className="font-mono text-xs tracking-widest text-text-muted uppercase">
                  RESEARCH & ACADEMIC TRAJECTORY
                </span>
                <span className="font-mono text-xs text-accent-teal font-medium">
                  BITS PILANI
                </span>
              </div>

              <div className="space-y-6">
                {TIMELINE.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-bg-card border border-border hover:border-border-hover rounded-lg p-6 transition-all duration-200"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`font-mono text-[10px] tracking-widest px-2.5 py-0.5 rounded border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <span className="font-mono text-xs text-text-muted">
                          {item.period}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 mb-2">
                        <Icon className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-sans font-bold text-base sm:text-lg text-text-primary">
                            {item.title}
                          </h4>
                          <div className="font-mono text-xs text-accent-teal/90 mt-0.5">
                            {item.institution}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-text-secondary leading-relaxed pl-8 mt-2">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Real Portrait + Research Vectors & Toolkit */}
        <div className="lg:col-span-5 space-y-8">
          {/* Real Photo Card at Podium */}
          <Reveal delay={200}>
            <div className="bg-bg-card border border-border rounded-xl overflow-hidden shadow-xl corner-frame group">
              <div className="relative aspect-[4/4] sm:aspect-[4/4.2] overflow-hidden bg-bg-subtle">
                <Image
                  src="/images/IMG_8962.jpg"
                  alt="Saksham Gupta presenting at BITS Pilani"
                  fill
                  className="object-cover object-top filter grayscale-[25%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-mono text-[11px] tracking-wider text-accent-teal font-semibold uppercase mb-1">
                    SAKSHAM GUPTA
                  </div>
                  <div className="font-mono text-xs text-text-primary font-medium">
                    BITS Pilani, Hyderabad Campus
                  </div>
                  <div className="font-mono text-[11px] text-text-muted">
                    NSDL · CREST (Current) | DRDO SSPL (Quantum)
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Research Focus Areas */}
          <Reveal delay={250}>
            <div className="bg-bg-card border border-border rounded-lg p-7 shadow-xl corner-frame">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-border">
                <span className="font-mono text-xs tracking-widest text-accent-teal font-semibold uppercase">
                  CORE RESEARCH VECTORS
                </span>
                <span className="w-2 h-2 rounded-full bg-accent-teal" />
              </div>

              <div className="space-y-2.5">
                {RESEARCH_VECTORS.map((vec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded bg-bg-subtle/80 border border-border/70 text-sm text-text-secondary hover:text-text-primary hover:border-accent-teal/40 transition-colors"
                  >
                    <span className="font-mono text-[11px] text-accent-teal font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="font-medium text-xs sm:text-sm">{vec}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Technical Toolkit */}
          <Reveal delay={300}>
            <div className="bg-bg-card border border-border rounded-lg p-7 shadow-xl">
              <div className="flex items-center gap-2 pb-4 mb-5 border-b border-border">
                <Terminal className="w-4 h-4 text-accent-teal" />
                <span className="font-mono text-xs tracking-widest text-text-primary font-semibold uppercase">
                  TECHNICAL TOOLKIT & STACK
                </span>
              </div>

              <div className="space-y-4">
                {TOOLKIT.map((tk) => (
                  <div key={tk.category} className="border-b border-border/40 pb-3 last:border-b-0 last:pb-0">
                    <div className="font-mono text-[10px] tracking-widest text-text-muted uppercase mb-1">
                      {tk.category}
                    </div>
                    <div className="font-mono text-xs text-accent-teal/90 font-medium">
                      {tk.items}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Institutional Note */}
          <Reveal delay={350}>
            <div className="p-6 rounded-lg border border-border bg-bg-card font-mono text-xs text-text-secondary leading-relaxed space-y-1.5">
              <div className="font-semibold text-accent-teal">
                BITS PILANI, HYDERABAD CAMPUS
              </div>
              <div className="text-text-primary">
                AI Hardware Research: Nanoscale Devices Lab (NSDL) · CREST under Dr. Parikshit Sahatiya
              </div>
              <div className="text-text-muted text-[11px]">
                Quantum ML Research: Solid State Physics Laboratory (SSPL), DRDO
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
