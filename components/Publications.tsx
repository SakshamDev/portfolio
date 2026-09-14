"use client";

import { FileText, Bookmark, CheckCircle2, ShieldCheck, BarChart3 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./Section";

const INDISCON_PAPER = {
  id: "indiscon-2026",
  status: "ACCEPTED",
  venue: "7th IEEE India Council International Subsections Conference (INDISCON 2026)",
  track: "Track 5 - Communication Systems & Network Technologies",
  paperId: "2445",
  presentation: "Malaviya National Institute of Technology Jaipur (MNIT Jaipur), September 2026",
  title: "Temporal Cross-Channel Features for Eavesdropping Detection in Free-Space BBM92 QKD under Hierarchical Threat Models",
  author: "Saksham Gupta",
  affiliation: "BITS Pilani, Hyderabad Campus · In association with Solid State Physics Laboratory (SSPL), DRDO",
  description1:
    "This work investigates machine-learning-based eavesdropping detection for free-space BBM92 quantum key distribution under realistic atmospheric noise and hierarchical threat models. The study moves beyond conventional static QBER thresholding by exploiting temporal and cross-channel relationships between quantum observables, enabling detection of stealthy attacks designed to remain below conventional security thresholds.",
  description2:
    "The work develops a physics-informed temporal feature framework that captures correlations and temporal signatures across QKD telemetry, with particular emphasis on identifying eavesdropping activity masked by naturally occurring atmospheric fluctuations. The resulting approach provides a more sensitive and interpretable mechanism for monitoring the security of free-space quantum communication links.",
  keywords: [
    "Quantum Key Distribution",
    "BBM92",
    "Quantum Cryptography",
    "Eavesdropping Detection",
    "Machine Learning",
    "Anomaly Detection",
    "Free-Space Optical Communication",
    "Temporal Feature Engineering",
    "QKD Security",
  ],
  badges: [
    "IEEE INDISCON 2026",
    "Accepted",
    "Quantum Cryptography",
    "Machine Learning",
    "QKD",
  ],
};

const IACR_PREPRINT = {
  id: "iacr-preprint-2026",
  status: "PREPRINT",
  repository: "International Association for Cryptologic Research (IACR) Cryptology ePrint Archive",
  report: "IACR ePrint 2026/1282",
  date: "June 20, 2026",
  title: "Physics-Aware Temporal Feature Engineering for Eavesdropping Detection in BBM92 Quantum Key Distribution",
  author: "Saksham Gupta",
  description:
    "This preprint proposes a physics-aware temporal feature engineering framework for detecting eavesdropping in entanglement-based BBM92 quantum key distribution systems operating over noisy free-space optical channels. The work addresses a limitation of conventional static QBER thresholding: an attacker can potentially hide low-intensity attacks within naturally occurring atmospheric fluctuations. A 24-dimensional feature space is constructed from QBER, the Bell S parameter, photon coincidence rates, detector activity, HOM visibility, and optical path loss over a 30-second sliding window. On a simulated 24-hour free-space optical telemetry dataset evaluated across five random seeds, conventional QBER thresholding achieved 17.3% recall against blended sub-threshold attacks, while an XGBoost classifier using the proposed features achieved 96.9% recall and 97.6% precision. SHAP analysis indicated that detection of stealthy attacks was driven primarily by anomalous temporal cross-correlations between independent quantum observables rather than simply elevated QBER.",
  simulatedResults: [
    { metric: "Recall", staticQber: "17.3%", xgboost: "96.9%" },
    { metric: "Precision", staticQber: "100%", xgboost: "97.6%" },
    { metric: "F2 Score", staticQber: "20.7%", xgboost: "97.0%" },
  ],
};

export default function Publications() {
  return (
    <section
      id="publications"
      className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-24 border-t border-border"
    >
      <Reveal>
        <SectionLabel number="02" label="RESEARCH PUBLICATIONS & PREPRINTS" />
      </Reveal>

      <div className="space-y-12">
        {/* Research Dossier: Quantum Telemetry Benchmark & Threat Modeling */}
        <Reveal delay={60}>
          <div className="bg-bg-card border border-border rounded-xl p-7 sm:p-9 shadow-xl relative overflow-hidden corner-frame">
            {/* Top header of card */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-border/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                <span className="font-mono text-xs tracking-widest text-text-primary uppercase font-semibold">
                  RESEARCH DOSSIER · EXPERIMENTAL TELEMETRY BENCHMARK
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] tracking-wider text-accent-teal px-2.5 py-0.5 rounded bg-bg-subtle border border-border">
                  DRDO SSPL & BITS PILANI
                </span>
                <span className="font-mono text-[11px] tracking-wider text-text-muted">
                  2026
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Context & Spec Table */}
              <div className="lg:col-span-6 space-y-4">
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                  Evaluation benchmark for free-space BBM92 quantum key distribution under simulated atmospheric turbulence and hierarchical threat models. 
                  Demonstrates how 22-dimensional temporal cross-channel features identify stealthy, sub-threshold eavesdropping attacks 
                  that evade conventional static QBER threshold detection.
                </p>

                {/* Spec Highlights Table */}
                <div className="space-y-2 font-mono pt-2">
                  <div className="flex items-center justify-between py-2 border-b border-border/50 text-xs">
                    <span className="text-text-muted tracking-wider">QUANTUM RESEARCH:</span>
                    <span className="text-accent-teal font-medium">SSPL, DRDO &amp; BITS Pilani</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50 text-xs">
                    <span className="text-text-muted tracking-wider">CURRENT LAB PIVOT:</span>
                    <span className="text-accent-teal/80">NSDL · CREST (Neuromorphic)</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50 text-xs">
                    <span className="text-text-muted tracking-wider">CURRENT ADVISOR:</span>
                    <span className="text-accent-teal font-medium">Dr. Parikshit Sahatiya</span>
                  </div>
                  <div className="flex items-center justify-between py-2 text-xs">
                    <span className="text-text-muted tracking-wider">ACCEPTED PAPER:</span>
                    <span className="text-emerald-400 font-medium">IEEE INDISCON 2026 (Track 5)</span>
                  </div>
                </div>
              </div>

              {/* Right Column: QKD Telemetry & Temporal Observable Visualization */}
              <div className="lg:col-span-6 bg-bg-subtle rounded-lg border border-border/80 p-5 font-mono">
                <div className="flex items-center justify-between text-[11px] text-text-muted mb-2">
                  <span className="font-semibold text-text-primary">FREE-SPACE BBM92 QKD (DRDO SSPL)</span>
                  <span className="text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-800/50 text-[10px]">Bell |S| &gt; 2.0</span>
                </div>
                
                <div className="h-28 w-full relative my-1">
                  <svg
                    viewBox="0 0 320 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    {/* Grid Lines */}
                    <line x1="10" y1="20" x2="310" y2="20" stroke="#27272e" strokeWidth="0.8" strokeDasharray="3 3" />
                    <line x1="10" y1="45" x2="310" y2="45" stroke="#27272e" strokeWidth="0.8" strokeDasharray="3 3" />
                    <line x1="10" y1="70" x2="310" y2="70" stroke="#27272e" strokeWidth="0.8" />

                    {/* Bell S-Parameter Trace (Amber Gold) with live pulse */}
                    <polyline
                      points="10,28 35,26 60,30 85,24 110,29 135,27 160,54 185,58 210,50 235,28 260,26 285,30 310,27"
                      stroke="#F5A623"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="telemetry-trace"
                    />

                    {/* Sub-threshold anomaly marker with active beacon */}
                    <rect x="155" y="15" width="60" height="50" fill="#10b981" fillOpacity="0.08" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2 2" />
                    <text x="162" y="24" fill="#10b981" fontSize="7" fontFamily="monospace">STEALTH ATTACK</text>
                    <text x="162" y="33" fill="#10b981" fontSize="6" fontFamily="monospace">91.3% RECALL</text>

                    {/* Active pulse anomaly node (SVG native animate keeps center fixed at 185, 58) */}
                    <circle cx="185" cy="58" r="3" fill="#10b981" opacity="0.6">
                      <animate attributeName="r" values="2.5;9" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="185" cy="58" r="2.5" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.8">
                      <animate attributeName="r" values="2.5;13" dur="2s" begin="0.35s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="2s" begin="0.35s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="185" cy="58" r="2.5" fill="#10b981" />

                    {/* Quantum Bit Error Rate (QBER) Baseline (Emerald) */}
                    <polyline
                      points="10,62 35,60 60,63 85,61 110,62 135,60 160,58 185,57 210,59 235,62 260,61 285,63 310,61"
                      stroke="#10b981"
                      strokeWidth="1.2"
                      strokeDasharray="3 2"
                      className="opacity-80"
                    />
                  </svg>
                </div>

                <div className="flex justify-between text-[10px] text-text-dim mt-2 pt-2 border-t border-border/50">
                  <span>0s (30s Window)</span>
                  <span className="text-accent-teal font-medium">22-D Temporal Telemetry Stream</span>
                  <a
                    href="https://github.com/SakshamDev/bbm92-qkd-anomaly-detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-teal underline transition-colors"
                  >
                    GitHub Repo ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Featured Paper 1: IEEE INDISCON 2026 */}
        <Reveal delay={120}>
          <div className="bg-bg-card border border-border hover:border-accent-teal/40 rounded-xl p-8 sm:p-10 transition-all duration-300 shadow-xl corner-frame">
            {/* Header / Venue Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-border/70">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 font-mono text-xs font-semibold tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ACCEPTED</span>
                </span>
                <span className="font-mono text-xs tracking-wider px-2.5 py-1 rounded bg-bg-subtle border border-border text-accent-teal font-medium">
                  {INDISCON_PAPER.track}
                </span>
                <span className="font-mono text-xs tracking-wider text-text-muted">
                  Paper ID: {INDISCON_PAPER.paperId}
                </span>
              </div>
              <div className="font-mono text-xs text-text-secondary">
                {INDISCON_PAPER.presentation}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary leading-snug mb-3">
              {INDISCON_PAPER.title}
            </h3>

            {/* Author & Affiliation */}
            <div className="font-mono text-xs sm:text-sm text-text-secondary mb-6">
              <span className="text-text-primary font-semibold">{INDISCON_PAPER.author}</span> ·{" "}
              <span className="text-accent-teal">{INDISCON_PAPER.affiliation}</span>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed mb-8 max-w-4xl">
              <p>{INDISCON_PAPER.description1}</p>
              <p>{INDISCON_PAPER.description2}</p>
            </div>

            {/* Keyword / Badges Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {INDISCON_PAPER.keywords.map((kw) => (
                <span
                  key={kw}
                  className="font-mono text-[11px] tracking-wider px-2.5 py-1 rounded bg-bg-subtle border border-border text-text-muted"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border/60">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider px-3.5 py-1.5 rounded bg-bg-subtle border border-border text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>PRESENTATION: MNIT JAIPUR · SEP 2026</span>
                </span>
              </div>

              <span className="font-mono text-xs tracking-wider text-text-muted flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-accent-teal" />
                <span>7TH IEEE INDIA COUNCIL SUBSECTIONS CONFERENCE</span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Paper 2: IACR Cryptology ePrint Archive Preprint */}
        <Reveal delay={200}>
          <div className="bg-bg-card border border-border hover:border-accent-teal/40 rounded-xl p-8 sm:p-10 transition-all duration-300 shadow-xl corner-frame">
            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-border/70">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-accent-teal/10 border border-accent-teal/40 text-accent-teal font-mono text-xs font-semibold tracking-wider">
                  <span>PREPRINT</span>
                </span>
                <span className="font-mono text-xs tracking-wider text-text-primary font-medium">
                  {IACR_PREPRINT.repository}
                </span>
              </div>
              <span className="font-mono text-xs text-text-muted">
                {IACR_PREPRINT.report} · {IACR_PREPRINT.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary leading-snug mb-3">
              {IACR_PREPRINT.title}
            </h3>

            {/* Author */}
            <div className="font-mono text-xs sm:text-sm text-text-secondary mb-6">
              <span className="text-text-primary font-semibold">{IACR_PREPRINT.author}</span> ·{" "}
              <span className="text-text-muted">International Association for Cryptologic Research (IACR)</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8 max-w-4xl">
              {IACR_PREPRINT.description}
            </p>

            {/* Key Results Table (Simulated Evaluation) */}
            <div className="mb-8 rounded-lg border border-border overflow-hidden bg-bg-subtle/70">
              <div className="px-6 py-3.5 border-b border-border bg-bg-card flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-text-primary tracking-wider">
                  <BarChart3 className="w-4 h-4 text-accent-teal" />
                  <span>KEY SIMULATED RESULTS (24-HOUR FREE-SPACE TELEMETRY)</span>
                </div>
                <span className="font-mono text-[11px] text-accent-teal uppercase font-medium">
                  SIMULATED EVALUATION
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-border/80 text-text-muted">
                      <th className="px-6 py-3 font-medium uppercase tracking-wider">Metric</th>
                      <th className="px-6 py-3 font-medium uppercase tracking-wider">Static QBER Threshold</th>
                      <th className="px-6 py-3 font-semibold uppercase tracking-wider text-accent-teal">Proposed XGBoost Model</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 text-text-secondary">
                    {IACR_PREPRINT.simulatedResults.map((row) => (
                      <tr key={row.metric} className="hover:bg-bg-card/50 transition-colors">
                        <td className="px-6 py-3 text-text-primary font-medium">{row.metric}</td>
                        <td className="px-6 py-3 text-text-muted">{row.staticQber}</td>
                        <td className="px-6 py-3 text-emerald-400 font-semibold">{row.xgboost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-2.5 bg-bg-card/60 text-[11px] font-mono text-text-dim border-t border-border/60">
                * Note: Evaluated across 5 random seeds over a 30-second sliding window under blended sub-threshold eavesdropping attacks.
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border/60">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-text-muted">
                  Report: <strong className="text-text-primary">{IACR_PREPRINT.report}</strong>
                </span>
              </div>

              <div className="font-mono text-xs tracking-wider text-accent-teal flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>IACR ePRINT 2026/1282</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
