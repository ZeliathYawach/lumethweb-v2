import React from 'react';
import { motion } from 'framer-motion';
import { Track } from '../../../components/ui/testimonials/Track';

const testimonials = [
  {
    id: 1,
    name: "Emily Chen",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    content: "Lumeth's AI recommendations helped me find the perfect skincare routine. Booking appointments is now a breeze!",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Beauty Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    content: "The personalized service suggestions are amazing. I've discovered so many great beauty professionals through the app.",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Professional Model",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    content: "As someone who needs regular beauty services, Lumeth has made my life so much easier. The booking system is flawless!",
    rating: 5
  }
];

export function AnimatedTestimonials() {
  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              What Our Users Say
            </span>
          </h2>
        </motion.div>

        <Track testimonials={testimonials} />
      </div>
    </section>
  );
}