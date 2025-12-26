"use client";

import { useTranslations } from "next-intl";
import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-12 md:py-20 bg-gradient-to-r from-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-pink-200" />

            <div className="mb-8">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < testimonials[activeIndex].rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                "{testimonials[activeIndex].content}"
              </p>

              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === activeIndex
                      ? "bg-pink-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* All Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition ${
                  index === activeIndex ? "ring-2 ring-pink-500" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>
                <div>
                  <h5 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h5>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
