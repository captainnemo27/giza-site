import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-body", subsets: ["latin"] });
const syne = Syne({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gizadigital.vn"),
  title: "Data & AI Solutions for Business | Giza Digital",
  description: "Giza Digital builds enterprise data warehouses, AI agents, business intelligence solutions and web applications for ambitious businesses.",
  keywords: ["data platform", "AI agents", "business intelligence", "digital transformation", "web applications", "Vietnam"],
  openGraph: {
    title: "Giza Digital — Driven by Understanding",
    description: "Transforming business through Data–AI driven innovation.",
    type: "website",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Giza Digital — Transforming business through Data–AI driven innovation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giza Digital — Driven by Understanding",
    description: "Transforming business through Data–AI driven innovation.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${syne.variable}`}>{children}</body></html>;
}
