import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
  backgroundColor = "white",
}: KeyFeaturesProps) => {
  const isGrayBg = backgroundColor === "gray";
  const sectionBgClass = isGrayBg ? "bg-gray-50" : "bg-white";

  const cardClass = cn(
    // remove global border and create a soft, elevated card
    "group relative overflow-hidden border-0 ring-1",
    isGrayBg ? "ring-gray-200" : "ring-black/5",
    "bg-white/95 backdrop-blur-[1px] rounded-2xl shadow-md transition-all duration-300",
    "hover:-translate-y-1 hover:shadow-xl hover:ring-black/10"
  );

  return (
    <section className={cn("py-16", sectionBgClass)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            {eyebrow}
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={cardClass}>
              <CardContent className="px-8 pt-8 pb-10 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};