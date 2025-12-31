import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Trusted Home Essentials",
  description: "Privacy Policy and data collection practices for Trusted Home Essentials.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-10 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Last Updated: December 31, 2025
          </p>
        </header>

        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-[#1A3C2F]">
          <h2>1. Introduction</h2>
          <p>
            At Trusted Home Essentials, accessible from trustedhomeessentials.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Trusted Home Essentials and how we use it.
          </p>

          <h2>2. Log Files & Analytics</h2>
          <p>
            Trusted Home Essentials follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
          </p>

          <h2>3. Cookies and Web Beacons</h2>
          <p>
            Like any other website, Trusted Home Essentials uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
          </p>

          <h2>4. Amazon Associates Disclosure</h2>
          <p>
            Trusted Home Essentials is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
          </p>

          <h2>5. Third-Party Privacy Policies</h2>
          <p>
            Trusted Home Essentials&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>

          <h2>6. Children&apos;s Information</h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Trusted Home Essentials does not knowingly collect any Personal Identifiable Information from children under the age of 13.
          </p>

          <h2>7. Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at:{" "}
            <a href="mailto:info@trustedhomeessentials.com">info@trustedhomeessentials.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
