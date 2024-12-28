import React from 'react';
import { motion } from 'framer-motion';
import { Avatar } from './Avatar';
import { Rating } from './Rating';
import { Content } from './Content';
import type { Testimonial } from '../../../types/testimonial';

interface CardProps {
  testimonial: Testimonial;
  index: number;
}

export function Card({ testimonial, index }: CardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="flex-shrink-0 w-[350px] group"
    >
      <motion.div 
        className="relative bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 transition-all duration-500"
        whileHover={{
          borderColor: "rgba(251, 191, 36, 0.5)",
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-purple-600/10 to-amber-400/0"
          initial={{ opacity: 0 }}
          whileHover={{ 
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
          }}
        />
        
        <div className="relative z-10 space-y-4">
          <Avatar name={testimonial.name} role={testimonial.role} image={testimonial.image} />
          <Rating rating={testimonial.rating} />
          <Content content={testimonial.content} />
        </div>
      </motion.div>
    </motion.div>
  );
}