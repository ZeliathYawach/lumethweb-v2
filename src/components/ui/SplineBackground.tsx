import React from 'react';
import { SplineViewer } from './SplineViewer';
import { BackgroundContainer } from './BackgroundContainer';

interface SplineBackgroundProps {
  className?: string;
  url: string;
  opacity?: string;
  gradient?: string;
}

export function SplineBackground({ 
  className = '', 
  url,
  opacity = 'opacity-40',
  gradient = 'from-purple-900/30 to-black/50'
}: SplineBackgroundProps) {
  return (
    <BackgroundContainer 
      className={`${opacity} mix-blend-screen ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient} mix-blend-multiply`} />
      <SplineViewer 
        url={url}
        className="w-full h-full"
      />
    </BackgroundContainer>
  );
}