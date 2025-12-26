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
    "@type": "EmploymentAgency",
    name: "MDIVAN",
    description: dict.meta.description,
    url: "https://mdivan.com",
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
