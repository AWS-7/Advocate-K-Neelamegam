import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SITE_URL, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} — how we collect, use, and protect your personal information.`,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <main className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Link href="/" className="text-sm font-medium text-gold hover:underline">
            ← Back to Home
          </Link>

          <h1 className="mt-6 font-heading text-3xl font-bold text-navy md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted">
            Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </p>

          <div className="prose-policy mt-10 space-y-8 text-base leading-relaxed text-muted">
            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">1. Introduction</h2>
              <p className="mt-3">
                {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operated
                by {siteConfig.advocateName}, respects your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you visit our website
                or contact us for legal services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                2. Information We Collect
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-navy">Contact information:</strong> name, phone number,
                  email address provided via contact forms, WhatsApp, phone calls, or appointment
                  booking.
                </li>
                <li>
                  <strong className="text-navy">Case-related information:</strong> details you
                  voluntarily share about your legal matter during consultation.
                </li>
                <li>
                  <strong className="text-navy">Technical data:</strong> IP address, browser type,
                  device information, and usage data collected through cookies or analytics tools.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                3. How We Use Your Information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>To respond to enquiries and schedule legal consultations</li>
                <li>To provide legal advice and representation</li>
                <li>To communicate regarding your case or appointment</li>
                <li>To improve our website and services</li>
                <li>To comply with applicable laws and professional obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                4. Attorney-Client Confidentiality
              </h2>
              <p className="mt-3">
                Information shared for the purpose of seeking legal advice is treated with strict
                confidentiality subject to applicable advocate-client privilege and professional
                ethics rules. Merely contacting us does not create an advocate-client relationship
                until formally agreed.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">
                5. Sharing of Information
              </h2>
              <p className="mt-3">
                We do not sell your personal data. We may share information only when required by
                law, court order, or with your consent — for example, with co-counsel, experts, or
                courts in connection with your matter.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">6. Data Security</h2>
              <p className="mt-3">
                We implement reasonable administrative and technical measures to protect your
                information. However, no internet transmission is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">7. Third-Party Links</h2>
              <p className="mt-3">
                Our website may link to third-party services such as Google Maps or WhatsApp. We are
                not responsible for the privacy practices of those external platforms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">8. Your Rights</h2>
              <p className="mt-3">
                You may request access, correction, or deletion of your personal information by
                contacting us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                  {siteConfig.email}
                </a>{" "}
                or {siteConfig.phone}.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">9. Contact Us</h2>
              <p className="mt-3">
                {siteConfig.name}
                <br />
                {siteConfig.address.full}
                <br />
                Phone: {siteConfig.phone}
                <br />
                Email: {siteConfig.email}
              </p>
            </section>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
