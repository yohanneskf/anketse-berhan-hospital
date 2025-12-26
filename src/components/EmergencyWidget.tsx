"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";
import Link from "next/link";

export default function EmergencyWidget() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-red-600 text-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">Emergency</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-red-200"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full">
              <Phone className="h-6 w-6 text-red-600 animate-pulse" />
            </div>
            <div>
              <p className="font-bold text-xl">911</p>
              <p className="text-sm opacity-90">24/7 Emergency Line</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="mt-3 block text-center bg-white text-red-600 py-2 rounded-lg font-bold hover:bg-red-50 transition"
          >
            Call Now
          </Link>
        </div>
      </div>
    </div>
  );
}
