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
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {[...Array(rating)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.1 + i * 0.1,
            ease: "easeOut"
          }}
        >
          <Star className="w-4 h-4 text-amber-400 fill-current" />
        </motion.div>
      ))}
    </motion.div>
  );
}