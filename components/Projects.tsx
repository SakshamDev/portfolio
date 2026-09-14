"use client";

import { ShieldCheck, ExternalLink, Github, LineChart, Stethoscope } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./Section";

const FEATURED_PROJECTS = [
  {
    id: "qkd-monitor",
    index: "01",
    tag: "QUANTUM COMMUNICATIONS & ML · DRDO SSPL",
    title: "Entanglement-Based Free-Space QKD Eavesdropping Monitor",
    description:
      "A physics-aware temporal feature engineering and anomaly detection pipeline for free-space BBM92 quantum key distribution links. Developed during an 8-week research internship at the Solid State Physics Laboratory (SSPL), DRDO under Dr. Lalit Kumar (Scientist F) and Dr. Vikhen Kumar (Scientist E). Includes an optical channel physics simulator, four attack models, a 22-dimensional temporal feature vector over 30-second sliding windows, XGBoost with SHAP interpretability, and a live Streamlit dashboard explaining alerts.",
    tags: [
      "DRDO SSPL",
      "Quantum Cryptography",
      "BBM92 QKD",
      "Physics-Informed ML",
      "XGBoost",
      "SHAP Analysis",
      "Streamlit",
    ],
    status: "IEEE INDISCON 2026 (ACCEPTED)",
    statusColor: "text-emerald-400 border-emerald-800/60 bg-emerald-950/60",
    metrics: [
      { label: "RECALL (UNSEEN ATTACKS)", value: "91.3%" },
      { label: "PRECISION", value: "94.2%" },
      { label: "F2 SCORE", value: "0.914 ± 0.113" },
      { label: "FEATURE DIMENSIONS", value: "22-D Sliding" },
    ],
    liveUrl: "https://github.com/SakshamDev/bbm92-qkd-anomaly-detection",
    liveLabel: "GITHUB REPOSITORY",
    githubUrl: "https://github.com/SakshamDev/bbm92-qkd-anomaly-detection",
    icon: ShieldCheck,
    isHeroProject: true,
  },
  {
    id: "portfolio-optimizer",
    index: "02",
    tag: "FINANCIAL ENGINEERING & OPTIMIZATION",
    title: "Indian Equity Portfolio Optimizer",
    description:
      "Full-stack quantitative finance tool implementing Modern Portfolio Theory (MPT) to optimize Indian stock portfolios. Dynamically processes National Stock Exchange (NSE) tickers, computes efficient frontiers using quadratic programming, and supports target-return constrained optimization under real-time market data.",
    tags: ["Python", "Modern Portfolio Theory", "NSE Equities", "Optimization", "Fullstack"],
    status: "LIVE PRODUCTION SYSTEM",
    statusColor: "text-accent-teal border-accent-teal/40 bg-accent-teal/10",
    metrics: [
      { label: "MARKET", value: "NSE India" },
      { label: "ALGORITHM", value: "MPT / Markowitz" },
      { label: "DEPLOYMENT", value: "Cloud / Production" },
    ],
    liveUrl: "https://portfolio-optimizer.sakshamdev.tech",
    liveLabel: "LIVE APPLICATION",
    githubUrl: null,
    icon: LineChart,
    isHeroProject: false,
  },
  {
    id: "heart-disease",
    index: "03",
    tag: "BIOMEDICAL APPLIED ML",
    title: "Cardiovascular Disease Risk Prediction Model",
    description:
      "Supervised machine learning classification pipeline achieving 86.67% test accuracy in predicting patient cardiovascular risk. Employs comprehensive feature engineering, clinical attribute correlation, and stratified k-fold cross-validation to prevent overfitting in medical risk triage.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Cross-Validation", "Biomedical ML"],
    status: "VERIFIED ML REPOSITORY",
    statusColor: "text-text-secondary border-border bg-bg-subtle",
    metrics: [
      { label: "TEST ACCURACY", value: "86.67%" },
      { label: "TECHNIQUE", value: "Cross-Validation" },
      { label: "STACK", value: "Python / Scikit" },
    ],
    liveUrl: null,
    liveLabel: null,
    githubUrl: "https://github.com/SakshamDev/heart-disease-prediction",
    icon: Stethoscope,
    isHeroProject: false,
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-24 border-t border-border"
    >
      <Reveal>
        <SectionLabel number="04" label="PROJECTS & SYSTEMS" />
      </Reveal>

      {/* Featured Projects Grid */}
      <div className="space-y-8">
        {FEATURED_PROJECTS.map((project, idx) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.id} delay={idx * 100}>
              <div
                className={`bg-bg-card border border-border hover:border-accent-teal/50 rounded-xl p-8 sm:p-10 transition-all duration-300 shadow-xl corner-frame card-glow hover:-translate-y-1 ${
                  project.isHeroProject ? "ring-1 ring-accent-teal/20 shadow-accent-teal/5" : ""
                }`}
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-border/70">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-accent-teal tracking-widest px-2.5 py-1 rounded bg-bg-subtle border border-border">
                      P.{project.index}
                    </span>
                    <span
                      className={`font-mono text-[10px] tracking-wider px-2.5 py-1 rounded border font-medium ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                    <span className="font-mono text-xs text-text-muted hidden sm:inline">
                      {project.tag}
                    </span>
                  </div>

                  {project.isHeroProject && (
                    <span className="font-mono text-[11px] text-accent-teal tracking-wider font-semibold">
                      ★ CORE RESEARCH PROJECT · DRDO SSPL
                    </span>
                  )}
                </div>

                {/* Project Title & Description */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded bg-bg-subtle border border-border text-accent-teal">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] tracking-wider px-2.5 py-1 rounded bg-bg-subtle text-text-muted border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Metrics Panel */}
                  <div className="lg:col-span-4 bg-bg-subtle border border-border rounded-lg p-5 font-mono space-y-3">
                    <div className="text-text-muted uppercase tracking-wider text-[11px] pb-2 border-b border-border/80">
                      KEY PROJECT METRICS
                    </div>
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex items-center justify-between py-1 border-b border-border/40 last:border-b-0"
                      >
                        <span className="text-text-muted text-[11px]">{m.label}:</span>
                        <span className="text-accent-teal font-semibold text-xs">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-5 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                        rel={
                          project.liveUrl.startsWith("http") ? "noopener noreferrer" : undefined
                        }
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-accent-teal text-bg font-semibold hover:bg-accent-teal-light transition-all"
                      >
                        <span>{project.liveLabel}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== project.liveUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-bg-subtle border border-border hover:border-accent-teal text-text-primary transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>VIEW REPOSITORY</span>
                      </a>
                    )}
                  </div>

                  <span className="text-text-muted text-[11px]">
                    {project.isHeroProject
                      ? "SOLID STATE PHYSICS LABORATORY (SSPL), DRDO & BITS PILANI"
                      : "BITS PILANI HYDERABAD CAMPUS"}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
