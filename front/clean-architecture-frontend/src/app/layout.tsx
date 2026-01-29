import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactQueryProvider } from "@/presentation/state/react-query/providers";
import "./globals.css";

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
  metadataBase: new URL("https://chanqdigital.com"),
  title: {
    default: "ChanQ Digital | Intelligent Platforms & Experience Design",
    template: "%s | ChanQ Digital",
  },
  description:
    "ChanQ Digital helps organisations automate operations, align teams, and deliver memorable customer experiences with resilient software.",
  keywords: [
    "automation consulting",
    "digital transformation",
    "product engineering",
    "customer experience",
    "data analytics",
  ],
  openGraph: {
    title: "ChanQ Digital | Intelligent Platforms & Experience Design",
    description:
      "Partner with ChanQ Digital to ship automation, analytics, and AI-powered customer experiences that scale with your team.",
    url: "https://chanqdigital.com",
    siteName: "ChanQ Digital",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChanQ Digital | Intelligent Platforms & Experience Design",
    description:
      "Automate operations, align teams, and create standout experiences with ChanQ Digital.",
  },
  alternates: {
    canonical: "https://chanqdigital.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-50">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
