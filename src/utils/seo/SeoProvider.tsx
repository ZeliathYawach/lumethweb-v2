import React from 'react';
import { MetaTags } from './metaTags';
import { SeoSchema } from './SeoSchema';
import { generateWebsiteSchema, generateMobileAppSchema } from './jsonLd';
import type { MetaTags as MetaTagsType } from './types';

interface SeoProviderProps {
  meta: MetaTagsType;
  children: React.ReactNode;
}

export function SeoProvider({ meta, children }: SeoProviderProps) {
  return (
    <>
      <MetaTags {...meta} />
      <SeoSchema schema={generateWebsiteSchema()} />
      <SeoSchema schema={generateMobileAppSchema()} />
      {children}
    </>
  );
}