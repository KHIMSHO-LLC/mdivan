import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { blogPosts } from "@/lib/blog-data";
import { ContactClose } from "@/components/ContactClose";
import { PageHead } from "@/components/PageHead";
import Link from "next/link";
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

  const es = lang === "es";
  const locale = lang as "en" | "es";
  return (
    <main>
      <PageHead
        title={es ? "Notas y recursos" : "Insights"}
        lead={
          es
            ? "Notas para fundadores y líderes que construyen equipos remotos duraderos."
            : "Notes for founders and leaders building remote teams that last."
        }
        action={{ href: `/${lang}/hire-talent`, label: dict.home.hero.cta }}
      />
      <ol className="post-list" reversed>
        {blogPosts.map((post, i) => (
          <li key={`${post.slug}-${i}`} className="reveal" style={{ ["--d" as any]: i % 4 }}>
            <Link href={`/${lang}/blog/${post.slug}`} className="post-row">
              <span className="post-row__title">{post.title[locale]}</span>
              <span className="post-row__meta num">{post.date}</span>
              <span className="post-row__excerpt">{post.excerpt[locale]}</span>
            </Link>
          </li>
        ))}
      </ol>
      <ContactClose dict={dict} lang={lang} />
    </main>
  );
}
