import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saksham Gupta | Researcher & Systems Engineer | BITS Pilani",
  description:
    "Undergraduate researcher at BITS Pilani (NSDL, CREST under Dr. Parikshit Sahatiya) working on Quantum Key Distribution security, physics-informed machine learning, and applied neuromorphic systems.",
  keywords: [
    "Saksham Gupta",
    "BITS Pilani",
    "NSDL",
    "CREST",
    "Dr. Parikshit Sahatiya",
    "Quantum Key Distribution",
    "QKD",
    "BBM92",
    "Quantum Cryptography",
    "Eavesdropping Detection",
    "Physics-Informed Machine Learning",
    "Neuromorphic Computing",
    "IEEE INDISCON 2026",
    "IACR ePrint",
  ],
  authors: [{ name: "Saksham Gupta" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Saksham Gupta | Researcher & Systems Engineer | BITS Pilani",
    description:
      "Undergraduate researcher at BITS Pilani (NSDL, CREST under Dr. Parikshit Sahatiya) investigating QKD eavesdropping detection, physics-informed ML, and applied intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-accent-teal/25 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
