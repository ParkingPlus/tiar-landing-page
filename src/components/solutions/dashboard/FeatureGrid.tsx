import { LucideIcon } from 'lucide-react';

interface Feature {
    name: string;
    description: string;
    icon: LucideIcon;
}

interface FeatureGridProps {
    features: Feature[];
    header: string; 
    eyebrow: string;
    subtitle: string;
}

const getCols = (features: Feature[]) => {
    if (features.length === 2) {
        return "md:grid-cols-2 lg:grid-cols-2";
    } else if (features.length === 1) {
        return "md:grid-cols-1 lg:grid-cols-1";
    }
    return "md:grid-cols-3 lg:grid-cols-3";
}

export function FeatureGrid({ features, header, subtitle, eyebrow }: FeatureGridProps) {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-600">{ eyebrow }</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {header}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {subtitle}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className={`grid max-w-xl gap-x-8 gap-y-10 md:max-w-none ${getCols(features)}`}>
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16 max-w-lg">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}