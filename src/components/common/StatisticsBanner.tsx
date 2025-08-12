import ScaleInScroll from "../animations/collection/ScaleInScroll";

interface Statistic {
    number: string;
    label: string;
    icon?: React.ReactNode;
}

interface StatisticsProps {
    title: string;
    subtitle?: string;
    statistics: Statistic[];
    backgroundColor?: "blue" | "green" | "purple" | "gray";
}

export const Statistics = ({
    title,
    subtitle,
    statistics,
    backgroundColor = "blue"
}: StatisticsProps) => {
    const getBackgroundClass = () => {
        switch (backgroundColor) {
            case "green":
                return "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800";
            case "purple":
                return "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800";
            case "gray":
                return "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800";
            default:
                return "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800";
        }
    };

    const getAccentClass = () => {
        switch (backgroundColor) {
            case "green":
                return "text-gray-300";
            case "purple":
                return "text-gray-300";
            case "gray":
                return "text-white";
            default:
                return "text-gray-300";
        }
    };

    return (
        <section className={`py-16 ${getBackgroundClass()} text-white`}>
            <ScaleInScroll delay={0.3} duration={0.7} initialScale={0.95}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-sm">{title}</h2>
                        {subtitle && (
                            <p className={`text-xl ${getAccentClass()}`}>{subtitle}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {statistics.map((stat, index) => (
                            <div key={index} className="text-center">
                                {stat.icon && (
                                    <div className="flex justify-center mb-3 text-white">
                                        {stat.icon}
                                    </div>
                                )}
                                <div className="text-3xl font-bold mb-1 text-white">{stat.number}</div>
                                <div className="text-sm text-white">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </ScaleInScroll>
        </section>
    );
};
