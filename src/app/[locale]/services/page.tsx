import ServicesSection from "@/components/ServicesSection";
import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <ServicesSection />

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What to Expect During Your Visit
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Before Your Visit
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Bring your medical records</li>
                  <li>• Arrive 15 minutes early</li>
                  <li>• Have insurance information ready</li>
                  <li>• List current medications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  During Your Visit
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Professional consultation</li>
                  <li>• Thorough examination</li>
                  <li>• Clear diagnosis</li>
                  <li>• Personalized treatment plan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
