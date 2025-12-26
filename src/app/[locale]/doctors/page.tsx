import DoctorsSection from "@/components/DoctorsSection";
import { useTranslations } from "next-intl";
import { Award, Calendar, Star } from "lucide-react";
import { doctors } from "@/lib/data";

export default function DoctorsPage() {
  const t = useTranslations("doctors");

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

        <DoctorsSection />

        {/* Statistics */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">
                {doctors.length}
              </div>
              <div className="text-gray-600">Specialists</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">10k+</div>
              <div className="text-gray-600">Patients Treated</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-gray-600">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
