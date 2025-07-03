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
              return "bg-gradient-to-r from-green-600 to-green-800";
          case "purple":
              return "bg-gradient-to-r from-purple-600 to-purple-800";
          case "gray":
              return "bg-gradient-to-r from-gray-600 to-gray-800";
          default:
              return "bg-gradient-to-r from-blue-600 to-blue-800";
      }
  };

  const getAccentClass = () => {
      switch (backgroundColor) {
          case "green":
              return "text-green-100";
          case "purple":
              return "text-purple-100";
          case "gray":
              return "text-gray-100";
          default:
              return "text-blue-100";
      }
  };

  return (
      <section className={`py-16 ${getBackgroundClass()} text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">{title}</h2>
                  {subtitle && (
                      <p className={`text-xl ${getAccentClass()}`}>{subtitle}</p>
                  )}
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {statistics.map((stat, index) => (
                      <div key={index} className="text-center">
                          {stat.icon && (
                              <div className={`flex justify-center mb-3 ${getAccentClass()}`}>
                                  {stat.icon}
                              </div>
                          )}
                          <div className="text-3xl font-bold mb-1">{stat.number}</div>
                          <div className={`text-sm ${getAccentClass()}`}>{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
};
