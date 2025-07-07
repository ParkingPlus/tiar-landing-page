export interface PricingFeature {
  name: string;
  category: string;
  startup: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
  largeEnterprise: string | boolean;
}

export const pricingFeatures: PricingFeature[] = [
  // === Basic CMS Modules ===
  { name: 'Charger Management', category: 'Basic CMS Modules', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Tariff Management', category: 'Basic CMS Modules', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Coupons & Discount Management', category: 'Basic CMS Modules', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'App Base Management', category: 'Basic CMS Modules', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'RFID Card Base Management', category: 'Basic CMS Modules', startup: false, professional: false, enterprise: true, largeEnterprise: true },
  { name: 'Idle (Parking) Penalty', category: 'Basic CMS Modules', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'kWh Usage & GUI', category: 'Basic CMS Modules', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'User Management', category: 'Basic CMS Modules', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'QR Code Management', category: 'Basic CMS Modules', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Remote Actions and OCPP Log', category: 'Basic CMS Modules', startup: true, professional: true, enterprise: true, largeEnterprise: true },

  // === Finance & Business Analysis ===
  { name: 'Finance Backoffice (CPO & Partner)', category: 'Finance & Business Analysis', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Energy Bills & Utility Reports', category: 'Finance & Business Analysis', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Revenue Analytics & Graphics', category: 'Finance & Business Analysis', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Tax Reporting', category: 'Finance & Business Analysis', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Partner Share Management', category: 'Finance & Business Analysis', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Business Analysis Tools', category: 'Finance & Business Analysis', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Customer Loyalty Programs', category: 'Finance & Business Analysis', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Traffic Analysis', category: 'Finance & Business Analysis', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Charger Utilisation, Uptime, Downtime', category: 'Finance & Business Analysis', startup: true, professional: true, enterprise: true, largeEnterprise: true }, // NEW
  { name: 'Anomaly Logs & Notifications', category: 'Finance & Business Analysis', startup: true, professional: true, enterprise: true, largeEnterprise: true }, // NEW

  // === Marketing Tools (under development) ===
  { name: 'Email Blast', category: 'Marketing Tools', startup: true, professional: true, enterprise: true, largeEnterprise: true }, // NEW
  { name: 'WhatsApp Blast', category: 'Marketing Tools', startup: true, professional: true, enterprise: true, largeEnterprise: true }, // NEW
  { name: 'Picture Update on App', category: 'Marketing Tools', startup: true, professional: true, enterprise: true, largeEnterprise: true }, // NEW

  // === Hosting ===
  { name: 'Hosting CMS at Your Own Domain', category: 'Hosting', startup: true, professional: true, enterprise: true, largeEnterprise: true }, // NEW

  // === Mobile App Features ===
  { name: 'White Label Mobile App', category: 'Mobile App', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Custom Branding', category: 'Mobile App', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'User Management (Email OTP)', category: 'Mobile App', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Customer Notifications', category: 'Mobile App', startup: true, professional: true, enterprise: true, largeEnterprise: true }, // NEW
  { name: 'Direction Finder', category: 'Mobile App', startup: true, professional: true, enterprise: true, largeEnterprise: true }, // NEW
  { name: 'Historical Transaction', category: 'Mobile App', startup: true, professional: true, enterprise: true, largeEnterprise: true }, // NEW
  { name: 'Monetization Dashboard', category: 'Mobile App', startup: true, professional: true, enterprise: true, largeEnterprise: true }, // NEW
  { name: 'WhatsApp Business (on App)', category: 'Mobile App', startup: true, professional: true, enterprise: true, largeEnterprise: true }, // NEW
  { name: 'App Customization', category: 'Mobile App', startup: 'Additional Fee', professional: 'Additional Fee', enterprise: 'Additional Fee', largeEnterprise: 'Additional Fee' }, // NEW
  { name: 'Web-Based Charging System', category: 'Mobile App', startup: 'Additional Fee', professional: 'Additional Fee', enterprise: 'Additional Fee', largeEnterprise: 'Additional Fee' }, // NEW
  { name: 'Additional Language Translation', category: 'Mobile App', startup: 'Additional Fee', professional: 'Additional Fee', enterprise: 'Additional Fee', largeEnterprise: 'Additional Fee' },

  // === Payment Integration ===
  { name: 'Indonesia Payment Channels', category: 'Payment Integration', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'International Payment (Stripe/PayPal)', category: 'Payment Integration', startup: true, professional: true, enterprise: true, largeEnterprise: true },
  { name: 'Additional Payment Channels', category: 'Payment Integration', startup: 'Optional', professional: 'Optional', enterprise: 'Optional', largeEnterprise: 'Optional' }, // NEW
  { name: 'Registration to Apple App Store & Play Store', category: 'Payment Integration', startup: 'Optional', professional: 'Optional', enterprise: 'Optional', largeEnterprise: 'Optional' }, // NEW

  // === Advanced Features ===
  { name: 'Reservation Booking', category: 'Advanced Features', startup: false, professional: false, enterprise: true, largeEnterprise: true }, // NEW
  { name: 'Dynamic Load Management', category: 'Advanced Features', startup: false, professional: false, enterprise: true, largeEnterprise: true },
  { name: 'EV Roaming Integration', category: 'Advanced Features', startup: 'Coming Soon', professional: 'Coming Soon', enterprise: 'Coming Soon', largeEnterprise: 'Coming Soon' },
  { name: 'EV Charging Simulator (Virtual Charger)', category: 'Advanced Features', startup: 'Coming Soon', professional: 'Coming Soon', enterprise: 'Coming Soon', largeEnterprise: 'Coming Soon' }, // NEW
  { name: 'eScooter Charging Management', category: 'Advanced Features', startup: 'Coming Soon', professional: 'Coming Soon', enterprise: 'Coming Soon', largeEnterprise: 'Coming Soon' }, // NEW
  { name: 'Home-Charging Monetization', category: 'Advanced Features', startup: false, professional: false, enterprise: true, largeEnterprise: true }, // NEW
  { name: 'Rest API Access', category: 'Advanced Features', startup: false, professional: false, enterprise: true, largeEnterprise: true },

  // === Support & Training ===
  { name: '2-Day Online Training (CMS & Monetization)', category: 'Support & Training', startup: 'Optional', professional: 'Optional', enterprise: 'Optional', largeEnterprise: 'Optional' },
  { name: 'Email Support (2x24hrs)', category: 'Support & Training', startup: 'Optional', professional: 'Optional', enterprise: 'Optional', largeEnterprise: 'Optional' },
  { name: 'Priority Support (Same-day response)', category: 'Support & Training', startup: 'Optional', professional: 'Optional', enterprise: true, largeEnterprise: true },
  { name: 'Interactive Google Meet / WhatsApp Support', category: 'Support & Training', startup: 'Optional', professional: 'Optional', enterprise: true, largeEnterprise: true } // NEW
];