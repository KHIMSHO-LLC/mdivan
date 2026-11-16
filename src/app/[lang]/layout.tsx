import type { Metadata } from "next";
import { Noto_Serif_Georgian } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";

// Only used for the Georgian word "მდივანი"; everything else is set in Erode.
const georgian = Noto_Serif_Georgian({
  variable: "--font-georgian",
  subsets: ["georgian"],
  weight: ["500"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    metadataBase: new URL("https://mdivan.com"),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://mdivan.com/${lang}`,
      siteName: "MDIVAN",
      locale: lang === "en" ? "en_US" : "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RecruitmentAgency",
    name: "MDIVAN",
    description: dict.meta.description,
    url: "https://mdivan.com",
    logo: "https://mdivan.com/icon.png",
    priceRange: "$$$",
    areaServed: {
      "@type": "City",
      name: "Madrid",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ES",
        addressLocality: "Madrid",
      },
    },
    founder: [
      {
        "@type": "Person",
        name: "Nia Tcholadze",
        image: "https://mdivan.com/nia.jpg",
        jobTitle: "CEO & Founder",
        sameAs: "https://www.linkedin.com/in/nia-tcholadze-55aba6269/",
      },
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mdivan.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
      addressLocality: "Madrid",
    },
    sameAs: [
      "https://www.linkedin.com/company/mdivan",
      "https://www.instagram.com/mdivan",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MDIVAN",
    url: "https://mdivan.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mdivan.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={lang} className={georgian.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=erode@400,500,600&f[]=erode@400i&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLd, websiteJsonLd]),
          }}
        />
      </head>
      <body>
        <Header lang={lang as Locale} />
        {children}
        <Footer lang={lang as Locale} />
        <RevealObserver />
      </body>
    </html>
  );
}
