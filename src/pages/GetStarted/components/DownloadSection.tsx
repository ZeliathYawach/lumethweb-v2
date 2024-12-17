import React from 'react';
import { AppStoreButtons } from '../../../components/ui/AppStoreButtons';

export function DownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Start Your Beauty Journey Today
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Download Lumeth now and experience the future of beauty services
        </p>
        <div className="flex justify-center">
          <AppStoreButtons variant="dark" className="justify-center" />
        </div>
      </div>
    </section>
  );
}