// components/PricingComparison.tsx
'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, X, ArrowRight } from 'lucide-react';
import { pricingPlans, pricingFeatures } from '@/data/pricing';

const FeatureIcon = ({ value }: { value: string | boolean }) => {
  if (typeof value === 'boolean') {
    return (
      <div className="flex justify-center">
        {value ? (
          <Check className="h-5 w-5 text-green-500" />
        ) : (
          <X className="h-5 w-5 text-gray-300" />
        )}
      </div>
    );
  }
  return null;
};

const FeatureValue = ({ value }: { value: string | boolean }) => {
  if (typeof value === 'string') {
    return <span className="text-sm text-gray-600">{value}</span>;
  }
  return <FeatureIcon value={value} />;
};

export default function PricingComparison() {
  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {pricingPlans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`relative ${
              plan.popular 
                ? 'border-brand-500 shadow-lg ring-2 ring-brand-500 ring-opacity-20' 
                : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <Badge 
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-500 text-white"
              >
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center pb-4">
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-600 mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <Button 
                className={`w-full ${
                  plan.buttonVariant === 'default' 
                    ? 'bg-brand-600 hover:bg-brand-700 text-white' 
                    : ''
                }`}
                variant={plan.buttonVariant}
              >
                {plan.buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-gray-900">
            Feature Comparison
          </h3>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header */}
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-900">
                    Features
                  </th>
                  {pricingPlans.map((plan) => (
                    <th 
                      key={plan.name} 
                      className="text-center py-4 px-6 font-medium text-gray-900 min-w-[150px]"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody className="divide-y divide-gray-200">
                {pricingFeatures.map((feature, index) => (
                  <tr 
                    key={feature.name} 
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                  >
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {feature.name}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <FeatureValue value={feature.core} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <FeatureValue value={feature.advanced} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Need a custom solution? We&apos;re here to help.
        </p>
        <Button variant="outline">
          Contact Sales
        </Button>
      </div>
    </div>
  );
}