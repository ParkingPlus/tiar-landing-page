import { Building, Store, Hotel, Home } from "lucide-react";

const propertyTypes = [
    {
        icon: <Home className="h-10 w-10 text-blue-500" />,
        title: "Residential Buildings",
        description: "Attract and retain tenants in apartments and condos by offering convenient on-site EV charging."
    },
    {
        icon: <Building className="h-10 w-10 text-green-500" />,
        title: "Commercial Offices",
        description: "Provide a valuable perk for employees and visitors, enhancing your property's appeal and sustainability credentials."
    },
    {
        icon: <Store className="h-10 w-10 text-purple-500" />,
        title: "Retail & Shopping Centers",
        description: "Increase customer dwell time and attract affluent EV drivers to your retail locations."
    },
    {
        icon: <Hotel className="h-10 w-10 text-red-500" />,
        title: "Hotels & Hospitality",
        description: "Offer a premium amenity for travelers, ensuring your guests have a seamless and modern experience."
    }
];

export default function PropertyTypes() {
    return (
        <section className="py-16 bg-gray-50 sm:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-600">Solutions for Every Property</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Tailored for Your Real Estate Portfolio
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We provide versatile EV charging solutions for any property type, helping you enhance value and meet modern demands.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {propertyTypes.map((type) => (
                        <div key={type.title} className="text-center">
                            <div className="flex items-center justify-center h-20 w-20 mx-auto bg-white rounded-lg shadow-md">
                                {type.icon}
                            </div>
                            <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">{type.title}</h3>
                            <p className="mt-2 text-base leading-7 text-gray-600">{type.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}