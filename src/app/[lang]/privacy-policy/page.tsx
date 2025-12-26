import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - MDIVAN",
  description: "Privacy Policy for MDIVAN - Learn how we protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-[var(--primary)] mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">
            This privacy policy ("policy") will help you understand how MDIVAN
            ("us", "we", "our") uses and protects the data you provide to us
            when you visit and use MDIVAN at https://mdivan.com/ ("website",
            "service").
          </p>

          <p className="mb-6">
            We reserve the right to change this policy at any given time, of
            which you will be promptly updated. If you want to make sure that
            you are up to date with the latest changes, we advise you to
            frequently visit this page.
          </p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            What User Data We Collect
          </h2>
          <p className="mb-4">
            When you visit the website, we may collect the following data:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Your IP address.</li>
            <li>Your contact information and email address.</li>
            <li>Other information such as interests and preferences.</li>
            <li>Data profile regarding your online behavior on our website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            Why We Collect Your Data
          </h2>
          <p className="mb-4">
            We are collecting your data for several reasons:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To better understand your needs.</li>
            <li>To improve our services and products.</li>
            <li>
              To send you promotional emails containing the information we think
              you will find interesting.
            </li>
            <li>
              To contact you to fill out surveys and participate in other types
              of market research.
            </li>
            <li>
              To customize our website according to your online behavior and
              personal preferences.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            Safeguarding and Securing the Data
          </h2>
          <p className="mb-6">
            MDIVAN is committed to securing your data and keeping it
            confidential. MDIVAN has done all in its power to prevent data
            theft, unauthorized access, and disclosure by implementing the
            latest technologies and software, which help us safeguard all the
            information we collect online.
          </p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            Our Cookie Policy
          </h2>
          <p className="mb-4">
            Once you agree to allow our website to use cookies, you also agree
            to use the data it collects regarding your online behavior (analyze
            web traffic, web pages you spend the most time on, and websites you
            visit).
          </p>
          <p className="mb-4">
            The data we collect by using cookies is used to customize our
            website to your needs. After we use the data for statistical
            analysis, the data is completely removed from our systems.
          </p>
          <p className="mb-6">
            Please note that cookies don't allow us to gain control of your
            computer in any way. They are strictly used to monitor which pages
            you find useful and which you do not so that we can provide a better
            experience for you.
          </p>
          <p className="mb-6">
            If you want to disable cookies, you can do it by accessing the
            settings of your internet browser.
          </p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            Links to Other Websites
          </h2>
          <p className="mb-6">
            Our website contains links that lead to other websites. If you click
            on these links MDIVAN is not held responsible for your data and
            privacy protection. Visiting those websites is not governed by this
            privacy policy agreement. Make sure to read the privacy policy
            documentation of the website you go to from our website.
          </p>

          <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
            Restricting the Collection of your Personal Data
          </h2>
          <p className="mb-4">
            At some point, you might wish to restrict the use and collection of
            your personal data. You can achieve this by doing the following:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              When you are filling the forms on the website, make sure to check
              if there is a box which you can leave unchecked, if you don't want
              to disclose your personal information.
            </li>
            <li>
              If you have already agreed to share your information with us, feel
              free to contact us via email and we will be more than happy to
              change this for you.
            </li>
          </ul>
          <p className="mb-6">
            MDIVAN will not lease, sell or distribute your personal information
            to any third parties, unless we have your permission. We might do so
            if the law forces us. Your personal information will be used when we
            need to send you promotional materials if you agree to this privacy
            policy.
          </p>
        </div>
      </div>
    </main>
  );
}
