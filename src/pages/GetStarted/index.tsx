import React from 'react';
import { PageTransition } from '../../components/animations/PageTransition';
import { GetStartedHero } from './components/GetStartedHero';
import { SolutionsSection } from './components/SolutionsSection';
import { AIFeaturesSection } from './components/AIFeaturesSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { DownloadSection } from './components/DownloadSection';

export function GetStarted() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <GetStartedHero />
        <SolutionsSection />
        <AIFeaturesSection />
        <SuccessStoriesSection />
        <DownloadSection />
      </div>
    </PageTransition>
  );
}