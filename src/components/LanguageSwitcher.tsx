"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
    router.refresh();
  };

  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-5 w-5 text-gray-600" />
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 text-sm font-medium rounded ${
          currentLocale === "en"
            ? "bg-pink-100 text-pink-600"
            : "text-gray-600 hover:text-pink-600"
        }`}
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => switchLanguage("am")}
        className={`px-3 py-1 text-sm font-medium rounded ${
          currentLocale === "am"
            ? "bg-pink-100 text-pink-600"
            : "text-gray-600 hover:text-pink-600"
        }`}
      >
        አማ
      </button>
    </div>
  );
}
