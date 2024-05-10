import {
  FileText,
  Palette,
  Pencil,
  MonitorPlay,
  Milk,
  Pizza,
  Scale,
  Apple,
  Flag,
  LayoutGrid,
  Monitor,
  Plane,
} from 'lucide-react';

export const categories = [
  {
    name: 'Business',
    icon: <FileText size={14} />,
  },
  {
    name: 'Creative',
    icon: <Palette size={14} />,
  },
  {
    name: 'Education',
    icon: <Pencil size={14} />,
  },
  {
    name: 'Entertainment',
    icon: <MonitorPlay size={14} />,
  },
  {
    name: 'Fashion & Beauty',
    icon: <Milk size={14} />,
  },
  {
    name: 'Food & Beverage',
    icon: <Pizza size={14} />,
  },
  {
    name: 'Government & Politics',
    icon: <Scale size={15} />,
  },
  {
    name: 'Health & Wellness',
    icon: <Apple size={14} />,
  },
  {
    name: 'Non-profit',
    icon: <Flag size={14} />,
  },
  {
    name: 'Other',
    icon: <LayoutGrid size={14} />,
  },
  {
    name: 'Tech',
    icon: <Monitor size={14} />,
  },
  {
    name: 'Travel & Tourism',
    icon: <Plane size={14} />,
  },
];

export const pricings = [
  {
    id: 1,
    title: 'Free',
    subHeading: 'For your personal Linktree',
    features: ['Unlimited links'],
    price: 'Free',
    billingCycle: 'Free, Forever',
  },
  {
    id: 2,
    title: 'Starter',
    subHeading: 'For growing influencers',
    features: [
      'Upgraded style options',
      'Monetization support w/affiliate marketing tools',
      'Scheduling',
      'Audience insights',
    ],
    price: '$4 CAD',
    billingCycle: 'Per month, billed annually, or $6 billed monthly',
  },
  {
    id: 3,
    title: 'Pro',
    subHeading: 'For creators and businesses',
    features: [
      'Advanced customization of buttons, themes and fonts',
      'Click, conversion and revenue tracking',
      'Upgraded customer support',
      'Option to hide Linktree logo',
      'Social platform integrations to automatically display your lastest content',
      'Multiple admins',
    ],
    price: '$7.50 CAD',
    billingCycle: 'Per month, billed annually, or $10 billed monthly',
  },
  {
    id: 4,
    title: 'Premium',
    subHeading: 'For brands and businesses',
    features: [
      'Dedicated customer success manager with 1-1 onboarding',
      'Analytics: Export lifetime data',
      'Access to exclusive webinars & best practice videos',
      'Premium support, response within 4 hours',
    ],
    price: '$21 CAD',
    billingCycle: 'Per month, billed annually, or $27 billed monthly',
  },
];
