import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - MDIVAN",
  description:
    "Terms of Service for MDIVAN - Rules and regulations for using our services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-[var(--primary)] mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">
            Welcome to MDIVAN. These terms and conditions outline the rules and
            regulations for the use of MDIVAN's Website and Services, located at
            https://mdivan.com/.
          </p>

          <p className="mb-6">
            By accessing this website and using our services, we assume you
            accept these terms and conditions. Do not continue to use MDIVAN if
            you do not agree to take all of the terms and conditions stated on
            this page.
          </p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            1. Services
          </h2>
          <p className="mb-4">
            MDIVAN specializes in connecting businesses and entrepreneurs with
            professional Business Associates, Executive Assistants, and other
            remote talent ("Talent"). We also provide outsourcing services to
            assist with daily operational tasks.
          </p>
          <p className="mb-4">
            While we rigorously vet all Talent, MDIVAN acts as an intermediary.
            The final decision to hire or engage any Talent rests with the
            Client.
          </p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            2. Intellectual Property Rights
          </h2>
          <p className="mb-6">
            Other than the content you own, under these Terms, MDIVAN and/or its
            licensors own all the intellectual property rights and materials
            contained in this Website. You are granted limited license only for
            purposes of viewing the material contained on this Website.
          </p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            3. Restrictions
          </h2>
          <p className="mb-4">
            You are specifically restricted from all of the following:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Publishing any Website material in any other media;</li>
            <li>
              Selling, sublicensing and/or otherwise commercializing any Website
              material;
            </li>
            <li>
              Using this Website in any way that is or may be damaging to this
              Website;
            </li>
            <li>
              Using this Website in any way that impacts user access to this
              Website;
            </li>
            <li>
              Engaging in any data mining, data harvesting, data extracting or
              any other similar activity in relation to this Website.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            4. Client Responsibilities
          </h2>
          <p className="mb-6">
            Clients engaging Talent through MDIVAN agree to treat all Talent
            with professional respect and dignity. Clients are responsible for
            providing clear instructions, necessary tools (unless otherwise
            agreed), and payment for services rendered as per the specific
            service agreement signed.
          </p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            5. Limitation of Liability
          </h2>
          <p className="mb-6">
            In no event shall MDIVAN, nor any of its officers, directors, and
            employees, be held liable for anything arising out of or in any way
            connected with your use of this Website or the Talent engaged.
            MDIVAN shall not be held liable for any indirect, consequential, or
            special liability arising out of or in any way related to your use
            of this Website.
          </p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            6. Indemnification
          </h2>
          <p className="mb-6">
            You hereby indemnify to the fullest extent MDIVAN from and against
            any and/or all liabilities, costs, demands, causes of action,
            damages, and expenses arising in any way related to your breach of
            any of the provisions of these Terms.
          </p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            7. Governing Law & Jurisdiction
          </h2>
          <p className="mb-6">
            These Terms will be governed by and interpreted in accordance with
            the laws of the jurisdiction in which MDIVAN is registered, and you
            submit to the non-exclusive jurisdiction of the state and federal
            courts located there for the resolution of any disputes.
          </p>
        </div>
      </div>
    </main>
  );
}
