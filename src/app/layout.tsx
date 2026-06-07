import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ikechukwu Ogbonna — Founder & Lead Software Engineer",
    template: "%s | Ikechukwu Ogbonna",
  },
  description:
    "Founder & Lead Software Engineer at Radius Tech Hub. I build revenue-generating, production-grade software products — from CRM systems to fintech platforms.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Laravel",
    "Nigeria",
    "Founder",
    "Technical Architect",
  ],
  authors: [{ name: "Ikechukwu Ogbonna" }],
  creator: "Ikechukwu Ogbonna",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ikechukwu Ogbonna",
    title: "Ikechukwu Ogbonna — Founder & Lead Software Engineer",
    description:
      "Founder & Lead Software Engineer at Radius Tech Hub. I build revenue-generating, production-grade software products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikechukwu Ogbonna — Founder & Lead Software Engineer",
    description:
      "Founder & Lead Software Engineer at Radius Tech Hub. I build revenue-generating, production-grade software products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
