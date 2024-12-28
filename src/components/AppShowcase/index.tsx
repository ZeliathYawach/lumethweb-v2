import React from 'react';
import { BackgroundImage } from './BackgroundImage';
import { AppCard } from './AppCard';
import { apps } from './data';

export function AppShowcase() {
  return (
    <section id="ourapps" className="relative py-24">
      <BackgroundImage />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            One Platform, Three Powerful Apps
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app) => (
            <AppCard key={app.id} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}