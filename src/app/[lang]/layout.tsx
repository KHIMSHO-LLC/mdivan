import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, Schibsted_Grotesk, Space_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";
import { pageMeta, JsonLd } from "@/lib/seo";
import { EMAIL, INSTAGRAM, LINKEDIN, PHONE, SITE_URL } from "@/lib/site";

// next/font downloads these at build time and serves them from our own domain.
// The "latin" subset covers Spanish (á, é, ñ, ¿, ¡).
const display = Schibsted_Grotesk({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const sans = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = Space_Mono({ variable: "--font-mono", subsets: ["latin"], weight: "400", display: "swap", preload: false });
const serif = Newsreader({ variable: "--font-serif", subsets: ["latin"], weight: "400", display: "swap", preload: false });

export const viewport: Viewport = { themeColor: "#071d39" };

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    metadataBase: new URL(SITE_URL),
    keywords: dict.meta.keywords,
    ...pageMeta({ lang, title: dict.meta.title, description: dict.meta.description }),
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const m = dict.team.members;

  const organization = {
    "@context": "https://schema.org",
    "@type": "RecruitmentAgency",
    "@id": `${SITE_URL}/#organization`,
    name: "MDIVAN",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    description: dict.meta.description,
    email: EMAIL,
    telephone: PHONE.replace(/\s/g, ""),
    address: { "@type": "PostalAddress", addressLocality: "Madrid", addressCountry: "ES" },
    founder: [
      { "@type": "Person", name: m.nia.name, jobTitle: m.nia.role, image: `${SITE_URL}/nia.jpg`, sameAs: m.nia.linkedin },
      { "@type": "Person", name: m.giorgi.name, jobTitle: m.giorgi.role, image: `${SITE_URL}/george.png`, sameAs: m.giorgi.linkedin },
    ],
    sameAs: [LINKEDIN, INSTAGRAM],
  };

  return (
    <html lang={lang} className={`${display.variable} ${sans.variable} ${mono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd data={organization} />
      </head>
      <body>
        <Header lang={lang as Locale} />
        <main id="main">{children}</main>
        <Footer lang={lang as Locale} />
        <RevealObserver />
      </body>
    </html>
  );
}
