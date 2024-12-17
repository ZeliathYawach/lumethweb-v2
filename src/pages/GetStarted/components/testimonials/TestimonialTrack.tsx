import React from 'react';
import { Track } from '../../../../components/ui/testimonials/Track';
import type { Testimonial } from '../../../../types/testimonial';

interface TestimonialTrackProps {
  testimonials: Testimonial[];
}

export function TestimonialTrack({ testimonials }: TestimonialTrackProps) {
  return <Track testimonials={testimonials} />;
}