import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

interface ReviewCardProps {
  review: Review;
  index: number;
}

export function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-purple-900/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-purple-500/20"
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <img
          src={review.image}
          alt={review.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />
        <div className="ml-3 sm:ml-4">
          <h3 className="font-semibold text-white text-sm sm:text-base">{review.name}</h3>
          <p className="text-amber-400 text-xs sm:text-sm">{review.role}</p>
        </div>
      </div>
      
      <div className="flex mb-3 sm:mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-300 text-sm sm:text-base">{review.content}</p>
    </motion.div>
  );
}