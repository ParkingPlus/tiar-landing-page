import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { KeyFeatures } from "@/components/common/KeyFeatures";
import { Statistics } from "@/components/common/StatisticsBanner";
import { CallToAction } from "@/components/common/CallToAction";
import { BenefitsCarousel } from "@/components/common/BenefitsCarousel";
import { Metadata } from "next";
import PlatformShowcase from "@/components/common/PlatformOverview";
import { Zap, Globe, Shield, LayoutDashboard, Wallet, Palette, TerminalSquare, Users } from "lucide-react";
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";
import ScaleInScroll from "@/components/animations/collection/ScaleInScroll";
import SlideInScroll from "@/components/animations/collection/SlideInScroll";
import StaggeredScroll from "@/components/animations/collection/StaggeredScroll";

export const metadata: Metadata = {
  title: "Charging Point Operator Platform | Tiar",
  description:
    "A powerful, scalable, and white-labeled EV charging platform for CPOs with full API access, multiple payment options, and centralized management.",
};

const features = [
  {
    icon: <Palette className="h-8 w-8 text-pink-500" />,
    title: "White-Label Platform",
    description: "Launch your own branded EV charging site with customizable UI and fast onboarding."
  },
  {
    icon: <TerminalSquare className="h-8 w-8 text-blue-500" />,
    title: "OpenAPI Integration",
    description: "Integrate with any third-party service via our developer-friendly OpenAPI documentation."
  },
  {
    icon: <Wallet className="h-8 w-8 text-green-500" />,
    title: "Multi-Currency Payment",
    description: "Accept local and international payments via Stripe, PayPal, cards, and e-wallets."
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-yellow-500" />,
    title: "Centralized Dashboard",
    description: "Manage chargers across all your locations in one place — monitor uptime, usage, and revenue."
  },
  {
    icon: <Globe className="h-8 w-8 text-purple-500" />,
    title: "Scalable Deployment",
    description: "Easily expand your network with support for multi-site operations and nested accounts."
  },
  {
    icon: <Shield className="h-8 w-8 text-brand-500" />,
    title: "Secure & Compliant",
    description: "GDPR-ready, PCI-compliant, and protected with end-to-end encryption."
  }
];

const stats = [
  { number: "1000+", label: "Public Charging Points Managed", icon: <Zap className="h-6 w-6" /> },
  { number: "98%", label: "Average Utilization Rate", icon: <Globe className="h-6 w-6" /> },
  { number: "30+", label: "Integrated Payment Channels", icon: <Wallet className="h-6 w-6" /> },
  { number: "24/7", label: "Uptime Monitoring & Support", icon: <Users className="h-6 w-6" /> },
];

const benefits = [
  {
    title: "Maximize Charger Utilization",
    description: "Dynamic pricing, location visibility, and user-friendly maps help keep your chargers constantly in use.",
    image: "https://images.unsplash.com/photo-1610985725707-bb0766bf123b?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Electric vehicle charger on busy street"
  },
  {
    title: "Simplify Billing & Revenue",
    description: "Automated billing with revenue tracking, invoices, and reconciliation tailored for operators.",
    image: "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Digital billing dashboard"
  },
  {
    title: "Enhance User Experience",
    description: "Provide drivers with real-time availability, intuitive UI, and easy payment via web or app.",
    image: "https://images.unsplash.com/photo-1600267165477-a1477b7deedc?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Mobile app interface for EV charging"
  },
  {
    title: "Developer-Friendly API",
    description: "Enable custom logic, mobile integrations, and enterprise apps through our modern REST API.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Code on a developer workstation"
  },
  {
    title: "Launch Your Brand, Fast",
    description: "Go live within days with our white-labeled solution and pre-built templates.",
    image: "https://images.unsplash.com/photo-1653647054667-c99dc7f914ef?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Branded website showcase"
  },
];

const ctaButton = [{ text: "Contact Us", variant: "outline" as const, href: "/contact" }];

export default function CPOPage() {
  return (
    <main>
      <Hero
        eyebrow="Charging Point Operator Platform"
        header="All-in-One Infrastructure for CPOs"
        caption="Tiar helps Charging Point Operators launch, scale, and manage EV charging infrastructure with advanced features, flexible APIs, and branding capabilities."
        images={["https://images.unsplash.com/photo-1631347826177-de288776ed3b?q=80&w=1170?q=80&w=2070&auto=format&fit=crop"]}
      />

      <StaggeredScroll stagger={0.15} delay={0.4}>
        <KeyFeatures
          eyebrow="CPO-Focused Functionality"
          title="A Robust Platform Built for Charging Point Operators"
          subtitle="Everything you need to deliver high-quality public charging experiences, in one integrated platform."
          features={features}
          backgroundColor="white"
        />
      </StaggeredScroll>

      <Statistics
        title="Proven Performance, Trusted by CPOs"
        subtitle="Our infrastructure powers top-tier operators across regions."
        statistics={stats}
        backgroundColor="green"
      />

      <StaggeredScroll stagger={0.15} delay={0.4}>
        <BenefitsCarousel
          eyebrow="Platform Advantages"
          title="Why CPOs Choose Tiar"
          subtitle="Explore how our platform empowers operators to boost utilization, simplify operations, and scale rapidly."
          benefits={benefits}
          backgroundColor="green"
        />
      </StaggeredScroll>

      <SlideInScroll direction="right" delay={0.2} duration={0.8}>
        <SubSection
          eyebrow="Total Operational Control"
          title="Your Infrastructure, Your Brand"
          description="Tiar enables you to offer charging services under your own name, powered by our backend. Customize your web interface, track analytics, monitor uptime, and expand across cities—all in one platform."
          imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Branded dashboard interface"
          imagePosition="right"
        />
      </SlideInScroll>

      <ScaleInScroll delay={0.2} duration={0.8}>  
        <PlatformShowcase />
      </ScaleInScroll>

      <CallToAction
        title="Empower Your Charging Network"
        subtitle="Get started with our white-label-ready CPO platform."
        buttons={ctaButton}
        description="Fast onboarding • API-first design • Custom branding available"
        backgroundColor="green"
      />

      <LatestPostsCarousel
        title="Latest News"
        subtitle="Stay up to date with the latest news and updates from our team."
        category="Operators"
      />
    </main>
  );
}