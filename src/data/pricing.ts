// types/pricing.ts
export interface PricingFeature {
  name: string;
  core: string | boolean;
  advanced: string | boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  buttonVariant: 'default' | 'outline';
  popular?: boolean;
}

// data/pricing.ts
export const pricingPlans: PricingPlan[] = [
  {
    name: 'Core',
    price: '$49',
    description: 'Perfect for small businesses getting started',
    buttonText: 'Get Pricing',
    buttonVariant: 'outline'
  },
  {
    name: 'Advanced', 
    price: '$149',
    description: 'For growing businesses with advanced needs',
    buttonText: 'Get Pricing',
    buttonVariant: 'default',
    popular: true
  }
];

export const pricingFeatures: PricingFeature[] = [
  {
    name: 'Charger Limit',
    core: '5 Chargers',
    advanced: '5 Chargers'
  },
  {
    name: 'Additional Charger',
    core: 'Contact Us',
    advanced: 'Contact Us'
  },
  {
    name: 'White-Label Mobile App Implementation',
    core: '@Additional Fee',
    advanced: '@Additional Fee'
  },
  {
    name: 'API EndPoints Access',
    core: 'Optional @Additional Fee',
    advanced: 'Optional @Additional Fee'
  },
  {
    name: 'App Hosting Rights',
    core: 'Optional @ Additional Fee',
    advanced: 'Optional @Additional Fee'
  },
  {
    name: 'Backend Management Portal',
    core: true,
    advanced: true
  },
  {
    name: 'OCPP Server Gateway',
    core: true,
    advanced: true
  },
  {
    name: 'EV User Web App',
    core: true,
    advanced: true
  },
  {
    name: 'Payment Gateway Integration',
    core: true,
    advanced: true
  },
  {
    name: 'Location Partner & Customer',
    core: false,
    advanced: false
  },
  {
    name: 'Partner & Customer Management',
    core: true,
    advanced: true
  }
];