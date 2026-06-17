const CONTROL_CHARS = /[\u0000-\u001F\u007F]/g;
const HTML_TAG = /<[^>]*>/g;
const SCRIPT_FRAGMENT = /(javascript:|data:text\/html|on\w+\s*=)/gi;

const MAX_NAME_LENGTH = 80;
const MAX_PHONE_LENGTH = 20;

export function sanitizeText(value: string, maxLength = 200): string {
  return value
    .replace(CONTROL_CHARS, "")
    .replace(HTML_TAG, "")
    .replace(SCRIPT_FRAGMENT, "")
    .trim()
    .slice(0, maxLength);
}

export function sanitizePhone(value: string): string {
  return value.replace(/[^\d+\s()-]/g, "").trim().slice(0, MAX_PHONE_LENGTH);
}

export function sanitizeName(value: string): string {
  return sanitizeText(value, MAX_NAME_LENGTH);
}

export type AppointmentInput = {
  name: string;
  phone: string;
  date: string;
  time: string;
  caseType: string;
};

export type SanitizedAppointment = AppointmentInput & {
  isValid: boolean;
  error?: string;
};

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export function validateAppointmentInput(
  input: AppointmentInput,
  allowedTimeSlots: readonly string[] = [],
): SanitizedAppointment {
  const name = sanitizeName(input.name);
  const phone = sanitizePhone(input.phone);
  const date = sanitizeText(input.date, 10);
  const time = sanitizeText(input.time, 8);
  const caseType = sanitizeText(input.caseType, 60);

  if (!name || name.length < 2) {
    return { name, phone, date, time, caseType, isValid: false, error: "Please enter a valid name." };
  }

  if (!phone || phone.replace(/\D/g, "").length < 10) {
    return { name, phone, date, time, caseType, isValid: false, error: "Please enter a valid phone number." };
  }

  if (!DATE_PATTERN.test(date)) {
    return { name, phone, date, time, caseType, isValid: false, error: "Please select a valid date." };
  }

  const selectedDate = new Date(`${date}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (Number.isNaN(selectedDate.getTime()) || selectedDate < today) {
    return { name, phone, date, time, caseType, isValid: false, error: "Appointment date cannot be in the past." };
  }

  if (!allowedTimeSlots.includes(time)) {
    return { name, phone, date, time, caseType, isValid: false, error: "Please select a valid time slot." };
  }

  if (!caseType) {
    return { name, phone, date, time, caseType, isValid: false, error: "Please select a case type." };
  }

  return { name, phone, date, time, caseType, isValid: true };
}

export function safeExternalUrl(url: string, allowedHosts: string[]): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return null;
    if (!allowedHosts.some((host) => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`))) {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}
