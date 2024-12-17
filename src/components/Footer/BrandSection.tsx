import React from 'react';
import { Crown } from 'lucide-react';
import { AppStoreButtons } from '../ui/AppStoreButtons';

export function BrandSection() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <Crown className="h-8 w-8 text-amber-400" />
        <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
          Lumeth
        </span>
      </div>
      <p className="text-gray-400 mb-6">
        Revolutionizing the beauty service industry with AI-powered solutions.
      </p>
      <AppStoreButtons variant="dark" appType="customer" />
    </div>
  );
}