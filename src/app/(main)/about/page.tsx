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
    title: "About TIAR.ai — CMS OCPP Expertise for Indonesia & Asia",
    description: "Learn about TIAR.ai's mission and expertise in OCPP‑compliant Charging Station Management Systems (CMS) for Indonesia & Asia.",
};

const ctaButtons = [
    { text: "Explore Our Solutions", variant: "default" as const, href: "/pricing" },
    { text: "Contact Us", variant: "outline" as const, href: "/contact" }
];

export default function MissionVisionPage() {
    return (
        <main>
            <Hero
                eyebrow="Our Purpose"
                header="Powering the Electric Future"
                caption="We are TIAR.ai, a pioneer in OCPP‑compliant Charging Station Management Systems (CMS). Our purpose is to build the software backbone for efficient EV charging — from Indonesia to Indonesia & Asia."
                images={['/images/background/about_us.png']}
            />
            <BlurInScroll duration={0.8}>
                <MissionVisionBlock />
            </BlurInScroll>

            <SlideInScroll direction="left" delay={0.2} duration={0.8}>
              <SubSection
                  eyebrow="Our Origin"
                  title="Indonesian Roots, Global Ambition"
                  description="Tiar was born from a unique insight into the dynamic, high-growth markets of Indonesia & Asia. We built and perfected our platform in Indonesia, creating a robust, scalable, and adaptable system designed to meet the complexities of the region. This foundation gives us an unparalleled advantage as we expand, offering a battle-tested solution that understands the nuances of emerging markets better than anyone."
                  imageUrl="/images/about/global.png"
                  imageAlt="Map of Southeast Asia highlighting trade and data routes"
                  imagePosition="right"
                  className="bg-white mt-0"
              />
            </SlideInScroll>

            <GuidingPrinciples />

            <SlideInScroll direction="right" delay={0.2} duration={0.8}>
              <SubSection
                  eyebrow="Our Culture"
                  title="The DNA of a Trailblazer"
                  description="A mission this ambitious requires a special kind of team. Our culture is defined by a relentless drive to solve hard problems and a shared obsession with our customers' success. We are agile, resilient, and endlessly curious. We believe that a small, passionate team, armed with a powerful vision, can change the landscape of an entire industry—and that's exactly what we're here to do."
                  imageUrl="/images/about/start up team.png"
                  imageAlt="A dynamic team collaborating over a complex problem on a whiteboard"
                  imagePosition="left"
              />
            </SlideInScroll>
            
            <CallToAction
                title="Join Our Journey"
                subtitle="Whether you're looking to build a charging network or build a career, we are always looking for partners and talent who share our vision for a connected, electric future."
                buttons={ctaButtons}
                description="Let's build the future of mobility, together."
            />

            <LatestPostsCarousel
              title="Latest News"
              subtitle="Stay up to date with the latest news and updates from our team."
            />
        </main>
    );
}