import { SiteConfig, GraphicProject, PaidCampaign } from '../types';

export const siteConfig: SiteConfig = {
  name: "Shenbaga Devi C",
  title: "Social Media Graphic Designer & Digital Marketer",
  headline: "Creative Designs. Meaningful Campaigns. Stronger Brands.",
  tagline: "Bridging the gap between high-impact visual storytelling and performance-driven paid acquisition across Meta & Google Ads.",
  aboutIntro: "I am a multi-disciplinary visual designer and paid digital marketing specialist with hands-on experience crafting high-converting social media creatives and running scalable advertising campaigns for commercial clients across healthcare, real estate, consumer electronics, financial services, and water purification.",
  aboutStory: [
    "My dual expertise enables me to design with marketing performance in mind: visuals that do not just look stunning, but stop the scroll, lower cost-per-lead, and turn prospects into paying clients.",
    "On the graphic design side, I specialize in commercial social media creatives for Instagram and Facebook, encompassing product showcases, educational carousel content, promotional campaign banners, and brand identities tailored to industry verticals.",
    "On the performance marketing side, I manage and optimize paid advertising campaigns across Meta Ads Manager (Facebook & Instagram) and Google Ads (Search & Lead Generation). From audience targeting and A/B creative testing to conversion tracking and budget scaling, every campaign is measured against real revenue and quantifiable cost efficiency."
  ],
  skills: [
    {
      category: "Graphic & Creative Design",
      items: [
        "Social Media Post & Banner Design",
        "Commercial Ad Creatives (Feed & Story)",
        "Visual Branding & Color Palette Selection",
        "Typography & Layout Composition",
        "Marketing Carousels & Infographics",
        "Direct Response Creative Testing"
      ]
    },
    {
      category: "Paid Digital Marketing",
      items: [
        "Meta Ads Manager (Facebook & Instagram)",
        "Google Ads (Search & Lead Generation)",
        "Instant Form & Lead Gen Campaigns",
        "WhatsApp Direct Messaging Campaigns",
        "Audience Segmentation & Lookalikes",
        "Budget Optimization & Scaling"
      ]
    },
    {
      category: "Strategy & Performance",
      items: [
        "Cost-Per-Lead (CPL) Optimization",
        "Creative Angle & Hook Testing",
        "High-Converting Headline Copywriting",
        "Click-Through Rate (CTR) Optimization",
        "Campaign Performance Reporting",
        "Conversion Funnel Alignment"
      ]
    }
  ],
  tools: [
    { name: "Adobe Photoshop", icon: "Palette" },
    { name: "Adobe Illustrator", icon: "PenTool" },
    { name: "Meta Ads Manager", icon: "TrendingUp" },
    { name: "Google Ads", icon: "Search" },
    { name: "Canva Pro", icon: "Sparkles" },
    { name: "Performance Analytics", icon: "BarChart3" }
  ],
  stats: [
    {
      value: "1,700+",
      label: "Customer Leads Generated",
      sublabel: "Across Meta lead forms & WhatsApp"
    },
    {
      value: "430+",
      label: "Google Ads Conversions",
      sublabel: "High-intent search enquiries"
    },
    {
      value: "1M+",
      label: "Total Ad Impressions",
      sublabel: "Targeted prospective buyers reached"
    },
    {
      value: "100%",
      label: "Original Client Artwork",
      sublabel: "Verifiable portfolio designs & metrics"
    }
  ],
  contact: {
    // Configurable fields - Replace placeholders with actual credentials
    email: "shenbagadevi.designs@gmail.com", // [Configurable: Replace with actual email]
    whatsapp: "+919876543210", // [Configurable: Replace with actual WhatsApp number e.g. +919876543210]
    whatsappFormatted: "+91 98765 43210", // Display format
    phone: "+91 98765 43210", // [Configurable: Replace with actual phone]
    instagram: "https://instagram.com/shenbaga_creative", // [Configurable: Replace with actual profile URL]
    instagramHandle: "@shenbaga_creative",
    linkedin: "https://linkedin.com/in/shenbaga-devi-c", // [Configurable: Optional profile URL]
    location: "Chennai, Tamil Nadu, India",
    availability: "Available for freelance projects, contract roles, and full-time creative & media buying positions."
  }
};

export const graphicProjects: GraphicProject[] = [
  {
    id: "surya-spares",
    title: "Genuine RO Spares & Filter Service",
    category: "aqua-tech",
    categoryLabel: "Aqua Tech",
    client: "Surya Aqua Tech",
    image: "./images/aqua-tech/surya-ro-spares.jpg",
    aspectRatio: "3/4",
    headline: "GENUINE RO SPARES & FILTER SERVICE",
    description: "Sleek, product-centered social media creative showcasing authentic water purifier spare parts, precision tools, and filter piping with a crisp slate-black backdrop, aquatic neon blue glow, and prominent WhatsApp CTA.",
    tags: ["Sales & Service", "Product Showcase", "Feed Ad Creative", "Cyan & Gold"],
    features: ["Component composition layout", "High-contrast product highlights", "Direct response WhatsApp trigger"]
  },
  {
    id: "surya-purifiers",
    title: "Branded RO Purifiers Starting ?7,000",
    category: "aqua-tech",
    categoryLabel: "Aqua Tech",
    client: "Surya Aqua Tech",
    image: "./images/aqua-tech/surya-ro-purifiers.jpg",
    aspectRatio: "3/4",
    headline: "BRANDED RO PURIFIERS STARTING ?7,000",
    description: "Commercial promotional creative for multi-stage RO+UV+UF domestic water filtration systems. Designed with dynamic water splash accents, golden price anchor badge, and clear 'Order Now' button.",
    tags: ["Product Promotional", "Price Anchor Banner", "Consumer Tech", "Water Filtration"],
    features: ["Splash liquid backdrop", "Gold metallic price highlight", "Clear promotional call-to-action"]
  },
  {
    id: "surya-tds",
    title: "Water Tastes Salty or Smells Odd? High TDS Advisory",
    category: "aqua-tech",
    categoryLabel: "Aqua Tech",
    client: "Surya Aqua Tech",
    image: "./images/aqua-tech/surya-water-tds.jpg",
    aspectRatio: "3/4",
    headline: "WATER TASTES SALTY OR SMELLS ODD? SIGN OF HIGH TDS",
    description: "Problem-first educational social ad addressing common household drinking water concerns. Uses crystal-clear water jug imagery and bold crimson typography to urge homeowners to consult RO specialists.",
    tags: ["Educational Post", "Problem-Aware Creative", "Healthcare & Safety", "Lead Magnet"],
    features: ["Problem-solution hook", "High-retention visual focal point", "Direct phone & web link integration"]
  },
  {
    id: "hirani-anna-nagar",
    title: "Prime Location Anna Nagar — Luxury Residences",
    category: "real-estate",
    categoryLabel: "Real Estate",
    client: "Hirani Foundations / AURA",
    image: "./images/real-estate/hirani-anna-nagar-prime.png",
    aspectRatio: "4/5",
    headline: "PRIME LOCATION ANNA NAGAR — READY TO OCCUPY 2 BHK",
    description: "High-end luxury real estate social creative highlighting premium residences starting at ?1.64 Cr*. Integrates lush green avenue lifestyle photography, gold price banner, and RERA compliance credentials.",
    tags: ["Luxury Real Estate", "Location Highlight", "RERA Compliant", "Gold & Navy"],
    features: ["Boulevard perspective photography", "Verified RERA registration footer", "Clear price qualification threshold"]
  },
  {
    id: "hirani-dream-home",
    title: "Why Wait, When Your Dream Home Is Ready?",
    category: "real-estate",
    categoryLabel: "Real Estate",
    client: "Hirani Foundations / AURA",
    image: "./images/real-estate/hirani-dream-home-ready.png",
    aspectRatio: "1/1",
    headline: "WHY WAIT, WHEN YOUR DREAM HOME IS READY?",
    description: "Split-layout creative contrasting the modern architectural façade of Aura Residences with an emotionally resonant housewarming moment. Emphasizes immediate move-in readiness.",
    tags: ["Emotional Angle", "Split-Screen Creative", "Move-In Ready", "Architecture"],
    features: ["Architecture exterior render", "Lifestyle housewarming storytelling", "Direct phone enquiry trigger"]
  },
  {
    id: "hiliving-pristine",
    title: "We Gave Up Space For 50 Homes & Let Trees Take Over",
    category: "real-estate",
    categoryLabel: "Real Estate",
    client: "Hi Living Pristine",
    image: "./images/real-estate/hiliving-pristine-villas.png",
    aspectRatio: "4/5",
    headline: "LET THE TREES TAKE OVER! #PristineLuxury",
    description: "Nature-inspired luxury villa creative for Hi Living Pristine. Features a cinematic boardwalk avenue enveloped in lush trees and warm golden morning sunlight with an inspiring environmental headline.",
    tags: ["Signature Villas", "Biophilic Architecture", "Cinematic Storytelling", "High Engagement"],
    features: ["Nature boardwalk hero image", "Aspirational luxury positioning", "RERA certified layout details"]
  },
  {
    id: "araise-plots",
    title: "Most Demanded Plot Is Back — Ready-To-Build",
    category: "real-estate",
    categoryLabel: "Real Estate",
    client: "Araise by Hi Living",
    image: "./images/real-estate/araise-villa-plots.png",
    aspectRatio: "4/5",
    headline: "MOST DEMANDED PLOT IS BACK OF MADRAS",
    description: "High-energy commercial real estate ad promoting fully developed ready-to-build villa plots with immediate metro connectivity, water, paved roads, and streetlights.",
    tags: ["Plotted Development", "Urgency Hook", "Metro Connectivity", "Direct Lead Gen"],
    features: ["Isometric layout visualization", "Key amenity feature breakdown", "High-visibility contact button"]
  },
  {
    id: "siddhalaya-wellness",
    title: "Harmony of Mind, Body & Soul — Siddha Living",
    category: "siddha-hospital",
    categoryLabel: "Siddha Hospital",
    client: "Siddhalaya",
    image: "./images/siddha-hospital/siddhalaya-harmony-wellness.png",
    aspectRatio: "4/5",
    headline: "HARMONY OF MIND, BODY & SOUL — ESSENCE OF SIDDHA LIVING",
    description: "Serene holistic health creative for Siddhalaya Healthcare, depicting peaceful meditative yoga in a sunlit ancient cedar grove, harmonizing traditional Indian medicine with modern wellness.",
    tags: ["Healthcare & Wellness", "Holistic Healing", "Brand Elevation", "Atmospheric Art"],
    features: ["Cinematic natural lighting", "Sacred geometry meditation icons", "Official hospital registration & phone"]
  },
  {
    id: "siddhalaya-pancreatitis",
    title: "Persistent Stomach Pain After Meals? Pancreatitis Advisory",
    category: "siddha-hospital",
    categoryLabel: "Siddha Hospital",
    client: "Siddhalaya",
    image: "./images/siddha-hospital/siddhalaya-pancreatitis-care.png",
    aspectRatio: "4/5",
    headline: "PERSISTENT STOMACH PAIN? SIGN OF PANCREATITIS",
    description: "Clinical advisory creative featuring handcrafted herbal medicine botanicals and ethereal smoke silhouette shaping the pancreas. Educates patients to seek expert Siddha medical consultation.",
    tags: ["Medical Advisory", "Specialist Healthcare", "Herbal Botanical", "Symptom Awareness"],
    features: ["Artistic anatomical steam motif", "Natural Ayurveda/Siddha herbs", "Direct consultation hotline"]
  }
];

export const paidCampaigns: PaidCampaign[] = [
  {
    id: "ak-housing",
    title: "AK Housing Promoter — Lead Generation & WhatsApp Campaigns",
    client: "AK Housing Promoter",
    industry: "Real Estate",
    platform: "Meta Ads",
    image: "./images/paid-campaigns/real-estate-ak-housing.png",
    primaryResult: "44 Form Leads + 32 WhatsApp Conversations",
    primaryResultLabel: "Total Verified Enquiries: 76",
    costPerResult: "?373.55 (Form) | ?23.83 (WhatsApp)",
    amountSpent: "?17,198.60",
    impressions: "34,656",
    dateRange: "11 Sep 2026 – 10 Oct 2026",
    summary: "Integrated dual-funnel Meta Ads strategy for property developers combining Instant Lead Forms for qualified buyers with direct-to-WhatsApp messaging campaigns achieving an ultra-low ?23.83 per messaging enquiry.",
    objective: "Qualified Buyer Acquisition & Instant WhatsApp Inquiries",
    keyMetrics: [
      { label: "Lead Form Enquiries", value: "44 Leads", subtext: "@ ?373.55 per lead" },
      { label: "WhatsApp Conversations", value: "32 Conversations", subtext: "@ ?23.83 per conversation" },
      { label: "Lead Form Spend", value: "?16,436.01", subtext: "19,707 impressions" },
      { label: "WhatsApp Campaign Spend", value: "?762.59", subtext: "14,949 impressions" },
      { label: "Account Opportunity Score", value: "90 / 100", subtext: "Verified Meta Optimization" }
    ]
  },
  {
    id: "nri-properties",
    title: "NRI Properties — Multi-Campaign Scaling & Video Ads",
    client: "NRI Properties",
    industry: "Real Estate",
    platform: "Meta Ads",
    image: "./images/paid-campaigns/real-estate-nri-properties.png",
    primaryResult: "140 Form Leads",
    primaryResultLabel: "Total Instant Form Leads Across 4 Campaigns",
    costPerResult: "?391.94 – ?476.93",
    amountSpent: "?61,807.55",
    impressions: "115,489",
    reach: "54,245",
    dateRange: "11 Sep 2026 – 10 Oct 2026",
    summary: "Large-scale Meta Lead generation across multiple ad sets and video creatives (Ad videos 3.3, 2.1, 2.2, and 3.2). Scaling campaign 02 generated 62 high-ticket property buyer leads with consistent cost control.",
    objective: "High-Ticket Real Estate Buyer Lead Generation",
    keyMetrics: [
      { label: "Scaling Campaign 02", value: "62 Leads", subtext: "?24,300.34 spend @ ?391.94" },
      { label: "Scaling Campaign 01", value: "51 Leads", subtext: "?24,323.20 spend @ ?476.93" },
      { label: "Ad Video 3.2 Campaign", value: "16 Leads", subtext: "?6,469.13 spend @ ?404.32" },
      { label: "Ad Video 3.3/2.1/2.2", value: "11 Leads", subtext: "?6,714.88 spend @ ?610.44" },
      { label: "Total Campaign Reach", value: "54,245", subtext: "Property seekers targeted" }
    ]
  },
  {
    id: "aura-interiors",
    title: "Aura Interior Designs — WhatsApp Client Acquisition",
    client: "Aura Interior Designs",
    industry: "Interiors & Architecture",
    platform: "Meta Ads",
    image: "./images/paid-campaigns/interiors-aura-designs.png",
    primaryResult: "41 WhatsApp Conversations",
    primaryResultLabel: "Direct High-Intent Interior Enquiries",
    costPerResult: "?90.92 – ?185.74",
    amountSpent: "?5,908.64",
    impressions: "140,372",
    reach: "63,975",
    dateRange: "1 Sep 2026 – 10 Oct 2026",
    summary: "Video-focused direct WhatsApp messaging campaigns for interior design consultations. Achieved exceptional viral reach with 123,697 impressions on Ad Video 2 and a record low ?90.92 per conversation on the core WhatsApp campaign.",
    objective: "Residential Interior Consultation Inquiries",
    keyMetrics: [
      { label: "Core WhatsApp Leads", value: "18 Conversations", subtext: "@ ?90.92 / conversation" },
      { label: "Ad Video 2 Leads", value: "23 Conversations", subtext: "@ ?185.74 / conversation" },
      { label: "Ad Video 2 Reach", value: "52,143 Reach", subtext: "123,697 total impressions" },
      { label: "Account Opportunity Score", value: "100 / 100", subtext: "Perfect Meta health score" }
    ]
  },
  {
    id: "career-relaunch",
    title: "Career Re-Launch Hub — Instant Lead Form Scaling",
    client: "Career Re Launch Hub",
    industry: "Career Re-Launch Program",
    platform: "Meta Ads",
    image: "./images/paid-campaigns/career-relaunch-hub.png",
    primaryResult: "114 Form Leads",
    primaryResultLabel: "Qualified Program Applications",
    costPerResult: "?93.28 – ?111.69",
    amountSpent: "?16,673.72",
    impressions: "33,796",
    dateRange: "11 Sep 2026 – 10 Oct 2026",
    summary: "Iterative poster creative testing and lead form acquisition for career acceleration. Form fillup campaign delivered 46 applications at just ?93.28/lead, while Poster 01-03 generated 37 leads at ?111.69.",
    objective: "Program Application Lead Generation & Creative A/B Testing",
    keyMetrics: [
      { label: "Form Fillup Campaign", value: "46 Leads", subtext: "@ ?93.28 / lead (?4,290.68 spend)" },
      { label: "Poster 01, 02 & 03", value: "37 Leads", subtext: "@ ?111.69 / lead (?4,132.63 spend)" },
      { label: "Poster 04, 05 & 06", value: "18 Leads", subtext: "@ ?229.08 / lead (?4,123.42 spend)" },
      { label: "Poster 07, 08 & 09", value: "13 Leads", subtext: "@ ?317.46 / lead (?4,126.99 spend)" },
      { label: "Optimization Score", value: "100 / 100", subtext: "Verified Meta campaign health" }
    ]
  },
  {
    id: "surya-aquatech-meta",
    title: "Surya Aqua Tech — High-Volume WhatsApp Inquiries & Profile Visits",
    client: "Surya Aqua Tech",
    industry: "Aqua Tech",
    platform: "Meta Ads",
    image: "./images/paid-campaigns/aqua-tech-surya-meta.png",
    primaryResult: "467 WhatsApp Conversations + 792 Profile Visits",
    primaryResultLabel: "Total Direct Inquiries & Brand Traffic",
    costPerResult: "?41.56 (WhatsApp) | ?0.92 (Profile Visit)",
    amountSpent: "?22,147.40",
    impressions: "542,122",
    dateRange: "11 Sep 2026 – 10 Oct 2026",
    summary: "Massive scale lead generation for water purifier sales and service. Drove 257 WhatsApp conversations at ?41.56 and 210 conversations at ?50.84, alongside over 700 Instagram profile visits at under ?1 each.",
    objective: "Water Purifier Sales & RO Service Customer Acquisition",
    keyMetrics: [
      { label: "WhatsApp Leads 01", value: "257 Conversations", subtext: "@ ?41.56 / conversation (?10,681.59 spend)" },
      { label: "WhatsApp Leads 02", value: "210 Conversations", subtext: "@ ?50.84 / conversation (?10,676.27 spend)" },
      { label: "Instagram Profile Visits", value: "792 Visits", subtext: "Starting @ ?0.92 / visit" },
      { label: "Total Campaign Reach", value: "250,000+", subtext: "Homeowners & business buyers" }
    ]
  },
  {
    id: "market-pulse",
    title: "Market Pulse Systems — AI Software Client Acquisition",
    client: "Market Pulse Systems",
    industry: "AI Software Selling Business",
    platform: "Meta Ads",
    image: "./images/paid-campaigns/ai-software-marketpulse.png",
    primaryResult: "77 WhatsApp Conversations",
    primaryResultLabel: "B2B Software Inquiries",
    costPerResult: "?216.64 – ?247.34",
    amountSpent: "?17,835.90",
    impressions: "116,065",
    reach: "60,101",
    dateRange: "11 Sep 2026 – 10 Oct 2026",
    summary: "Targeted B2B campaign driving commercial buyers directly to software demo consultations via WhatsApp. Scaling 02 delivered 41 qualified tech buyer conversations at ?216.64 with over 60,000 impressions.",
    objective: "B2B Software Demo Bookings & Direct Inquiries",
    keyMetrics: [
      { label: "MPS Scaling 02", value: "41 Conversations", subtext: "@ ?216.64 / conversation (?8,882.35 spend)" },
      { label: "MPS Scaling 01", value: "35 Conversations", subtext: "@ ?247.34 / conversation (?8,657.06 spend)" },
      { label: "Total Reach", value: "55,841", subtext: "Traders, finance pros & tech buyers" },
      { label: "Account Opportunity Score", value: "82 / 100", subtext: "Meta optimization rating" }
    ]
  },
  {
    id: "palani-capital",
    title: "Palani Capital — Mortgage Loan Lead Generation",
    client: "Palani Capital",
    industry: "Mortgage Loan Business",
    platform: "Meta Ads",
    image: "./images/paid-campaigns/mortgage-palani-capital.png",
    primaryResult: "396 Form Leads",
    primaryResultLabel: "High-Ticket Mortgage Applications",
    costPerResult: "?91.32 – ?112.99",
    amountSpent: "?40,256.73",
    impressions: "236,127",
    reach: "73,494",
    dateRange: "11 Sep 2026 – 10 Oct 2026",
    summary: "Exceptional financial sector lead generation volume. Delivered 207 verified mortgage leads at just ?91.32 per lead in Scaling 02 and 189 leads at ?112.99 in Scaling 01, driving substantial loan origination pipeline.",
    objective: "Home Loan & Mortgage Lead Generation",
    keyMetrics: [
      { label: "PC Leads Scaling 02", value: "207 Leads", subtext: "@ ?91.32 / lead (?18,902.46 spend)" },
      { label: "PC Leads Scaling 01", value: "189 Leads", subtext: "@ ?112.99 / lead (?21,354.27 spend)" },
      { label: "Combined Impressions", value: "236,127", subtext: "Targeted credit & home seeker audience" },
      { label: "Combined Unique Reach", value: "73,494", subtext: "Verified prospects" }
    ]
  },
  {
    id: "thebotguys",
    title: "TheBotGuys — Trading Software Direct Inquiries & Awareness",
    client: "TheBotGuys",
    industry: "Trading Software",
    platform: "Meta Ads",
    image: "./images/paid-campaigns/trading-software-botguys.png",
    primaryResult: "194 WhatsApp Conversations + 1,575 Profile Visits",
    primaryResultLabel: "Direct Inquiries & Full-Funnel Brand Traffic",
    costPerResult: "?33.69 (WhatsApp) | ?0.67 (Profile Visit)",
    amountSpent: "?18,785.51",
    impressions: "561,614",
    reach: "339,396",
    dateRange: "11 Sep 2026 – 10 Oct 2026",
    summary: "Full-funnel campaign spanning awareness videos (65,000+ reach @ ?3.05 CPM), 1,575 Instagram profile visits as low as ?0.67 each, and 166 WhatsApp direct demo inquiries at only ?33.69.",
    objective: "Trading Bot Software Inquiries & Trader Community Growth",
    keyMetrics: [
      { label: "Core WhatsApp Leads", value: "166 Conversations", subtext: "@ ?33.69 / conversation (?5,592.21 spend)" },
      { label: "Viral Profile Visit Ad", value: "1,278 Visits", subtext: "@ ?0.67 / visit (?857.09 spend)" },
      { label: "Brand Awareness Reach", value: "65,374 Reach", subtext: "@ ?3.05 per 1,000 impressions" },
      { label: "Total Meta Reach", value: "339,396", subtext: "561,614 total impressions" }
    ]
  },
  {
    id: "royal-fincorp",
    title: "Royal Fincorp — Commercial Business Loan Scaling",
    client: "Royal Fincorp",
    industry: "Business Loan Client",
    platform: "Meta Ads",
    image: "./images/paid-campaigns/business-loan-royal-fincorp.png",
    primaryResult: "104 Form Leads",
    primaryResultLabel: "Commercial Business Loan Applications",
    costPerResult: "?299.75",
    amountSpent: "?31,173.63",
    impressions: "85,871",
    reach: "20,140",
    dateRange: "11 Sep 2026 – 10 Oct 2026",
    summary: "High-value business loan customer acquisition campaign targeting SME owners and entrepreneurs. Generated 104 verified business loan applications with an impressive 93/100 Meta Opportunity score.",
    objective: "SME & Commercial Business Loan Applications",
    keyMetrics: [
      { label: "Qualified Form Leads", value: "104 Leads", subtext: "@ ?299.75 per verified application" },
      { label: "Total Campaign Spend", value: "?31,173.63", subtext: "85,871 impressions" },
      { label: "Unique Business Reach", value: "20,140", subtext: "Targeted business owners" },
      { label: "Meta Opportunity Score", value: "93 / 100", subtext: "Top-tier account health" }
    ]
  },
  {
    id: "ss-enterprises",
    title: "SS Enterprises — Diwali Festival Retail Viral Campaign",
    client: "SS Enterprises",
    industry: "Electronic Shop",
    platform: "Meta Ads",
    image: "./images/paid-campaigns/electronic-shop-ss-enterprises.png",
    primaryResult: "1,691 WhatsApp Conversations",
    primaryResultLabel: "Record-Breaking Festive Retail Inquiries",
    costPerResult: "?4.59 – ?15.78",
    amountSpent: "?12,411.86",
    impressions: "135,291",
    reach: "63,163",
    dateRange: "11 Sep 2026 – 10 Oct 2026",
    summary: "Phenomenal retail breakthrough! Diwali promotional ads drove a staggering 1,277 WhatsApp conversations at an astonishing ?4.59 per conversation, alongside 381 additional conversations on the secondary number at ?15.78.",
    objective: "Diwali Consumer Electronics Footfall & WhatsApp Sales",
    keyMetrics: [
      { label: "Primary Diwali Ad", value: "1,277 Conversations", subtext: "@ ?4.59 / conversation (?5,859.21 spend)" },
      { label: "Secondary Diwali Ad", value: "381 Conversations", subtext: "@ ?15.78 / conversation (?6,011.45 spend)" },
      { label: "Sales Hiring Campaign", value: "18 Conversations", subtext: "@ ?15.17 / conversation (?272.97 spend)" },
      { label: "Festive Unique Reach", value: "38,953 Reach", subtext: "90,445 impressions on top ad" }
    ]
  },
  {
    id: "trillium-interiors",
    title: "Trillium Interior Designs — Luxury Lead Form Campaign",
    client: "Trillium Interior Designs",
    industry: "Interior Designer",
    platform: "Meta Ads",
    image: "./images/paid-campaigns/interior-trillium-designs.png",
    primaryResult: "40 Form Leads",
    primaryResultLabel: "High-Ticket Design Consultations",
    costPerResult: "?315.71",
    amountSpent: "?12,628.54",
    impressions: "31,938",
    reach: "12,378",
    dateRange: "11 Sep 2026 – 10 Oct 2026",
    summary: "Targeted lead form campaign for premium interior design services. Generated 40 qualified home renovation leads via custom video creative with focused geographic targeting.",
    objective: "Premium Home Interior Renovation Consultation",
    keyMetrics: [
      { label: "Form Leads Generated", value: "40 Leads", subtext: "@ ?315.71 per lead" },
      { label: "Total Campaign Spend", value: "?12,628.54", subtext: "31,938 impressions" },
      { label: "Target Audience Reach", value: "12,378", subtext: "Homeowners & villa owners" },
      { label: "Creative Format", value: "Ad Video 02", subtext: "Video walkthrough of projects" }
    ]
  },
  {
    id: "dk-digital-google-ads",
    title: "DK Digital Services — Google Search Lead Generation",
    client: "DK Digital Services",
    industry: "Marketing Service / Google Ads",
    platform: "Google Ads",
    image: "./images/paid-campaigns/marketing-dk-digital-google-ads.png",
    primaryResult: "26 Conversions (581 Clicks)",
    primaryResultLabel: "High-Intent B2B Digital Marketing Inquiries",
    costPerResult: "?576.80 – ?678.76 Cost / Conv",
    amountSpent: "?15,710.44",
    impressions: "7,606",
    ctr: "7.64%",
    avgCpc: "?27.04",
    conversionRate: "4.48%",
    dateRange: "All Time (Nov 3, 2025 – Oct 11, 2026)",
    summary: "High-performing Google Search campaign targeting commercial businesses looking for marketing agency services. Achieved a standout 7.64% CTR (far exceeding industry benchmark) and 26 verified conversions.",
    objective: "High-Intent Agency Client Inquiries & B2B Lead Acquisition",
    keyMetrics: [
      { label: "Search Campaign 06-01-25", value: "19 Conversions", subtext: "8.14% CTR, ?32.42 CPC, 5.62% Conv. Rate" },
      { label: "Leads Search 08-09-26", value: "7 Conversions", subtext: "7.04% CTR, ?19.55 CPC, 2.88% Conv. Rate" },
      { label: "Overall Click-Through Rate", value: "7.64% CTR", subtext: "581 clicks from 7,606 impressions" },
      { label: "Top-of-Page Rate", value: "65.09%", subtext: "18.91% Absolute Top of Page" }
    ]
  },
  {
    id: "gm-aquaguard-google-ads",
    title: "GM Aqua Guard — Google Search RO Service Scaling",
    client: "GM Aqua Guard",
    industry: "Aqua Tech",
    platform: "Google Ads",
    image: "./images/paid-campaigns/aqua-tech-gm-aquaguard-google-ads.png",
    primaryResult: "432 Conversions (4,354 Clicks)",
    primaryResultLabel: "High-Volume RO Service Bookings",
    costPerResult: "?213.28 Cost / Conv",
    amountSpent: "?92,136.02",
    impressions: "98,613",
    ctr: "4.42%",
    avgCpc: "?21.16",
    conversionRate: "9.92%",
    dateRange: "Jan 20 – Oct 11, 2026",
    summary: "Large-scale Google Search ad campaign capturing urgent, high-intent water purifier repair and servicing queries. Generated an astounding 432 verified conversions with a stellar 9.92% conversion rate at ?213.28 per conversion.",
    objective: "Domestic & Commercial RO Service & Filter Replacement Bookings",
    keyMetrics: [
      { label: "Verified Conversions", value: "432.00", subtext: "Urgent repair and service bookings" },
      { label: "Conversion Rate", value: "9.92%", subtext: "Nearly 1 in 10 clicks converted" },
      { label: "Cost Per Conversion", value: "?213.28", subtext: "Highly profitable acquisition cost" },
      { label: "Total Qualified Clicks", value: "4,354 Clicks", subtext: "?21.16 Average CPC" },
      { label: "Top Impression Share", value: "33.83%", subtext: "8.86% Absolute Top of Search" }
    ]
  }
];
