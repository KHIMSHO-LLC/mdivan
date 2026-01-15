import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { blogPosts } from "@/lib/blog-data";
import { ContactSplitter } from "@/components/ContactSplitter";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | MDIVAN",
  description:
    "Expert insights on remote recruitment, executive support, and scaling your business with Business Associates.",
};

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--primary)] mb-6">
            Insights & Resources
          </h1>
          <p className="text-xl text-gray-600">
            Strategies for leaders building world-class remote teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${lang}/blog/${post.slug}`}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
            >
              <div className="mb-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[var(--primary)] mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title[lang as "en" | "es"]}
                </h2>
                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                  {post.excerpt[lang as "en" | "es"]}
                </p>
              </div>

              <div className="mt-auto flex items-center gap-3 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  {/* Placeholder or real image if available */}
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm text-[var(--primary)]">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {post.author.role}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <ContactSplitter dict={dict} lang={lang as Locale} />
    </main>
  );
}
