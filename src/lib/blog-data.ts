export const blogPosts = [
  {
    slug: "what-to-do-after-cheque-bounce",
    title: "What to Do After a Cheque Bounce in India",
    excerpt:
      "A dishonoured cheque can lead to NI Act proceedings. Learn the legal steps, timelines, and how to protect your financial interests.",
    category: "NI Act",
    readTime: "5 min read",
    date: "2026-05-10",
    author: "Advocate K. Neelamegam",
    content: `
A cheque bounce is not merely a banking inconvenience — it can trigger serious legal consequences under the Negotiable Instruments Act, 1881 (NI Act). Whether you are the complainant or the accused, understanding the correct legal steps is essential.

## Legal Notice Within 30 Days

The payee must send a legal demand notice to the drawer within 30 days of receiving the return memo from the bank. The notice must demand payment within 15 days. Failure to send this notice correctly can weaken or invalidate the complaint.

## Filing a Complaint

If payment is not made within 15 days of the notice, a criminal complaint can be filed within one month. Courts take cheque dishonour cases seriously as they affect commercial trust and financial stability.

## Defences Available

Common defences include lack of legally enforceable debt, stop-payment instructions with valid reasons, and procedural defects in the notice. Each case requires careful factual and documentary analysis.

## Why Early Legal Advice Matters

Early consultation with an experienced NI Act lawyer helps preserve evidence, draft effective notices, and choose the right forum. At Lumbini Law Associates, we handle cheque bounce matters with swift, strategic action.

*This article is for general information only and does not constitute legal advice. Consult an advocate for your specific case.*
    `.trim(),
  },
  {
    slug: "bail-application-guide-tamil-nadu",
    title: "Bail Application Guide: Criminal Cases in Tamil Nadu",
    excerpt:
      "Understand regular bail, anticipatory bail, and the factors courts consider before granting bail in criminal proceedings.",
    category: "Criminal Law",
    readTime: "6 min read",
    date: "2026-04-22",
    author: "Advocate K. Neelamegam",
    content: `
Bail is one of the most urgent concerns in criminal litigation. The right to personal liberty under Article 21 of the Constitution must be balanced against the interests of justice and society.

## Types of Bail

- **Regular Bail** — After arrest and custody
- **Anticipatory Bail** — Before arrest, under Section 438 CrPC
- **Interim Bail** — Short-term relief pending final orders

## Factors Courts Consider

Courts examine the nature and gravity of the offence, criminal antecedents, risk of tampering with evidence, likelihood of fleeing, and whether the accused will cooperate with investigation.

## High Court vs Sessions Court

Serious offences and anticipatory bail matters often require skilled advocacy before the Sessions Court or High Court. Proper drafting and oral arguments significantly influence outcomes.

## Practical Advice

If you or a family member faces arrest or police summons, contact a criminal defence lawyer immediately. Delay can limit available remedies.

*This article is for general information only and does not constitute legal advice.*
    `.trim(),
  },
  {
    slug: "property-dispute-resolution-india",
    title: "How Property Disputes Are Resolved in Indian Courts",
    excerpt:
      "Title disputes, partition suits, and boundary conflicts — a practical overview of property litigation in Tamil Nadu.",
    category: "Property Law",
    readTime: "7 min read",
    date: "2026-03-15",
    author: "Advocate K. Neelamegam",
    content: `
Property disputes are among the most common civil cases in India. They often involve family inheritance, unclear titles, encroachment, or failed agreements.

## Common Dispute Types

- Partition of ancestral property
- Title and ownership conflicts
- Boundary and encroachment issues
- Specific performance of sale agreements
- Tenant and landlord disputes

## Documents That Matter

Sale deeds, patta, chitta, adangal, encumbrance certificates, tax receipts, and prior court orders form the backbone of property litigation. Gathering documents early strengthens your position.

## Court Process

Many disputes begin in district courts. Appeals and revisions may reach the High Court. Mediation and settlement are often encouraged but must be approached with legal guidance.

## Protecting Your Rights

Never sign settlement documents or relinquish possession without legal review. Property matters involve long-term financial consequences.

*This article is for general information only and does not constitute legal advice.*
    `.trim(),
  },
  {
    slug: "family-law-divorce-custody-basics",
    title: "Family Law Basics: Divorce, Maintenance & Child Custody",
    excerpt:
      "Key legal concepts in matrimonial disputes — grounds for divorce, maintenance rights, and child welfare principles.",
    category: "Family Law",
    readTime: "6 min read",
    date: "2026-02-08",
    author: "Advocate K. Neelamegam",
    content: `
Family law matters require both legal expertise and sensitivity. Divorce, maintenance, and custody cases affect families deeply and must be handled with confidentiality and care.

## Divorce Proceedings

Divorce may be sought by mutual consent or contested grounds under personal laws and the Special Marriage Act. Jurisdiction, residency requirements, and cooling-off periods vary by statute.

## Maintenance & Alimony

Courts consider income, standard of living, duration of marriage, and needs of dependents. Interim maintenance can be sought during pending proceedings.

## Child Custody

The welfare of the child is the paramount consideration. Courts may grant physical custody, visitation rights, and guardianship arrangements suited to the child's best interests.

## Confidential Consultation

Family disputes benefit from early legal advice to explore settlement, mediation, and litigation strategy. Lumbini Law Associates handles matrimonial matters with discretion and professionalism.

*This article is for general information only and does not constitute legal advice.*
    `.trim(),
  },
] as const;

export type BlogPost = (typeof blogPosts)[number];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
