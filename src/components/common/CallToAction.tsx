import { Button } from "@/components/ui/button";
import AnimationWrapper from "../animations/AnimationWrapper";
import Link from "next/link"; // assuming you're using Next.js

interface CTAButton {
    text: string;
    variant?: "default" | "secondary" | "outline" | "ghost";
    href: string;
}

interface CallToActionProps {
    title: string;
    subtitle?: string;
    description?: string;
    buttons: CTAButton[];
    backgroundColor?: "blue" | "green" | "purple" | "gradient" | "white";
}

export const CallToAction = ({ 
    title, 
    subtitle, 
    description, 
    buttons, 
    backgroundColor = "gradient" 
}: CallToActionProps) => {
    const getBackgroundClass = () => {
        switch (backgroundColor) {
            case "blue":
                return "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900";
            case "green":
                return "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200";
            case "purple":
                return "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900";
            case "white":
                return "bg-white";
            default:
                return "bg-gray-50/20";
        }
    };

    const getAccentClass = () => {
        switch (backgroundColor) {
            case "blue":
                return "text-gray-300";
            case "green":
                return "text-gray-600";
            case "purple":
                return "text-gray-300";
            default:
                return "text-gray-600";
        }
    };

    return (
        <section className={`py-16 ${getBackgroundClass()} text-gray-900 overflow-hidden relative`}>
            <AnimationWrapper animation="scale" delay={0.2} duration={0.8}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 drop-shadow-sm">{title}</h2>
                    {subtitle && (
                        <p className={`text-xl mb-8 ${getAccentClass()}`}>{subtitle}</p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {buttons.map((button, index) => (
                            <Link key={index} href={button.href} passHref>
                                <Button
                                    size="lg"
                                    variant={button.variant || "secondary"}
                                    className={
                                        button.variant === "outline"
                                            ? "font-bold border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
                                            : button.variant === "secondary"
                                            ? "font-bold bg-gray-800 text-white hover:bg-gray-700"
                                            : button.variant === "ghost"
                                            ? "font-bold text-gray-600 hover:text-gray-800"
                                            : ""
                                    }
                                >
                                    {button.text}
                                </Button>
                            </Link>
                        ))}
                    </div>
                    {description && (
                        <p className={`mt-6 text-sm ${getAccentClass()}`}>{description}</p>
                    )}
                </div>
            </AnimationWrapper>
        </section>
    );
};
