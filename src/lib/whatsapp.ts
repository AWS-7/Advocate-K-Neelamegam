export type AppointmentDetails = {
  name: string;
  phone: string;
  date: string;
  time: string;
  caseType: string;
  notes?: string;
};

export type WhatsAppTemplateKey =
  | "default"
  | "consultation"
  | "appointment"
  | "criminal"
  | "civil"
  | "family"
  | "property"
  | "niAct"
  | "highCourt";

const templates = {
  default:
    "Hello Advocate K. Neelamegam, I would like to schedule a legal consultation regarding my case.",
  consultation:
    "Hello Advocate K. Neelamegam, I need a confidential legal consultation. Please let me know your available time.",
  criminal:
    "Hello Advocate K. Neelamegam, I need legal assistance for a criminal matter. Please guide me on the next steps.",
  civil:
    "Hello Advocate K. Neelamegam, I have a civil litigation matter and would like to discuss it with you.",
  family:
    "Hello Advocate K. Neelamegam, I need help with a family law matter (divorce/custody/maintenance). Please advise.",
  property:
    "Hello Advocate K. Neelamegam, I have a property or land dispute and need legal representation.",
  niAct:
    "Hello Advocate K. Neelamegam, I need assistance with a cheque bounce case under the NI Act.",
  highCourt:
    "Hello Advocate K. Neelamegam, I need representation for a High Court writ/appeal matter at the Madurai Bench.",
} as const;

export function buildAppointmentMessage(details: AppointmentDetails): string {
  return [
    "Hello Advocate K. Neelamegam,",
    "",
    "I would like to book a legal consultation appointment:",
    "",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Preferred Date: ${details.date}`,
    `Preferred Time: ${details.time}`,
    `Case Type: ${details.caseType}`,
    details.notes ? `Notes: ${details.notes}` : "",
    "",
    "Please confirm my appointment. Thank you.",
  ]
    .filter(Boolean)
    .join("\n");
}

export function getWhatsAppMessage(
  key: WhatsAppTemplateKey = "default",
  appointment?: AppointmentDetails,
): string {
  if (key === "appointment" && appointment) {
    return buildAppointmentMessage(appointment);
  }
  return templates[key === "appointment" ? "default" : key];
}

export function getWhatsAppUrl(
  messageOrKey?: string | WhatsAppTemplateKey,
  appointment?: AppointmentDetails,
) {
const WHATSAPP_NUMBER = "918072021876";

  let message: string;
  if (!messageOrKey) {
    message = templates.default;
  } else if (messageOrKey in templates) {
    message = getWhatsAppMessage(messageOrKey as WhatsAppTemplateKey, appointment);
  } else {
    message = messageOrKey;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const caseTypeWhatsAppMap: Record<string, WhatsAppTemplateKey> = {
  "Criminal Cases": "criminal",
  "Civil Cases": "civil",
  "Family Law": "family",
  "Property Disputes": "property",
  "Cheque Bounce (NI Act)": "niAct",
  "High Court Matters": "highCourt",
};

export const appointmentTimeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
] as const;
