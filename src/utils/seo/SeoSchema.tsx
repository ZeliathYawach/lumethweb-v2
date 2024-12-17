import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoSchemaProps {
  schema: Record<string, any>;
}

export function SeoSchema({ schema }: SeoSchemaProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}