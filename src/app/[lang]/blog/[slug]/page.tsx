import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ContactClose } from "@/components/ContactClose";
import { PageHead } from "@/components/PageHead";

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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHead
        title={post.title[locale]}
        back={{ href: `/${lang}/blog`, label: lang === "es" ? "Volver al blog" : "Back to the blog" }}
      />
      <div className="post-meta wrap">
        <span>{post.author.name}</span>
        <span className="num">{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <article
        className="prose-mdivan wrap post-body"
        dangerouslySetInnerHTML={{ __html: post.content[locale] }}
      />
      <ContactClose dict={dict} lang={lang} />
    </main>
  );
}
