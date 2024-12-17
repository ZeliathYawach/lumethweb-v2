import React from 'react';
import { Track } from './ui/testimonials/Track';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            What Our Users Say
          </span>
        </h2>

        <Track testimonials={testimonials} />
      </div>
    </section>
  );
}