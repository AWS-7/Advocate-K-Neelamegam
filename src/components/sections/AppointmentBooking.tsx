"use client";

import { useState } from "react";
import { Calendar, MessageCircle, Send } from "lucide-react";
import { practiceAreas } from "@/lib/site-data";
import {
  appointmentTimeSlots,
  caseTypeWhatsAppMap,
  getWhatsAppUrl,
  type AppointmentDetails,
} from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";

function getMinDate() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

export function AppointmentBooking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: appointmentTimeSlots[0],
    caseType: practiceAreas[0].title,
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details: AppointmentDetails = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      date: form.date,
      time: form.time,
      caseType: form.caseType,
      notes: form.notes.trim() || undefined,
    };

    const url = getWhatsAppUrl("appointment", {
      ...details,
    });

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const quickWhatsApp = () => {
    const key = caseTypeWhatsAppMap[form.caseType] ?? "consultation";
    window.open(getWhatsAppUrl(key), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="appointment"
      className="bg-grey-soft py-16 md:py-24"
      aria-label="Book a legal consultation"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          title="Book a Legal Consultation"
          subtitle="Select your preferred date and time. Your appointment request will be sent via WhatsApp with a customized message to Advocate K. Neelamegam."
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="appt-name" className="mb-1.5 block text-sm font-medium text-navy">
                  Full Name *
                </label>
                <input
                  id="appt-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-lg border border-navy/15 px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="appt-phone" className="mb-1.5 block text-sm font-medium text-navy">
                  Phone Number *
                </label>
                <input
                  id="appt-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-lg border border-navy/15 px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="appt-case" className="mb-1.5 block text-sm font-medium text-navy">
                Case Type *
              </label>
              <select
                id="appt-case"
                value={form.caseType}
                onChange={(e) => update("caseType", e.target.value)}
                className="w-full rounded-lg border border-navy/15 px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              >
                {practiceAreas.map((area) => (
                  <option key={area.slug} value={area.title}>
                    {area.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="appt-date" className="mb-1.5 block text-sm font-medium text-navy">
                  Preferred Date *
                </label>
                <input
                  id="appt-date"
                  type="date"
                  required
                  min={getMinDate()}
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="w-full rounded-lg border border-navy/15 px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="appt-time" className="mb-1.5 block text-sm font-medium text-navy">
                  Preferred Time *
                </label>
                <select
                  id="appt-time"
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                  className="w-full rounded-lg border border-navy/15 px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                >
                  {appointmentTimeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="appt-notes" className="mb-1.5 block text-sm font-medium text-navy">
                Brief Case Details (optional)
              </label>
              <textarea
                id="appt-notes"
                rows={3}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className="w-full resize-none rounded-lg border border-navy/15 px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                placeholder="Short description of your legal matter..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b8922a] sm:w-auto"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Appointment via WhatsApp
            </button>

            {submitted && (
              <p className="text-sm text-gold" role="status">
                WhatsApp opened with your appointment details. Please send the message to confirm.
              </p>
            )}
          </form>

          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-navy/10 bg-white p-5">
              <div className="flex items-center gap-3 text-navy">
                <Calendar className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold">Office Hours</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>Monday – Saturday: 10:00 AM – 6:00 PM</li>
                <li>Sunday: By appointment</li>
                <li>Urgent matters: 24x7 via phone/WhatsApp</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-navy p-5 text-white">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold">Quick WhatsApp</h3>
              </div>
              <p className="mt-3 text-sm text-white/75">
                Message auto-customizes based on your selected case type — criminal, civil,
                family, property, NI Act, or High Court matter.
              </p>
              <button
                type="button"
                onClick={quickWhatsApp}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
