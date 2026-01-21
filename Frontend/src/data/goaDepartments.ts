/**
 * Goa Departments organized by sections
 * Used for RTI department listing page
 * Structure matches Karnataka format for consistent rendering
 */

export interface GoaDepartmentSection {
  category: string;
  items: string[];
}

export const goaDepartments: GoaDepartmentSection[] = [
  {
    category: 'RTI Goa Police & Security',
    items: [
      'RTI Goa Home Department',
      'RTI Goa Police Department',
      'RTI Goa Fire Services Department',
      'RTI Goa Prisons Department',
      'RTI Goa Law Department',
      'RTI Goa Disaster Management Department',
    ],
  },
  {
    category: 'RTI Goa Finance & Revenue',
    items: [
      'RTI Goa Finance Department',
      'RTI Goa Revenue Department',
      'RTI Goa Commercial Taxes Department',
      'RTI Goa Registration & Stamps Department',
      'RTI Goa Planning Department',
      'RTI Goa Treasuries Department',
    ],
  },
  {
    category: 'RTI Goa Transport & Infrastructure',
    items: [
      'RTI Goa Transport Department',
      'RTI Goa Public Works Department (PWD)',
      'RTI Goa Urban Development Department',
      'RTI Goa Municipal Administration Department',
      'RTI Goa Rural Development & Panchayats Department',
      'RTI Goa Infrastructure Development Department',
    ],
  },
  {
    category: 'RTI Goa Education & Health',
    items: [
      'RTI Goa Directorate of Education',
      'RTI Goa Directorate of Health Services',
      'RTI Goa Directorate of Technical Education',
      'RTI Goa Medical Education Department',
      'RTI Goa Higher Education Department',
    ],
  },
  {
    category: 'RTI Goa Agriculture & Rural Development',
    items: [
      'RTI Goa Directorate of Agriculture',
      'RTI Goa Animal Husbandry & Veterinary Services Department',
      'RTI Goa Co-operation Department',
      'RTI Goa Rural Development Department',
      'RTI Goa Directorate of Panchayats',
    ],
  },
  {
    category: 'RTI Goa Social Welfare',
    items: [
      'RTI Goa Social Welfare Department',
      'RTI Goa Tribal Welfare Department',
      'RTI Goa Women & Child Development Department',
      'RTI Goa Backward Classes Welfare Department',
      'RTI Goa Minorities Welfare Department',
    ],
  },
  {
    category: 'RTI Goa Commerce & Industry',
    items: [
      'RTI Goa Industries, Trade & Commerce Department',
      'RTI Goa Labour & Employment Department',
      'RTI Goa Food & Civil Supplies Department',
      'RTI Goa Mines & Geology Department',
      'RTI Goa Tourism Department',
      'RTI Goa Excise Department',
      'RTI Goa Factories & Boilers Department',
      'RTI Goa Handicrafts, Textile & Coir Department',
    ],
  },
  {
    category: 'RTI Goa Environment & Resources',
    items: [
      'RTI Goa Environment Department',
      'RTI Goa Forest Department',
      'RTI Goa Water Resources Department',
      'RTI Goa Electricity Department',
      'RTI Goa Irrigation Department',
      'RTI Goa Drinking Water Department',
      'RTI Goa New & Renewable Energy Department',
      'RTI Goa Science, Technology & Waste Management Department',
    ],
  },
  {
    category: 'RTI Goa Information & Technology',
    items: [
      'RTI Goa Information Technology Department',
      'RTI Goa Information & Public Relations Department',
      'RTI Goa e-Governance Department',
      'RTI Goa Directorate of Accounts',
      'RTI Goa Printing & Stationery Department',
    ],
  },
  {
    category: 'RTI Goa Culture & Heritage',
    items: [
      'RTI Goa Art & Culture Department',
      'RTI Goa Archives & Archaeology Department',
      'RTI Goa Official Language Department',
    ],
  },
  {
    category: 'RTI Goa Municipal & Local Bodies',
    items: [
      'RTI Goa Municipal Councils',
      'RTI Goa Village Panchayats',
      'RTI Goa Corporation of the City of Panaji (CCP)',
      'RTI Goa Margao Municipal Council',
      'RTI Goa Vasco da Gama Municipal Council',
      'RTI Goa Town & Country Planning Department',
    ],
  },
  {
    category: 'RTI Goa Specialized Services',
    items: [
      'RTI Goa Captain of Ports Department',
      'RTI Goa Civil Aviation/Airport Directorate',
      'RTI Goa River & Navigation Department',
      'RTI Goa Directorate of Skill Development & Entrepreneurship',
      'RTI Goa Legal Metrology Department',
      'RTI Goa Provedoria Department',
      'RTI Goa Public Grievances Department',
      'RTI Goa Vigilance Department',
      'RTI Goa Protocol & Hospitality Department',
      'RTI Goa Sainik Welfare Department',
    ],
  },
  {
    category: 'RTI Goa Commissions & Authorities',
    items: [
      'RTI Goa State Information Commission',
      'RTI Goa State Commission for Backward Classes',
      'RTI Goa Public Service Commission',
      'RTI Goa Legislative Assembly',
      'RTI Goa Chief Electoral Officer Office',
    ],
  },
];

