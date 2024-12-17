import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';

export function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy">
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Data Collection
          </h2>
          <p className="text-gray-300">
            We collect information necessary to provide our services, including personal details, booking history, and usage data. This helps us improve our services and provide personalized recommendations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Data Protection
          </h2>
          <p className="text-gray-300">
            Your data is protected using industry-standard encryption and security measures. We never share your personal information with third parties without your consent.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}