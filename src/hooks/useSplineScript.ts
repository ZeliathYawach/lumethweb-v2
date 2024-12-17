import { useState, useEffect } from 'react';

const SPLINE_SCRIPT_URL = 'https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js';

export function useSplineScript() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document.querySelector(`script[src="${SPLINE_SCRIPT_URL}"]`)) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.type = 'module';
    script.src = SPLINE_SCRIPT_URL;
    script.async = true;

    script.onload = () => setIsLoaded(true);
    script.onerror = () => console.error('Failed to load Spline viewer script');

    document.head.appendChild(script);

    return () => {
      // Don't remove the script on cleanup as it might be used by other components
    };
  }, []);

  return isLoaded;
}