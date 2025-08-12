"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Check,
  X,
  ArrowRight,
  Zap,
  Building,
  Users,
  Crown,
  Star,
} from 'lucide-react';
import { pricingFeatures } from '@/data/pricing';

interface PricingPlan {
  name: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonVariant: 'default' | 'outline';
  popular?: boolean;
  recommended?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Start Up',
    description: 'Perfect for small charging operations getting started',
    icon: <Zap className="h-6 w-6" />,
    buttonText: 'Get Pricing',
    buttonVariant: 'outline'
  },
  {
    name: 'Professional',
    description: 'Advanced features for growing charging networks',
    icon: <Building className="h-6 w-6" />,
    buttonText: 'Get Pricing',
    buttonVariant: 'default',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for established businesses',
    icon: <Users className="h-6 w-6" />,
    buttonText: 'Get Pricing',
    buttonVariant: 'outline'
  },
  {
    name: 'Large Enterprise',
    description: 'Full-scale platform for enterprise operations',
    icon: <Crown className="h-6 w-6" />,
    buttonText: 'Get Pricing',
    buttonVariant: 'outline',
    recommended: true
  }
];

const FeatureIcon = ({ value }: { value: boolean }) => (
  <div className="flex justify-center">
    {value ? (
      <Check className="h-5 w-5 text-green-500" />
    ) : (
      <X className="h-5 w-5 text-gray-300" />
    )}
  </div>
);

const FeatureValue = ({ value }: { value: string | boolean }) => {
  if (typeof value === 'string') {
    const styles = {
      'Additional Fee': 'text-amber-600 bg-amber-100',
      Optional: 'text-blue-600 bg-blue-100',
    }[value] || 'text-gray-700';

    return (
      <span
        className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full ${styles}`}
      >
        {value}
      </span>
    );
  }
  return <FeatureIcon value={value} />;
};

export default function TiarPricingComponent() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [
    'All',
    ...Array.from(new Set(pricingFeatures.map((f) => f.category))),
  ];
  const filteredFeatures =
    selectedCategory === 'All'
      ? pricingFeatures
      : pricingFeatures.filter((f) => f.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-green-400 to-teal-500">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900">
            Tiar Charging Management
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          All-in-one EV charging management solutions—pick the plan that fits
          your business.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative flex flex-col h-full overflow-hidden transform transition hover:shadow-2xl hover:-translate-y-1 ${
              plan.popular
                ? 'border-2 border-teal-500 bg-white shadow-lg'
                : plan.recommended
                ? 'border-2 border-amber-400 bg-white shadow-lg'
                : 'border border-gray-200 bg-white'
            } rounded-2xl`}
          >
            {/* Badges */}
            {plan.popular && (
              <Badge className="absolute top-3 left-3 bg-teal-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-sm">
                <Star className="inline-block h-3 w-3 mr-1" />
                Popular
              </Badge>
            )}
            {plan.recommended && (
              <Badge className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-sm">
                <Crown className="inline-block h-3 w-3 mr-1" />
                Recommended
              </Badge>
            )}

            {/* Accent Bar */}
            <div
              className={`h-1 ${
                plan.popular
                  ? 'bg-gradient-to-r from-green-400 to-teal-500'
                  : plan.recommended
                  ? 'bg-gradient-to-r from-amber-400 to-orange-400'
                  : 'bg-gray-200'
              }`}
            />

            <CardHeader className="pt-6 pb-4 text-center">
              <div
                className={`mx-auto mb-4 p-4 rounded-full shadow-md ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-400 to-teal-500 text-white'
                    : plan.recommended
                    ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {plan.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600">{plan.description}</p>
            </CardHeader>

            <CardContent className="mt-auto">
              <Button
                className={`w-full py-3 font-medium transition ${
                  plan.buttonVariant === 'default'
                    ? 'bg-gradient-to-r from-green-400 to-teal-500 text-white hover:from-green-500 hover:to-teal-600'
                    : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-100/20'
                } rounded-lg shadow-sm`}
                variant={plan.buttonVariant}
              >
                {plan.buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Feature Comparison */}
      <Card className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <CardHeader className="bg-white p-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Feature Comparison
            </h3>
            <p className="text-sm text-gray-500">
              Toggle categories to filter features.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={selectedCategory === cat ? 'default' : 'outline'}
                className={`text-xs rounded-full px-3 py-1 ${
                  selectedCategory === cat
                    ? 'bg-teal-50 text-teal-600'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-25'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </CardHeader>

        <CardContent className="p-0 bg-gray-50/10">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr className="bg-white">
                  <th className="sticky left-0 z-10 bg-white p-4 text-left font-semibold text-gray-900">
                    Feature
                  </th>
                  {pricingPlans.map((plan) => (
                    <th
                      key={plan.name}
                      className="p-4 text-center font-semibold text-gray-900"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredFeatures.map((f, idx) => (
                  <tr
                    key={f.name}
                    className={idx % 2 === 0 ? '' : 'bg-white'}
                  >
                    <td className="sticky left-0 z-0 bg-gray-50/10 p-4 text-sm">
                      <div className="font-medium text-gray-800">{f.name}</div>
                      <div className="text-xs text-gray-500">
                        {f.category}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <FeatureValue value={f.startup} />
                    </td>
                    <td className="p-4 text-center">
                      <FeatureValue value={f.professional} />
                    </td>
                    <td className="p-4 text-center">
                      <FeatureValue value={f.enterprise} />
                    </td>
                    <td className="p-4 text-center">
                      <FeatureValue value={f.largeEnterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
