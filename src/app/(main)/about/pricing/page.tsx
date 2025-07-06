import PricingComparison from "@/components/pricing/PricingComparison";
import { Check } from "lucide-react";

// Import animations
import AnimateOnScroll from "@/components/animations/collection/AnimateOnScroll";
import ScaleInScroll from "@/components/animations/collection/ScaleInScroll";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 lg:px-0">
        <div className="max-w-4xl mx-auto text-center">
          
          <AnimateOnScroll delay={0.2}>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-brand-600">Plan</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Scale your charging network with confidence. Consult with our team to find the best plan for your needs.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Pricing Comparison */}
      <div className="px-4 lg:px-0 pb-20">
        <ScaleInScroll delay={0.3} duration={0.8} initialScale={0.98}>
          <PricingComparison />
        </ScaleInScroll>
      </div>

      {/* Trust Section */}
      <div className="bg-white px-4 lg:px-0 py-8">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll delay={0.2}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Everything You Need, Nothing You Don&apos;t
              </h3>
              <p className="text-gray-600">
                All plans include our core features designed to help you succeed.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support and monitoring"
              },
              {
                title: "99.9% Uptime",
                description: "Reliable platform with enterprise-grade infrastructure"
              },
              {
                title: "No Setup Fees",
                description: "Get started immediately with no upfront costs"
              }
            ].map((feature, index) => (
              <AnimateOnScroll key={index} delay={0.3 + index * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}