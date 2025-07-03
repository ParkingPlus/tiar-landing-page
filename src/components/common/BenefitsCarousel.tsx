import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface BenefitsCarouselProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  benefits: Benefit[];
  backgroundColor?: "white" | "gray" | "green" | "blue";
  className?: string;
}

const backgroundColors = {
  white: "bg-white",
  gray: "bg-gray-50",
  green: "bg-green-50",
  blue: "bg-blue-50",
};

export function BenefitsCarousel({
  eyebrow,
  title,
  subtitle,
  benefits,
  backgroundColor = "gray",
  className = "",
}: BenefitsCarouselProps) {
  return (
    <section className={`py-16 ${backgroundColors[backgroundColor]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {eyebrow && (
            <Badge variant="outline" className="mb-4">
              {eyebrow}
            </Badge>
          )}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {benefits.map((benefit, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-48 md:h-56">
                      <Image
                        src={benefit.image}
                        alt={benefit.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white border-gray-200 text-gray-600 hover:text-gray-900" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white border-gray-200 text-gray-600 hover:text-gray-900" />
          </Carousel>
        </div>

        {/* Mobile navigation dots */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {benefits.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}