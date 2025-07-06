"use client";

import { useState } from 'react';
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
        imageUrl: '/images/usecase/usecase-cpo.jpg',
        href: '/use-case/cpo',
    },
    {
        id: 'fleet',
        name: 'EV Fleets',
        icon: <Car />,
        title: 'Power Your Electric Fleet, Seamlessly',
        description: 'From cars and taxis to trucks and buses, we provide reliable and scalable charging solutions with smart analytics to keep your entire fleet moving efficiently.',
        imageUrl: '/images/usecase/usecase-fleet.jpg',
        href: '/use-case/fleet',
    },
    {
        id: 'property',
        name: 'Property Owners',
        icon: <Building />,
        title: 'Unlock New Revenue From Your Property',
        description: 'Attract and retain tenants, customers, and visitors by providing a valuable amenity. We make it easy to install, manage, and monetize EV charging stations.',
        imageUrl: '/images/usecase/usecase-property.jpg',
        href: '/use-case/property',
    },
    {
        id: 'showroom',
        name: 'Auto Showrooms',
        icon: <Store />,
        title: 'Turn Your Showroom into an Experience',
        description: 'Integrate seamless EV charging to enhance customer experience, educate buyers about e-mobility, and accelerate your EV sales with interactive tools.',
        imageUrl: '/images/usecase/usecase-showroom.jpg',
        href: '/use-case/showroom',
    },
];

export function UseCaseTabs() {
    const [activeTab, setActiveTab] = useState(useCases[0].id);
    const activeUseCase = useCases.find(uc => uc.id === activeTab);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:text-left">
                     <h2 className="text-base font-semibold leading-7 text-brand-600">Solutions for Every Need</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Operating System for a New Era of Mobility</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our versatile platform is engineered to meet the unique demands of any organization venturing into electric mobility. Find out how we empower your specific use case.
                    </p>
                </div>
                <div className="mt-12">
                    <div className="hidden sm:block">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                {useCases.map((tab) => (
                                    <button
                                        key={tab.name}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`${
                                            activeTab === tab.id
                                                ? 'border-brand-500 text-brand-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        } flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors`}
                                    >
                                        {tab.icon} {tab.name}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                     <div className="sm:hidden">
                        <select
                            id="tabs"
                            name="tabs"
                            className="block w-full rounded-md border-gray-300 focus:border-brand-500 focus:ring-brand-500"
                            onChange={(e) => setActiveTab(e.target.value)}
                            value={activeTab}
                        >
                            {useCases.map((tab) => (
                                <option key={tab.id} value={tab.id}>{tab.name}</option>
                            ))}
                        </select>
                    </div>

                    {activeUseCase && (
                         <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-x-16 items-center">
                            <div className="relative h-96 w-full rounded-2xl shadow-xl overflow-hidden">
                                <Image src={activeUseCase.imageUrl} alt={activeUseCase.name} layout="fill" objectFit="cover" className="transition-transform duration-500 hover:scale-105" />
                            </div>
                            <div className="mt-10 lg:mt-0">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">{activeUseCase.title}</h3>
                                <p className="mt-4 text-lg text-gray-600">{activeUseCase.description}</p>
                                <Link href={activeUseCase.href} className="mt-6 inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-500 transition-colors">
                                    Learn More <ArrowRight className="h-4 w-4"/>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}