import Link from "next/link";
import { Home, Heart, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <Heart className="h-16 w-16 text-pink-600 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="block bg-pink-600 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-700 transition shadow-lg"
          >
            <Home className="inline-block h-5 w-5 mr-2" />
            Return to Homepage
          </Link>

          <Link
            href="/contact"
            className="block border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition"
          >
            <Phone className="inline-block h-5 w-5 mr-2" />
            Contact Support
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Anketse Berhan Maternal & Child Medical Center</p>
          <p>Emergency: +251-911-223-344</p>
        </div>
      </div>
    </div>
  );
}
