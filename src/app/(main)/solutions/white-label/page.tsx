import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { Metadata } from "next";
import { CallToAction } from "@/components/common/CallToAction";
import { Gallery } from "@/components/solutions/dashboard/Gallery";
import { FeatureGrid } from "@/components/solutions/dashboard/FeatureGrid";
import { MapPin, Zap, CreditCard, MessageSquare, Palette as PaletteIcon, UploadCloud, Palette, Settings } from 'lucide-react';
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";
import FadeInScroll from "@/components/animations/collection/FadeInScroll";
import SlideInScroll from "@/components/animations/collection/SlideInScroll";
import StaggeredScroll from "@/components/animations/collection/StaggeredScroll";

export const metadata: Metadata = {
    title: "White Label App Solution | TIAR",
    description: "Launch your own custom-branded EV charging app on iOS, Android, and the web in weeks. Your brand, your customers, our powerful technology.",
};

// Data for the app showcase gallery
const appGalleryViews = [
    {
        id: 'map',
        name: 'Find & Charge',
        icon: <MapPin className="h-5 w-5" />,
        title: 'Seamless Station Discovery',
        description: 'A beautiful, interactive map allows your users to easily find available chargers, see pricing, and navigate to their destination.',
        imageUrl: 'https://placehold.co/1200x750/111827/4f46e5?text=App+Map+View',
    },
    {
        id: 'session',
        name: 'Live Charging',
        icon: <Zap className="h-5 w-5" />,
        title: 'Real-Time Session Control',
        description: 'Users can start, stop, and monitor their charging session in real-time, right from the app. See charging speed, energy delivered, and cost racking up live.',
        imageUrl: 'https://placehold.co/1200x750/111827/10b981?text=Live+Session+Screen',
    },
    {
        id: 'payment',
        name: 'Easy Payments',
        icon: <CreditCard className="h-5 w-5" />,
        title: 'Flexible & Secure Payments',
        description: 'Integrate multiple payment channels tailored to your market. Users can manage their wallets, view transaction history, and receive automated receipts.',
        imageUrl: 'https://placehold.co/1200x750/111827/8b5cf6?text=Payment+History',
    },
    {
        id: 'support',
        name: 'Instant Support',
        icon: <MessageSquare className="h-5 w-5" />,
        title: 'Built-in Customer Support',
        description: 'Reduce support overhead with built-in FAQs and direct WhatsApp integration, giving your users the help they need, when they need it.',
        imageUrl: 'https://placehold.co/1200x750/111827/ec4899?text=Support+Chat',
    },
    {
        id: 'branding',
        name: 'Your Brand',
        icon: <PaletteIcon className="h-5 w-5" />,
        title: 'A Beautiful On-Brand Experience',
        description: 'From the splash screen to the button colors, every pixel is tailored to match your brand identity, creating a professional and trustworthy user experience.',
        imageUrl: 'https://placehold.co/1200x750/111827/f59e0b?text=Your+Brand+Here',
    },
];

const ctaButtons = [
    { text: "Contact Us", variant: "outline" as const, href: "/contact" }
];

// Revised steps data to include the new launch strategy
const steps = [
    {
        name: 'Step 1: Brand & Customize',
        description: 'Provide your logo, color palette, and brand guidelines. Our team works with you to craft a beautiful interface that is uniquely yours.',
        icon: Palette,
        color: "bg-red-500"
    },
    {
        name: 'Step 2: Configure & Integrate',
        description: 'Choose your payment channels, configure your currency, and set up your customer support integrations, like WhatsApp, for any market.',
        icon: Settings,
        color: "bg-amber-500"
    },
    {
        name: 'Step 3: Instant Web & App Store Launch',
        description: 'Go live instantly with a web-based version on your custom domain while we handle the Apple App Store and Google Play submission process in parallel. No more waiting.',
        icon: UploadCloud,
        color: "bg-blue-500"
    },
]

export default function WhiteLabelPage() {
    return (
        <main>
            <Hero
                eyebrow={
                    <>
                        <span className="text-black">TIAR White Label Solution</span>
                    </>
                }
                header={
                    <>
                        <span className="text-black">Your Brand, Your App, Our Power</span>
                    </>
                }
                caption={
                    <>
                        <span className="text-black">Step into the future with a custom-branded EV charging app for iOS, Android, and the web. We provide a beautifully designed, feature-rich platform that puts your brand front and center.</span>
                    </>
                }
                images={['/images/solutions/solution-whitelabel-hero.png']}
            />
            
            <FadeInScroll delay={0.2} duration={0.8}>
              <FeatureGrid
                  features={steps}
                  header="Launch Your Branded App in Weeks, Not Years"
                  eyebrow="Fast-Track to Market"
                  subtitle="Our streamlined white-label process eliminates the complexities of app development, allowing you to focus on your business while we handle the technology."
                />
            </FadeInScroll>

            <SlideInScroll direction="right" delay={0.2} duration={0.8}>
              <SubSection
                  eyebrow="INSTANT DEPLOYMENT"
                  title="Bypass the App Store. Go Live Today."
                  description="Why wait months for app store approvals? With our platform, you can launch a powerful, full-featured web-based application on your own custom domain (e.g., charge.yourbrand.com) immediately. This allows you to start onboarding users and generating revenue from day one, while the native app versions are being processed."
                  imageUrl="/images/solutions/application_store.png"
                  imageAlt="A phone and laptop side-by-side showing the same branded web application, signifying instant cross-platform deployment."
                  imagePosition="right"
                />
            </SlideInScroll>

            <StaggeredScroll stagger={0.15} delay={0.4}>
              <Gallery 
                  views={appGalleryViews} 
                  eyebrow="A Feature-Rich Experience"
                  title="An Intuitive App Your Drivers Will Love"
                  description="Our white-label app is more than just a tool; it's a complete, user-friendly experience that puts your brand and your customers first."
              />
            </StaggeredScroll>

            <SlideInScroll direction="left" delay={0.2} duration={0.8}>
              <SubSection
                  eyebrow="Full Ownership & Flexibility"
                  title="True Control Over Your Digital Presence"
                  description="We believe you should own your brand's destiny. That's why we support hosting the app under your own Apple Developer and Google Play accounts. You receive the full developer rights, giving you the ultimate flexibility to extend and build upon the platform as your business grows. It's your app, truly."
                  imageUrl="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  imageAlt="A person holding a phone with an app, feeling empowered and in control"
                  imagePosition="left"
              />
            </SlideInScroll>

            <CallToAction
                title="Ready to Launch Your Brand?"
                subtitle="See our white-label app in action and discover how quickly you can get to market. Request a personalized demo today and receive a clickable prototype with your own brand."
                buttons={ctaButtons}
            />

            <LatestPostsCarousel
                title="Latest News"
                subtitle="Stay up to date with the latest news and updates from our team."
                category="App"
            />
        </main>
    );
}