import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IFH Connects — Rent, stay or find an office",
    template: "%s · IFH Connects",
  },
  description:
    "Find IFH-verified long-stay homes and office spaces in one clear, broker-free property platform.",
  icons: { icon: "/assets/logo.png" },
  openGraph: { type: "website", siteName: "IFH Connects" },
};

export const viewport: Viewport = {
  themeColor: "#9fe870",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${spaceMono.variable}`}>
      <body>
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SmoothScroll />
        <RevealObserver />
      </body>
    </html>
  );
}
