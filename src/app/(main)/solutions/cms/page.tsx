import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { Metadata } from "next";
import { CallToAction } from "@/components/common/CallToAction";
import { Gallery } from "@/components/solutions/dashboard/Gallery";
import { FeatureGrid } from "@/components/solutions/dashboard/FeatureGrid";
import { FileText, Coins, BarChartBig, Cpu, Megaphone, Globe, Users, BarChart2, Wrench, DollarSign } from "lucide-react";
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";
import StaggeredScroll from "@/components/animations/collection/StaggeredScroll";
import SlideInScroll from "@/components/animations/collection/SlideInScroll";
import FadeInScroll from "@/components/animations/collection/FadeInScroll";

export const metadata: Metadata = {
    title: "CMS Dashboard | TIAR Solutions",
    description: "Explore the features of the TIAR Charging Management System, your all-in-one command center for managing, monetizing, and scaling your EV charging network.",
};

const featuresData = [
    {
        name: "Dynamic Tariff Engine",
        description: "Implement sophisticated pricing models based on time, demand, or user groups to maximize revenue and charger utilization.",
        icon: Coins,
        color: "bg-yellow-500"
    },
    {
        name: "Automated Financial Reporting",
        description: "Automatically generate energy bills, revenue share calculations, and profit reports, eliminating manual work and ensuring accuracy.",
        icon: FileText,
        color: "bg-blue-500"
    },
    {
        name: "Intuitive Business Intelligence",
        description: "Our clean GUI makes complex data easy to understand, empowering you to make smarter, faster business decisions.",
        icon: BarChartBig,
        color: "bg-green-500"
    },
    {
        name: "Remote Diagnostics & Control",
        description: "Proactively manage your network's health. Reboot chargers, update firmware, and diagnose issues from anywhere, anytime.",
        icon: Cpu,
        color: "bg-red-500"
    },
    {
        name: "Targeted Marketing Tools",
        description: "Launch promotions, loyalty programs, and announcements directly to your users to drive engagement and increase usage.",
        icon: Megaphone,
        color: "bg-purple-500"
    },
    {
        name: "Open Roaming Integration",
        description: "Seamlessly connect with other networks through standards like OCPI to expand your reach and offer a better experience for all EV drivers.",
        icon: Globe,
        color: "bg-gray-500"
    },
];

const ctaButtons = [
    { text: "Contact Us", variant: "outline" as const, href: "/contact" }
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
      imageUrl: '/images/cms/user-engagement.png',
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

export default function CMSPage() {
    return (
        <main>
            <Hero
                eyebrow="TIAR Solution"
                header="Your Network's Command Center"
                caption="The TIAR Charging Management System (CMS) is a powerful, all-in-one platform that gives you complete visibility and control over your entire charging infrastructure. From operations and finance to marketing and growth, it's all here."
                images={['/images/solutions/solution-cms-hero.png']}
            />

            <StaggeredScroll stagger={0.15} delay={0.4}>
              <Gallery
                  views={galleryViews}
                  eyebrow="Your Command Center"
                  title="One Dashboard to Rule Them All"
                  description="Our CMS is more than just a tool; it's the nerve center of your charging business. Explore the key modules that give you complete control."
              />
            </StaggeredScroll>          

            <FadeInScroll delay={0.2} duration={0.8}>
              <FeatureGrid
                  features={featuresData}
                  header="Powerful by Design"
                  subtitle="Every tool within our CMS is engineered to solve a specific operational challenge, reduce overhead, and maximize your revenue potential."
                  eyebrow="Powerful by Design"
              />
            </FadeInScroll>

            <SlideInScroll direction="right" delay={0.2} duration={0.8}>
              <SubSection
                  eyebrow="Seamless Collaboration"
                  title="Grow Beyond Your Network with Roaming"
                  description="Our CMS is built with open standards at its core. This facilitates seamless roaming agreements between operators, allowing your customers to charge on partner networks and vice-versa. Enhance service availability, create new revenue streams, and contribute to a truly unified charging ecosystem."
                  imageUrl="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  imageAlt="A world map with interconnected data points"
                  imagePosition="left"
              />
            </SlideInScroll>

            <CallToAction
                title="Ready to Take Control?"
                subtitle="Experience the power and simplicity of the TIAR CMS for yourself. Schedule a personalized, no-obligation demo with one of our platform experts today."
                buttons={ctaButtons}
            />

            <LatestPostsCarousel
                title="Latest News"
                subtitle="Stay up to date with the latest news and updates from our team."
                category="Dashboard"
            />
        </main>
    );
}