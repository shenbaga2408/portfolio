export type GraphicCategory = 'all' | 'aqua-tech' | 'real-estate' | 'siddha-hospital';

export interface GraphicProject {
  id: string;
  title: string;
  category: 'aqua-tech' | 'real-estate' | 'siddha-hospital';
  categoryLabel: string;
  client: string;
  image: string;
  aspectRatio: string;
  headline: string;
  description: string;
  tags: string[];
  features: string[];
}

export type CampaignPlatform = 'all' | 'meta' | 'google';

export interface KeyMetricItem {
  label: string;
  value: string;
  subtext?: string;
}

export interface PaidCampaign {
  id: string;
  title: string;
  client: string;
  industry: string;
  platform: 'Meta Ads' | 'Google Ads';
  image: string;
  primaryResult: string;
  primaryResultLabel: string;
  costPerResult: string;
  amountSpent: string;
  impressions: string;
  reach?: string;
  ctr?: string;
  avgCpc?: string;
  conversionRate?: string;
  dateRange: string;
  summary: string;
  keyMetrics: KeyMetricItem[];
  objective: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  headline: string;
  tagline: string;
  aboutIntro: string;
  aboutStory: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  tools: {
    name: string;
    icon: string;
  }[];
  stats: {
    value: string;
    label: string;
    sublabel: string;
  }[];
  contact: {
    email: string;
    whatsapp: string;
    whatsappFormatted: string;
    phone: string;
    instagram: string;
    instagramHandle: string;
    linkedin: string;
    location: string;
    availability: string;
  };
}
