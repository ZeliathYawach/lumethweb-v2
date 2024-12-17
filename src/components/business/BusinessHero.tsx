import React from 'react';
import { AppStoreButtons } from '../ui/AppStoreButtons';

export function BusinessHero() {
  return (
    <section className="mb-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Transform Your Beauty Business with Lumeth Helm
          </span>
        </h2>
        <p className="text-gray-300 text-xl mb-8">
          The all-in-one platform designed to streamline your operations, boost revenue, and deliver exceptional customer experiences.
        </p>
        <AppStoreButtons variant="dark" appType="helm" className="justify-center" />
      </div>
    </section>
  );
}