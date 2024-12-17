import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import type { Testimonial } from '../../../types/testimonial';

interface TrackProps {
  testimonials: Testimonial[];
}

export function Track({ testimonials }: TrackProps) {
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden">
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
        whileHover={{
          scale: 0.98,
          transition: { duration: 0.3 }
        }}
      >
        {infiniteTestimonials.map((testimonial, index) => (
          <Card
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}