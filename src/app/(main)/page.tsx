import { Metadata } from "next";
import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { CallToAction } from "@/components/common/CallToAction";
import { Statistics } from "@/components/common/StatisticsBanner";
import { Car, Shield, Globe, Users, MapPin, Zap, Clock } from "lucide-react";
import { UseCaseTabs } from "@/components/home/UseCaseTabs";
import { PlatformPillars } from "@/components/home/PlatformPillars";
import { HighlightCard } from "@/components/common/HighlightCard";
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";

// Import the new animation components
import AnimateOnScroll from "@/components/animations/collection/AnimateOnScroll";
import SlideInScroll from "@/components/animations/collection/SlideInScroll";
import FadeInScroll from "@/components/animations/collection/FadeInScroll";
import ScaleInScroll from "@/components/animations/collection/ScaleInScroll";
import StaggeredScroll from "@/components/animations/collection/StaggeredScroll";
import BlurInScroll from "@/components/animations/collection/BlurInScroll";
import AnimationWrapper from "@/components/animations/AnimationWrapper";

export const metadata: Metadata = {
  title: "TIAR: The Operating System for Electric Mobility",
  description: "The intelligent, all-in-one Charging Management System for operators, fleets, and businesses of all sizes. Built to manage, monetize, and scale your EV charging network.",
};

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

// Data for the statistics banner
const stats = [
    { number: "1M+", label: "Charging Sessions Managed", icon: <Car className="h-6 w-6" /> },
    { number: "99.8%", label: "Platform Uptime", icon: <Shield className="h-6 w-6" /> },
    { number: "5+", label: "Countries in Operation", icon: <Globe className="h-6 w-6" /> },
    { number: "100+", label: "Partners & Operators", icon: <Users className="h-6 w-6" /> }
];

const ctaButtons = [
    { text: "Schedule a Demo", variant: "default" as const },
    { text: "Explore Solutions", variant: "outline" as const }
];

export default function Home() {
  return (
    <main>
      {/* Hero section with blur effect for dramatic entrance */}
      <BlurInScroll duration={1.2}>
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
      </BlurInScroll>

      {/* Features section with staggered animation for cards */}
      <div className="bg-gradient-to-b from-gray-900 from-90% to-brand-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Header with fade up animation */}
          <AnimateOnScroll delay={0.2}>
            <div className="text-center mb-24">
              <h2 className="text-4xl font-bold text-white">An All-In-One Platform</h2>
              <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                Our platform provides everything you need to manage a modern, sustainable, and efficient public transport network.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Feature cards with staggered scale animation */}
          <StaggeredScroll stagger={0.15} delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
              {features.map((feature, index) => (
                <ScaleInScroll key={index} delay={0} initialScale={0.9}>
                  <HighlightCard
                    href={feature.href}
                    icon={feature.icon}
                    header={feature.header}
                    text={feature.text}
                    iconColor="text-brand-400"
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
          imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        backgroundColor="green"
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