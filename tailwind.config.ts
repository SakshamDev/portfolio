import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#09090b",
          subtle: "#0e0e11",
          card: "#121216",
          elevated: "#18181d",
        },
        text: {
          primary: "#f4f4f5",
          secondary: "#a1a1aa",
          muted: "#71717a",
          dim: "#52525b",
        },
        border: {
          subtle: "#1e1e24",
          DEFAULT: "#27272e",
          hover: "#3f3f46",
        },
        accent: {
          teal: "#F5A623",
          "teal-light": "#FFC85A",
          "teal-dark": "#C97F00",
          gold: "#F5A623",
          "gold-light": "#FFC85A",
          amber: "#F5A623",
          emerald: "#10b981",
          "emerald-light": "#34d399",
        },
      },
      fontFamily: {
        mono: ["var(--font-ibm-plex-mono)", "IBM Plex Mono", "monospace"],
        sans: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        serif: ["var(--font-dm-serif)", "DM Serif Display", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.18em",
        ultra: "0.25em",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(245, 166, 35, 0.25)",
        "glow-teal": "0 0 40px -10px rgba(245, 166, 35, 0.25)",
        "glow-emerald": "0 0 40px -10px rgba(16, 185, 129, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
