"use client";

import { useState, useEffect } from "react";

const BOOT_STEPS = [
  "INITIALIZING HARDWARE TELEMETRY...",
  "CALIBRATING QUANTUM CHANNEL [BBM92]...",
  "LOADING NEUROMORPHIC EVENT KERNELS...",
  "COMPILING CROSS-CHANNEL FEATURES...",
  "SYSTEM ARCHITECTURE READY [OK]",
];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if user has already visited in this session to make repeat browsing snappy
    const hasLoaded = sessionStorage.getItem("portfolio_loaded");
    const duration = hasLoaded ? 1100 : 1800; // Snappier if repeat visit, but still shows slick sequence
    const intervalTime = 25;
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentPct = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setProgress(currentPct);

      const calculatedStep = Math.min(
        Math.floor((currentPct / 100) * BOOT_STEPS.length),
        BOOT_STEPS.length - 1
      );
      setStepIndex(calculatedStep);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          sessionStorage.setItem("portfolio_loaded", "true");
          // Remove from DOM after transition completes
          setTimeout(() => {
            setShouldRender(false);
          }, 700);
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isDone ? "opacity-0 scale-[1.02] pointer-events-none" : "opacity-100 scale-100"
      }`}
      aria-hidden={isDone}
    >

      {/* Subtle CRT scanline overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(18,18,24,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center text-center">
        {/* Top Status Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-border-subtle/80 border border-border mb-8">
          <span className="status-dot animate-pulse" />
          <span className="font-mono text-[11px] tracking-widest text-text-muted">
            SYS.INIT // BITS PILANI
          </span>
        </div>

        {/* Upgraded Glitch/Glow Monogram */}
        <div className="relative mb-6">
          <h1 className="font-sans font-bold text-3xl sm:text-5xl tracking-tight text-text-primary loader-glitch">
            SAKSHAM<span className="text-accent-teal">.</span>
          </h1>
          <div className="font-mono text-xs tracking-widest text-accent-teal/90 mt-1 uppercase font-medium">
            AI Hardware & Applied Intelligence
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-bg-card border border-border rounded-full p-1 mb-4 shadow-2xl relative overflow-hidden">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-accent-teal-dark via-accent-teal to-accent-teal-light transition-all duration-75 ease-out relative shadow-[0_0_15px_rgba(245,166,35,0.6)]"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer light bar sweep */}
            <div className="absolute inset-0 bg-white/20 animate-shimmer" />
          </div>
        </div>

        {/* Metric and Step Line */}
        <div className="w-full flex items-center justify-between font-mono text-xs text-text-muted mb-6">
          <span className="text-accent-teal font-semibold">{String(progress).padStart(3, "0")}%</span>
          <span className="text-emerald-400 font-medium">
            {progress === 100 ? "READY" : "LOADING KERNEL"}
          </span>
        </div>

        {/* Terminal Boot Sequence Log */}
        <div className="h-6 flex items-center justify-center font-mono text-[11px] text-text-secondary tracking-wider">
          <span className="text-accent-teal mr-2">&gt;</span>
          <span className="animate-pulse">{BOOT_STEPS[stepIndex]}</span>
        </div>
      </div>

      {/* Corner Technical Watermarks */}
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-text-dim hidden sm:block">
        DRDO SSPL · NSDL CREST
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] text-text-dim hidden sm:block">
        HYD.BITS-PILANI.AC.IN
      </div>
    </div>
  );
}
