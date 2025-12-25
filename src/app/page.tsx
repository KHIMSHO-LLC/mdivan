import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { HowItWorks } from "@/components/HowItWorks";
import { TeamSection } from "@/components/TeamSection";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesCarousel />
      <ComparisonSection />
      <TeamSection />
      <HowItWorks />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
