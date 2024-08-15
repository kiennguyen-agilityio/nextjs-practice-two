import { ReactNode } from 'react';

import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer.tsx';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mr',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} font-mr bg-light dark:bg-dark`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
