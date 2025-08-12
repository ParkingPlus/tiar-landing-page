import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { Metadata } from "next";
import { CallToAction } from "@/components/common/CallToAction";
import { BenefitsGrid } from "@/components/about-us/BenefitsGrid";
import { Map, Rocket, Users, Code2, ShieldCheck, Lightbulb, Activity } from "lucide-react";
import PlatformShowcase from "@/components/common/PlatformOverview";
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";
import FadeInScroll from "@/components/animations/collection/FadeInScroll";
import ScaleInScroll from "@/components/animations/collection/ScaleInScroll";
import SlideInScroll from "@/components/animations/collection/SlideInScroll";

export const metadata: Metadata = {
    title: "Benefits of Partnering with TIAR",
    description: "Discover the key benefits of the TIAR Charging Management System, from our field-proven expertise and in-house tech to strategic business support.",
};

const benefitsData = [
    {
        icon: <Map className="h-7 w-7 text-lime-400" />,
        title: "Field-Proven Expertise",
        description: "We’ve deployed charging networks in multiple major cities — we know what goes wrong and how to get it right from the start."
    },
    {
        icon: <Rocket className="h-7 w-7 text-red-500" />,
        title: "Fast, White-Labeled Launch",
        description: "Get to market quickly with a fully branded solution, allowing you to focus on business while we handle the technology.",
        link: { href: "/use-case/cpo", text: "Explore our CPO platform" }
    },
    {
        icon: <Users className="h-7 w-7 text-yellow-500" />,
        title: "Tools for Lean Teams",
        description: "Lean organizations thrive with our platform. Achieve positive cash flow and scale confidently, just like our early partners did."
    },
    {
        icon: <Code2 className="h-7 w-7 text-purple-500" />,
        title: "Fully In-House Technology",
        description: "We build and maintain our own apps and backend, giving you complete control, flexibility, and faster innovation cycles.",
        link: { href: "/about/mission-vision", text: "Learn about our DNA" }
    },
    {
        icon: <ShieldCheck className="h-7 w-7 text-pink-600" />,
        title: "Engineered for Uptime",
        description: "Our deep, hands-on understanding of charger failure points enables us to build systems that are uniquely resilient and constantly improving."
    },
    {
        icon: <Activity className="h-7 w-7 text-fuchsia-500" />,
        title: "Automation That Scales",
        description: "Enjoy end-to-end automation — cashless, manless, paperless — simplifying complex operations and maximizing efficiency.",
        link: { href: "/use-case/cpo", text: "See automation in action" }
    },
];

const ctaButtons = [
    { text: "Contact Us", variant: "outline" as const, href: "/contact" }
];

export default function BenefitsPage() {
    return (
        <main>
            <Hero
                eyebrow={
                    <span className="drop-shadow-sm drop-shadow-black text-white">
                        The TIAR Advantage
                    </span>
                }
                header={
                    <span className="drop-shadow-sm drop-shadow-black font-semibold text-white">
                        More Than a Platform — A Partnership for Growth
                    </span>
                }
                caption={
                    <span className="drop-shadow-sm drop-shadow-black text-white">
                        Your success is our obsession. We&apos;ve built a charging management system that combines robust, in-house technology with the strategic insights of an experienced operator. Partner with us to build a profitable and scalable charging network.
                    </span>
                }
                images={['/images/about/partnership.png']}
            />

            <FadeInScroll delay={0.2} duration={1.0}>
                <BenefitsGrid benefits={benefitsData} />
            </FadeInScroll>

            <ScaleInScroll delay={0.2} duration={0.8}>
                <PlatformShowcase />
            </ScaleInScroll>

            {/* Testimonial Section for Social Proof */}
            <section className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800">
                <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 text-center">
                    <Lightbulb className="mx-auto h-12 w-12 text-amber-400" />
                    <figure className="mt-6">
                        <blockquote className="text-xl font-medium leading-8 tracking-tight text-white sm:text-2xl sm:leading-9">
                            <p>“TIAR wasn&apos;t just a software provider; they were our launch partner. Their operational insights saved us months of trial-and-error, and their platform allowed our small team to perform like a major player from day one.”</p>
                        </blockquote>
                        <figcaption className="mt-8">
                            <div className="text-base">
                                <div className="font-semibold text-brand-950">CEO of Parking+</div>
                                <div className="text-white/80">Partner since 2024</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <SlideInScroll direction="right" delay={0.2} duration={0.8}>
                <SubSection
                    eyebrow="Strategic Business Support"
                    title="Benefit from Our Hard-Earned Experience"
                    description="We offer more than just a platform — we provide the business insight and advisory needed to help you lead in a competitive market. From site selection and hardware procurement to pricing strategies and grant applications, we share our playbook to accelerate your success."
                    imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    imageAlt="A team strategizing around a whiteboard"
                    imagePosition="left"
                />
            </SlideInScroll>

            <CallToAction
                title="Ready to See the Difference?"
                subtitle="Let's discuss how the TIAR advantage can help you achieve your business goals. Schedule a personalized demo with one of our experts today."
                buttons={ctaButtons}
            />

            <LatestPostsCarousel
                title="Latest News"
                subtitle="Stay up to date with the latest news and updates from our team."
            />
        </main>
    );
}