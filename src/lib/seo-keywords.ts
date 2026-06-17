const LOCATIONS = [
  "madurai",
  "tamil nadu",
  "tamilnadu",
  "india",
  "indian",
  "chennai",
  "coimbatore",
  "trichy",
  "sivakasi",
  "virudhunagar",
  "ramanathapuram",
  "dindigul",
  "theni",
  "kanyakumari",
  "tirunelveli",
  "salem",
  "erode",
  "madras",
] as const;

const MODIFIERS = [
  "best",
  "top",
  "experienced",
  "trusted",
  "leading",
  "expert",
  "famous",
  "good",
  "reputed",
  "professional",
  "senior",
  "renowned",
  "skilled",
  "qualified",
  "affordable",
  "near me",
  "nearby",
  "local",
] as const;

const ROLES = [
  "advocate",
  "lawyer",
  "attorney",
  "legal advisor",
  "counsel",
  "barrister",
  "solicitor",
  "legal consultant",
] as const;

const PRACTICES = [
  "criminal",
  "civil",
  "family",
  "divorce",
  "property",
  "bail",
  "high court",
  "cheque bounce",
  "ni act",
  "constitutional",
  "matrimonial",
  "land dispute",
  "writ petition",
  "anticipatory bail",
  "custody",
  "maintenance",
  "real estate",
  "debt recovery",
  "appeal",
  "litigation",
] as const;

const BRAND_KEYWORDS = [
  "Advocate K Neelamegam",
  "Advocate K. Neelamegam",
  "K Neelamegam advocate",
  "K. Neelamegam lawyer",
  "Lumbini Law Associates",
  "Lumbini Law Associates Madurai",
  "Lumbini Law Associates advocate",
  "chamber 43 madurai high court",
  "madurai high court advocate",
  "madras high court madurai bench advocate",
  "madras high court lawyer",
  "high court advocate india",
  "high court lawyer india",
] as const;

function titleCase(value: string) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function generateSeoKeywords(): string[] {
  const keywords = new Set<string>(BRAND_KEYWORDS);

  for (const location of LOCATIONS) {
    for (const role of ROLES) {
      keywords.add(`${location} ${role}`);
      keywords.add(`${role} in ${location}`);
      keywords.add(`${role} ${location}`);
      keywords.add(`${titleCase(location)} ${titleCase(role)}`);
    }

    for (const modifier of MODIFIERS) {
      for (const role of ROLES) {
        keywords.add(`${modifier} ${role} ${location}`);
        keywords.add(`${modifier} ${location} ${role}`);
        keywords.add(`${titleCase(modifier)} ${titleCase(role)} ${titleCase(location)}`);
      }
    }

    for (const practice of PRACTICES) {
      for (const role of ROLES) {
        keywords.add(`${practice} ${role} ${location}`);
        keywords.add(`${location} ${practice} ${role}`);
        keywords.add(`${titleCase(practice)} ${titleCase(role)} ${titleCase(location)}`);
      }

      keywords.add(`${practice} lawyer ${location}`);
      keywords.add(`${practice} advocate ${location}`);
      keywords.add(`best ${practice} lawyer ${location}`);
      keywords.add(`best ${practice} advocate ${location}`);
    }
  }

  for (const practice of PRACTICES) {
    for (const role of ROLES) {
      keywords.add(`${practice} ${role} india`);
      keywords.add(`india ${practice} ${role}`);
      keywords.add(`best ${practice} ${role} india`);
    }
  }

  for (const modifier of MODIFIERS) {
    keywords.add(`${modifier} advocate india`);
    keywords.add(`${modifier} lawyer india`);
    keywords.add(`${modifier} advocate tamil nadu`);
    keywords.add(`${modifier} lawyer tamil nadu`);
    keywords.add(`${modifier} advocate madurai`);
    keywords.add(`${modifier} lawyer madurai`);
  }

  return [...keywords];
}

export const seoKeywords = generateSeoKeywords();

export const SEO_KEYWORD_COUNT = seoKeywords.length;

export const primarySeoKeywords = seoKeywords.slice(0, 120);

export const seoLocations = LOCATIONS;
export const seoRoles = ROLES;
export const seoPractices = PRACTICES;
