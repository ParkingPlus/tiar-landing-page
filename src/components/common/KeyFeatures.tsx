import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface KeyFeaturesProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    features: Feature[];
    backgroundColor?: "white" | "gray";
}

export const KeyFeatures = ({ 
    eyebrow = "Key Features", 
    title, 
    subtitle, 
    features, 
    backgroundColor = "white" 
}: KeyFeaturesProps) => {
    const bgClass = backgroundColor === "gray" ? "bg-gray-50" : "bg-white";
    
    return (
        <section className={`py-16 ${bgClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4">{eyebrow}</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    {subtitle && (
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                    )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="pt-6">
                                <div className="flex justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};