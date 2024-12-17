import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  image?: string;
}

export function useMetaTags({ title, description, image }: MetaTagsProps) {
  useEffect(() => {
    // Update page title
    document.title = `${title} | Lumeth`;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update Open Graph tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:image': image,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      if (!content) return;
      
      const tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    });
  }, [title, description, image]);
}