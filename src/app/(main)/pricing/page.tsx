import { CallToAction } from "@/components/common/CallToAction";
import TiarPricingComponent from "@/components/pricing/PricingComparison";

export default function PricingPage() {
  return (
    <div> 
      <div className="container mx-auto py-16">
        <TiarPricingComponent />
      </div>

      <CallToAction
        title="Ready to get started?"
        subtitle="Get started with TIAR today and take your charging operations to the next level."
        buttons={[{
          text: "Contact Us",
          variant: "outline",
          href: "/contact"
        }]}
      />
    </div>
  );
}