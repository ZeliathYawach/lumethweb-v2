import React from 'react';
import { AIFeatureCard } from './AIFeatureCard';

const AI_FEATURES = [
  {
    image: "https://images.unsplash.com/photo-1621786030484-4c855eed6974?auto=format&fit=crop&q=80&w=800",
    title: "Smart Skin Analysis",
    description: "Our AI analyzes your skin type and concerns to recommend the perfect treatments"
  },
  {
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800",
    title: "Personalized Beauty Journey",
    description: "Get customized service recommendations based on your beauty goals"
  }
];

export function AIFeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            AI-Powered Beauty Intelligence
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AI_FEATURES.map((feature, index) => (
            <AIFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}