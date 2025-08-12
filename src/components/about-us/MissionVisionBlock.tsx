import { Target, Eye } from "lucide-react";

export function MissionVisionBlock() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-x-4">
                            <div className="flex-none rounded-full bg-transparent p-2 ring-1 ring-amber-400">
                                <Target className="h-7 w-7 text-amber-400" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-800">
                            To build Indonesia&apos;s most intelligent and reliable charging management software, empowering operators to build thriving businesses and making EV adoption effortless for everyone.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-x-4">
                            <div className="flex-none rounded-full bg-transparent p-2 ring-1 ring-blue-500">
                                <Eye className="h-7 w-7 text-blue-500" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Vision</h2>
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-800">
                            To become the heart of electric mobility innovation in Indonesia and Southeast Asia—creating an integrated, seamless, and sustainable transportation ecosystem for the future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}