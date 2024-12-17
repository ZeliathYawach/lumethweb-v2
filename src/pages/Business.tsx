import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';
import { BusinessBackground } from '../components/business/BusinessBackground';
import { BusinessHero } from '../components/business/BusinessHero';
import { ChallengesSection } from '../components/business/ChallengesSection';
import { VideoSection } from '../components/business/VideoSection';
import { PartnersSection } from '../components/business/PartnersSection';
import { BusinessCTA } from '../components/business/BusinessCTA';

export function Business() {
  return (
    <PageLayout title="Lumeth for Business">
      <BusinessBackground />
      <div className="relative">
        <BusinessHero />
        <ChallengesSection />
        <VideoSection />
        <PartnersSection />
        <BusinessCTA />
      </div>
    </PageLayout>
  );
}