import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { AppStoreButtons } from './ui/AppStoreButtons';

export function Hero() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              Transform Your Beauty Journey
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Book beauty services with AI-powered recommendations. Connect with top salons, spas, and beauty professionals.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/get-started"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <Link 
                to="/business"
                className="w-full sm:w-auto border border-amber-400 text-amber-400 px-6 sm:px-8 py-3 rounded-full hover:bg-amber-400/10 transition-colors text-center"
              >
                For Businesses
              </Link>
            </div>
            <AppStoreButtons variant="dark" className="flex-wrap justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
}