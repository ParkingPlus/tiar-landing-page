import { SlidersHorizontal, DollarSign, Scaling } from 'lucide-react';
import SlideInScroll from '../animations/collection/SlideInScroll';

const pillars = [
    {
        name: 'Manage',
        description: 'Gain total control over your entire charging network from a single, intuitive dashboard. Monitor real-time status, manage user access, and perform remote diagnostics.',
        icon: SlidersHorizontal,
        colorClass: "bg-blue-500"
    },
    {
        name: 'Monetize',
        description: 'Create flexible revenue streams with customizable pricing, subscriptions, and multiple payment methods. Our platform handles all the billing and transactions for you.',
        icon: DollarSign,
        colorClass: "bg-yellow-500"
    },
    {
        name: 'Scale',
        description: 'From your first charger to thousands, our cloud-native infrastructure grows with you. Our hardware-agnostic platform ensures you can scale without limits.',
        icon: Scaling,
        colorClass: "bg-red-500"
    },
]

export function PlatformPillars() {
    return (
        <div className="bg-gray-50/20 py-24 sm:py-32">
            <div className="mx-auto px-6 lg:px-8">
            <SlideInScroll direction="right" delay={0.2} duration={0.8}>
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">One Platform, Infinite Possibilities</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our all-in-one Charging Management System is built on three core pillars designed to ensure your network is powerful, profitable, and future-proof.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3 md:max-w-none md:gap-y-16">
                        {pillars.map((pillar) => (
                            <div key={pillar.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-950">
                                    <div className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ${pillar.colorClass}`}>
                                        <pillar.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {pillar.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{pillar.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </SlideInScroll>
            </div>
        </div>
    )
}