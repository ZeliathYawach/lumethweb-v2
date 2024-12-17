import React from 'react';
import { PageTransition } from '../components/animations/PageTransition';
import { AppStoreButtons } from '../components/ui/AppStoreButtons';
import { Header } from '../components/Header';
import { Sparkles, Calendar, Brain, Star, Clock, Shield } from 'lucide-react';
import { AnimatedTestimonials } from './GetStarted/components/AnimatedTestimonials';

export function GetStarted() {
  return (
    <>
      <Header />
      <PageTransition>
        <div className="min-h-screen bg-black text-white">
          {/* Hero Section */}
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

          {/* Problems We Solve */}
          <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
                  Problems We Solve
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-purple-900/30 p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300">
                  <Calendar className="w-12 h-12 text-amber-400 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Effortless Booking</h3>
                  <p className="text-gray-300">
                    No more phone calls or waiting. Book appointments instantly with your favorite beauty professionals.
                  </p>
                </div>
                <div className="bg-purple-900/30 p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300">
                  <Brain className="w-12 h-12 text-amber-400 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">AI-Powered Recommendations</h3>
                  <p className="text-gray-300">
                    Get personalized beauty service suggestions based on your preferences and skin type.
                  </p>
                </div>
                <div className="bg-purple-900/30 p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300">
                  <Clock className="w-12 h-12 text-amber-400 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Time Management</h3>
                  <p className="text-gray-300">
                    View real-time availability and manage your appointments with ease.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Features */}
          <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
                  AI-Powered Beauty Intelligence
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1621786030484-4c855eed6974?auto=format&fit=crop&q=80&w=800"
                    alt="AI Beauty Analysis"
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-xl font-semibold mb-2">Smart Skin Analysis</h3>
                    <p className="text-gray-300">
                      Our AI analyzes your skin type and concerns to recommend the perfect treatments
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
                    alt="Personalized Recommendations"
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-xl font-semibold mb-2">Personalized Beauty Journey</h3>
                    <p className="text-gray-300">
                      Get customized service recommendations based on your beauty goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Animated Testimonials */}
          <AnimatedTestimonials />
        </div>
      </PageTransition>
    </>
  );
}