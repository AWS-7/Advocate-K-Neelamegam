"use client";

import { useState } from "react";
import { Calendar, Clock, MessageCircle, User, Phone } from "lucide-react";
import {
  appointmentSlots,
  buildAppointmentWhatsApp,
  practiceAreas,
  siteConfig,
} from "@/lib/site-data";
import { validateAppointmentInput } from "@/lib/security/sanitize";
import { cn } from "@/lib/utils";

const caseTypeOptions = [
  ...practiceAreas.map((a) => a.title),
  "Other",
] as const;

export function AppointmentBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [caseType, setCaseType] = useState<string>(caseTypeOptions[0]);
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validated = validateAppointmentInput(
      { name, phone, date, time, caseType },
      appointmentSlots,
    );

    if (!validated.isValid) {
      setError(validated.error ?? "Please fill in all required fields and select a time slot.");
      return;
    }

    setError("");
    const url = buildAppointmentWhatsApp({
      name: validated.name,
      phone: validated.phone,
      date: validated.date,
      time: validated.time,
      caseType: validated.caseType,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="book-appointment"
      className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm md:p-6"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15">
          <Calendar className="h-5 w-5 text-gold" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-heading text-lg font-semibold text-navy md:text-xl">
            Book Appointment
          </h3>
          <p className="text-sm text-muted">Select date &amp; time — confirm via WhatsApp</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="appt-name" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy">
              <User className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Your Name *
            </label>
            <input
              id="appt-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full name"
              className="w-full rounded-lg border border-navy/15 bg-grey-soft/50 px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </div>
          <div>
            <label htmlFor="appt-phone" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy">
              <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Phone Number *
            </label>
            <input
              id="appt-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="10-digit mobile"
              className="w-full rounded-lg border border-navy/15 bg-grey-soft/50 px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="appt-date" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy">
              <Calendar className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Preferred Date *
            </label>
            <input
              id="appt-date"
              type="date"
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full rounded-lg border border-navy/15 bg-grey-soft/50 px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </div>
          <div>
            <label htmlFor="appt-case" className="mb-1.5 text-sm font-medium text-navy">
              Case Type *
            </label>
            <select
              id="appt-case"
              value={caseType}
              onChange={(e) => setCaseType(e.target.value)}
              className="w-full rounded-lg border border-navy/15 bg-grey-soft/50 px-3.5 py-2.5 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            >
              {caseTypeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <p className="mb-2 flex items-center gap-1.5 text-sm font-medium text-navy">
            <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            Available Time Slots *
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {appointmentSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                className={cn(
                  "rounded-lg border px-2 py-2 text-xs font-medium transition-colors sm:text-sm",
                  time === slot
                    ? "border-gold bg-gold text-white"
                    : "border-navy/15 bg-grey-soft/50 text-navy hover:border-gold/50",
                )}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a] sm:w-auto"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Confirm via WhatsApp
        </button>

        <p className="text-xs leading-relaxed text-muted">
          <span className="font-medium text-navy">Auto-reply note:</span>{" "}
          {siteConfig.whatsappMessages.autoReplyNote}
        </p>
      </form>
    </div>
  );
}
