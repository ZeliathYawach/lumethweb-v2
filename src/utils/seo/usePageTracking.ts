import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../analytics';

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    trackPageView(location.pathname);

    // Send data to Google Search Console (if implemented)
    // This is just a placeholder for the actual implementation
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'YOUR-TRACKING-ID', {
        page_path: location.pathname,
      });
    }
  }, [location]);