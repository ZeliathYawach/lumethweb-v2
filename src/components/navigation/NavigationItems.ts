// Centralize navigation items configuration
export const navigationItems = [
  { id: 'features', label: 'Features', path: '/#features' },
  { id: 'ourapps', label: 'Our Apps', path: '/#ourapps' },
  { id: 'aibeauty', label: 'AI Beauty', path: '/#aibeauty' },
  { id: 'testimonials', label: 'Testimonials', path: '/#testimonials' }
] as const;

export type NavigationItem = typeof navigationItems[number];