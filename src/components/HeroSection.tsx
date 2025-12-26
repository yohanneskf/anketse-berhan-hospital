import { useTranslations } from "next-intl";
import { Clock, Phone, Shield, Award } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <div className="relative bg-gradient-to-r from-pink-50 to-blue-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <span className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-pink-100 text-pink-700 font-bold mb-4 md:mb-6 text-sm md:text-base">
              <Clock className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              24 HOUR SERVICE
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            {t("title")}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10">
            {t("subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow">
              <Shield className="h-8 w-8 md:h-10 md:w-10 text-green-600 mx-auto mb-3 md:mb-4" />
              <p className="font-bold text-gray-800 text-sm md:text-base">
                {t("tagline")}
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                Medical Excellence
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow">
              <Phone className="h-8 w-8 md:h-10 md:w-10 text-blue-600 mx-auto mb-3 md:mb-4" />
              <p className="font-bold text-gray-800 text-sm md:text-base">
                Emergency Line
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                +251-911-223-344
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow">
              <Award className="h-8 w-8 md:h-10 md:w-10 text-yellow-600 mx-auto mb-3 md:mb-4" />
              <p className="font-bold text-gray-800 text-sm md:text-base">
                Certified Center
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                MoH Approved
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/appointments"
              className="bg-pink-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold hover:bg-pink-700 transition shadow-lg hover:shadow-xl text-center"
            >
              {t("cta")}
            </Link>
            <Link
              href="/contact"
              className="bg-white text-pink-600 border-2 border-pink-600 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold hover:bg-pink-50 transition text-center"
            >
              {t("emergency")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
