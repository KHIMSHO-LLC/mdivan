import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export const Footer = async ({ lang }: { lang: Locale }) => {
  const dict = await getDictionary(lang);

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link
              href={`/${lang}`}
              className="flex items-center gap-2 font-sans font-bold text-2xl text-[var(--primary)]"
            >
              <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="font-sans tracking-tight">MDIVAN</span>
            </Link>
            <p className="text-gray-500 leading-relaxed">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[var(--primary)] mb-6">
              {dict.footer.company}
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="hover:text-[var(--primary)]"
                >
                  {dict.navigation.about}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  {dict.navigation.careers}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/#contact`}
                  className="hover:text-[var(--primary)]"
                >
                  {dict.navigation.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--primary)] mb-6">
              {dict.footer.legal}
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  href={`/${lang}/privacy-policy`}
                  className="hover:text-[var(--primary)]"
                >
                  {dict.navigation.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/terms-of-service`}
                  className="hover:text-[var(--primary)]"
                >
                  {dict.navigation.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--primary)] mb-6">
              {dict.footer.location}
            </h4>
            <p className="text-gray-600">{dict.footer.address}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MDIVAN. {dict.footer.rights}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-[var(--primary)] hover:scale-110 transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/mdivan/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
