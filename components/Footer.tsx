"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-[#09090b] py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent-teal">
            SAKSHAM GUPTA
          </span>
          <span className="hidden sm:inline text-border">/</span>
          <span className="font-mono text-xs text-text-muted">
            BITS Pilani, Hyderabad · AI Hardware Architectures & Intelligent Systems
          </span>
        </div>

        {/* Right actions & copyright */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-text-muted">
            © 2026 SAKSHAM GUPTA
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-subtle border border-border hover:border-accent-teal text-text-secondary hover:text-text-primary font-mono text-xs tracking-wider transition-all"
            aria-label="Back to top of page"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3 text-accent-teal" />
          </button>
        </div>
      </div>
    </footer>
  );
}
