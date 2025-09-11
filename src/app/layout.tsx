import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import { Navbar } from './(components)/Header/Navbar';
import './globals.css';
import { Footer } from './(components)/Footer';
import { ReactNode } from 'react';

const be_vietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  display: 'auto',
  weight: ['100', '200', '300', '400', '500', '600'],
});

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const metadata: Metadata = {
  applicationName: 'Missura Consultoria Tributária',
  title: 'Missura Consultoria Tributária',
  description: 'Missura Consultoria Tributária',
  keywords: [
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
    'palavra chave',
  ],
  authors: [
    {
      name: 'Missura Consultoria Tributária',
      url: 'https://recuperartributos.com.br',
    },
  ],
  creator: 'Missura Consultoria Tributária',
  openGraph: {
    title: 'Missura Consultoria Tributária',
    description: 'Missura Consultoria Tributária',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo-m.ico" />
      </head>
      <body className={`${be_vietnam.className} antialiased`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
