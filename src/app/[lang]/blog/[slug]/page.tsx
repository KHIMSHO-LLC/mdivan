import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ContactSplitter } from "@/components/ContactSplitter";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const locale = lang as "en" | "es";

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title[locale]} | MDIVAN Blog`,
    description: post.excerpt[locale],
    openGraph: {
      title: post.title[locale],
      description: post.excerpt[locale],
      type: "article",
      authors: [post.author.name],
      publishedTime: new Date(post.date).toISOString(),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as Locale);
  const post = blogPosts.find((p) => p.slug === slug);
  const locale = lang as "en" | "es";

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title[locale],
    description: post.excerpt[locale],
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "MDIVAN",
      logo: {
        "@type": "ImageObject",
        url: "https://mdivan.com/icon.png",
      },
    },
  };

  return (
    <main className="min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href={`/${lang}/blog`}
          className="inline-flex items-center text-gray-500 hover:text-[var(--primary)] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {lang === "es" ? "Volver al Blog" : "Back to Blog"}
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-8 leading-tight">
            {post.title[locale]}
          </h1>

          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 w-fit">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-[var(--primary)]">
                {post.author.name}
              </div>
              <div className="text-sm text-gray-500">{post.author.role}</div>
            </div>
          </div>
        </header>

        {/* Content */}
        <article
          className="prose prose-lg max-w-none prose-headings:text-[var(--primary)] prose-a:text-blue-600 prose-img:rounded-xl text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content[locale] }}
        />

        <hr className="my-16 border-gray-100" />
      </div>

      <ContactSplitter dict={dict} lang={lang as Locale} />
    </main>
  );
}
