export type SocialLink = {
  platform: string;
  url: string;
};

export type CompanyMilestone = {
  year: number;
  achievement: string;
};

export type CompanyProfile = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  headquarters: string;
  employees: number;
  mission: string;
  vision: string;
  values: string[];
  ctaLabel: string;
  ctaHref: string;
  socialLinks: SocialLink[];
  milestones: CompanyMilestone[];
};
