import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
}

export function TestimonialCard({ name, role, image, content }: TestimonialCardProps) {
  return (
    <div className="bg-purple-900/30 p-8 rounded-2xl border border-purple-500/20">
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-amber-400 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-300">{content}</p>
    </div>
  );
}