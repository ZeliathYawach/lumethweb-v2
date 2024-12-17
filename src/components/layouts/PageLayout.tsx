import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { PageTransition } from '../animations/PageTransition';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
                {title}
              </span>
            </h1>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}