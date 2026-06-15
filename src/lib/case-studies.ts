export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  outcome: string;
  challenge: string;
  approach: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "criminal-bail-high-court",
    title: "Anticipatory Bail Secured in Serious Criminal Allegation",
    category: "Criminal Law",
    outcome: "Bail Granted",
    challenge:
      "The client faced a non-bailable offence allegation with risk of arrest before investigation concluded. Family and business operations were at immediate risk.",
    approach:
      "A detailed anticipatory bail petition was prepared highlighting cooperation with investigation, clean antecedents, and absence of flight risk. Supporting affidavits and documentary evidence were filed before the Madurai Bench.",
    result:
      "The High Court granted anticipatory bail with reasonable conditions, allowing the client to participate in the investigation without custody.",
  },
  {
    id: "ni-act-recovery",
    title: "Successful Recovery in Cheque Bounce (NI Act) Matter",
    category: "NI Act",
    outcome: "Settlement Achieved",
    challenge:
      "A business creditor received repeated cheque dishonours totalling a substantial amount. The drawer delayed payment despite prior assurances.",
    approach:
      "A legally compliant Section 138 demand notice was issued within the statutory period, followed by complaint proceedings. Parallel negotiation was pursued for faster recovery.",
    result:
      "The matter concluded with a structured settlement and full recovery of the principal amount, avoiding prolonged trial.",
  },
  {
    id: "property-partition-suit",
    title: "Family Property Partition Resolved Through Litigation",
    category: "Property Law",
    outcome: "Favourable Decree",
    challenge:
      "Co-owners disputed ancestral property shares after an informal family arrangement broke down. Possession and revenue records were inconsistent.",
    approach:
      "Title documents and revenue records were verified, a partition suit was filed with interim protection, and expert evidence on boundaries was obtained where necessary.",
    result:
      "The court passed a decree defining shares and directing partition, providing the client clear title and possession rights.",
  },
  {
    id: "family-maintenance-custody",
    title: "Maintenance & Custody Relief in Matrimonial Dispute",
    category: "Family Law",
    outcome: "Interim Relief Granted",
    challenge:
      "A spouse with minor children sought interim maintenance and stable custody arrangements during pending divorce proceedings amid financial hardship.",
    approach:
      "Interim maintenance and custody applications were filed with supporting financial statements, school records, and welfare-focused arguments for the children.",
    result:
      "The family court granted interim maintenance and a custody-visitation schedule protecting the children's welfare while the main case continued.",
  },
  {
    id: "civil-injunction-commercial",
    title: "Injunction Upheld in Commercial Contract Dispute",
    category: "Civil Law",
    outcome: "Injunction Continued",
    challenge:
      "A contractor faced wrongful termination and threatened blacklisting that would damage an ongoing commercial project and reputation.",
    approach:
      "An application for interim injunction was filed along with the main civil suit, demonstrating prima facie case, balance of convenience, and irreparable injury.",
    result:
      "The court restrained adverse action pending trial, preserving the client's contractual position and project continuity.",
  },
  {
    id: "writ-administrative-order",
    title: "Writ Relief Against Arbitrary Administrative Order",
    category: "High Court",
    outcome: "Order Quashed",
    challenge:
      "A statutory order adversely affected the client's professional licence without adequate notice or opportunity of hearing.",
    approach:
      "A writ petition under Article 226 was filed challenging procedural illegality and violation of principles of natural justice, with relevant administrative records annexed.",
    result:
      "The High Court set aside the impugned order and directed the authority to pass a fresh speaking order after hearing the client.",
  },
];
