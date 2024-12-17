import React, { useEffect, useRef } from 'react';
import { useSplineScript } from '../../hooks/useSplineScript';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        loading?: 'lazy' | 'eager';
        'events-target'?: string;
      };
    }
  }
}

interface SplineViewerProps {
  url: string;
  className?: string;
}

export function SplineViewer({ url, className = '' }: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScriptLoaded = useSplineScript();

  if (!isScriptLoaded) {
    return null;
  }

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <spline-viewer 
        url={url}
        loading="eager"
        events-target="global"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}