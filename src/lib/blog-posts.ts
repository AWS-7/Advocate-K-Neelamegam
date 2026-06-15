export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-do-after-cheque-bounce-india",
    title: "What to Do After a Cheque Bounce in India (NI Act Guide)",
    excerpt:
      "A practical guide on legal steps after receiving a cheque dishonour notice under Section 138 of the Negotiable Instruments Act.",
    category: "NI Act",
    date: "2026-05-10",
    readTime: "6 min read",
    content: [
      "When a cheque is dishonoured, the payee must act quickly. Under Section 138 of the Negotiable Instruments Act (NI Act), you typically have 30 days from the date of dishonour to send a legal demand notice to the drawer.",
      "The notice must demand payment within 15 days. If payment is not made, a criminal complaint can be filed within one month after the expiry of the notice period. Timelines are strict — missing them can weaken or bar your remedy.",
      "Keep all records: the original cheque, bank memo, account statements, and any communication with the drawer. These documents are essential for both criminal proceedings and civil recovery.",
      "An experienced NI Act lawyer can help draft a legally sound notice, file the complaint correctly, and pursue recovery through court. Early legal advice often improves the chances of settlement or successful prosecution.",
    ],
  },
  {
    slug: "bail-application-process-high-court",
    title: "Understanding Bail Applications Before the High Court",
    excerpt:
      "Key factors courts consider in bail matters and how to prepare for anticipatory or regular bail proceedings.",
    category: "Criminal Law",
    date: "2026-04-22",
    readTime: "7 min read",
    content: [
      "Bail is not a matter of right in all offences, especially those involving serious crimes or repeat allegations. Courts examine the nature of the accusation, evidence on record, the role attributed to the accused, and the risk of tampering or absconding.",
      "For anticipatory bail under Section 438 CrPC, applying before arrest is critical. The petition should clearly address the factual background, cooperation with investigation, and ties to the community.",
      "Regular bail applications require strong legal drafting and oral advocacy. Presenting mitigating factors, prior clean record, and medical or family circumstances can influence judicial discretion.",
      "Engaging a criminal defence advocate familiar with High Court practice improves preparation, documentation, and courtroom presentation at the Madurai Bench or other forums.",
    ],
  },
  {
    slug: "property-dispute-resolution-tamil-nadu",
    title: "How Property Disputes Are Resolved in Tamil Nadu Courts",
    excerpt:
      "Partition suits, title disputes, and injunctions — an overview of property litigation strategy.",
    category: "Property Law",
    date: "2026-03-15",
    readTime: "8 min read",
    content: [
      "Property disputes often arise from unclear titles, family partitions, boundary disagreements, or sale agreement breaches. The first step is verifying revenue records, sale deeds, encumbrance certificates, and prior court orders.",
      "Depending on the facts, remedies may include suits for declaration, partition, possession, specific performance, or permanent injunction. Interim relief can protect possession while the main case is pending.",
      "Mediation and negotiated settlement are often effective in family property matters, but litigation becomes necessary when parties cannot agree on shares or title.",
      "A property dispute lawyer evaluates documents, advises on forum selection, and builds a litigation strategy suited to the value and complexity of the land or building involved.",
    ],
  },
  {
    slug: "family-law-divorce-maintenance-custody",
    title: "Family Law in India: Divorce, Maintenance & Child Custody",
    excerpt:
      "Essential information for spouses navigating matrimonial disputes with confidentiality and legal clarity.",
    category: "Family Law",
    date: "2026-02-08",
    readTime: "7 min read",
    content: [
      "Family law matters require both legal precision and sensitivity. Divorce may be pursued through mutual consent or contested proceedings, depending on the grounds available under personal law or special statutes.",
      "Maintenance claims consider the financial needs of the spouse or children, the earning capacity of parties, and standard of living. Interim maintenance can be sought during pending proceedings.",
      "Child custody decisions prioritize the welfare of the child. Courts may grant physical custody to one parent while ensuring visitation rights and shared responsibility where appropriate.",
      "Confidential consultation with a family law advocate helps clarify rights, documentation, and realistic outcomes before initiating court proceedings.",
    ],
  },
  {
    slug: "writ-petition-madras-high-court-madurai-bench",
    title: "When to File a Writ Petition at the Madras High Court Madurai Bench",
    excerpt:
      "Writ remedies under Articles 226 and 227 — when constitutional or administrative action can be challenged.",
    category: "High Court",
    date: "2026-01-20",
    readTime: "6 min read",
    content: [
      "Writ petitions are powerful remedies against illegal orders, inaction, or excess of authority by government bodies and statutory authorities. Common writs include habeas corpus, mandamus, certiorari, prohibition, and quo warranto.",
      "Article 226 of the Constitution empowers High Courts to issue writs for enforcement of fundamental rights and for other purposes. Article 227 provides supervisory jurisdiction over subordinate courts and tribunals.",
      "Writ jurisdiction is extraordinary — petitions must present a clear legal grievance, exhausted alternative remedies where required, and supporting affidavits and documents.",
      "High Court advocates assess whether writ relief is appropriate or whether civil, criminal, or appellate remedies offer a better path for the client's situation.",
    ],
  },
  {
    slug: "choosing-the-right-advocate-for-your-case",
    title: "How to Choose the Right Advocate for Your Legal Case",
    excerpt:
      "Practical tips for selecting a lawyer based on experience, court practice, and case specialization.",
    category: "Legal Tips",
    date: "2025-12-12",
    readTime: "5 min read",
    content: [
      "Choosing the right advocate affects case strategy, timelines, and outcomes. Look for experience in the specific area of law — criminal, civil, family, property, or High Court matters — rather than general claims alone.",
      "Verify chamber location, court practice, and availability for urgent matters. A lawyer regularly appearing before the relevant bench understands procedural nuances and judicial expectations.",
      "Initial consultation should clarify fees, expected stages, documents required, and realistic outcomes. Transparency and ethical communication are signs of a trustworthy advocate.",
      "Client reviews, peer reputation, and responsiveness are useful indicators. For complex litigation, early engagement with an experienced High Court lawyer can prevent costly procedural mistakes.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLatestPosts(count = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
