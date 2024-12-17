import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';
import type { Testimonial } from '../../types/testimonial';

interface TestimonialTrackProps {
  testimonials: Testimonial[];
}

export function TestimonialTrack({ testimonials }: TestimonialTrackProps) {
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-6"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity
        }}
        whileHover={{ scale: 0.98 }}
      >
        {infiniteTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}