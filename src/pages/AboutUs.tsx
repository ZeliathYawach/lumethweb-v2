import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';
import { Crown } from 'lucide-react';

export function AboutUs() {
  return (
    <PageLayout title="About Us">
      <div className="prose prose-invert max-w-none">
        <section className="mb-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-12 w-12 text-amber-400" />
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Revolutionizing Beauty Services
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Lumeth is transforming how people discover, book, and experience beauty services through innovative technology and AI-powered solutions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Our Mission
          </h2>
          <p className="text-gray-300">
            To empower beauty professionals and provide customers with seamless access to quality beauty services through innovative technology.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Our Vision
          </h2>
          <p className="text-gray-300">
            To create a world where everyone can easily access personalized beauty services that make them feel confident and beautiful.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}