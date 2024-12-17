import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Building2, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Users",
    color: "text-amber-400"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "App Store Rating",
    color: "text-amber-400"
  },
  {
    icon: Building2,
    value: "10,000+",
    label: "Business Partners",
    color: "text-amber-400"
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Revenue Growth",
    color: "text-amber-400"
  }
];

export function BusinessStats() {
  return (
    <section className="py-8 sm:py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-purple-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-purple-500/20"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}