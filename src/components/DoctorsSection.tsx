import { useTranslations } from "next-intl";
import { doctors } from "@/lib/data";
import { Star, Award, Calendar } from "lucide-react";

export default function DoctorsSection() {
  const t = useTranslations("doctors");

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                {/* Doctor Image Placeholder */}
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-12 w-12 text-gray-400" />
                </div>

                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                  {doctor.name}
                </h3>

                <div className="flex items-center justify-center mb-4">
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                    {doctor.specialization}
                  </span>
                </div>

                <div className="flex items-center justify-center mb-4">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600 text-sm">
                    {doctor.experience} years experience
                  </span>
                </div>

                <p className="text-gray-600 text-center text-sm">
                  {doctor.description}
                </p>

                <div className="flex justify-center mt-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(doctor.experience / 3)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <button className="w-full bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition">
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
