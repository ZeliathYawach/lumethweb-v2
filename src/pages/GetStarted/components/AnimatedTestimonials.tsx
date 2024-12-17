import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialTrack } from './testimonials/TestimonialTrack';
import { testimonials } from './testimonials/testimonialData';

export function AnimatedTestimonials() {
  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              What Our Users Say
            </span>
          </h2>
        </motion.div>

        <TestimonialTrack testimonials={testimonials} />
      </div>
    </section>
  );
}