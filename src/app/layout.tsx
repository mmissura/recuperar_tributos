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
  applicationName: 'Recuperar tributos',
  title: 'Recuperar tributos',
  description: 'Recuperar tributos',
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
    { name: 'Recuperar tributos', url: 'https://recuperartributos.com.br' },
  ],
  creator: 'Recuperar tributos',
  openGraph: {
    title: 'Recuperar tributos',
    description: 'Recuperar tributos',
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
