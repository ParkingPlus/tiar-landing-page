import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { Car, Zap, BarChart3, Shield, Clock, Gauge, Users, TrendingUp } from "lucide-react";
import { Metadata } from "next";
import { KeyFeatures } from "@/components/common/KeyFeatures";
import { Statistics } from "@/components/common/StatisticsBanner";
import FleetTypes from "@/components/use-case/fleet/FleetTypes";
import { CallToAction } from "@/components/common/CallToAction";
import { BenefitsCarousel } from "@/components/common/BenefitsCarousel";
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";
import FadeInScroll from "@/components/animations/collection/FadeInScroll";
import StaggeredScroll from "@/components/animations/collection/StaggeredScroll";
import SlideInScroll from "@/components/animations/collection/SlideInScroll";

export const metadata: Metadata = {
    title: "EV Fleet Charging Solutions | Tiar",
    description: "Scalable and reliable EV charging solutions for electric fleets of all sizes, including cars, taxis, trucks, and buses.",
};

const features = [
    {
        icon: <Zap className="h-8 w-8 text-yellow-500" />,
        title: "Universal Compatibility",
        description: "Support for all major charging protocols including AC/DC, CCS, and CHAdeMO"
    },
    {
        icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
        title: "Smart Analytics",
        description: "Advanced monitoring and reporting tools for optimal fleet performance"
    },
    {
        icon: <Shield className="h-8 w-8 text-green-500" />,
        title: "Reliable Infrastructure",
        description: "99.5% uptime guarantee with 24/7 monitoring and support"
    },
    {
        icon: <Clock className="h-8 w-8 text-purple-500" />,
        title: "Flexible Scheduling",
        description: "Automated charging schedules optimized for your operational hours"
    },
    {
        icon: <Gauge className="h-8 w-8 text-red-500" />,
        title: "Load Management",
        description: "Intelligent power distribution to maximize charging efficiency"
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-brand-500" />,
        title: "Cost Optimization",
        description: "Reduce operational costs through smart energy management"
    }
];

const stats = [
    { number: "50+", label: "Fleet Vehicles Powered", icon: <Car className="h-6 w-6" /> },
    { number: "99.5%", label: "System Uptime", icon: <Shield className="h-6 w-6" /> },
    { number: "20%", label: "Average Cost Savings", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Users className="h-6 w-6" /> }
];

const benefits = [
    {
        title: "Reduce Operating Costs",
        description: "Smart energy management and off-peak charging can reduce your energy costs by up to 40%",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Calculator and documents"
    },
    {
        title: "Maximize Fleet Uptime",
        description: "Reliable charging infrastructure ensures your vehicles are always ready when you need them",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Truck on the road"
    },
    {
        title: "Streamline Operations",
        description: "Centralized management tools give you complete visibility and control over your charging network",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Business charts on a laptop"
    },
    {
        title: "Enhanced Sustainability",
        description: "Reduce your carbon footprint and meet environmental goals while improving your brand reputation",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Green energy and sustainability"
    },
    {
        title: "Scalable Infrastructure",
        description: "Easily expand your charging network as your fleet grows, with modular solutions that adapt to your needs",
        image: "https://images.unsplash.com/photo-1581094794329-5753a4795fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Scaling infrastructure"
    }
];

const ctaButton = [{ text: "Contact Us", variant: "outline" as const, href: "/contact" }]

export default function FleetPage() {
    return (
        <main>
            <Hero
                eyebrow={
                    <>
                        <span className="text-black">EV Fleet Charging Solutions</span>
                    </>
                }
                header={
                    <>
                        <span className="text-black">Powering Your Electric Fleet, Seamlessly</span>
                    </>
                }
                caption={
                    <>
                        <span className="text-black bg-white px-4">From cars and taxis to trucks and buses, </span> <br />
                        <span className="text-black bg-white px-4"> we provide reliable and scalable charging solutions to keep your fleet moving.</span>
                    </>
                }
                images={['/images/usecase/usecase-fleet.jpg']}
            />

            <FadeInScroll delay={0.2} duration={0.8}>
                <FleetTypes />
            </FadeInScroll>

            <StaggeredScroll stagger={0.15} delay={0.4}>
                <KeyFeatures
                    eyebrow="Key Features"
                    title="Everything You Need for Fleet Charging"
                    subtitle="Our comprehensive platform provides all the tools and features necessary to manage your electric fleet efficiently."
                    features={features}
                    backgroundColor="white"
                />
            </StaggeredScroll>

            <SlideInScroll direction="left" delay={0.2} duration={0.8}>
                <SubSection
                    eyebrow="Versatile Charging Infrastructure"
                    title="All Protocols, All Power Levels"
                    description="We support all major charging protocols (AC, DC one phase, and DC three phase) and a wide range of power outputs to meet the specific needs of your diverse fleet. From overnight depot charging to rapid destination charging, we have you covered."
                    imageUrl="https://images.unsplash.com/photo-1705051278299-7e64ba21437a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    imageAlt="Multiple EV chargers"
                    imagePosition="left"
                />
            </SlideInScroll>

            <Statistics
                title="Proven Results for Fleet Operators"
                subtitle="Join hundreds of fleet operators who trust our solutions"
                statistics={stats}
                backgroundColor="green"
            />

            <SlideInScroll direction="right" delay={0.2} duration={0.8}>
                <SubSection
                    eyebrow="Centralized Fleet Management"
                    title="Unified Dashboard for Total Control"
                    description="Monitor your entire charging infrastructure from a single, intuitive dashboard. Track energy consumption, manage charging sessions, and get real-time status updates for all your chargers, ensuring maximum uptime and efficiency."
                    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    imageAlt="Dashboard analytics"
                    imagePosition="right"
                />
            </SlideInScroll>

            <StaggeredScroll stagger={0.15} delay={0.4}>
                <BenefitsCarousel
                    eyebrow="Business Benefits"
                    title="Why Fleet Operators Choose Tiar"
                    subtitle="Discover the key advantages that make our charging solutions the preferred choice for fleet operators worldwide"
                    benefits={benefits}
                    backgroundColor="white"
                />
            </StaggeredScroll>

            <SlideInScroll direction="left" delay={0.2} duration={0.8}>
                <SubSection
                    eyebrow="Smart Energy Management"
                    title="Optimize Costs and Grid Impact"
                    description="Our intelligent energy management system balances charging loads, schedules sessions during off-peak hours, and integrates with renewable energy sources to reduce your operational costs and support grid stability."
                    imageUrl="/images/usecase/usecase-fleet.png"
                    imageAlt="Smart grid visualization"
                    imagePosition="left"
                />
            </SlideInScroll>

            <CallToAction
                title="Ready to Electrify Your Fleet?"
                subtitle="Join the growing number of fleet operators who are reducing costs and improving efficiency with our charging solutions."
                buttons={ctaButton}
                description="Free consultation • Custom pricing • 24/7 support"
            />

            <LatestPostsCarousel
                title="Latest News"
                subtitle="Stay up to date with the latest news and updates from our team."
                category="Fleet"
            />
        </main>
    );
}