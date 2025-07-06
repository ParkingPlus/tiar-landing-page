import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { Metadata } from "next";
import { CallToAction } from "@/components/common/CallToAction";
import { MissionVisionBlock } from "@/components/about-us/MissionVisionBlock";
import { GuidingPrinciples } from "@/components/about-us/GuidingPrinciples";
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";
import BlurInScroll from "@/components/animations/collection/BlurInScroll";
import SlideInScroll from "@/components/animations/collection/SlideInScroll";

export const metadata: Metadata = {
    title: "Our Mission & Vision | TIAR",
    description: "Discover the mission that drives TIAR to build the future of electric mobility, from our home in Indonesia to the world.",
};

const ctaButtons = [
    { text: "Explore Our Solutions", variant: "default" as const },
    { text: "Join Our Team", variant: "outline" as const }
];

export default function MissionVisionPage() {
    return (
        <main>
            <Hero
                eyebrow="Our Purpose"
                header="Powering the Electric Future"
                caption="We are Tiar, a pioneer in Charging Management Systems. Our purpose is to build the software backbone for a cleaner and more efficient transportation ecosystem, starting from our home in Indonesia and expanding across the globe."
                images={['https://images.unsplash.com/photo-1633989396185-3c22b5123919?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']}
            />
            <BlurInScroll duration={0.8}>
                <MissionVisionBlock />
            </BlurInScroll>

            <SlideInScroll direction="left" delay={0.2} duration={0.8}>
              <SubSection
                  eyebrow="Our Origin"
                  title="Indonesian Roots, Global Ambition"
                  description="Tiar was born from a unique insight into the dynamic, high-growth markets of Southeast Asia. We built and perfected our platform in Indonesia, creating a robust, scalable, and adaptable system designed to meet the complexities of the region. This foundation gives us an unparalleled advantage as we expand, offering a battle-tested solution that understands the nuances of emerging markets better than anyone."
                  imageUrl="/images/about/asean-map.jpg"
                  imageAlt="Map of Southeast Asia highlighting trade and data routes"
                  imagePosition="right"
                  className="bg-gray-100"
              />
            </SlideInScroll>

            <GuidingPrinciples />

            <SlideInScroll direction="right" delay={0.2} duration={0.8}>
              <SubSection
                  eyebrow="Our Culture"
                  title="The DNA of a Trailblazer"
                  description="A mission this ambitious requires a special kind of team. Our culture is defined by a relentless drive to solve hard problems and a shared obsession with our customers' success. We are agile, resilient, and endlessly curious. We believe that a small, passionate team, armed with a powerful vision, can change the landscape of an entire industry—and that's exactly what we're here to do."
                  imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  imageAlt="A dynamic team collaborating over a complex problem on a whiteboard"
                  imagePosition="left"
              />
            </SlideInScroll>
            
            <CallToAction
                title="Join Our Journey"
                subtitle="Whether you're looking to build a charging network or build a career, we are always looking for partners and talent who share our vision for a connected, electric future."
                buttons={ctaButtons}
                description="Let's build the future of mobility, together."
                backgroundColor="green"
            />

            <LatestPostsCarousel
              title="Latest News"
              subtitle="Stay up to date with the latest news and updates from our team."
            />
        </main>
    );
}