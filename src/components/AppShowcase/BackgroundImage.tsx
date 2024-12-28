import React from 'react';

export function BackgroundImage() {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/80 to-black" />
    </div>
  );
}