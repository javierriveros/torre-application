export interface BioResult {
  person: Person;
  stats: Stats;
  strengths: Strength[];
  interests: Interest[];
  experiences: Experience[];
  awards: Award[];
  jobs: Job[];
  projects: Project[];
  publications: any[];
  education: Education[];
  opportunities: Opportunity[];
  languages: Language[];
  personalityTraitsResults: PersonalityTraitsResults;
  professionalCultureGenomeResults: ProfessionalCultureGenomeResults;
}

interface ProfessionalCultureGenomeResults {
  groups: Group[];
  analyses: Analysis[];
}

interface Analysis {
  groupId: string;
  section: string;
  analysis: number;
}

interface Group {
  id: string;
  text: string;
  answer: string;
  order: number;
}

interface PersonalityTraitsResults {
  groups: Group[];
  analyses: Analysis[];
}

interface Analysis {
  groupId: string;
  analysis: number;
}

interface Group {
  id: string;
  order: number;
  median: number;
  stddev: number;
}

interface Language {
  code: string;
  language: string;
  fluency: string;
}

interface Opportunity {
  id: string;
  interest: string;
  field: string;
  data: Datum[] | boolean | number | string;
}

interface Datum {
  code?: number;
  locale: string;
  name: string;
}

export interface Education {
  id: string;
  category: string;
  name: string;
  organizations: Organization[];
  responsibilities: any[];
  fromMonth: string;
  fromYear: string;
  toMonth: string;
  toYear: string;
  highlighted: boolean;
  weight: number;
  verifications: number;
  recommendations: number;
  media: any[];
  rank: number;
}

export interface Project {
  id: string;
  category: string;
  name: string;
  contributions?: string;
  organizations: Organization[];
  responsibilities: string[];
  fromMonth: string;
  fromYear: string;
  toMonth: string;
  toYear: string;
  remote?: boolean;
  additionalInfo?: string;
  highlighted: boolean;
  weight: number;
  verifications: number;
  recommendations: number;
  media: Media[];
  rank: number;
}

export interface Job {
  id: string;
  category: string;
  name: string;
  organizations: Organization[];
  responsibilities: string[];
  fromMonth: string;
  fromYear: string;
  toMonth: string;
  toYear: string;
  remote?: boolean;
  additionalInfo?: string;
  highlighted: boolean;
  weight: number;
  verifications: number;
  recommendations: number;
  media: Media[];
  rank: number;
}

export interface Award {
  id: string;
  category: string;
  name: string;
  organizations: any[];
  responsibilities: any[];
  fromMonth: string;
  fromYear: string;
  highlighted: boolean;
  weight: number;
  verifications: number;
  recommendations: number;
  media: any[];
  rank: number;
  contributions?: string;
  remote?: boolean;
  additionalInfo?: string;
}

export interface Experience {
  id: string;
  category: string;
  name: string;
  organizations: Organization[];
  responsibilities: string[];
  fromMonth?: string;
  fromYear?: string;
  toMonth?: string;
  toYear?: string;
  remote?: boolean;
  additionalInfo?: string;
  highlighted: boolean;
  weight: number;
  verifications: number;
  recommendations: number;
  media: Media[];
  rank: number;
  contributions?: string;
}

interface Organization {
  id: number;
  name: string;
  picture?: string;
}

interface Interest {
  id: string;
  code: number;
  name: string;
  media: any[];
  created: string;
}

interface Strength {
  id: string;
  code: number;
  name: string;
  additionalInfo?: string;
  weight: number;
  recommendations: number;
  media: Media[];
  created: string;
}

interface Media {
  group: string;
  mediaType: string;
  description: string;
  mediaItems: MediaItem[];
}

interface MediaItem {
  id: string;
  address: string;
}

interface Stats {
  strengths: number;
  awards: number;
  education: number;
  interests: number;
  jobs: number;
  projects: number;
}

interface Person {
  professionalHeadline: string;
  completion: number;
  showPhone: boolean;
  created: string;
  verified: boolean;
  flags: Flags;
  weight: number;
  locale: string;
  subjectId: number;
  picture: string;
  hasEmail: boolean;
  isTest: boolean;
  name: string;
  links: Link[];
  location: Location;
  theme: string;
  id: string;
  pictureThumbnail: string;
  claimant: boolean;
  summaryOfBio: string;
  weightGraph: string;
  publicId: string;
}

interface Location {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
  timezoneOffSet: number;
}

interface Link {
  id: string;
  name: string;
  address: string;
}

interface Flags {
  benefits: boolean;
  canary: boolean;
  enlauSource: boolean;
  fake: boolean;
  featureDiscovery: boolean;
  getSignaledBenefitsViewed: boolean;
  firstSignalSent: boolean;
  promoteYourselfBenefitsViewed: boolean;
  promoteYourselfCompleted: boolean;
  importingLinkedin: boolean;
  onBoarded: boolean;
  remoter: boolean;
  signalsFeatureDiscovery: boolean;
  signedInToOpportunities: boolean;
  importingLinkedinRecommendations: boolean;
  contactsImported: boolean;
  appContactsImported: boolean;
  genomeCompletionAcknowledged: boolean;
}

const bios = {
  async get(username: string | string[]): Promise<BioResult> {
    const result = await (
      await fetch(`https://torre.bio/api/bios/${username}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    return result;
  },
};

export { bios };
