import React from 'react';
import { AppStoreButtons } from '../ui/AppStoreButtons';

export function BusinessCTA() {
  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-amber-400/10 to-purple-600/10 backdrop-blur-sm p-12 rounded-2xl border border-amber-400/20">
        <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
          Ready to Transform Your Business?
        </h3>
        <p className="text-gray-300 mb-8">
          Join thousands of successful beauty businesses using Lumeth Helm
        </p>
        <AppStoreButtons variant="dark" appType="helm" className="justify-center" />
      </div>
    </section>
  );
}