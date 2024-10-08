'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

export default function ThemeProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
