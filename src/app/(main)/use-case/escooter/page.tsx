import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { BatteryCharging, Zap, TrendingUp, Shield, Map, Smartphone, Globe, Rocket } from "lucide-react";
import { Metadata } from "next";
import { KeyFeatures } from "@/components/common/KeyFeatures";
import { Statistics } from "@/components/common/StatisticsBanner";
import { CallToAction } from "@/components/common/CallToAction";
import { BenefitsCarousel } from "@/components/common/BenefitsCarousel";
import { UrbanChargingHubs } from "@/components/use-case/escooters/PublicChargingHub";
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";

export const metadata: Metadata = {
    title: "eScooter Charging Solutions | Tiar",
    description: "Get ready for the future of urban mobility. Our upcoming eScooter charging solutions are built for shared fleets and private owners.",
};

const features = [
    {
        icon: <Rocket className="h-8 w-8 text-brand-500" />,
        title: "Coming Soon: The Future of Micromobility",
        description: "Be the first to leverage our next-gen charging network, specifically engineered for the booming eScooter market."
    },
    {
        icon: <Shield className="h-8 w-8 text-green-500" />,
        title: "Durable & Vandal-Proof",
        description: "Engineered for public spaces, our stations are built to withstand heavy use and harsh weather, ensuring maximum uptime."
    },
    {
        icon: <BatteryCharging className="h-8 w-8 text-yellow-500" />,
        title: "Modular & Scalable",
        description: "Start with a few points and easily expand your network as demand grows, thanks to our flexible, modular hardware design."
    },
    {
        icon: <Smartphone className="h-8 w-8 text-blue-500" />,
        title: "User-Friendly Interface",
        description: "A simple, accessible tap-and-charge system designed for quick stops, ensuring a seamless experience for all riders."
    },
    {
        icon: <Map className="h-8 w-8 text-purple-500" />,
        title: "Smart Hub Management",
        description: "Our platform will allow you to monitor status, manage availability, and set pricing for all your charging points remotely."
    },
    {
        icon: <Globe className="h-8 w-8 text-red-500" />,
        title: "Global Compatibility",
        description: "Designed to support a wide range of eScooter models and brands, making your network universally accessible."
    }
];

const stats = [
    { number: "266M", label: "eScooters Projected in Asia-Pacific by 2029", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "1st", label: "Mover Advantage in Emerging Markets", icon: <Zap className="h-6 w-6" /> },
    { number: "3x", label: "Potential Increase in Fleet Utilization", icon: <BatteryCharging className="h-6 w-6" /> },
    { number: "10+", label: "Countries in the eScooter Boom", icon: <Globe className="h-6 w-6" /> }
];

const benefits = [
    {
        title: "Capitalize on the eScooter Boom",
        description: "The market is exploding in Indonesia, India, Vietnam, and across Southeast Asia. Be ready to capture this massive opportunity with a purpose-built charging solution.",
        image: "https://images.unsplash.com/photo-1579762593175-20226054cad0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Busy city street in Asia with scooters"
    },
    {
        title: "Solve the Biggest Micromobility Challenge",
        description: "Disorganized, uncharged scooters clutter cities and ruin the user experience. Our organized charging hubs create order and reliability, increasing fleet availability and revenue.",
        image: "https://images.unsplash.com/photo-1629852328211-5369a4701967?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Neatly parked row of e-scooters"
    },
    {
        title: "Create Smart Mobility Hubs",
        description: "Transform your properties into essential infrastructure for modern transport. Our charging points attract foot traffic, enhance property value, and create a new source of passive income.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Modern building with people walking by"
    },
    {
        title: "Offer a Seamless User Experience",
        description: "No more searching for a charged scooter. Our user-friendly app will guide riders to your hubs, where they can charge quickly and be on their way, promoting repeat usage.",
        image: "https://images.unsplash.com/photo-1590986933589-91321c1723ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Person using a smartphone with a city map"
    }
];

const ctaButton = [{ text: "Contact Us", variant: "outline" as const, href: "/contact" }]

export default function EScooterPage() {
    return (
        <main>
            <Hero
                eyebrow="COMING SOON"
                header="Powering the Micromobility Revolution"
                caption="The eScooter boom is here. Get ready to deploy specialized, reliable, and user-friendly charging points designed for the next wave of urban transport."
                images={['/images/usecase/usecase-escooter.jpg']}
            />
            <SubSection
                eyebrow="A Multi-Billion Dollar Opportunity"
                title="The eScooter Market is Exploding"
                description="With massive growth in countries like Indonesia, India, China, and the Philippines, the demand for reliable charging infrastructure has never been higher. This is your chance to get in on the ground floor of a market set to reach over 200 million vehicles in Asia alone."
                imageUrl="https://images.unsplash.com/photo-1616000499092-3576a5991417?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                imageAlt="Map of Southeast Asia with glowing points"
                imagePosition="left"
            />
            <KeyFeatures
                eyebrow="Platform Highlights"
                title="A Purpose-Built Solution for eScooters"
                subtitle="Our upcoming platform is more than just a charger; it's a complete ecosystem designed for the unique demands of shared and private micromobility."
                features={features}
                backgroundColor="white"
            />
            <Statistics
                title="The Future is Electric & Two-Wheeled"
                subtitle="The data is clear. Micromobility is reshaping our cities. Position yourself at the forefront of this transformation."
                statistics={stats}
                backgroundColor="green"
            />

            <UrbanChargingHubs />

            <BenefitsCarousel
                eyebrow="Why Partner With Us"
                title="Unlock the Full Potential of Micromobility"
                subtitle="Discover the advantages of deploying a dedicated charging network for eScooters."
                benefits={benefits}
                backgroundColor="gray"
            />

            <CallToAction
                title="Be the First to Market"
                subtitle="Our eScooter solution is launching soon. Join our waitlist for exclusive updates or apply to become a launch partner and help shape the future of urban mobility."
                buttons={ctaButton}
                description="Early access • Launch partner discounts • Priority support"
                backgroundColor="green"
            />

            <LatestPostsCarousel
                category="eScooters"
                title="Related Insights"
                subtitle="Read our latest articles and discover the trends shaping the future of e-scooters."
            />
        </main>
    );
}