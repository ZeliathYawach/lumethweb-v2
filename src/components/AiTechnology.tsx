import React from 'react';
import { Sparkles, Scan, Fingerprint, Brain } from 'lucide-react';
import { SplineBackground } from './ui/SplineBackground';

export function AiTechnology() {
  return (
    <section id="aibeauty" className="relative min-h-screen py-24 overflow-hidden">
      <SplineBackground 
        url="https://prod.spline.design/Pqv2Bt1ZkUUQxlKn/scene.splinecode"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              AI-Powered Beauty Intelligence
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Experience personalized beauty recommendations powered by cutting-edge artificial intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="flex items-start space-x-4">
              <Scan className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Skin Analysis</h3>
                <p className="text-gray-400">Advanced AI algorithms analyze your skin type and conditions to recommend the perfect treatments</p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="flex items-start space-x-4">
              <Fingerprint className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Face Shape Detection</h3>
                <p className="text-gray-400">Get personalized hairstyle and makeup recommendations based on your unique facial features</p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="flex items-start space-x-4">
              <Brain className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Smart Matching</h3>
                <p className="text-gray-400">Our AI matches you with the perfect beauty professionals based on your preferences and needs</p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="flex items-start space-x-4">
              <Sparkles className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Beauty Predictions</h3>
                <p className="text-gray-400">Get ahead of beauty trends with AI-powered predictions and personalized style forecasts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}