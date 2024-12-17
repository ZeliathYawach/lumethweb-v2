import React from 'react';

export function GetStartedHero() {
  return (
    <section className="relative pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Transform Your Beauty Experience
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied users who have revolutionized their beauty routine with Lumeth's AI-powered platform
        </p>
      </div>
    </section>
  );
}