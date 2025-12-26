"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  Baby,
  Stethoscope,
  Users,
  Heart,
  Shield,
  Clock,
  Activity,
  Thermometer,
  AlertTriangle,
  Ambulance,
  Scalpel,
} from "lucide-react";

export default function ServicesSection() {
  const t = useTranslations("services");

  const opdServices = t.raw("opd.items") as string[];
  const ipdServices = t.raw("ipd.items") as string[];
  const emergencyServices = t.raw("emergency.items") as string[];

  const opdIcons = [
    Baby,
    Stethoscope,
    Baby,
    Shield,
    Heart,
    Clock,
    Activity,
    Users,
    Thermometer,
  ];
  const ipdIcons = [Heart, Shield, Scalpel, Baby];
  const emergencyIcons = [AlertTriangle, Ambulance, Scalpel, Activity];

  const [activeTab, setActiveTab] = useState("opd");

  const renderServices = (services: string[], icons: any[], color: string) => {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = icons[index] || Stethoscope;
          const iconColor =
            color === "pink"
              ? "text-pink-600"
              : color === "blue"
              ? "text-blue-600"
              : "text-red-600";
          const bgColor =
            color === "pink"
              ? "bg-pink-100"
              : color === "blue"
              ? "bg-blue-100"
              : "bg-red-100";

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div
                className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}
              >
                <Icon className={`h-6 w-6 ${iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service}
              </h3>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setActiveTab("opd")}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition text-sm md:text-base ${
                activeTab === "opd"
                  ? "bg-pink-600 text-white"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              {t("opd.title")}
            </button>
            <button
              onClick={() => setActiveTab("ipd")}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition text-sm md:text-base ${
                activeTab === "ipd"
                  ? "bg-pink-600 text-white"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              {t("ipd.title")}
            </button>
            <button
              onClick={() => setActiveTab("emergency")}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition text-sm md:text-base ${
                activeTab === "emergency"
                  ? "bg-pink-600 text-white"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              {t("emergency.title")}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "opd" && renderServices(opdServices, opdIcons, "pink")}
          {activeTab === "ipd" && renderServices(ipdServices, ipdIcons, "blue")}
          {activeTab === "emergency" &&
            renderServices(emergencyServices, emergencyIcons, "red")}
        </div>
      </div>
    </div>
  );
}
