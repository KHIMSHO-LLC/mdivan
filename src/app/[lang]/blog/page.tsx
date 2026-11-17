import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import { blogPosts } from "@/lib/blog-data";
import { pageMeta } from "@/lib/seo";
import { to } from "@/lib/site";
import { PageHead } from "@/components/PageHead";
import { ContactSplit } from "@/components/ContactSplit";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return pageMeta({ lang, path: "/blog", title: `${dict.ui.blogTitle} | MDIVAN`, description: dict.ui.blogLead });
}

export default async function BlogIndex({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const locale = lang as "en" | "es";
  // The auto-generator has written some posts more than once; show each slug once.
  const posts = blogPosts.filter((p, i, all) => all.findIndex((q) => q.slug === p.slug) === i);

  return (
    <>
      <PageHead eyebrow={dict.ui.blogBadge} title={dict.ui.blogTitle} lead={dict.ui.blogLead} />
      <section className="section">
        <div className="wrap">
          <ul className="posts">
            {posts.map((post, i) => (
              <li key={post.slug} className="posts__item">
                <Link href={to(lang, `/blog/${post.slug}`)} className="post-card reveal" style={{ ["--d" as any]: i % 3 }}>
                  <span className="eyebrow num">{post.date} · {post.readTime}</span>
                  <span>
                    <span className="h4" style={{ display: "block" }}>{post.title[locale]}</span>
                    <span className="post-card__excerpt">{post.excerpt[locale]}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ContactSplit dict={dict} lang={lang} />
    </>
  );
}
