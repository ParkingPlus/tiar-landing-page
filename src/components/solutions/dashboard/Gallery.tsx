"use client";

import { useState } from 'react';
import Image from 'next/image';

interface GalleryView {
    id: string;
    name: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    imageUrl: string;
}

interface GalleryProps {
    views: GalleryView[];
    eyebrow: string;
    title: string;
    description: string;
}   

export function Gallery({ views, eyebrow, title, description }: GalleryProps) {
    const [activeTab, setActiveTab] = useState(views[0].id);
    const activeView = views.find(view => view.id === activeTab);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-600">{ eyebrow }</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">
                        { title }
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        { description }
                    </p>
                </div>

                <div className="mt-16">
                    {/* Tabs for larger screens */}
                    <div className="hidden lg:block">
                        <div className="border-b border-gray-300 pb-4">
                            <div className="overflow-x-auto gallery-tabs-scroll">
                                <nav className="-mb-px flex justify-center space-x-8 min-w-max" aria-label="Tabs">
                                    {views.map((tab) => (
                                        <button
                                            key={tab.name}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`${
                                                activeTab === tab.id
                                                    ? 'border-brand-500 text-brand-600'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            } flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors flex-shrink-0`}
                                        >
                                            {tab.icon} {tab.name}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                    
                    {/* Tabs for smaller screens */}
                    <div className="lg:hidden">
                        <div className="border-b border-gray-300 pb-4">
                            <div className="overflow-x-auto gallery-tabs-scroll">
                                <nav className="-mb-px flex space-x-4 min-w-max px-4" aria-label="Tabs">
                                    {views.map((tab) => (
                                        <button
                                            key={tab.name}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`${
                                                activeTab === tab.id
                                                    ? 'border-brand-500 text-brand-600'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            } flex items-center gap-2 whitespace-nowrap border-b-2 py-3 px-2 text-sm font-medium transition-colors flex-shrink-0`}
                                        >
                                            {tab.icon} {tab.name}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>

                    {activeView && (
                        <div className="mt-10">
                            <div className="relative aspect-[16/10] w-full rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 max-h-[500px]">
                                <Image 
                                    src={activeView.imageUrl} 
                                    alt={activeView.title} 
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                    quality={95}
                                    priority={true}
                                    className="rounded-2xl object-cover object-left-top" 
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-200"></div>
                            </div>
                            <div className="mt-8 text-center max-w-3xl mx-auto">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900">{activeView.title}</h3>
                                <p className="mt-2 text-lg text-gray-600">{activeView.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}