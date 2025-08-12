import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Benefit {
    icon: React.ReactNode;
    title: string;
    description: string;
    link?: {
        href: string;
        text: string;
    };
}

interface BenefitsGridProps {
    benefits: Benefit[];
}

export function BenefitsGrid({ benefits }: BenefitsGridProps) {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-600">The Tiar Advantage</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why Leading Operators Choose to Partner With Us
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We combine battle-tested technology with unparalleled strategic support to ensure your charging network is profitable, reliable, and scalable.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50/20">
                                        {benefit.icon}
                                    </div>
                                    {benefit.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{benefit.description}</p>
                                    {benefit.link && (
                                        <p className="mt-4">
                                            <Link href={benefit.link.href} className="text-sm font-semibold leading-6 text-brand-600 hover:text-brand-500 flex items-center gap-1">
                                                {benefit.link.text} <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </p>
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}