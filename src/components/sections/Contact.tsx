import { Phone, Mail, MapPin, MessageCircle, Navigation } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AppointmentBooking } from "@/components/sections/AppointmentBooking";

export function Contact() {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${siteConfig.geo.lat},${siteConfig.geo.lng}&z=15&output=embed`;

  return (
    <section
      id="contact"
      className="bg-white py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          title="Contact Advocate"
          subtitle="Schedule a confidential consultation with Advocate K. Neelamegam for criminal, civil, family, property, and High Court legal matters. Available 24x7."
        />

        <div className="mb-10">
          <AppointmentBooking />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="rounded-xl border border-navy/10 bg-grey-soft p-6">
              <h3 className="font-heading text-xl font-semibold text-navy">Get in Touch</h3>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={siteConfig.phoneHref}
                    className="group flex items-start gap-4 transition-colors hover:text-gold"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                      <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-muted">Phone</p>
                      <p className="font-semibold text-navy group-hover:text-gold">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppUrl("consultation")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 transition-colors hover:text-gold"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                      <MessageCircle className="h-5 w-5 text-gold" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-muted">WhatsApp</p>
                      <p className="font-semibold text-navy group-hover:text-gold">
                        Chat for Consultation
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-start gap-4 transition-colors hover:text-gold"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                      <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-muted">Email</p>
                      <p className="font-semibold text-navy group-hover:text-gold">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted">Office Address</p>
                    <address className="mt-1 not-italic font-semibold leading-relaxed text-navy">
                      {siteConfig.address.full}
                    </address>
                  </div>
                </li>
              </ul>
            </div>

            <Button
              href={siteConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Navigation className="h-5 w-5" aria-hidden="true" />
              Get Directions
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl border border-navy/10 shadow-lg">
            <iframe
              title="Madurai High Court Bench location map"
              src={mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[350px] w-full md:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
