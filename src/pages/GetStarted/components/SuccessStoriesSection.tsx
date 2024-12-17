import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const TESTIMONIALS = [
  {
    name: "Emily Chen",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    content: "Lumeth's AI recommendations helped me find the perfect skincare routine. Booking appointments is now a breeze!"
  },
  {
    name: "Sarah Johnson",
    role: "Beauty Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    content: "The personalized service suggestions are amazing. I've discovered so many great beauty professionals through the app."
  },
  {
    name: "Jessica Williams",
    role: "Professional Model",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    content: "As someone who needs regular beauty services, Lumeth has made my life so much easier. The booking system is flawless!"
  }
];

export function SuccessStoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Success Stories
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}