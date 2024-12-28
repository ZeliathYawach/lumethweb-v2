export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lumeth',
    url: 'https://lumeth.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://lumeth.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateMobileAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Lumeth',
    operatingSystem: ['iOS', 'Android'],
    applicationCategory: 'BeautyApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1000'
    },
    downloadUrl: [
      'https://apps.apple.com/app/id6737151440',
      'https://play.google.com/store/apps/details?id=com.Lumeth.Customer'
    ]
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Lumeth Partner Network',
    description: 'Network of verified beauty professionals and salons',
    url: 'https://lumeth.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1000'
    }
  };
}