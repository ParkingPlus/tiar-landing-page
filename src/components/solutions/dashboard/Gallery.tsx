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
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:text-center items-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-400">{ eyebrow }</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        { title }
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        { description }
                    </p>
                </div>

                <div className="mt-16">
                    {/* Tabs for larger screens */}
                    <div className="hidden lg:block">
                        <div className="flex justify-center gap-x-8 border-b border-gray-700 pb-4">
                            {views.map((tab) => (
                                <button
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`${
                                        activeTab === tab.id
                                            ? 'bg-brand-600 text-white'
                                            : 'text-gray-400 hover:bg-white/10 hover:text-white'
                                    } flex items-center gap-x-2 rounded-md px-4 py-2 text-sm font-medium transition-all`}
                                >
                                    {tab.icon} {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Select for smaller screens */}
                    <div className="lg:hidden">
                        <select
                            id="tabs"
                            name="tabs"
                            className="block w-full rounded-md border-gray-600 bg-gray-800 text-white focus:border-brand-600 focus:ring-brand-600"
                            onChange={(e) => setActiveTab(e.target.value)}
                            value={activeTab}
                        >
                            {views.map((tab) => (
                                <option key={tab.id} value={tab.id}>{tab.name}</option>
                            ))}
                        </select>
                    </div>

                    {activeView && (
                        <div className="mt-10">
                            <div className="relative aspect-[16/10] w-full rounded-2xl bg-gray-800 shadow-2xl ring-1 ring-white/10 max-h-[500px]">
                                <Image src={activeView.imageUrl} alt={activeView.title} layout="fill" objectFit="cover" className="rounded-2xl" />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
                            </div>
                            <div className="mt-8 text-center max-w-3xl mx-auto">
                                <h3 className="text-xl font-bold tracking-tight text-white">{activeView.title}</h3>
                                <p className="mt-2 text-lg text-gray-400">{activeView.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}