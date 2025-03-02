import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'ProSafe Pest Solutions - Pest Free Solutions Delivered with Excellence',
  description:
    'Professional pest control services in Vadodara, Bharuch, and Ankleshwar. We offer mosquito, cockroach, bedbug, ant, termite, and rodent control services.',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import './globals.css';
