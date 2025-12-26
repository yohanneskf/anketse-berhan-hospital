import { useTranslations } from "next-intl";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">
              Anketse Berhan
            </h3>
            <p className="text-gray-300 mb-6">{t("description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-pink-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-pink-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-gray-300 hover:text-pink-400 transition"
                >
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-pink-400 transition"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("services")}</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Pediatrics</li>
              <li className="text-gray-300">Gynecology</li>
              <li className="text-gray-300">Maternity Care</li>
              <li className="text-gray-300">Emergency Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("contactInfo")}</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-pink-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-pink-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+251-911-223-344</p>
                  <p className="text-sm text-pink-400">
                    {t("emergencyHotline")}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-pink-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@anketseberhan.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-pink-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">24/7 Open</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {t("copyright", { year: currentYear })}
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-400">
            <Link href="#" className="hover:text-pink-400 transition">
              {t("privacy")}
            </Link>
            <Link href="#" className="hover:text-pink-400 transition">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
