import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdivan.com"),
  title: "MDIVAN - Elite Business Associate & Assistant Recruitment",
  description:
    "We connect top-tier companies with professional, reliable business associates and executive assistants. Specializing in highly qualified talent for your administrative needs.",
  keywords: [
    "hire executive assistant",
    "hire business associate",
    "recruitment agency for assistants",
    "best staffing agency",
    "hire business talent",
    "MDIVAN recruitment",
    "find administrative staff",
    "professional staffing agency",
  ],
  openGraph: {
    title: "MDIVAN - Elite Business Associate & Assistant Recruitment",
    description:
      "Connect with professional, reliable business associates and executive assistants.",
    type: "website",
    locale: "en_US",
    siteName: "MDIVAN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDIVAN - Elite Business Associate & Assistant Recruitment",
    description:
      "Connect with professional, reliable business associates and executive assistants.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "MDIVAN",
    description:
      "Premier recruitment agency specializing in placing top-tier business associates and executive assistants.",
    url: "https://mdivan.com", // Placeholder, user can update
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mdivan.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "GE", // Assuming Georgia based on user name/context, or generic
    },
    sameAs: [
      "https://www.linkedin.com/company/mdivan",
      "https://www.facebook.com/mdivan",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
