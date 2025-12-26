import { useTranslations } from "next-intl";
import { blogPosts } from "@/lib/data";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export default function BlogSection() {
  const t = useTranslations("blog");

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest health tips and medical updates from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-pink-100 to-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-300 opacity-50">
                    {post.category.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-pink-600 text-white text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{format(new Date(post.date), "MMM dd, yyyy")}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.readTime} min read</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-6">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition"
                >
                  {t("readMore")}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full font-bold hover:bg-pink-700 transition shadow-lg hover:shadow-xl"
          >
            View All Articles
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
