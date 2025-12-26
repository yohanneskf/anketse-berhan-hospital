import { useTranslations } from "next-intl";
import { Heart, Shield, Users, Award } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("hero");

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Anketse Berhan Medical Center
            </h1>
            <p className="text-xl text-gray-600">
              Dedicated to providing exceptional healthcare for women and
              children
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              To provide compassionate, comprehensive, and high-quality
              healthcare services to women and children, ensuring their
              well-being through advanced medical practices and personalized
              care.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be the leading maternal and child healthcare center in
              Ethiopia, recognized for excellence in medical care, innovation,
              and patient-centered services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-pink-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-pink-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Compassion in every interaction
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-pink-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Excellence in medical care
                  </span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-pink-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Patient-centered approach
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-pink-600 mr-3 mt-1" />
                  <span className="text-gray-700">Continuous improvement</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our History
              </h3>
              <p className="text-gray-700 mb-4">
                Established in 2010, Anketse Berhan Maternal & Child Medical
                Center has grown from a small clinic to a comprehensive
                healthcare facility serving thousands of families.
              </p>
              <p className="text-gray-700">
                Over the years, we have expanded our services, invested in
                modern medical technology, and built a team of dedicated
                healthcare professionals committed to improving maternal and
                child health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
