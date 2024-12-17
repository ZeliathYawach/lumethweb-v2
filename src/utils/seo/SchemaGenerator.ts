export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lumeth',
    url: 'https://lumeth.com',
    logo: 'https://lumeth.com/logo.png',
    sameAs: [
      'https://www.facebook.com/people/Lumeth/61560421378410',
      'https://www.instagram.com/lumethapp',
      'https://x.com/Lumeth_official'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      availableLanguage: 'English'
    }
  };
}

export function generateSoftwareSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Lumeth',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android, iOS',
    description: 'AI-powered beauty services and salon management platform',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1000'
    }
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lumeth',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lumeth.com/logo.png'
      }
    }
  };
}