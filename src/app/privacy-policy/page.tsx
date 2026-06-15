import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} — how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <main className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Link href="/" className="text-sm font-medium text-gold hover:text-navy">
            &larr; Back to Home
          </Link>
          <h1 className="mt-6 font-heading text-3xl font-bold text-navy md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>

          <div className="prose-policy mt-10 space-y-8 text-base leading-relaxed text-muted">
            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">1. Introduction</h2>
              <p className="mt-3">
                {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) operated by{" "}
                {siteConfig.advocateName}, is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website or contact us for legal services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">2. Information We Collect</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Contact details: name, phone number, email address</li>
                <li>Appointment information: preferred date, time, and case type</li>
                <li>Communications via phone, WhatsApp, email, or contact forms</li>
                <li>Technical data: IP address, browser type, pages visited (via analytics if enabled)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">3. How We Use Your Information</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>To respond to legal consultation requests and appointment bookings</li>
                <li>To provide legal services and communicate about your matter</li>
                <li>To improve our website and client experience</li>
                <li>To comply with legal and professional obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">4. Confidentiality</h2>
              <p className="mt-3">
                Information shared for the purpose of legal consultation is treated with strict
                confidentiality subject to applicable advocate-client privilege and professional
                ethics rules governing legal practice in India.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">5. WhatsApp Communications</h2>
              <p className="mt-3">
                When you contact us via WhatsApp, your messages are processed through WhatsApp&apos;s
                platform. Pre-filled messages from our website are customizable before you send them.
                We recommend not sharing highly sensitive documents via WhatsApp without encryption
                or prior agreement on secure communication methods.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">6. Data Sharing</h2>
              <p className="mt-3">
                We do not sell your personal information. We may share information only when required
                by law, court order, or with your explicit consent for your legal representation.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">7. Data Security</h2>
              <p className="mt-3">
                We implement reasonable administrative and technical measures to protect your
                information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-navy">8. Your Rights</h2>
              <p className="mt-3">
                You may request access, correction, or deletion of your personal data by contacting
                us at {siteConfig.email} or {siteConfig.phone}.
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
