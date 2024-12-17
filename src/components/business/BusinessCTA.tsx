import React from 'react';
import { AppStoreButtons } from '../ui/AppStoreButtons';
import { Shield, Star } from 'lucide-react';

export function BusinessCTA() {
  return (
    <section className="text-center py-12 sm:py-16 px-4">
      <div className="bg-gradient-to-r from-amber-400/10 to-purple-600/10 backdrop-blur-sm p-6 sm:p-12 rounded-2xl border border-amber-400/20">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
          Ready to Transform Your Business?
        </h3>
        <p className="text-gray-300 mb-6 sm:mb-8">
          Join thousands of successful beauty businesses using Lumeth Helm
        </p>
        <AppStoreButtons variant="dark" appType="helm" className="justify-center mb-4 sm:mb-6" />
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-6 sm:mt-8">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-gray-400">Secure Download</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-gray-400">Rated 4.9/5 by Business Users</span>
          </div>
        </div>
      </div>
    </section>
  );
}