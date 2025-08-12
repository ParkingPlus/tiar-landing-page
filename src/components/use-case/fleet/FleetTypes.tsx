import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus, Car, CheckCircle } from "lucide-react";

// Fleet Types Component
const FleetTypes = () => {
    const fleetTypes = [
        {
            icon: <Bus className="h-12 w-12 text-blue-600" />,
            title: "Buses & Trucks",
            subtitle: "Heavy-Duty Solutions",
            features: [
                "High-volume charging infrastructure for demanding schedules",
                "Seamless integration with existing fleet management systems",
                "Optimized for depot and route-based charging",
                "Supports all heavy-duty charging standards"
            ]
        },
        {
            icon: <Car className="h-12 w-12 text-green-600" />,
            title: "Fleet & Taxi",
            subtitle: "Commercial Vehicle Solutions",
            features: [
                "Intelligent charging schedules for maximum uptime",
                "Real-time usage monitoring and fleet tracking",
                "Off-peak hour optimization for cost savings",
                "Enhanced operational efficiency tools"
            ]
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4">Fleet Solutions</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Tailored Solutions for Every Fleet Type
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Whether you operate buses, trucks, taxis, or mixed fleets, our charging solutions are designed to meet your specific operational needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {fleetTypes.map((fleet, index) => (
                        <Card key={index} className="relative overflow-hidden">
                            <CardHeader className="pb-4">
                                <div className="flex items-center space-x-4">
                                    {fleet.icon}
                                    <div>
                                        <CardTitle className="text-xl">{fleet.title}</CardTitle>
                                        <CardDescription className="text-sm font-medium text-brand-600">
                                            {fleet.subtitle}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {fleet.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FleetTypes; 