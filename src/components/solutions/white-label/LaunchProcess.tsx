import { Palette, Settings, UploadCloud } from "lucide-react";

const steps = [
    {
        name: 'Step 1: Brand & Customize',
        description: 'Provide your logo, color palette, and brand guidelines. Our team works with you to craft a beautiful interface that is uniquely yours.',
        icon: Palette,
    },
    {
        name: 'Step 2: Configure & Integrate',
        description: 'Choose your payment channels, configure your currency, and set up your customer support integrations, like WhatsApp, for any market.',
        icon: Settings,
    },
    {
        name: 'Step 3: Launch & Grow',
        description: 'We handle the entire submission process to the Apple App Store and Google Play, or help deploy the web-based version. You’re ready to onboard users in record time.',
        icon: UploadCloud,
    },
]

export function LaunchProcess() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-600">Fast-Track to Market</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Launch Your Branded App in Weeks, Not Years
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our streamlined white-label process eliminates the complexities of app development, allowing you to focus on your business while we handle the technology.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {steps.map((step) => (
                            <div key={step.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="flex items-center gap-x-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600">
                                            <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {step.name}
                                    </div>
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{step.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}