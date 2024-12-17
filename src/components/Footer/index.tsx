import React from 'react';
import { BrandSection } from './BrandSection';
import { ProductLinks } from './ProductLinks';
import { CompanyLinks } from './CompanyLinks';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <BrandSection />
          <ProductLinks />
          <CompanyLinks />
          <SocialLinks />
        </div>

        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Lumeth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}