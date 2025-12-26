import { blogPosts } from "@/lib/data";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

const allBlogPosts = [
  ...blogPosts,
  {
    id: 4,
    title: "Postpartum Care Tips",
    excerpt: "Essential care tips for mothers after delivery.",
    date: "2024-02-28",
    category: "Maternity",
    readTime: 7,
  },
  {
    id: 5,
    title: "Childhood Nutrition Guide",
    excerpt: "Balanced diet recommendations for growing children.",
    date: "2024-02-20",
    category: "Nutrition",
    readTime: 10,
  },
  {
    id: 6,
    title: "Common Childhood Illnesses",
    excerpt: "Understanding and preventing common childhood diseases.",
    date: "2024-02-15",
    category: "Pediatrics",
    readTime: 8,
  },
];

export default function BlogPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Health Tips & Medical Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest health advice from our medical experts
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12 text-white">
              <div className="max-w-2xl">
                <div className="flex items-center mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    Featured Article
                  </span>
                  <Calendar className="h-4 w-4 ml-4 mr-2" />
                  <span className="text-sm opacity-90">
                    {format(new Date(blogPosts[0].date), "MMMM dd, yyyy")}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition"
                >
                  Read Full Article
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* All Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-r from-pink-100 to-blue-100 relative overflow-hidden">
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
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Browse by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Pregnancy",
              "Pediatrics",
              "Nutrition",
              "Maternity",
              "General Health",
            ].map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase()}`}
                className="flex items-center px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition"
              >
                <Tag className="h-4 w-4 text-pink-600 mr-2" />
                <span className="text-gray-700">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
