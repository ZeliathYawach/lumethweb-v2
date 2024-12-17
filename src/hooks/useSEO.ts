import { useEffect } from 'react';
import { SEO } from '../constants/seo';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export function useSEO({ 
  title = SEO.DEFAULT_TITLE,
  description = SEO.DEFAULT_DESCRIPTION,
  keywords,
  image 
}: SEOProps = {}) {
  const location = useLocation();

  useEffect(() => {
    // Update title and meta tags
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update canonical URL
    let canonicalUrl = document.querySelector('link[rel="canonical"]');
    if (!canonicalUrl) {
      canonicalUrl = document.createElement('link');
      canonicalUrl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalUrl);
    }
    canonicalUrl.setAttribute('href', `https://lumeth.com${location.pathname}`);

    // Update Open Graph and Twitter tags
    const metaTags = {
      'og:title': title,
      'og:description': description,
      'og:url': `https://lumeth.com${location.pathname}`,
      'og:image': image,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image
    };

    Object.entries(metaTags).forEach(([property, content]) => {
      if (!content) return;
      
      const tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      }
    });
  }, [title, description, keywords, image, location]);
}