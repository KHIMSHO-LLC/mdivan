import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link
              href="/"
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
              Expert consulting strategies tailored to drive your business
              success.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[var(--primary)] mb-6">Company</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--primary)] mb-6">Services</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--primary)] mb-6">Legal</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--primary)]">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MDIVAN. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-[var(--primary)] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[var(--primary)] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[var(--primary)] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[var(--primary)] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
