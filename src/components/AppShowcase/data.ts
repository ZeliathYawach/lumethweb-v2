import { Smartphone, Building2, UserCircle } from 'lucide-react';

export const apps = [
  {
    id: 'customer',
    icon: Smartphone,
    title: 'Lumeth',
    description: 'Find and book beauty services instantly. Get personalized recommendations and manage your appointments with ease.',
    appType: 'customer',
  },
  {
    id: 'helm',
    icon: Building2,
    title: 'Lumeth Helm',
    description: 'Powerful tools for service providers to manage bookings, staff, and grow their business with data-driven insights.',
    appType: 'helm',
  },
  {
    id: 'tocca',
    icon: UserCircle,
    title: 'Lumeth Tocca',
    description: 'Empower beauty professionals to manage schedules, connect with clients, and boost their career growth.',
    appType: 'tocca',
  },
] as const;