import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sri Charan Machabhakthuni – Python Backend Developer",
  description:
    "Portfolio of Sri Charan Machabhakthuni – Backend developer specializing in FastAPI, PostgreSQL, authentication systems, and scalable real-time applications.",
  keywords: [
    "Sri Charan Machabhakthuni",
    "Backend Developer",
    "FastAPI",
    "PostgreSQL",
    "Python Developer",
    "REST APIs",
    "Cybersecurity",
    "Authentication Systems",
    "PillionPal",
    "RupeeWave",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sri Charan Machabhakthuni – Backend Developer",
    description:
      "FastAPI • PostgreSQL • Auth Systems • Real-time APIs. Explore production-ready backend projects such as PillionPal and RupeeWave.",
    url: "https://sri-charan-machabhakthuni.vercel.app",
    siteName: "Sri Charan Portfolio",
    images: [
      {
        url: "/portfolio-banner.png",
        width: 1200,
        height: 630,
        alt: "Sri Charan Portfolio Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Charan Machabhakthuni – Backend Developer",
    description:
      "Production-ready FastAPI backend projects | Real-time apps, authentication, wallets, banking systems.",
    images: ["/portfolio-banner.png"],
  },
  metadataBase: new URL("https://sri-charan-machabhakthuni.vercel.app"),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  themeColor: "#0C0C0C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
