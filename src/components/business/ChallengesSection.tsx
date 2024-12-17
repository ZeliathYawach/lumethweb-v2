import React from 'react';
import { Users, Clock, TrendingUp, DollarSign } from 'lucide-react';

const BUSINESS_CHALLENGES = [
  {
    icon: Users,
    title: "Customer Management",
    description: "Struggling with managing customer relationships and appointments efficiently?"
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Spending too much time on administrative tasks instead of growing your business?"
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Finding it difficult to scale your business and attract new customers?"
  },
  {
    icon: DollarSign,
    title: "Revenue Management",
    description: "Want to increase your revenue and optimize your pricing strategy?"
  }
];

export function ChallengesSection() {
  return (
    <section className="mb-24">
      <h3 className="text-2xl font-semibold text-center mb-12 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
        Common Challenges We Solve
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BUSINESS_CHALLENGES.map((challenge, index) => (
          <div 
            key={index}
            className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300"
          >
            <challenge.icon className="w-10 h-10 text-amber-400 mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">{challenge.title}</h4>
            <p className="text-gray-300">{challenge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}