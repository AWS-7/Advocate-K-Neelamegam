export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumbinilawassociates.in";

export const SITE_DOMAIN = "lumbinilawassociates.in";
export const SITE_WWW_DOMAIN = "www.lumbinilawassociates.in";
export const SITE_DOMAINS = [SITE_DOMAIN, SITE_WWW_DOMAIN] as const;

export const siteConfig = {
  name: "Lumbini Law Associates",
  founderName: "K. Nelamegam",
  advocateName: "Advocate K. Neelamegam",
  tagline: "High Court Advocate – Madurai Bench",
  description:
    "Experienced High Court advocate specializing in criminal defense, civil litigation, family law, property disputes, NI Act cases, and constitutional matters — trusted legal solutions with integrity.",
  phone: "+91 80720 21876",
  phoneDisplay: "080720 21876",
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
  whatsappMessages: {
    default:
      "Hello Advocate K. Neelamegam, I would like to schedule a legal consultation regarding my case.",
    consultation:
      "Hello, I would like to request a free legal consultation at Lumbini Law Associates. Please let me know your available time.",
    appointment:
      "Hello Advocate K. Neelamegam, I would like to book an appointment.\n\nName: {name}\nPhone: {phone}\nDate: {date}\nTime: {time}\nCase Type: {caseType}\n\nPlease confirm my slot. Thank you.",
    criminal:
      "Hello, I need legal assistance for a criminal matter. Please guide me on the next steps.",
    civil: "Hello, I have a civil litigation matter and need legal advice.",
    family: "Hello, I need confidential consultation for a family law matter.",
    property: "Hello, I need legal help regarding a property dispute.",
    niAct: "Hello, I need assistance with a cheque bounce (NI Act) case.",
    highCourt: "Hello, I need representation for a High Court matter at Madurai Bench.",
    floatingButton:
      "Hello Advocate K. Neelamegam, I visited your website and would like to speak with you regarding my legal matter.",
    autoReplyNote:
      "Thank you for contacting Lumbini Law Associates. We have received your message and will respond shortly. For urgent matters, please call 080720 21876.",
  },
  heroMotto: "Justice, Integrity & Trusted Legal Advocacy",
  locationLabel: "Madurai, Tamil Nadu",
  seo: {
    title:
      "Advocate K. Neelamegam | High Court Lawyer | Criminal, Civil & Family Law Advocate | Lumbini Law Associates",
    description:
      "Advocate K. Neelamegam — experienced High Court lawyer for criminal defense, civil litigation, family law, property disputes, NI Act & writ petitions. Lumbini Law Associates, Madras High Court Madurai Bench. 20+ years. 4.9★ rated. Call 080720 21876.",
    heroSubtitle:
      "High Court Advocate — Criminal, Civil, Family & Constitutional Law Specialist",
    nationalHeadline:
      "Expert Legal Representation Across Criminal, Civil, Family & High Court Matters",
  },
  developer: {
    name: "AWS Agni Web Solution",
    phone: "9080700642",
    phoneHref: "tel:+919080700642",
  },
};

export const seoKeywords = [
  // High Court & National
  "high court advocate",
  "high court lawyer india",
  "madras high court advocate",
  "madras high court lawyer",
  "constitutional lawyer india",
  "writ petition lawyer",
  "criminal defense lawyer",
  "criminal lawyer india",
  "civil litigation lawyer",
  "civil lawyer tamil nadu",
  "family court lawyer",
  "divorce lawyer",
  "family law advocate",
  "property dispute lawyer",
  "land dispute lawyer",
  "cheque bounce lawyer",
  "NI act lawyer india",
  "bail lawyer",
  "legal consultant india",
  "law firm tamil nadu",
  "experienced advocate india",
  "best lawyer tamil nadu",
  "court case lawyer",
  "legal services india",
  // Practice-specific
  "criminal appeal lawyer",
  "civil suit lawyer",
  "matrimonial lawyer",
  "maintenance case lawyer",
  "custody case lawyer",
  "real estate lawyer",
  "financial litigation lawyer",
  "regulatory offence lawyer",
  "high court appeal lawyer",
  // Brand & Attorney
  "Advocate K Neelamegam",
  "Advocate K. Neelamegam",
  "Lumbini Law Associates",
  "Lumbini Law Associates advocate",
  // Local (secondary)
  "madurai advocate",
  "advocate in madurai",
  "madurai high court advocate",
  "lawyer madurai",
  "chamber 43 madurai high court",
] as const;

export const faqItems = [
  {
    question: "What types of cases does Advocate K. Neelamegam handle?",
    answer:
      "Advocate K. Neelamegam at Lumbini Law Associates handles criminal defense, civil litigation, family law (divorce, custody, maintenance), property and land disputes, cheque bounce cases under the NI Act, High Court writs, appeals, and constitutional matters before the Madras High Court Madurai Bench and district courts.",
  },
  {
    question: "Who is a trusted High Court advocate for criminal and civil cases?",
    answer:
      "Advocate K. Neelamegam is an experienced High Court lawyer with 20+ years of courtroom practice, specializing in criminal defense, civil suits, bail applications, appeals, and regulatory offences. Lumbini Law Associates is rated 4.9 stars with 91+ Google reviews.",
  },
  {
    question: "How do I hire a lawyer for a family law or divorce case?",
    answer:
      "Contact Lumbini Law Associates for confidential family law consultation. Advocate K. Neelamegam handles divorce, maintenance, child custody, and matrimonial disputes with sensitivity, ethical practice, and strong courtroom advocacy.",
  },
  {
    question: "Can Advocate K. Neelamegam help with cheque bounce (NI Act) cases?",
    answer:
      "Yes. Lumbini Law Associates provides swift legal action under the Negotiable Instruments Act for dishonoured cheques and financial recovery, with expertise in NI Act litigation and debt recovery proceedings.",
  },
  {
    question: "Where is Lumbini Law Associates located?",
    answer:
      "Lumbini Law Associates is located at Chamber No. 43, Madurai High Court Buildings, Madurai, Tamil Nadu 625023 — practicing at the Madurai Bench of the Madras High Court.",
  },
  {
    question: "How can I schedule a legal consultation?",
    answer:
      "Call +91 80720 21876, WhatsApp for instant consultation, or email blue1947law@gmail.com. The firm offers 24x7 availability for urgent criminal, civil, and High Court legal matters.",
  },
  {
    question: "Does Lumbini Law Associates handle property and land dispute cases?",
    answer:
      "Yes. Advocate K. Neelamegam resolves property disputes including land title issues, partition suits, real estate conflicts, and ownership disputes through negotiation and decisive court action across Tamil Nadu.",
  },
  {
    question: "Who is the best advocate in Madurai for High Court matters?",
    answer:
      "Advocate K. Neelamegam at Lumbini Law Associates, Chamber No. 43, Madurai High Court, is among the most trusted advocates in Madurai for High Court writs, criminal appeals, civil litigation, and constitutional cases.",
  },
] as const;

export const appointmentSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
] as const;

export const heroFeatureTags = [
  { icon: "scale", text: "High Court Matters" },
  { icon: "gavel", text: "Criminal & Civil" },
  { icon: "shield", text: "Ethical Practice" },
  { icon: "clock", text: "24x7 Available" },
  { icon: "users", text: "Family Law" },
  { icon: "building", text: "Property Disputes" },
  { icon: "file", text: "NI Act Cases" },
  { icon: "map", text: "Chamber No. 43" },
] as const;

export const modernSearchCards = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    description:
      "Helping potential clients find Lumbini Law Associates through Google search with an optimized legal website structure.",
    features: [
      "Legal service keyword optimization",
      "Search engine friendly content",
      "Fast loading website performance",
      "Mobile responsive design",
      "Location based SEO optimization",
      "Optimized practice area pages",
      "Better online visibility",
    ],
    link: { label: "Practice Areas", href: "#practice-areas" },
  },
  {
    id: "aeo",
    title: "Answer Engine Optimization (AEO)",
    description:
      "Helping search engines and AI assistants understand legal services and provide accurate answers to client queries.",
    features: [
      "FAQ based legal content",
      "Question focused optimization",
      "Structured legal information",
      "Schema markup implementation",
      "Voice search optimization",
      "Clear legal service explanations",
    ],
    link: { label: "Legal FAQ", href: "#faq" },
  },
  {
    id: "geo",
    title: "Generative Engine Optimization (GEO)",
    description:
      "Preparing Lumbini Law Associates website for AI-driven search experiences and future digital discovery.",
    features: [
      "AI-friendly content structure",
      "Authority focused legal content",
      "Expertise and trust signals",
      "Detailed practice area information",
      "Natural language content",
      "Better AI search understanding",
    ],
    link: { label: "Legal Insights", href: "/blog" },
  },
] as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Practice Areas", href: "#practice-areas", hasDropdown: true },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "/blog", isPage: true },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const heroCarouselSlides = [
  {
    src: "/images/advocate-cutout.png",
    alt: "Advocate K. Neelamegam — Best High Court Advocate in Madurai",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Madurai_High_Court_Building.jpg/1280px-Madurai_High_Court_Building.jpg",
    alt: "Madurai High Court Buildings",
  },
  {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    alt: "Scales of justice — legal authority",
  },
  {
    src: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1200&q=80",
    alt: "Courtroom gavel and legal practice",
  },
] as const;

// Gallery images live in src/lib/gallery-data.ts (optimized WebP + blur placeholders).

export const practiceAreas = [
  {
    slug: "criminal-cases",
    title: "Criminal Cases",
    description:
      "Strong defense representation for bail, trials, appeals, and regulatory offences before district and High Court.",
    icon: "gavel",
    whatsappKey: "criminal",
  },
  {
    slug: "civil-cases",
    title: "Civil Cases",
    description:
      "Expert litigation for contractual disputes, recovery suits, and civil rights matters with strategic courtroom advocacy.",
    icon: "scale",
    whatsappKey: "civil",
  },
  {
    slug: "family-law",
    title: "Family Law",
    description:
      "Sensitive handling of divorce, maintenance, custody, and matrimonial disputes with confidentiality and care.",
    icon: "users",
    whatsappKey: "family",
  },
  {
    slug: "property-disputes",
    title: "Property Disputes",
    description:
      "Resolution of land, title, partition, and real estate conflicts through negotiation and decisive legal action.",
    icon: "building",
    whatsappKey: "property",
  },
  {
    slug: "cheque-bounce-ni-act",
    title: "Cheque Bounce (NI Act)",
    description:
      "Swift action under the Negotiable Instruments Act for dishonoured cheques and financial recovery.",
    icon: "fileWarning",
    whatsappKey: "niAct",
  },
  {
    slug: "high-court-matters",
    title: "High Court Matters",
    description:
      "Representation before the Madurai Bench of Madras High Court for writs, appeals, and constitutional issues.",
    icon: "landmark",
    whatsappKey: "highCourt",
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

export function getWhatsAppUrl(messageOrKey?: string): string {
  const messages = siteConfig.whatsappMessages;
  const isKey =
    messageOrKey &&
    messageOrKey in messages &&
    messageOrKey !== "autoReplyNote";
  const text = isKey
    ? messages[messageOrKey as keyof typeof messages]
    : messageOrKey ?? messages.default;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function buildAppointmentWhatsApp(data: {
  name: string;
  phone: string;
  date: string;
  time: string;
  caseType: string;
}) {
  let message = siteConfig.whatsappMessages.appointment;
  message = message
    .replace("{name}", data.name)
    .replace("{phone}", data.phone)
    .replace("{date}", data.date)
    .replace("{time}", data.time)
    .replace("{caseType}", data.caseType);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getPracticeAreaHref(slug: string) {
  return `/#area-${slug}`;
}
