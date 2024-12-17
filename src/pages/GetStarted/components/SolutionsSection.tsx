import React from 'react';
import { Calendar, Brain, Clock } from 'lucide-react';
import { SolutionCard } from './SolutionCard';

const SOLUTIONS = [
  {
    icon: Calendar,
    title: "Effortless Booking",
    description: "No more phone calls or waiting. Book appointments instantly with your favorite beauty professionals."
  },
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description: "Get personalized beauty service suggestions based on your preferences and skin type."
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "View real-time availability and manage your appointments with ease."
  }
];

export function SolutionsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Problems We Solve
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}