import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { ReviewCard } from './ReviewCard';

const reviews = [
  {
    name: "Sarah's Beauty Salon",
    role: "Premium Partner",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Lumeth Helm has transformed our business operations. We've seen a 40% increase in bookings since joining.",
    rating: 5
  },
  {
    icon: Star,
    name: "Elite Spa & Wellness",
    role: "Business Partner",
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=150&h=150",
    content: "The AI-powered scheduling and customer insights have helped us optimize our services and grow revenue.",
    rating: 5
  },
  {
    name: "Pure Beauty Studio",
    role: "Verified Partner",
    image: "https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Outstanding platform for managing our beauty business. The customer support is exceptional.",
    rating: 5
  }
];

export function BusinessReviews() {
  return (
    <section className="py-12 sm:py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
          Trusted by Leading Beauty Businesses
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} index={index} />
        ))}
      </div>

      <div className="text-center mt-6 sm:mt-8">
        <p className="text-gray-400 text-sm sm:text-base">
          Join 10,000+ businesses already growing with Lumeth Helm
        </p>
      </div>
    </section>
  );
}