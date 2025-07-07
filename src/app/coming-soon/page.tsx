import { CallToAction } from "@/components/common/CallToAction";
import { Hero } from "@/components/common/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Coming Soon | Tiar",
    description: "Something new is coming! Stay tuned for our latest features and solutions.",
};

const ctaButton = [{ text: "Join the Waitlist", variant: "default" as const }, { text: "Contact Us", variant: "outline" as const }]

export default function ComingSoonPage() {
    return (
        <main>
            <Hero
                eyebrow="UNDER CONSTRUCTION"
                header="Something New is on the Horizon"
                caption="We're working hard to bring you an exciting new feature. Sign up for our waitlist to be the first to know when it's ready."
                images={['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']}
            />
            <CallToAction
                title="Get Notified at Launch"
                subtitle="Don't miss out! Join our waitlist for exclusive early access, special launch promotions, and to be part of our journey from day one."
                buttons={ctaButton}
                description="No spam, we promise. Only important updates."
                backgroundColor="green"
            />
        </main>
    )
}
