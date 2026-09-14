import { ReactNode } from "react";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
  showLine?: boolean;
}

export function SectionLabel({
  number,
  label,
  className = "",
  showLine = true,
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 mb-12 sm:mb-16 ${className}`}>
      <span className="font-mono text-xs tracking-widest text-accent-teal font-semibold">
        {number}
      </span>
      <span className="font-mono text-xs tracking-widest text-accent-teal/70 uppercase font-medium">
        {label}
      </span>
      {showLine && (
        <div className="flex-1 h-px bg-gradient-to-r from-accent-teal/30 via-border to-transparent" aria-hidden="true" />
      )}
    </div>
  );
}

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative px-6 sm:px-10 md:px-14 lg:px-20 max-w-7xl mx-auto py-20 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
