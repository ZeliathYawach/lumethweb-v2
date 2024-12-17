import React from 'react';

interface AIFeatureCardProps {
  image: string;
  title: string;
  description: string;
}

export function AIFeatureCard({ image, title, description }: AIFeatureCardProps) {
  return (
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="rounded-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}