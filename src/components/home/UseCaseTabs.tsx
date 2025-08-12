"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building, Car, Briefcase, Store, ArrowRight } from 'lucide-react';

const useCases = [
    {
        id: 'cpo',
        name: 'Charging Operators',
        icon: <Briefcase />,
        title: 'Build a Thriving Charging Business',
        description: 'Launch, manage, and scale your public charging network with our powerful, white-label platform. Maximize revenue, delight your drivers, and build your brand.',
        imageUrl: '/images/usecase/usecase-cpo.png',
        href: '/use-case/cpo',
    },
    {
        id: 'fleet',
        name: 'EV Fleets',
        icon: <Car />,
        title: 'Power Your Electric Fleet, Seamlessly',
        description: 'From cars and taxis to trucks and buses, we provide reliable and scalable charging solutions with smart analytics to keep your entire fleet moving efficiently.',
        imageUrl: '/images/usecase/usecase-fleet.png',
        href: '/use-case/fleet',
    },
    {
        id: 'property',
        name: 'Property Owners',
        icon: <Building />,
        title: 'Unlock New Revenue From Your Property',
        description: 'Attract and retain tenants, customers, and visitors by providing a valuable amenity. We make it easy to install, manage, and monetize EV charging stations.',
        imageUrl: '/images/usecase/usecase-property.png',
        href: '/use-case/property',
    },
    {
        id: 'showroom',
        name: 'Auto Showrooms',
        icon: <Store />,
        title: 'Turn Your Showroom into an Experience',
        description: 'Integrate seamless EV charging to enhance customer experience, educate buyers about e-mobility, and accelerate your EV sales with interactive tools.',
        imageUrl: '/images/usecase/usecase-showroom.png',
        href: '/use-case/showroom',
    },
];

export function UseCaseTabs() {
    const [activeTab, setActiveTab] = useState(useCases[0].id);
    const tabsContainerRef = useRef<HTMLDivElement | null>(null);
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    const activeUseCase = useCases.find(uc => uc.id === activeTab);

    // Auto-center active tab within the horizontal scroll container (mobile-friendly)
    useEffect(() => {
        const container = tabsContainerRef.current;
        const activeEl = tabRefs.current[activeTab];
        if (!container || !activeEl) return;

        const containerRect = container.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();

        const containerScrollLeft = container.scrollLeft;
        const activeCenterX = activeRect.left + activeRect.width / 2;
        const containerCenterX = containerRect.left + containerRect.width / 2;
        const delta = activeCenterX - containerCenterX;

        // Desired scrollLeft to center the active tab
        const target = containerScrollLeft + delta;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const clamped = Math.max(0, Math.min(target, maxScroll));

        container.scrollTo({ left: clamped, behavior: 'smooth' });
    }, [activeTab]);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-600">Solutions for Every Need</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">The Operating System for a New Era of Mobility</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our versatile platform is engineered to meet the unique demands of any organization venturing into electric mobility. Find out how we empower your specific use case.
                    </p>
                </div>
                <div className="mt-12">
                    {/* Horizontal scrollable tabs for all screen sizes */}
                    <div className="border-b border-gray-200">
                        <nav
                            ref={tabsContainerRef}
                            className="-mb-px flex space-x-8 overflow-x-auto no-scrollbar px-4"
                            aria-label="Tabs"
                        >
                            {useCases.map((tab) => (
                                <button
                                    key={tab.name}
                                    ref={(el) => { tabRefs.current[tab.id] = el; }}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`${activeTab === tab.id
                                            ? 'border-brand-500 text-brand-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        } flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-3 text-sm font-medium transition-colors min-w-fit flex-shrink-0`}
                                >
                                    {tab.icon} {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {activeUseCase && (
                        <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-x-16 items-center">
                            <div className="relative h-96 w-full rounded-2xl shadow-xl overflow-hidden">
                                <Image src={activeUseCase.imageUrl} alt={activeUseCase.name} layout="fill" objectFit="cover" className="transition-transform duration-500 hover:scale-105" />
                            </div>
                            <div className="mt-10 lg:mt-0">
                                <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">{activeUseCase.title}</h3>
                                <p className="mt-4 text-lg text-gray-600">{activeUseCase.description}</p>
                                <Link href={activeUseCase.href} className="mt-6 inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-500 transition-colors">
                                    Learn More <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}