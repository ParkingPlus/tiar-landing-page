import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { Zap, BarChart3, Shield, Users, TrendingUp, Building } from "lucide-react";
import { Metadata } from "next";
import { KeyFeatures } from "@/components/common/KeyFeatures";
import { Statistics } from "@/components/common/StatisticsBanner";
import PropertyTypes from "@/components/use-case/property-owners/PropertyTypes";
import { CallToAction } from "@/components/common/CallToAction";
import { BenefitsCarousel } from "@/components/common/BenefitsCarousel";
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";
import FadeInScroll from "@/components/animations/collection/FadeInScroll";
import StaggeredScroll from "@/components/animations/collection/StaggeredScroll";
import SlideInScroll from "@/components/animations/collection/SlideInScroll";

export const metadata: Metadata = {
    title: "EV Charging for Property Owners | Tiar",
    description: "Install, manage, and monetize EV charging stations on your property. Attract tenants and customers with a valuable, hassle-free amenity.",
};

const features = [
    {
        icon: <Zap className="h-8 w-8 text-yellow-500" />,
        title: "Turnkey Installation",
        description: "From site assessment to final commissioning, we handle the entire setup process for a hassle-free experience."
    },
    {
        icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
        title: "Advanced Analytics",
        description: "Access detailed reports on usage, revenue, and energy consumption through your dedicated sub-account portal."
    },
    {
        icon: <Users className="h-8 w-8 text-red-500" />,
        title: "Tenant & Customer Attraction",
        description: "Become a preferred destination for the growing number of EV drivers and enhance your property's appeal."
    },
];

const stats = [
    { number: "25%", label: "Increase in Tenant Retention", icon: <Users className="h-6 w-6" /> },
    { number: "99.5%", label: "Guaranteed Uptime", icon: <Shield className="h-6 w-6" /> },
    { number: "30%", label: "Higher Customer Dwell Time", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "100+", label: "Properties Powered", icon: <Building className="h-6 w-6" /> }
];

const benefits = [
    {
        title: "Generate New Passive Income",
        description: "Create a new revenue stream with customizable pricing. Our platform handles all billing and transactions for you seamlessly.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Person calculating finances"
    },
    {
        title: "Increase Your Asset Value",
        description: "EV charging is a critical amenity for the modern world. Installing it now future-proofs your property and significantly boosts its appeal.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Modern city buildings"
    },
    {
        title: "Attract High-Value Tenants & Customers",
        description: "EV drivers are a growing, affluent demographic. Providing charging makes your property a primary choice for them to live, work, or shop.",
        image: "https://images.unsplash.com/photo-1527877218688-f3f0f876a186?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Happy customer smiling"
    },
    {
        title: "Enhance Your Brand & ESG Goals",
        description: "Showcase your commitment to sustainability. Offering EV charging improves your brand reputation and helps you meet environmental targets.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Green energy and sustainability"
    },
    {
        title: "Gain Actionable Insights",
        description: "Our powerful dashboard provides you with detailed analytics on charger usage, revenue, and user behavior to optimize your investment.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Business charts on a laptop"
    }
];

const ctaButton = [{ text: "Request a Quote", variant: "outline" as const }]

export default function PropertyOwnersPage() {
    return (
        <main>
            <Hero
                eyebrow="For Property Owners"
                header="Unlock New Revenue with EV Charging"
                caption="Attract and retain tenants, customers, and visitors by providing a valuable amenity. We make it easy to install, manage, and monetize EV charging stations on your property."
                images={['https://images.unsplash.com/photo-1617886322168-72b886573c35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']}
            />

            <FadeInScroll delay={0.2} duration={0.8}>
                <PropertyTypes />
            </FadeInScroll>

            <StaggeredScroll stagger={0.15} delay={0.4}>
                <KeyFeatures
                    eyebrow="Key Features"
                    title="A Complete Solution for Property Owners"
                    subtitle="Our platform provides everything you need to offer EV charging as a premium, hassle-free amenity."
                    features={features}
                    backgroundColor="white"
                />
            </StaggeredScroll>

            <SlideInScroll direction="right" delay={0.2} duration={0.8}>
                <SubSection
                    eyebrow="Hassle-Free Installation"
                    title="Seamless Setup, Managed by Experts"
                    description="Our team handles everything from site assessment and installation to commissioning and ongoing maintenance. We ensure a smooth, turnkey process so you can focus on your business."
                    imageUrl="https://plus.unsplash.com/premium_photo-1681823071792-4e41733f2d0a?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    imageAlt="EV charger installation"
                    imagePosition="left"
                />
            </SlideInScroll>
            
            <Statistics
                title="Proven Results for Property Owners"
                subtitle="Join hundreds of properties that are boosting value and generating revenue"
                statistics={stats}
                backgroundColor="green"
            />

            <SlideInScroll direction="left" delay={0.2} duration={0.8}>
                <SubSection
                    eyebrow="Centralized Management"
                    title="Data and Control at Your Fingertips"
                    description="Our sub-account feature provides you with a dedicated portal to view detailed statistics for one or multiple properties. Track usage, revenue, and environmental impact with ease, giving you full visibility into your charging operations."
                    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    imageAlt="Analytics dashboard on a tablet"
                    imagePosition="right"
                />
            </SlideInScroll>

            <StaggeredScroll stagger={0.15} delay={0.4}>
                <BenefitsCarousel
                    eyebrow="Business Benefits"
                    title="Why Property Owners Choose Tiar"
                    subtitle="Discover the key advantages that make our charging solutions the ideal investment for your property portfolio."
                    benefits={benefits}
                        backgroundColor="gray"
                />
            </StaggeredScroll>

            <SlideInScroll direction="right" delay={0.2} duration={0.8}>
                <SubSection
                    eyebrow="Smart Load Management"
                    title="Maximize Efficiency, Minimize Cost"
                    description="Our intelligent system dynamically balances power across all active chargers. This prevents overloading your electrical infrastructure and minimizes costly upgrades, ensuring efficient energy use."
                    imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    imageAlt="Smart grid visualization"
                    imagePosition="left"
                />
            </SlideInScroll>

            <CallToAction
                title="Ready to Enhance Your Property?"
                subtitle="Let's discuss how EV charging can boost your property's value and open up new revenue streams."
                buttons={ctaButton}
                description="Free site assessment • Custom quotes • 24/7 support"
                backgroundColor="green"
            />

            <LatestPostsCarousel
                title="Latest News"
                subtitle="Stay up to date with the latest news and updates from our team."
                category="Property Owners"
            />
        </main>
    );
}