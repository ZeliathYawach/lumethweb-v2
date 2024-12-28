import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { MetaTags } from './types';

export function MetaTags({
  title,
  description,
  keywords,
  image = 'https://lumeth.com/og-image.jpg',
  type = 'website',
  url,
  appLinks
}: MetaTags) {
  const canonicalUrl = url || 'https://lumeth.com';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Lumeth" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Lumeth_official" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* App Links */}
      {appLinks?.ios && (
        <>
          <meta property="al:ios:url" content={appLinks.ios} />
          <meta property="al:ios:app_store_id" content="6737151440" />
          <meta property="al:ios:app_name" content="Lumeth" />
        </>
      )}
      {appLinks?.android && (
        <>
          <meta property="al:android:url" content={appLinks.android} />
          <meta property="al:android:package" content="com.Lumeth.Customer" />
          <meta property="al:android:app_name" content="Lumeth" />
        </>
      )}
      {appLinks?.web && (
        <meta property="al:web:url" content={appLinks.web} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Lumeth" />
    </Helmet>
  );
}