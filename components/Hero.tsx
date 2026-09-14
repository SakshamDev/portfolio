"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto"
    >
      {/* Hero Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        {/* Left Column: Core Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

          {/* Status */}
          <div className="flex items-center gap-2.5">
            <span className="status-dot" />
            <span className="font-mono text-xs tracking-widest text-emerald-400 font-medium">
              UNDERGRADUATE RESEARCHER · ACTIVE
            </span>
          </div>

          {/* Headline */}
          <div>
            <h1 className="font-sans font-bold text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-tight text-text-primary">
              Pioneering AI hardware &{" "}
              <span className="font-serif italic font-normal text-accent-teal">
                intelligent systems.
              </span>
            </h1>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl font-normal">
            Undergraduate researcher at <strong className="text-text-primary font-medium">BITS Pilani</strong>, exploring
            the broader frontiers of <strong className="text-text-primary font-medium">AI Hardware</strong>, open to all emerging compute paradigms, with current active research in the applications layer of{" "}
            <strong className="text-accent-teal font-medium">neuromorphic computing</strong> at the <strong className="text-text-primary font-medium">Nanoscale Devices Lab (NSDL)</strong> under <strong className="text-text-primary font-medium">CREST</strong>,{" "}
            advised by <strong className="text-accent-teal font-medium">Dr. Parikshit Sahatiya</strong>. Previously engineered ML anomaly detection for BBM92 QKD during a research internship at <strong className="text-text-primary font-medium">SSPL, DRDO</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#publications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-text-primary text-bg font-mono text-xs tracking-wider font-semibold hover:bg-white transition-all"
            >
              <span>IEEE INDISCON & PREPRINT</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#lab"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border bg-transparent hover:border-accent-teal/60 text-text-secondary hover:text-text-primary font-mono text-xs tracking-wider transition-all"
            >
              <span>LAB FOCUS</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent-teal" />
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/SakshamDev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded border border-border bg-transparent hover:border-accent-teal hover:text-accent-teal text-text-secondary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/sakshamgupta19"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded border border-border bg-transparent hover:border-accent-teal hover:text-accent-teal text-text-secondary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:visit.sakshamx@gmail.com"
                className="p-2.5 rounded border border-border bg-transparent hover:border-accent-teal hover:text-accent-teal text-text-secondary transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Portrait */}
        <div className="lg:col-span-5">
          <div className="rounded-xl overflow-hidden border border-border/60 group">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg-subtle">
              <Image
                src="/images/dept.JPG"
                alt="Saksham Gupta at the Department of Electrical Engineering, BITS Pilani"
                fill
                priority
                className="object-cover object-top filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent pointer-events-none" />

              {/* Minimal bottom label */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="font-mono text-[11px] text-accent-teal font-semibold uppercase tracking-wider">
                  Saksham Gupta
                </div>
                <div className="font-mono text-[11px] text-text-muted mt-0.5">
                  BITS Pilani · EEE · NSDL CREST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
