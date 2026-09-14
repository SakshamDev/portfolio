"use client";

import { useState } from "react";
import { Mail, Copy, Check, ExternalLink, MapPin, Send, FileText, Github, Linkedin, BookOpen } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./Section";

const ACADEMIC_PROFILES = [
  {
    name: "GITHUB",
    description: "ML Repositories, QKD Telemetry & Code",
    handle: "github.com/SakshamDev",
    href: "https://github.com/SakshamDev",
    icon: Github,
  },
  {
    name: "LINKEDIN",
    description: "Academic & Professional Network",
    handle: "linkedin.com/in/sakshamgupta19",
    href: "https://linkedin.com/in/sakshamgupta19",
    icon: Linkedin,
  },
  {
    name: "GOOGLE SCHOLAR",
    description: "IEEE INDISCON 2026 & Future Citations",
    handle: "Saksham Gupta (BITS Pilani)",
    href: "https://scholar.google.com/citations?user=3g5eeuQAAAAJ&hl=en",
    icon: BookOpen,
  },
  {
    name: "CURRICULUM VITAE",
    description: "Academic & Research History",
    handle: "Available Upon Request (PDF)",
    href: "mailto:f20250785@hyderabad.bits-pilani.ac.in?subject=CV%20Request%20-%20Saksham%20Gupta",
    icon: FileText,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copiedPersonal, setCopiedPersonal] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const academicEmail = "f20250785@hyderabad.bits-pilani.ac.in";
  const personalEmail = "visit.sakshamx@gmail.com";

  const handleCopy = (email: string, isPersonal = false) => {
    navigator.clipboard.writeText(email);
    if (isPersonal) {
      setCopiedPersonal(true);
      setTimeout(() => setCopiedPersonal(false), 2500);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section
      id="contact"
      className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-24 border-t border-border"
    >
      <Reveal>
        <SectionLabel number="06" label="ACADEMIC COMMUNICATIONS & CONTACT" />
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Email & Academic Channels (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Direct Academic Email Card */}
          <Reveal delay={100}>
            <div className="bg-bg-card border border-border hover:border-accent-teal/50 rounded-xl p-8 sm:p-10 shadow-xl corner-frame">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                <span className="font-mono text-xs tracking-widest text-text-muted uppercase">
                  PRIMARY ACADEMIC INQUIRY
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                  <span className="status-dot" />
                  <span>INBOX ACTIVE</span>
                </span>
              </div>

              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary mb-3">
                Let&apos;s build something resonant.
              </h3>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
                I welcome academic inquiries regarding my accepted paper at IEEE INDISCON 2026,
                collaborative research across AI hardware architectures, applied neuromorphic systems,
                or visiting student appointments.
              </p>

              {/* Institutional Email Display */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3 rounded-lg bg-bg-subtle border border-border mb-4">
                <div className="flex items-center gap-3 px-3 flex-1 min-w-0">
                  <Mail className="w-5 h-5 text-accent-teal flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] text-text-muted">INSTITUTIONAL (BITS PILANI)</div>
                    <div className="font-mono text-xs sm:text-sm text-text-primary truncate font-medium">
                      {academicEmail}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(academicEmail, false)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-bg-card border border-border hover:border-accent-teal text-text-primary font-mono text-xs tracking-wider transition-all flex-1 sm:flex-none"
                    aria-label="Copy institutional email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${academicEmail}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-accent-teal text-bg font-mono text-xs font-semibold tracking-wider hover:bg-accent-teal-light transition-all flex-1 sm:flex-none"
                  >
                    <span>MAILTO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Personal Direct Email */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3 rounded-lg bg-bg-subtle/60 border border-border/70">
                <div className="flex items-center gap-3 px-3 flex-1 min-w-0">
                  <Mail className="w-4 h-4 text-text-secondary flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] text-text-muted">DIRECT INBOX</div>
                    <div className="font-mono text-xs sm:text-sm text-text-secondary truncate">
                      {personalEmail}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(personalEmail, true)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-bg-card border border-border hover:border-text-secondary text-text-muted hover:text-text-primary font-mono text-xs transition-all"
                  >
                    {copiedPersonal ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 text-[11px]">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="text-[11px]">COPY</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${personalEmail}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded border border-border hover:border-accent-teal text-text-muted hover:text-accent-teal font-mono text-[11px] transition-all"
                  >
                    <span>MAIL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Academic Profiles 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACADEMIC_PROFILES.map((prof, idx) => {
              const Icon = prof.icon;
              return (
                <Reveal key={prof.name} delay={150 + idx * 60}>
                  <a
                    href={prof.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-bg-card border border-border hover:border-accent-teal/40 rounded-lg p-5 transition-all duration-200 group h-full"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-accent-teal" />
                        <span className="font-mono text-xs font-semibold text-text-primary tracking-wider">
                          {prof.name}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-teal transition-colors" />
                    </div>
                    <div className="font-mono text-xs text-accent-teal/90 mb-1">
                      {prof.handle}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {prof.description}
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Right Column: Direct Message Transmission Card (5 cols) */}
        <div className="lg:col-span-5">
          <Reveal delay={250}>
            <div className="bg-bg-card border border-border rounded-xl p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                <span className="font-mono text-xs tracking-widest text-accent-teal font-semibold uppercase">
                  DIRECT MEMO DISPATCH
                </span>
                <span className="font-mono text-[11px] text-text-muted">
                  DISPATCH TO SAKSHAM
                </span>
              </div>

              {formSent ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-950/60 border border-emerald-800 flex items-center justify-center text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-sans font-bold text-lg text-text-primary">
                    Transmission Dispatched
                  </h4>
                  <p className="font-mono text-xs text-text-secondary max-w-xs mx-auto">
                    Thank you for reaching out. Saksham will review your correspondence promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSent(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-4 font-mono text-xs text-accent-teal hover:underline"
                  >
                    Send another dispatch →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 font-sans">
                  <div>
                    <label className="block font-mono text-xs text-text-muted mb-2 tracking-wider">
                      NAME / LAB AFFILIATION
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Vance / MIT CSAIL"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-bg-subtle border border-border text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-text-muted mb-2 tracking-wider">
                      CONTACT EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@csail.mit.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-bg-subtle border border-border text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-text-muted mb-2 tracking-wider">
                      MESSAGE / COLLABORATION INQUIRY
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Discussing INDISCON 2026 paper, AI hardware architectures, neuromorphic computing, or potential research collaboration..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-bg-subtle border border-border text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded bg-accent-teal text-bg font-mono text-xs font-semibold tracking-wider hover:bg-accent-teal-light transition-all flex items-center justify-center gap-2"
                  >
                    <span>TRANSMIT DISPATCH</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              {/* Physical Location Marker */}
              <div className="pt-6 mt-6 border-t border-border/60 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-teal flex-shrink-0 mt-0.5" />
                <div className="font-mono text-xs text-text-muted leading-relaxed">
                  BITS Pilani, Hyderabad Campus · Jawahar Nagar, Kapra, Hyderabad 500078, Telangana, India
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
