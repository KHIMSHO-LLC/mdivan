import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      images: [
        {
          url: "https://mdivan.com/nia.jpg",
          width: 800,
          height: 800,
          alt: "Nia Tcholadze - CEO & Founder",
        },
        {
          url: "https://mdivan.com/lile.jpg",
          width: 800,
          height: 800,
          alt: "Lile Gvenetadze - Operations Manager & Co-founder",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["https://mdivan.com/nia.jpg"],
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
      {
        "@type": "Person",
        name: "Lile Gvenetadze",
        image: "https://mdivan.com/lile.jpg",
        jobTitle: "Operations Manager & Co-founder",
        sameAs: "https://www.linkedin.com/in/lile-gvenetadze-353552286/",
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

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Header lang={lang as Locale} />
        {children}
        <Footer lang={lang as Locale} />
      </body>
    </html>
  );
}
