import React from 'react';
import { LucideIcon } from 'lucide-react';
import { AppStoreButtons } from '../ui/AppStoreButtons';

interface AppCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  appType: 'customer' | 'helm' | 'tocca';
}

export function AppCard({ icon: Icon, title, description, appType }: AppCardProps) {
  return (
    <div className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/50 transition-all duration-300">
      <Icon className="w-12 h-12 text-amber-400 mb-6" />
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <AppStoreButtons variant="dark" appType={appType} className="mt-6" />
    </div>
  );
}