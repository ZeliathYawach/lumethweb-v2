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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="flex-shrink-0 w-[350px] group"
    >
      <div className="relative bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 transition-all duration-300 group-hover:border-amber-400/50">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-purple-600/10 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 space-y-4">
          <Avatar name={testimonial.name} role={testimonial.role} image={testimonial.image} />
          <Rating rating={testimonial.rating} />
          <Content content={testimonial.content} />
        </div>
      </div>
    </motion.div>
  );
}