import React from 'react';

interface BackgroundContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function BackgroundContainer({ children, className = '' }: BackgroundContainerProps) {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
      {children}
    </div>
  );
}