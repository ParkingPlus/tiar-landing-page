import { Hero } from "@/components/common/Hero";
import { SubSection } from "@/components/common/SubSection";
import { Metadata } from "next";
import { CallToAction } from "@/components/common/CallToAction";
import { Gallery } from "@/components/solutions/dashboard/Gallery"; // Renamed for clarity, using the same component
import { FeatureGrid } from "@/components/solutions/dashboard/FeatureGrid"; // Reusing this component
import FadeInScroll from "@/components/animations/collection/FadeInScroll";

import { BarChart2, DollarSign, ShieldCheck, Users, Trophy, PhoneOff, HeartHandshake, FileText, Lock, Scaling } from "lucide-react";
import { LatestPostsCarousel } from "@/components/blog/LatestPostsCarousel";

export const metadata: Metadata = {
    title: "Sub-Account Management | TIAR Solutions",
    description: "Empower your property partners with their own dedicated dashboard view. Offer transparency, build trust, and streamline operations with TIAR's Sub-Account feature.",
};

// --- Data for the components would be here, as defined above ---
const partnerViewData = [
  {
      id: 'usage',
      name: 'Usage Overview',
      icon: <BarChart2 className="h-5 w-5" />,
      title: 'Track Charger Performance & Peak Hours',
      description: 'Property owners can see total charging sessions, energy dispensed, and peak usage times to understand how the amenity is being used on their property.',
      imageUrl: 'https://placehold.co/1200x750/111827/4f46e5?text=Partner+Usage+Dashboard',
  },
  {
      id: 'status',
      name: 'Live Uptime Status',
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'Confirm Station Health in Real-Time',
      description: 'Provide peace of mind by allowing partners to see the live operational status of all chargers on their property, confirming they are online and ready for use.',
      imageUrl: 'https://placehold.co/1200x750/111827/10b981?text=Partner+Uptime+View',
  },
  {
      id: 'revenue',
      name: 'Revenue Snapshot',
      icon: <DollarSign className="h-5 w-5" />,
      title: 'Simplify Financial Reconciliation',
      description: 'Offer a transparent, read-only view of their revenue share for any given period. This simplifies accounting and builds immense trust.',
      imageUrl: 'https://placehold.co/1200x750/111827/8b5cf6?text=Partner+Revenue+Share',
  },
  {
      id: 'insights',
      name: 'User Insights',
      icon: <Users className="h-5 w-5" />,
      title: 'Understand Tenant & Visitor Behavior',
      description: 'Showcase valuable data like the number of unique drivers and repeat users, helping property owners understand the value of their EV charging amenity.',
      imageUrl: 'https://placehold.co/1200x750/111827/f59e0b?text=Partner+User+Insights',
  },
];

// 2. Data for the FeatureGrid to showcase the BENEFITS FOR THE CPO
const cpoBenefitsData = [
  {
      name: 'Win More Deals',
      description: 'Set your proposal apart by offering a premium transparency feature that helps you win contracts with large, sophisticated property portfolios.',
      icon: Trophy,
      color: "bg-yellow-500"
  },
  {
      name: 'Reduce Support Load',
      description: 'Empower partners to self-serve for basic data inquiries, freeing up your support team to focus on critical operational issues.',
      icon: PhoneOff,
      color: "bg-blue-500"
  },
  {
      name: 'Build Partner Loyalty',
      description: 'Increase transparency and trust, leading to stronger, longer-lasting relationships with your property partners.',
      icon: HeartHandshake,
      color: "bg-green-500"
  },
  {
      name: 'Streamline Reporting',
      description: 'Simplify revenue share discussions and reporting with a shared, single source of truth that both parties can access 24/7.',
      icon: FileText,
      color: "bg-red-500"
  },
  {
      name: 'Enhance Data Security',
      description: 'Provide necessary data without exposing your core operational controls, ensuring your main network remains secure and private.',
      icon: Lock,
      color: "bg-purple-500"
  },
  {
      name: 'Improve Scalability',
      description: 'Easily manage permissions and data access for hundreds or thousands of partners as your charging network grows.',
      icon: Scaling,
      color: "bg-orange-500"
  },
];

const ctaButtons = [
    { text: "Contact Us", variant: "outline" as const, href: "/contact" }
];

export default function SubAccountPage() {
    return (
        <main>
            <FadeInScroll>
                <Hero
                    eyebrow={
                        <>
                            <span className="text-black">TIAR Sub-Account Solution</span>
                        </>
                    }
                    header={
                        <>
                            <span className="text-black">Empower Your Partners, Build Stronger Networks</span>
                    </>
                    }
                    caption={
                        <>
                            <span className="text-black">Introducing Sub-Accounts: a dedicated dashboard for your property partners. Offer unparalleled transparency, build trust, and create a powerful selling point that sets you apart.</span>
                        </>
                    }
                    images={['/images/solutions/solution-subaccount-hero.png']}
                />
            </FadeInScroll>

            <FadeInScroll>
                <SubSection
                    eyebrow="TRANSPARENCY BUILDS TRUST"
                    title="Turn Property Owners into True Partners"
                    description="In today's market, property owners expect more. They want to see the value your charging stations bring to their tenants and visitors. Our Sub-Account feature transforms your relationship from a simple service agreement into a true, data-driven partnership, giving them a window into the success of the amenity you provide."
                    imageUrl="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    imageAlt="Two business partners analyzing charts and data on a screen together."
                    imagePosition="right"
                />
            </FadeInScroll>
            
            {/* Using the Gallery component to show the PARTNER'S view */}
            <Gallery 
                views={partnerViewData} 
                eyebrow="Purpose-Built for Partners"
                title="A Simplified Dashboard Your Partners Will Appreciate"
                description="We give your partners access to the data they care about—and nothing they don't. The Sub-Account view is clean, intuitive, and focused on key performance metrics."
            />

            {/* Using the FeatureGrid component to list BENEFITS for the CPO */}
            <FadeInScroll>
                <FeatureGrid
                    features={cpoBenefitsData}
                    eyebrow="A Strategic Advantage"
                    header="How Sub-Accounts Benefit You, the Operator"
                    subtitle="This isn't just a feature for your partners; it's a powerful tool for your own business growth, efficiency, and scalability."
                />
            </FadeInScroll>

            <FadeInScroll>
                 <SubSection
                    eyebrow="EFFORTLESS SETUP"
                    title="Three Steps to Empowered Partners"
                    description={
                      'Onboarding a partner to their Sub-Account dirancang sangat sederhana dan kurang dari satu menit.'
                    }
                    steps={[
                      {
                        title: 'Invite Partner',
                        description: "Masukkan email partner langsung dari dashboard CPO Anda."
                      },
                      {
                        title: 'Assign Properties',
                        description: "Pilih charging station atau properti mana yang boleh mereka akses."
                      },
                      {
                        title: 'They Get Access',
                        description: "Partner akan menerima undangan untuk membuat password dan langsung bisa login ke dashboard mereka."
                      }
                    ]}
                    imageUrl="https://images.unsplash.com/photo-1611266619553-68f43c3a4362?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    imageAlt="A simple, clean interface showing a user invitation process."
                    imagePosition="left"
                />
            </FadeInScroll>
            
            <CallToAction
                title="Ready to Revolutionize Your Partnerships?"
                subtitle="See for yourself how our Sub-Account feature can strengthen your network and help you win more deals. Schedule a live demo with our team today."
                buttons={ctaButtons}
            />

            <LatestPostsCarousel
              category="property owners"
              title="Stay Updated with the Latest News"
              subtitle="Read our latest blog posts to stay updated with the latest news and insights."
            />
        </main>
    );
}
