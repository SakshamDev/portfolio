"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#hero", label: "INDEX" },
  { href: "#publications", label: "PUBLICATIONS" },
  { href: "#lab", label: "LAB FOCUS" },
  { href: "#work", label: "PROJECTS" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("INDEX");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(NAV_LINKS[i].label);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string, label: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-border/80 py-3.5 shadow-2xl"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#hero", "INDEX");
          }}
          className="flex items-center gap-3 group"
        >
          <span className="font-mono text-sm tracking-widest font-semibold text-text-primary group-hover:text-accent-teal transition-colors">
            SAKSHAM GUPTA
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-border-subtle border border-border text-[11px] font-mono text-text-muted">
            <span className="status-dot" />
            <span>BITS PILANI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href, link.label);
                }}
                className={`font-mono text-xs tracking-wider px-3.5 py-1.5 rounded-md transition-all ${
                  isActive
                    ? "text-accent-teal bg-bg-card border border-accent-teal/30"
                    : "text-text-muted hover:text-text-primary hover:bg-bg-subtle"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#contact", "CONTACT");
            }}
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider px-4 py-1.5 rounded border border-accent-teal/40 text-accent-teal hover:bg-accent-teal/10 hover:border-accent-teal transition-all"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-b border-border bg-[#09090b]/98 backdrop-blur-xl px-6 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href, link.label);
              }}
              className={`block px-4 py-2.5 rounded font-mono text-xs tracking-widest ${
                active === link.label
                  ? "bg-bg-card border border-border text-accent-teal"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-subtle"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-border/60">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#contact", "CONTACT");
              }}
              className="block w-full text-center font-mono text-xs tracking-wider py-2.5 rounded border border-accent-teal/50 text-accent-teal"
            >
              GET IN TOUCH →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
