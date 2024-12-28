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
          duration: 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
        whileHover={{
          scale: 0.98,
          transition: { duration: 0.5, ease: "easeOut" }
        }}
      >
        {infiniteTestimonials.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.id}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut"
            }}
          >
            <Card testimonial={testimonial} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}