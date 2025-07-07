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
                return "bg-gradient-to-r from-blue-600 to-blue-800";
            case "green":
                return "bg-gradient-to-r from-green-600 to-green-800";
            case "purple":
                return "bg-gradient-to-r from-purple-600 to-purple-800";
            case "white":
                return "bg-white";
            default:
                return "bg-gradient-to-r from-brand-500 to-brand-900";
        }
    };

    const getAccentClass = () => {
        switch (backgroundColor) {
            case "blue":
                return "text-blue-100";
            case "green":
                return "text-green-100";
            case "purple":
                return "text-purple-100";
            default:
                return "text-brand-100";
        }
    };

    return (
        <section className={`py-16 ${getBackgroundClass()} text-white`}>
            <AnimationWrapper animation="scale" delay={0.2} duration={0.8}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
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
                                            ? "font-bold border-white text-white hover:bg-white hover:text-brand-600"
                                            : button.variant === "secondary"
                                            ? "font-bold text-brand-600 hover:text-brand-700"
                                            : button.variant === "ghost"
                                            ? "font-bold text-brand-600 hover:text-brand-700"
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
