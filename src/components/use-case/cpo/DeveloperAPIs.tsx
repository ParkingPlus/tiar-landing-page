import { Code2, ToyBrick, GitBranch } from "lucide-react";

const apiFeatures = [
    {
        icon: <Code2 className="h-8 w-8 text-white" />,
        title: "Robust OpenAPI",
        description: "Access a comprehensive, well-documented API to build custom applications, integrate with existing systems, and create unique user experiences."
    },
    {
        icon: <ToyBrick className="h-8 w-8 text-white" />,
        title: "Seamless Integration",
        description: "Effortlessly connect our platform with your CRM, billing systems, or third-party services to streamline your entire operational workflow."
    },
    {
        icon: <GitBranch className="h-8 w-8 text-white" />,
        title: "Developer-First Approach",
        description: "We provide dedicated developer support, sandboxes, and extensive documentation to ensure your team can innovate and deploy with speed."
    }
];

export function DeveloperAPIs() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-400">Built for Innovation</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Unleash Your Potential with Our OpenAPI
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Don&apos;t just manage your network—innovate with it. Our developer-friendly API gives you the power to build the future of charging.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {apiFeatures.map((feature) => (
                            <div key={feature.title} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-brand-500">
                                        {feature.icon}
                                    </div>
                                    {feature.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}