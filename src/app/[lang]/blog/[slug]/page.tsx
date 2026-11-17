import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { blogPosts } from "@/lib/blog-data";
import { pageMeta, JsonLd } from "@/lib/seo";
import { SITE_URL, to } from "@/lib/site";
import { PageHead } from "@/components/PageHead";
import { ContactSplit } from "@/components/ContactSplit";

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateStaticParams() {
  return Array.from(new Set(blogPosts.map((p) => p.slug))).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const locale = lang as "en" | "es";
  if (!post) return { title: "Not found" };
  const base = pageMeta({ lang, path: `/blog/${slug}`, title: `${post.title[locale]} | MDIVAN`, description: post.excerpt[locale] });
  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article", authors: [post.author.name], publishedTime: new Date(post.date).toISOString() },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as Locale);
  const post = blogPosts.find((p) => p.slug === slug);
  const locale = lang as "en" | "es";
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title[locale],
          description: post.excerpt[locale],
          datePublished: new Date(post.date).toISOString(),
          author: { "@type": "Person", name: post.author.name },
          publisher: { "@type": "Organization", name: "MDIVAN", logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` } },
        }}
      />
      <PageHead back={{ href: to(lang, "/blog"), label: dict.ui.backToBlog }} title={post.title[locale]}>
        <span className="post-meta" style={{ marginTop: 0 }}>
          <span>{post.author.name}</span>
          <span className="num">{post.date}</span>
          <span>{post.readTime}</span>
        </span>
      </PageHead>
      <section className="section">
        <div className="wrap">
          <article className="prose-mdivan" dangerouslySetInnerHTML={{ __html: post.content[locale] }} />
        </div>
      </section>
      <ContactSplit dict={dict} lang={lang} />
    </>
  );
}
