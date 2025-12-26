"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    category: "facility",
    title: "Main Entrance",
    description: "Our main hospital entrance",
  },
  {
    id: 2,
    category: "facility",
    title: "Waiting Area",
    description: "Comfortable waiting area",
  },
  {
    id: 3,
    category: "facility",
    title: "Reception",
    description: "24/7 reception desk",
  },
  {
    id: 4,
    category: "equipment",
    title: "Modern Equipment",
    description: "State-of-the-art medical equipment",
  },
  {
    id: 5,
    category: "equipment",
    title: "Laboratory",
    description: "Fully equipped laboratory",
  },
  {
    id: 6,
    category: "team",
    title: "Medical Team",
    description: "Our dedicated medical staff",
  },
  {
    id: 7,
    category: "team",
    title: "Doctors",
    description: "Expert medical professionals",
  },
  {
    id: 8,
    category: "team",
    title: "Nurses",
    description: "Caring nursing staff",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "facility", name: "Facility" },
    { id: "equipment", name: "Equipment" },
    { id: "team", name: "Our Team" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Medical Center Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our facilities, equipment, and meet our team
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === category.id
                  ? "bg-pink-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-r from-pink-100 to-blue-100 relative overflow-hidden">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl text-gray-300">🏥</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
