import AppointmentForm from "@/components/AppointmentForm";
import { useTranslations } from "next-intl";
import { Calendar, Clock, Phone } from "lucide-react";

export default function AppointmentsPage() {
  const t = useTranslations("appointments");

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book your appointment with our specialists
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-pink-600 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+251-911-223-344</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-pink-600 mr-3" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-gray-600">24/7 Emergency Service</p>
                    <p className="text-gray-600">OPD: 8AM - 8PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-pink-600 mr-3" />
                  <div>
                    <p className="font-medium">Average Wait Time</p>
                    <p className="text-gray-600">15-30 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100">
              <h4 className="font-bold text-gray-900 mb-3">
                Before Your Visit
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  Bring your medical records if available
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  Arrive 15 minutes before your appointment
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  Have your insurance information ready
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  List any medications you're taking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
