import { useTranslations } from "next-intl";
import { Clock, Shield, Users, Award } from "lucide-react";

export default function FeaturesSection() {
  const t = useTranslations("features");
  const features = t.raw("items") as Array<{
    title: string;
    description: string;
  }>;

  const icons = [Clock, Shield, Users, Award];
  const colors = ["pink", "blue", "green", "yellow"];

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for maternal and child
            healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = icons[index];
            const color = colors[index];

            const colorClasses = {
              pink: "text-pink-600 bg-pink-100",
              blue: "text-blue-600 bg-blue-100",
              green: "text-green-600 bg-green-100",
              yellow: "text-yellow-600 bg-yellow-100",
            }[color];

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`${
                    colorClasses.split(" ")[1]
                  } w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                >
                  <Icon className={`h-8 w-8 ${colorClasses.split(" ")[0]}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
