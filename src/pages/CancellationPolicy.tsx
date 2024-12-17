import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';

export function CancellationPolicy() {
  return (
    <PageLayout title="Cancellation and Refund Policy">
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Cancellation Policy
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-4">
            <li>Free cancellation up to 24 hours before the appointment</li>
            <li>50% charge for cancellations within 24 hours of the appointment</li>
            <li>100% charge for no-shows</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Refund Process
          </h2>
          <p className="text-gray-300">
            Refunds will be processed within 5-7 business days to the original payment method. For any disputes, please contact our customer support team.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}