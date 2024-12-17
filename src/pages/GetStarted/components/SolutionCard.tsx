import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SolutionCard({ icon: Icon, title, description }: SolutionCardProps) {
  return (
    <div className="bg-purple-900/30 p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300">
      <Icon className="w-12 h-12 text-amber-400 mb-6" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}