export interface StateHero {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

export interface StateFAQ {
  q: string;
  a: string;
}

export interface StateData {
  name: string;
  slug: string;
  languages: string[];
  hero: StateHero;
  departments: string[];
  highlights: string[];
  faqs: StateFAQ[];
  description?: string;
  rtiPortalUrl?: string;
  process?: {
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  commission?: string;
  fee?: string;
  designTheme?: 'default'; // Design theme for different layouts
}

export const states: Record<string, StateData> = {
  'karnataka': {
    name: "Karnataka",
    slug: "karnataka",
    languages: ["English", "Kannada"],
    designTheme: "default",
    hero: {
      title: "File RTI Online for Karnataka Government Departments",
      subtitle: "Get expert-drafted RTI applications for Revenue, Police, BBMP, Education, Transport and more – without visiting offices.",
      image: "/images/karnataka-banner.jpg",
      cta: "File RTI for Karnataka",
    },
    departments: [
      "Karnataka Secretariat (Vidhana Soudha)",
      "Karnataka Revenue Department",
      "Karnataka Police Department",
      "Karnataka Education Department",
      "Karnataka Health & Family Welfare Department",
      "Karnataka Transport Department (RTO)",
      "BBMP (Bruhat Bengaluru Mahanagara Palike)",
      "Karnataka Public Works Department (PWD)",
      "Karnataka Irrigation & CAD Department",
      "Karnataka Rural Development & Panchayat Raj Department",
      "Karnataka Municipal Administration & Urban Development Department",
      "Karnataka Registration & Stamps Department",
      "Karnataka Commercial Taxes Department",
      "Karnataka Labour Department",
      "Karnataka Social Welfare Department",
      "Karnataka Scheduled Castes Development Department",
      "Karnataka Scheduled Tribes Welfare Department",
      "Karnataka Women & Child Development Department",
      "Karnataka Backward Classes Welfare Department",
      "Karnataka Minority Welfare Department",
      "Karnataka Youth & Sports Department",
      "Karnataka Information & Public Relations Department",
      "Karnataka Finance Department",
      "Karnataka Planning Department",
      "Karnataka Home Department",
      "Karnataka Law Department",
      "Karnataka Forest Department",
      "Karnataka Environment Department",
      "Karnataka Mines & Geology Department",
      "Karnataka Industries & Commerce Department",
      "Karnataka Information Technology Department",
      "Karnataka Tourism & Culture Department",
      "Karnataka Housing Department",
      "Karnataka Water Resources Department",
      "Karnataka Energy Department",
      "Karnataka Agriculture & Cooperation Department",
      "Karnataka Food & Civil Supplies Department",
      "Karnataka Urban Development Department",
      "Karnataka Medical & Health Department",
      "Karnataka School Education Department",
      "Karnataka Higher Education Department",
      "Karnataka Technical Education Department",
      "Karnataka Animal Husbandry Department",
      "Karnataka Fisheries Department",
      "Karnataka Horticulture Department",
      "Karnataka Sericulture Department",
      "Karnataka Handlooms & Textiles Department",
      "Karnataka Endowments Department",
      "BDA (Bangalore Development Authority)",
      "Karnataka Housing Board",
    ],
    highlights: [
      "Covered: Karnataka Secretariat (Vidhana Soudha) & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
      "Service across all 31 districts of Karnataka",
    ],
    faqs: [
      { q: "Can I file RTI to Karnataka Secretariat online?", a: "Yes, you can file RTI applications to Karnataka Secretariat (Vidhana Soudha) and all state departments online through FileMyRTI. We handle drafting, submission, and tracking for you." },
      { q: "How long does RTI reply take in Karnataka?", a: "As per RTI Act 2005, government departments in Karnataka must respond within 30 days. In case of information concerning life or liberty, the response must be provided within 48 hours." },
      { q: "Can I file RTI for land records and Bhoomi portal in Karnataka?", a: "Yes, you can file RTI applications for land records, RTC copies, mutation status, and related information from Karnataka Revenue Department, Bhoomi portal, and other relevant authorities." },
      { q: "Can I file RTI without visiting government offices?", a: "Yes, with FileMyRTI, you can file RTI applications completely online without visiting government offices. We handle all the paperwork and submission for you." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Karnataka department or office",
          description: "Tell us what information you need from any Karnataka Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Karnataka rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Karnataka Information Commission (KIC) guidelines.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals to Karnataka Information Commission if needed.",
        },
      ],
    },
    commission: "Karnataka Information Commission (KIC)",
    fee: "₹10",
  },
  'goa': {
    name: "Goa",
    slug: "goa",
    languages: ["English", "Konkani", "Marathi"],
    designTheme: "default",
    hero: {
      title: "File RTI Online for Goa Government Departments",
      subtitle: "Get expert-drafted RTI applications for Revenue, Police, Municipal Councils, Education, Transport and more – without visiting offices.",
      image: "/images/goa-banner.jpg",
      cta: "File RTI for Goa",
    },
    departments: [
      "Goa Secretariat",
      "Goa Revenue Department",
      "Goa Police Department",
      "Directorate of Education",
      "Directorate of Health Services",
      "Directorate of Transport",
      "Municipal Councils (Goa)",
      "Village Panchayats (Goa)",
      "Department of Public Works",
      "Department of Water Resources",
      "Directorate of Panchayats",
      "Department of Urban Development (Municipal Administration)",
      "Department of Registration & Stamps",
      "Department of Commercial Taxes",
      "Department of Labour & Employment",
      "Department of Social Welfare",
      "Department of Tribal Welfare",
      "Department of Women & Child Development",
      "Department of Backward Classes Welfare",
      "Department of Minorities Welfare",
      "Department of Youth Services & Sports",
      "Department of Information & Public Relations",
      "Department of Finance",
      "Department of Planning",
      "Department of Home",
      "Department of Law",
      "Department of Forest",
      "Department of Environment",
      "Department of Mines & Geology",
      "Department of Industries, Trade & Commerce",
      "Department of Information Technology",
      "Department of Tourism",
      "Department of Housing",
      "Electricity Department",
      "Directorate of Agriculture",
      "Department of Animal Husbandry & Veterinary Services",
      "Department of Fisheries",
      "Department of Horticulture",
      "Department of Co-operation",
      "Department of Food & Civil Supplies",
      "Department of Archives & Archaeology",
      "Department of Art & Culture",
      "Department of Official Language",
      "Goa State Information Commission",
      "Corporation of the City of Panaji (CCP)",
      "Margao Municipal Council",
      "Vasco da Gama Municipal Council",
      "Captain of Ports Department",
      "Department of Excise",
      "Department of Drinking Water",
      "Department of New & Renewable Energy",
      "Department of Science, Technology & Waste Management",
      "Department of Handicrafts, Textile & Coir",
      "Department of Legal Metrology",
      "Department of Personnel",
      "Department of Printing & Stationery",
      "Department of Sainik Welfare",
      "Directorate of Accounts",
      "Directorate of Civil Aviation/Airport",
      "Directorate of Skill Development & Entrepreneurship",
      "Factories & Boilers Department",
      "Goa Legislative Assembly",
      "Goa Public Service Commission",
      "Museum Department",
      "Office of Chief Electoral Officer",
      "Planning Statistics & Evaluation Department",
      "Power Department",
      "Protocol & Hospitality Department",
      "Provedoria Department",
      "Public Grievances Department",
      "River & Navigation Department",
      "Science & Technology Department",
      "Sports Authority of Goa",
      "The Goa State Commission for Backward Classes",
      "Town & Country Planning Department",
      "Vigilance Department",
    ],
    highlights: [
      "Covered: Goa Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
      "Service across all districts of Goa",
    ],
    faqs: [
      { q: "Can I file RTI to Goa Secretariat online?", a: "Yes, you can file RTI applications to Goa Secretariat and all state departments online through FileMyRTI. We handle drafting, submission, and tracking for you." },
      { q: "How long does RTI reply take in Goa?", a: "As per RTI Act 2005, government departments in Goa must respond within 30 days. In case of information concerning life or liberty, the response must be provided within 48 hours." },
      { q: "Can I file RTI for land records in Goa?", a: "Yes, you can file RTI applications for land records, mutation status, and related information from Goa Revenue Department and other relevant authorities." },
      { q: "Can I file RTI without visiting government offices?", a: "Yes, with FileMyRTI, you can file RTI applications completely online without visiting government offices. We handle all the paperwork and submission for you." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Goa department or office",
          description: "Tell us what information you need from any Goa Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Goa rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Goa State Information Commission guidelines.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals to Goa State Information Commission if needed.",
        },
      ],
    },
    commission: "Goa State Information Commission",
    fee: "₹10",
  },
};

export const getStateBySlug = (slug: string): StateData | undefined => {
  return states[slug.toLowerCase()];
};

export const getAllStateSlugs = (): string[] => {
  return Object.keys(states);
};
