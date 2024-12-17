import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';

export function TermsAndConditions() {
  return (
    <PageLayout title="Terms and Conditions">
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-300">
            By accessing and using Lumeth's services, you agree to be bound by these Terms and Conditions. These terms apply to all users, including customers, service providers, and beauty professionals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            2. Service Description
          </h2>
          <p className="text-gray-300">
            Lumeth provides a platform connecting beauty service providers with customers. We facilitate bookings, payments, and communication between parties but are not directly responsible for the services provided.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            3. User Responsibilities
          </h2>
          <p className="text-gray-300">
            Users must provide accurate information, maintain account security, and comply with local laws and regulations. Service providers must deliver services as described and maintain required licenses.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}