import { Metadata } from "next";
import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { CallToAction } from "@/components/common/CallToAction";
import { Statistics } from "@/components/common/StatisticsBanner";
import {
  Car, Shield, Globe, Users, MapPin, Zap, Clock,
  BarChart2, Wrench, DollarSign, Megaphone
} from "lucide-react";
import { UseCaseTabs } from "@/components/home/UseCaseTabs";
import { PlatformPillars } from "@/components/home/PlatformPillars";
import { HighlightCard } from "@/components/common/HighlightCard";
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";
import { GalleryCarousel } from "@/components/solutions/dashboard/GalleryCarousel";

// Import the new animation components
import AnimateOnScroll from "@/components/animations/collection/AnimateOnScroll";
import SlideInScroll from "@/components/animations/collection/SlideInScroll";
import FadeInScroll from "@/components/animations/collection/FadeInScroll";
import ScaleInScroll from "@/components/animations/collection/ScaleInScroll";
import StaggeredScroll from "@/components/animations/collection/StaggeredScroll";
import BlurInScroll from "@/components/animations/collection/BlurInScroll";

export const metadata: Metadata = {
  title: "Charging Station Management System (CMS) OCPP for Indonesia & Asia",
  description:
    "EV Charging Management Software and CMS based on OCPP 1.6, 2.0.1, and 2.1. Real-time monitoring, Dynamic Load Management, billing, analytics, and white-label for operators, fleets, and governments in Indonesia & Asia.",
};

const features = [
  {
    icon: <Zap className="w-full h-full" />,
    header: "Leading Software Solutions",
    text: "Charging Management System specializes in software solutions tailored for Charging Point Operators, ensuring optimal functionality and user experience.",
    href: "/solutions/cms#ocpp",
    color: "#1988FB"
  },
  {
    icon: <Clock className="w-full h-full" />,
    header: "Streamlined Operations",
    text: "Our technology streamlines operations for Charging Point Operators, enhancing efficiency and reducing downtime.",
    href: "/solutions/cms#monitoring",
    color: "#FE9923"
  },
  {
    icon: <MapPin className="w-full h-full" />,
    header: "Electric Vehicle Market",
    text: "Charging Management System is positioned in the rapidly growing electric vehicle market, driving innovation and service delivery improvements.",
    href: "/solutions/cms#analytics",
    color: "#FD0039"
  },
];

// Data for the statistics banner
const stats = [
  { number: "1000+", label: "Charging Sessions Managed", icon: <Car className="h-6 w-6" /> },
  { number: "99.8%", label: "Platform Uptime", icon: <Shield className="h-6 w-6" /> },
  { number: "2+", label: "Countries in Operation", icon: <Globe className="h-6 w-6" /> },
  { number: "2+", label: "Partners & Operators", icon: <Users className="h-6 w-6" /> }
];

const ctaButtons = [
  {
    text: "See Product",
    variant: "default" as const,
    href: "/solutions/cms",
  },
  {
    text: "Contact Us",
    variant: "outline" as const,
    href: "/contact"
  }
];

const galleryViews = [
  {
    id: 'analytics',
    name: 'Business Analytics',
    icon: <BarChart2 className="h-5 w-5" />,
    title: 'Data-Driven Decisions at a Glance',
    description: 'Visualize your entire network\'s performance. Track revenue, utilization, and user growth with our intuitive and customizable analytics dashboard to uncover trends and opportunities.',
    imageUrl: '/images/cms/business.png',
  },
  {
    id: 'operations',
    name: 'Operations & Uptime',
    icon: <Wrench className="h-5 w-5" />,
    title: 'Proactive Network Management',
    description: 'Monitor the real-time health of every charger. Receive instant alerts, perform remote diagnostics, and manage firmware updates to ensure maximum uptime and reliability.',
    imageUrl: '/images/cms/utilization.png',
  },
  {
    id: 'finance',
    name: 'Finance & Tariffs',
    icon: <DollarSign className="h-5 w-5" />,
    title: 'Automate Your Financial Workflow',
    description: 'Set dynamic tariffs, manage multiple pricing models, and automate the generation of bills, revenue shares, and accounting reports. Reduce manual work and eliminate errors.',
    imageUrl: '/images/cms/pricing.png',
  },
  {
    id: 'marketing',
    name: 'User Engagement',
    icon: <Megaphone className="h-5 w-5" />,
    title: 'Launch Targeted Marketing Campaigns',
    description: 'Engage your users directly through the platform. Announce promotions, offer loyalty rewards, and send targeted blasts to drive usage and build a loyal customer base.',
    imageUrl: 'https://placehold.co/1200x750/111827/ec4899?text=Marketing+View',
  },
  {
    id: 'roaming',
    name: 'Roaming & Partnerships',
    icon: <Users className="h-5 w-5" />,
    title: 'Expand Your Reach Seamlessly',
    description: 'Manage your roaming agreements and partnerships. Our dashboard provides clear insights into inter-operator sessions, ensuring transparent billing and resource sharing.',
    imageUrl: 'https://placehold.co/1200x750/111827/f59e0b?text=Roaming+View',
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden overflow-y-hidden">
      {/* Hero section with blur effect for dramatic entrance */}
      <BlurInScroll duration={0.7}>
        <Hero
          header={
            <>
              Powering The Future of
              <br />
              EV Charging — <span className="text-brand-500">Smart, Scalable, Yours</span>
            </>
          }
          caption="Manage and scale your electric vehicle charging network with an open, flexible, white-label platform based on OCPP. TIAR gives you complete control: from daily operations to global expansion."
          images={[
            "/images/background/hero_1.png",
            "/images/background/hero_2.v2.png",
            "/images/background/hero_3.png",
            // "/images/background/hero_4.png",
          ]}
        />
      </BlurInScroll>

      {/* Features section with staggered animation for cards */}
      <div className="bg-gray-50/20 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Header with fade up animation */}
          <AnimateOnScroll delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r text-black bg-clip-text drop-shadow-sm">An All-In-One Platform</h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                OCPP‑compliant EV Charging Management Software with real‑time monitoring, Dynamic Load Management, billing, analytics, and white‑label capabilities.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Feature cards with staggered scale animation */}
          <StaggeredScroll stagger={0.15} delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
              {features.map((feature, index) => (
                <ScaleInScroll key={index} delay={0} initialScale={0.9}>
                  <HighlightCard
                    href={feature.href}
                    icon={feature.icon}
                    header={feature.header}
                    text={feature.text}
                    iconStyle={{ color: feature.color }}
                  />
                </ScaleInScroll>
              ))}
            </div>
          </StaggeredScroll>
        </div>
      </div>

      {/* Use case tabs sliding in from the left */}
      <SlideInScroll direction="left" delay={0.2} duration={0.8}>
        <UseCaseTabs />
      </SlideInScroll>

      {/* Platform pillars sliding in from the right */}
      <PlatformPillars />

      <StaggeredScroll stagger={0.15} delay={0.4}>
        <GalleryCarousel
          views={galleryViews}
          eyebrow="Your Command Center"
          title="One Dashboard to Rule Them All"
          description="Our CMS is more than just a tool; it's the nerve center of your charging business. Explore the key modules that give you complete control."
        />
      </StaggeredScroll>

      {/* Statistics with scale animation for impact */}
      <Statistics
        title="Proven Results, Trusted by Leaders"
        subtitle="Our platform is battle-tested and trusted by a growing network of partners across the globe."
        statistics={stats}
        backgroundColor="gray"
      />

      {/* About section with fade animation */}
      <FadeInScroll delay={0.4} duration={0.9}>
        <SubSection
          eyebrow="Born from Experience, Built for You"
          title="A Partner, Not Just a Provider"
          description="TIAR was founded by operators, for operators. We understand the real-world challenges of building a charging network because we've lived them. Our platform isn't just code; it's a collection of hard-earned lessons and best practices designed to help you succeed faster and avoid common pitfalls."
          imageUrl="/images/about/partner not provider.png"
          imageAlt="A team of professionals strategizing around a whiteboard"
          imagePosition="left"
        />
      </FadeInScroll>

      {/* Call to action with dramatic scale effect */}
      <CallToAction
        title="Ready to Build the Future?"
        subtitle="Whether you're starting your first charging project or scaling a nationwide network, our team is ready to help. Let's discuss your vision."
        buttons={ctaButtons}
        description="Free consultation • Custom pricing • 24/7 support"
      />

      {/* Latest posts with simple fade up */}
      <AnimateOnScroll delay={0.3}>
        <LatestPostsCarousel
          title="Latest News"
          subtitle="Stay up to date with the latest news and updates from our team."
        />
      </AnimateOnScroll>
    </main>
  );
}