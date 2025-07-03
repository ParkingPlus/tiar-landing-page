import { Building2, School, TramFront, ShoppingBag } from "lucide-react";

const hubTypes = [
    {
        name: 'Corporate & University Campuses',
        description: 'Provide a dedicated charging infrastructure for students and employees, promoting green campus initiatives and easy mobility.',
        icon: <School className="h-10 w-10 text-white" />,
        bgColor: 'bg-blue-500',
    },
    {
        name: 'Public Transport Interchanges',
        description: 'Solve the first-and-last-mile problem by placing charging hubs near train stations and bus stops, seamlessly connecting your network to public transit.',
        icon: <TramFront className="h-10 w-10 text-white" />,
        bgColor: 'bg-green-500',
    },
    {
        name: 'Retail & Commercial Districts',
        description: 'Attract more visitors and increase foot traffic by offering convenient charging spots outside shopping centers and business parks.',
        icon: <ShoppingBag className="h-10 w-10 text-white" />,
        bgColor: 'bg-purple-500',
    },
    {
        name: 'Residential Complexes',
        description: 'Offer a modern, valuable amenity for residents in apartment buildings and gated communities, making their daily commute easier.',
        icon: <Building2 className="h-10 w-10 text-white" />,
        bgColor: 'bg-red-500',
    },
];

export function UrbanChargingHubs() {
    return (
        <section className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Built for the Urban Landscape</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Deploy Charging Hubs Where It Matters Most
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our specialized eScooter charging stations are designed for high-traffic urban environments, turning any location into a smart mobility hub.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-12 gap-x-12 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
                    {hubTypes.map((hub) => (
                        <div key={hub.name} className="text-center">
                            <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-lg shadow-lg ${hub.bgColor}`}>
                                {hub.icon}
                            </div>
                            <h3 className="mt-6 text-lg font-medium leading-7 text-gray-900">{hub.name}</h3>
                            <p className="mt-2 text-base leading-7 text-gray-600">{hub.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}