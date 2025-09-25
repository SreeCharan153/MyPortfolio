import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import dynamic from 'next/dynamic';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });
//const Toaster = dynamic(() => import('@/components/ui/toaster'), { ssr: false });

export const metadata: Metadata = {
  title: 'Sri Charan Machabhakthuni - Cybersecurity Enthusiast & Tech Innovator',
  description: 'Portfolio of Sri Charan Machabhakthuni - Cybersecurity expert, startup founder, and tech innovator. Explore my projects and experience in technology and entrepreneurship.',
  keywords: ['Sri Charan Machabhakthuni', 'Cybersecurity', 'PillionPal', 'Tech Innovator', 'Startup Founder'],
  openGraph: {
    title: 'Sri Charan Machabhakthuni - Cybersecurity Enthusiast & Tech Innovator',
    description: 'Portfolio of Sri Charan Machabhakthuni - Cybersecurity expert, startup founder, and tech innovator.',
    url: 'https://sri-charan-machabhakthuni.vercel.app',
    siteName: 'Sri Charan Machabhakthuni Portfolio',
    images: [{ url: '/portfolio-banner.png', width: 1200, height: 630, alt: 'Portfolio Banner' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Charan Machabhakthuni Portfolio',
    description: 'Explore my projects and experience in technology and entrepreneurship.',
    images: ['/portfolio-banner.png'],
  },
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
