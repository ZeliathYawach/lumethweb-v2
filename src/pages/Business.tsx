import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';
import { BusinessBackground } from '../components/business/BusinessBackground';
import { BusinessHero } from '../components/business/BusinessHero';
import { ChallengesSection } from '../components/business/ChallengesSection';
import { VideoSection } from '../components/business/VideoSection';
import { PartnersSection } from '../components/business/PartnersSection';
import { BusinessCTA } from '../components/business/BusinessCTA';
import { SecurityBadges } from '../components/business/SecurityBadges';
import { BusinessStats } from '../components/business/BusinessStats';
import { BusinessReviews } from '../components/business/BusinessReviews';

export function Business() {
  return (
    <PageLayout title="Lumeth for Business">
      <BusinessBackground />
      <div className="relative">
        <BusinessHero />
        <BusinessStats />
        <ChallengesSection />
        <VideoSection />
        <BusinessReviews />
        <PartnersSection />
        <SecurityBadges />
        <BusinessCTA />
      </div>
    </PageLayout>
  );
}