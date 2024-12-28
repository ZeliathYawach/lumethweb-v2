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
          duration: 20, // Reduced from 40 to 20 seconds for faster movement
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
        whileHover={{
          scale: 0.98,
          transition: { 
            duration: 0.3, 
            ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smoother hover effect
          }
        }}
      >
        {infiniteTestimonials.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.id}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.43, 0.13, 0.23, 0.96] // Smooth easing for initial animation
            }}
          >
            <Card testimonial={testimonial} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}