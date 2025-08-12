import { Rocket, Users, MapPin, ShieldCheck } from "lucide-react";
import ScaleInScroll from "../animations/collection/ScaleInScroll";

const principles = [
    {
        name: "Pioneer's Spirit",
        description: "As Indonesia's first CMS provider, we are driven by innovation. We embrace challenges and are constantly building the future of mobility.",
        icon: Rocket,
        colorClass: "bg-blue-500",
    },
    {
        name: "Operator-Centricity",
        description: "Our partners' success is our success. We build tools that are powerful, intuitive, and designed to solve the real-world problems our operators face.",
        icon: Users,
        colorClass: "bg-yellow-500",
    },
    {
        name: "Deep Local Insight",
        description: "We don't just operate in Indonesia; we are from Indonesia. Our solutions are tailored to the unique needs of our cities, infrastructure, and people.",
        icon: MapPin,
        colorClass: "bg-red-500",
    },
    {
        name: "Unwavering Reliability",
        description: "Trust is the currency of any network. We are committed to building a rock-solid platform that operators and drivers can depend on, 24/7.",
        icon: ShieldCheck,
        colorClass: "bg-orange-500",
    },
]

export function GuidingPrinciples() {
    return (
        <div className="bg-gray-50/20 py-24 sm:py-32">
          <ScaleInScroll delay={0.2} duration={0.8}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">
                        Our Guiding Principles
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        These are the values that guide every decision we make and every line of code we write.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {principles.map((principle) => (
                            <div key={principle.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-950">
                                    <div className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ${principle.colorClass}`}>
                                        <principle.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {principle.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{principle.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
          </ScaleInScroll>
        </div>
    )
}