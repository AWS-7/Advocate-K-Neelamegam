export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lumbinilawassociates.com";

export const siteConfig = {
  name: "Lumbini Law Associates",
  advocateName: "Advocate K. Neelamegam",
  tagline: "High Court Advocate – Madurai Bench",
  description:
    "Providing trusted legal solutions with professionalism, integrity and confidentiality.",
  phone: "+91 80720 21876",
  phoneHref: "tel:+918072021876",
  whatsapp: "918072021876",
  email: "blue1947law@gmail.com",
  address: {
    line1: "Chamber No. 43, Madurai High Court Buildings",
    city: "Madurai",
    state: "Tamil Nadu",
    pincode: "625023",
    full: "Chamber No. 43, Madurai High Court Buildings, Madurai, Tamil Nadu 625023",
  },
  geo: {
    lat: 9.9535339,
    lng: 78.1863904,
  },
  rating: {
    value: 4.9,
    count: 91,
    label: "91+ Google Reviews",
  },
  availability: "24x7 Available",
  foundingYear: 2003,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Chamber+No+43+Madurai+High+Court+Buildings+Madurai",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Lumbini+Law+Associates+Advocate+K+Neelamegam+Madurai",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=9.9535339,78.1863904",
  whatsappMessage:
    "Hello Advocate K. Neelamegam, I would like to schedule a legal consultation regarding my case.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export const practiceAreas = [
  {
    title: "Criminal Cases",
    description:
      "Strong defense representation for bail, trials, appeals, and regulatory offences before district and High Court.",
    icon: "gavel",
  },
  {
    title: "Civil Cases",
    description:
      "Expert litigation for contractual disputes, recovery suits, and civil rights matters with strategic courtroom advocacy.",
    icon: "scale",
  },
  {
    title: "Family Law",
    description:
      "Sensitive handling of divorce, maintenance, custody, and matrimonial disputes with confidentiality and care.",
    icon: "users",
  },
  {
    title: "Property Disputes",
    description:
      "Resolution of land, title, partition, and real estate conflicts through negotiation and decisive legal action.",
    icon: "building",
  },
  {
    title: "Cheque Bounce (NI Act)",
    description:
      "Swift action under the Negotiable Instruments Act for dishonoured cheques and financial recovery.",
    icon: "fileWarning",
  },
  {
    title: "High Court Matters",
    description:
      "Representation before the Madurai Bench of Madras High Court for writs, appeals, and constitutional issues.",
    icon: "landmark",
  },
] as const;

export const whyChooseUs = [
  "Practicing at Madurai High Court – Chamber No. 43",
  "Client-centric approach",
  "Strong legal knowledge & ethical practice",
  "24x7 client availability",
] as const;

export const infoCards = [
  { label: "Chamber No", value: "43" },
  { label: "Court", value: "Madurai High Court" },
  { label: "Experience", value: "20+ Years" },
  { label: "Availability", value: "24x7" },
] as const;

export const stats = [
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 2000, suffix: "+", label: "Cases Handled" },
  { value: 95, suffix: "%", label: "Success Rate" },
] as const;

export const testimonials = [
  {
    name: "Verified Client",
    text: "Mr. Neelamegam is a very intelligent and calm lawyer. He and his law firm handled every aspect of the case and gave the best resolution. He was very prompt and guides me in the right direction.",
    rating: 5,
  },
  {
    name: "Criminal Defense Client",
    text: "Exceptional legal guidance during a challenging situation. Advocate Neelamegam provided clear advice at every stage — from pre-charge inquiries to the final outcome. Highly recommended.",
    rating: 5,
  },
  {
    name: "Family Law Client",
    text: "Professional, ethical, and always available when needed. Lumbini Law Associates handled my family matter with utmost confidentiality and achieved a fair resolution.",
    rating: 5,
  },
  {
    name: "Property Dispute Client",
    text: "Deep knowledge of property law and strong courtroom presence. The team navigated a complex land dispute efficiently and kept me informed throughout the process.",
    rating: 5,
  },
  {
    name: "NI Act Case Client",
    text: "Quick and effective handling of my cheque bounce case. Advocate Neelamegam's expertise in financial litigation delivered results within the expected timeline.",
    rating: 5,
  },
] as const;

export const footerPracticeAreas = practiceAreas.map((area) => area.title);

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
