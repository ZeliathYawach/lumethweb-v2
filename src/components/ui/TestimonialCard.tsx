import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Testimonial } from '../../types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="flex-shrink-0 w-[350px] group"
    >
      <div className="relative bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 transition-all duration-300 group-hover:border-amber-400/50">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-purple-600/10 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="relative w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-amber-400/50 transition-all duration-300"
              />
            </motion.div>
            <div className="ml-4">
              <motion.h3 
                className="font-semibold text-white"
                whileHover={{ scale: 1.05 }}
              >
                {testimonial.name}
              </motion.h3>
              <p className="text-amber-400 text-sm">{testimonial.role}</p>
            </div>
          </div>
          
          <motion.div 
            className="flex mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Star className="w-4 h-4 text-amber-400 fill-current" />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-gray-300 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {testimonial.content}
            <span className="absolute -left-4 -top-2 text-4xl text-amber-400/20">"</span>
            <span className="absolute -bottom-4 -right-2 text-4xl text-amber-400/20">"</span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}