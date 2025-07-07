import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { Car, Zap, TrendingUp, Shield, Wrench, Users, Presentation, Gift, Sparkles, BatteryCharging } from "lucide-react";
import { Metadata } from "next";
import { KeyFeatures } from "@/components/common/KeyFeatures";
import { Statistics } from "@/components/common/StatisticsBanner";
import { CallToAction } from "@/components/common/CallToAction";
import { BenefitsCarousel } from "@/components/common/BenefitsCarousel";
import { FeatureGrid } from "@/components/solutions/dashboard/FeatureGrid";
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";
import ScaleInScroll from "@/components/animations/collection/ScaleInScroll";
import FadeInScroll from "@/components/animations/collection/FadeInScroll";
import SlideInScroll from "@/components/animations/collection/SlideInScroll";
import StaggeredScroll from "@/components/animations/collection/StaggeredScroll";

export const metadata: Metadata = {
    title: "EV Charging for Automotive Showrooms | Tiar",
    description: "Integrate seamless EV charging into your dealership. Enhance the customer experience, educate buyers, and accelerate your EV sales.",
};

const features = [
    {
        icon: <Presentation className="h-8 w-8 text-brand-500" />,
        title: "Interactive Sales Tool",
        description: "Use our chargers as a dynamic part of your sales pitch, demonstrating the ease and speed of EV ownership firsthand."
    },
    {
        icon: <Zap className="h-8 w-8 text-yellow-500" />,
        title: "Always Ready for Test Drives",
        description: "Ensure every EV in your showroom is fully charged and ready to deliver the best possible test drive performance."
    },
    {
        icon: <Users className="h-8 w-8 text-blue-500" />,
        title: "Elevated Customer Experience",
        description: "Offer complimentary charging for service customers, turning their waiting time into a valuable and appreciated perk."
    },
    {
        icon: <Wrench className="h-8 w-8 text-purple-500" />,
        title: "Seamless Integration",
        description: "Our solutions are designed for easy installation and management, complementing your showroom's aesthetics and operations."
    },
    {
        icon: <Gift className="h-8 w-8 text-green-500" />,
        title: "Unlock Accessory Sales",
        description: "A charging station provides a natural opportunity to upsell home charging units and other EV accessories."
    },
    {
        icon: <Shield className="h-8 w-8 text-gray-600" />,
        title: "Future-Proof Your Dealership",
        description: "Position your dealership as a leader in e-mobility and build trust with the next generation of car buyers."
    }
];

const stats = [
    { number: "30%", label: "Increase in EV Test Drives", icon: <Car className="h-6 w-6" /> },
    { number: "25%", label: "Higher Customer Satisfaction", icon: <Users className="h-6 w-6" /> },
    { number: "15%", label: "Growth in Accessory Sales", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "24/7", label: "Priority Support", icon: <Shield className="h-6 w-6" /> }
];

const benefits = [
    {
        title: "Accelerate Your EV Sales",
        description: "Overcome customer objections about charging by demonstrating the process live. A positive charging experience builds confidence and closes deals faster.",
        image: "https://images.unsplash.com/photo-1571216332999-959e4597b8ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Salesperson handing keys to a customer"
    },
    {
        title: "Become an EV Destination",
        description: "Position your dealership as the local expert in electric vehicles. Offering on-site charging attracts EV enthusiasts and potential buyers to your location.",
        image: "https://images.unsplash.com/photo-1555529771-83c33c3905b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Modern and clean car showroom"
    },
    {
        title: "Enhance Your Brand Image",
        description: "Showcasing cutting-edge charging technology signals that your dealership is modern, innovative, and prepared for the future of automotive.",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Sleek branding on a digital display"
    },
    {
        title: "Increase Service Department Loyalty",
        description: "Offer complimentary charging as a premium amenity for EV owners visiting for maintenance. This small gesture builds immense customer loyalty and encourages repeat business.",
        image: "https://images.unsplash.com/photo-1580983216259-a1b1a03af543?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Car being serviced in a clean garage"
    },
    {
        title: "Create New Revenue Opportunities",
        description: "Beyond just selling cars, our platform enables new business models, such as offering paid public charging during off-hours or selling home installation packages.",
        image: "https://images.unsplash.com/photo-1579621970795-87f54f5900ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Growing stack of coins"
    }
];

const testDriveFeatures = [
    {
        name: 'The "First Charge" Moment',
        description: 'Allow customers to plug in the car themselves. This simple, interactive moment demystifies charging and creates a tangible sense of ownership and ease.',
        icon: BatteryCharging,
    },
    {
        name: 'Educate and Impress',
        description: 'Use the charging station as a hands-on educational tool. Your sales team can explain battery technology, range, and cost savings, positioning themselves as trusted experts.',
        icon: Sparkles,
    },
]

const ctaButton = [{ text: "Get a Custom Quote", variant: "default" as const }, { text: "Contact Us", variant: "outline" as const }]

export default function ShowroomPage() {
    return (
        <main>
            <Hero
                eyebrow="For Automotive Showrooms"
                header="Charge Your Sales Floor"
                caption="Integrate state-of-the-art EV charging to transform your showroom into an interactive experience. Educate customers, enhance test drives, and accelerate your transition to electric."
                images={['https://images.unsplash.com/photo-1617886322207-6f504e7472c5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']}
            />

            <ScaleInScroll delay={0.2} duration={0.8}>
                <KeyFeatures
                    eyebrow="Key Features"
                    title="The Ultimate EV Sales & Service Toolkit"
                    subtitle="Our charging solutions are designed to seamlessly integrate into your dealership's daily operations, from the sales floor to the service bay."
                    features={features}
                    backgroundColor="gray"
                />
            </ScaleInScroll>

            <FadeInScroll delay={0.2} duration={0.6}>
                <FeatureGrid
                    features={testDriveFeatures}
                    header="The Ultimate EV Sales & Service Toolkit"
                    subtitle="Our charging solutions are designed to seamlessly integrate into your dealership's daily operations, from the sales floor to the service bay."
                    eyebrow="Integrate Charging into Your Sales Process"
                />
            </FadeInScroll>

            <SlideInScroll direction="right" delay={0.2} duration={0.8}>
                <SubSection
                    eyebrow="Post-Sale Engagement"
                    title="From Showroom Sale to Home Installation"
                    description="Extend the customer relationship beyond the dealership. Our platform makes it easy for you to sell and manage the installation of home charging units, creating a new, high-margin revenue stream and providing a complete EV solution for your buyers."
                    imageUrl="https://images.unsplash.com/photo-1628642689621-e129113a3f3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    imageAlt="EV charger being installed in a residential garage"
                    imagePosition="right"
                />
            </SlideInScroll>

            <Statistics
                title="Drive Real Results"
                subtitle="Dealerships that partner with us see a significant impact on sales and customer satisfaction."
                statistics={stats}
                backgroundColor="green"
            />

            <StaggeredScroll stagger={0.15} delay={0.4}>
                <BenefitsCarousel
                    eyebrow="Dealership Benefits"
                    title="Why Smart Dealerships Choose Tiar"
                    subtitle="Discover the key advantages that make our charging solutions an essential investment for the modern dealership."
                    benefits={benefits}
                    backgroundColor="gray"
                />
            </StaggeredScroll>

            <CallToAction
                title="Ready to Electrify Your Dealership?"
                subtitle="Let's discuss how our charging solutions can drive more sales and create happier customers. Contact us for a custom consultation."
                buttons={ctaButton}
                description="Custom showroom design • Sales training included • Priority support"
                backgroundColor="green"
            />

            <LatestPostsCarousel
                title="Latest News"
                subtitle="Stay up to date with the latest news and updates from our team."
                category="Showroom"
            />
        </main>
    );
}