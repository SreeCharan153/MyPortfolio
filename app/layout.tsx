import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sri Charan Machabhakthuni - Cybersecurity Enthusiast & Tech Innovator',
  description: 'Portfolio of Sri Charan Machabhakthuni - Cybersecurity expert, startup founder, and tech innovator. Explore my projects and experience in technology and entrepreneurship.',
  keywords: ['Sri Charan Machabhakthuni', 'Cybersecurity', 'PillionPal', 'Tech Innovator', 'Startup Founder'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}