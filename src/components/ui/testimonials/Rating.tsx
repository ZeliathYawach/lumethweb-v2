import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
}

export function Rating({ rating }: RatingProps) {
  return (
    <motion.div 
      className="flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {[...Array(rating)].map((_, i) => (
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
  );
}