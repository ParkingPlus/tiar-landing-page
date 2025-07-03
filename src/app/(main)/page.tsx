import { Metadata } from "next";
import { Hero } from "@/components/common/Hero";
import { HighlightCard } from "@/components/common/HighlightCard"; // Make sure to import your FeatureCard
import {
  Zap,
  Clock,
  MapPin,
  Users,
  BatteryCharging,
  BarChart3,
  ShieldCheck,
  Smartphone,
} from "lucide-react"; // Importing icons for the cards
import { SubSection } from "@/components/common/SubSection";
import PricingComparison from "@/components/pricing/PricingComparison";

export const metadata: Metadata = {
  title: "TIAR - Intelligent Public Transportation",
  description: "Leading the way to a future of zero-emission mobility with an intelligent, all-in-one platform for cities, operators, and riders.",
};

// Data for the feature cards
const features = [
  {
    icon: <Zap className="w-full h-full" />,
    header: "Leading Software Solutions",
    text: "Charging Management System specializes in software solutions tailored for Charging Point Operators, ensuring optimal functionality and user experience.",
    href: "/features/charging",
  },
  {
    icon: <Clock className="w-full h-full" />,
    header: "Streamlined Operations",
    text: "Our technology streamlines operations for Charging Point Operators, enhancing efficiency and reducing downtime.",
    href: "/features/tracking",
  },
  {
    icon: <MapPin className="w-full h-full" />,
    header: "Electric Vehicle Market",
    text: "Charging Management System is positioned in the rapidly growing electric vehicle market, driving innovation and service delivery improvements.",
    href: "/features/optimization",
  },
];


export default function Home() {
  return (
    <main>
      <Hero
        header={
          <>
            Leading The Way
            <br />
            To a Future of Sustainable Mobility
          </>
        }
        caption="An intelligent, all-in-one platform to power zero-emission mobility for cities, transport operators, and businesses of all sizes."
        images={[
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517486808906-6538cb3f3663?q=80&w=2070&auto=format&fit=crop"
        ]}
      />
      <div className="bg-gradient-to-b from-gray-900 from-90% to-brand-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-24">
                <h2 className="text-4xl font-bold text-white">An All-In-One Platform</h2>
                <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">Our platform provides everything you need to manage a modern, sustainable, and efficient public transport network.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                {features.map((feature, index) => (
                    <HighlightCard
                        key={index}
                        href={feature.href}
                        icon={feature.icon}
                        header={feature.header}
                        text={feature.text}
                        iconColor="text-brand-400"
                    />
                ))}
            </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-brand-100 to-white">
        <SubSection
          eyebrow="SOFTWARE SOLUTIONS"
          title="Leading Software Solutions"
          description="Charging Management System specializes in software solutions tailored for Charging Point Operators, ensuring optimal functionality and user experience."
          imageUrl="https://placehold.co/600x400/93c5fd/1e40af"
          imageAlt="Leading Software Solutions"
        />
      </div>
      <div className="bg-gradient-to-b from-white to-brand-100">
        <SubSection
          eyebrow="STREAMLINED OPERATIONS"
          title="Streamlined Operations"
          description="Charging Management System specializes in software solutions tailored for Charging Point Operators, ensuring optimal functionality and user experience."
          imageUrl="https://placehold.co/600x400/93c5fd/1e40af"
          imageAlt="Leading Software Solutions"
          imagePosition="left"
        />
      </div>
      <div className="bg-gradient-to-b from-brand-100 to-white">
        <SubSection
          eyebrow="ELECTRIC VEHICLE MARKET"
          title="Electric Vehicle Market"
          description="Charging Management System is positioned in the rapidly growing electric vehicle market, driving innovation and service delivery improvements."
          imageUrl="https://placehold.co/600x400/93c5fd/1e40af"
          imageAlt="Electric Vehicle Market"
        />
      </div>
      <PricingComparison />
    </main>
  );
}
