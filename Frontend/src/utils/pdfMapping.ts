/**
 * Maps department names to their corresponding PDF file paths
 * Handles variations in PDF file naming conventions
 */

interface PDFMapping {
  [key: string]: string;
}

// Helper function to create PDF path from state, category and department
// Returns the relative path that can be used with import.meta.url or fetch
const createPDFPath = (state: string, category: string, fileName: string): string => {
  // For Goa, PDFs are in public/assets/PDF/RTI Templates For Goa State/
  if (state === 'goa') {
    return `/assets/PDF/RTI Templates For Goa State/${category}/${fileName}`;
  }
  // For Vite, we'll use the path relative to src/assets
  return `${state}/${category}/${fileName}`;
};

// Helper function to detect state from department name
const detectState = (departmentName: string): string => {
  if (departmentName.toLowerCase().includes('goa')) {
    return 'goa';
  }
  if (departmentName.toLowerCase().includes('karnataka')) {
    return 'karnataka';
  }
  return 'delhi'; // Default to delhi
};

// Mapping of department display names to PDF file names
const departmentToPDFMap: PDFMapping = {
  // RTI Delhi Police & Security
  'RTI Delhi Police': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Police.pdf'),
  'RTI Delhi Fire Services Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Fire Services Department.pdf'),
  'RTI Delhi Prisons Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Prisoners Department.pdf'),
  'RTI Delhi Home Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Home Department.pdf'),
  'RTI Delhi Judicial Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Judicial Department.pdf'),
  'RTI Delhi Law, Justice & Legislative Affairs Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Law, Justice & Legislative Affairs Department.pdf'),
  'RTI Delhi Disaster Management Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For  Delhi Disaster Management Department.pdf'),

  // RTI Delhi Municipal & Housing
  'RTI Delhi Municipal Corporation (MCD)': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For  Delhi Municipal Corporation (MCD).pdf'),
  'RTI Delhi Urban Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Urban Development Department.pdf'),
  'RTI Delhi Housing & Urban Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For  Delhi Housing & Urban Development Department.pdf'),
  'RTI Delhi Public Works Department (PWD)': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Public Works Department (PWD).pdf'),
  'RTI Delhi Rural Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Rural Development Department.pdf'),

  // RTI Delhi Utilities & Infrastructure
  'RTI Delhi Jal Board (DJB)': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Templare For Delhi Jal Board (DJB).pdf'),
  'RTI Delhi Transco Limited (DTL)': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template For Delhi Transco Limited (DTL).pdf'),
  'RTI Delhi Power Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Delhi Power Department.pdf'),
  'RTI Delhi Water Supply Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template For Delhi Water Supply Department.pdf'),
  'RTI Delhi Ground Water Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Ground Water Department.pdf'),
  'RTI Delhi Irrigation & Flood Control Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Irrigation & Flood Control Department.pdf'),
  'RTI Delhi Renewable Energy Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Renewable Energy Department.pdf'),

  // RTI Delhi Government Services
  'RTI Delhi Revenue Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Revenue Department.pdf'),
  'RTI Delhi Education Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Education Department.pdf'),
  'RTI Delhi Health & Family Welfare Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Health & Family Welfare.pdf'),
  'RTI Delhi Transport Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Transport Department.pdf'),
  'RTI Delhi Finance Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Finance Department.pdf'),
  'RTI Delhi Registration & Stamps Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Registration & Stamps Department.pdf'),
  'RTI Delhi Planning Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Planning Department.pdf'),

  // RTI Delhi Social Welfare
  'RTI Delhi Social Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Social Welfare Department.pdf'),
  'RTI Delhi Scheduled Castes & Scheduled Tribes Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Scheduled Castes & Scheduled Tribes Welfare Department.pdf'),
  'RTI Delhi Women & Child Development Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Women & Child Development Department.pdf'),
  'RTI Delhi Backward Classes Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Backward Classes Welfare Department.pdf'),
  'RTI Delhi Minority Affairs Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Minority Affairs Department.pdf'),
  'RTI Delhi Youth & Sports Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Youth & Sports Department.pdf'),

  // RTI Delhi Commerce & Industry
  'RTI Delhi Labour Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Labour Department.pdf'),
  'RTI Delhi Industries Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Industries Department.pdf'),
  'RTI Delhi Value Added Tax Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Value Added Tax Department.pdf'),
  'RTI Delhi Food, Civil Supplies & Consumer Affairs Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Food, Civil Supplies & Consumer Affairs Department.pdf'),
  'RTI Delhi Consumer Affairs Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Consumer Affairs Department.pdf'),
  'RTI Delhi Cooperation Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Cooperation Department.pdf'),
  'RTI Delhi Agricultural Marketing Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Agricultural Marketing Department.pdf'),

  // RTI Delhi Environment & Resources
  'RTI Delhi Environment Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Environment Department.pdf'),
  'RTI Delhi Forest & Wildlife Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Forest & Wildlife Department.pdf'),
  'RTI Delhi Mines & Geology Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Mines & Geology Department.pdf'),
  'RTI Delhi Science & Technology Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Science & Technology Department.pdf'),

  // RTI Delhi Culture & Tourism
  'RTI Delhi Tourism Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Tourism Department.pdf'),
  'RTI Delhi Art, Culture & Languages Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Art, Culture & Languages Department.pdf'),
  'RTI Delhi Archaeology Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Archaeology Department.pdf'),
  'RTI Delhi Handloom & Handicrafts Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Handloom & Handicrafts Department.pdf'),

  // RTI Delhi Information & Technology
  'RTI Delhi Information & Publicity Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Information & Publicity Department.pdf'),
  'RTI Delhi Information Technology Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Information Technology Department.pdf'),
  'RTI Delhi Telecommunications Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Telecommunications Department.pdf'),
  'RTI Delhi Postal Services Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Postal Services Department.pdf'),

  // RTI Delhi Financial Services
  'RTI Delhi Banking & Financial Services Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Banking & Financial Services Department.pdf'),
  'RTI Delhi Insurance Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Insurance Department.pdf'),
  'RTI Delhi Pension Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Pension Department.pdf'),

  // ========== KARNATAKA DEPARTMENTS ==========
  // RTI Karnataka Police & Security
  'RTI Karnataka Home Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Home Department.pdf'),
  'RTI Karnataka Police Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Police Department.pdf'),
  'RTI Karnataka Fire Services Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Fire Services Department.pdf'),
  'RTI Karnataka Prisons Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Prisons Department.pdf'),
  'RTI Karnataka Law Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Law Department.pdf'),
  'RTI Karnataka Disaster Management Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Disaster Management Department.pdf'),

  // RTI Karnataka Finance & Revenue
  'RTI Karnataka Finance Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Finance Department.pdf'),
  'RTI Karnataka Revenue Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Revenue Department.pdf'),
  'RTI Karnataka Commercial Taxes Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Commercial Taxes Department.pdf'),
  'RTI Karnataka Registration & Stamps Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Registration & Stamps Department.pdf'),
  'RTI Karnataka Planning Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Planning Department.pdf'),
  'RTI Karnataka Treasuries Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Treasuries Department.pdf'),

  // RTI Karnataka Transport & Infrastructure
  'RTI Karnataka Transport Department': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Transport Department.pdf'),
  'RTI Karnataka Public Works Department (PWD)': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Public Works Department (PWD).pdf'),
  'RTI Karnataka Urban Development Department': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Urban Development Department.pdf'),
  'RTI Karnataka Rural Development & Panchayat Raj Department': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Rural Development & Panchayat Raj Department.pdf'),
  'RTI Karnataka Municipal Administration Department': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Municipal Administration Department.pdf'),
  'RTI Karnataka Infrastructure Development Department': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Infrastructure Development Department.pdf'),

  // RTI Karnataka Education & Health
  'RTI Karnataka Department of Primary & Secondary Education': createPDFPath('karnataka', 'RTI Karnataka Education & Health', 'RTI Template for Karnataka Department of Primary & Secondary Education.pdf'),
  'RTI Karnataka Higher Education Department': createPDFPath('karnataka', 'RTI Karnataka Education & Health', 'RTI Template for Karnataka Higher Education Department.pdf'),
  'RTI Karnataka Technical Education Department': createPDFPath('karnataka', 'RTI Karnataka Education & Health', 'RTI Template for Karnataka Technical Education Department.pdf'),
  'RTI Karnataka Health & Family Welfare Department': createPDFPath('karnataka', 'RTI Karnataka Education & Health', 'RTI Template for Karnataka Health & Family Welfare Department.pdf'),
  'RTI Karnataka Medical Education Department': createPDFPath('karnataka', 'RTI Karnataka Education & Health', 'RTI Template for Karnataka Medical Education Department.pdf'),

  // RTI Karnataka Agriculture & Rural Development
  'RTI Karnataka Agriculture Department': createPDFPath('karnataka', 'RTI Karnataka Agriculture & Rural Development', 'RTI Template for Karnataka Agriculture Department.pdf'),
  'RTI Karnataka Horticulture Department': createPDFPath('karnataka', 'RTI Karnataka Agriculture & Rural Development', 'RTI Template for Karnataka Horticulture Department.pdf'),
  'RTI Karnataka Animal Husbandry & Veterinary Services Department': createPDFPath('karnataka', 'RTI Karnataka Agriculture & Rural Development', 'RTI Template for Karnataka Animal Husbandry & Veterinary Services Department.pdf'),
  'RTI Karnataka Co-operation Department': createPDFPath('karnataka', 'RTI Karnataka Agriculture & Rural Development', 'RTI Template for Karnataka Co-operation Department.pdf'),

  // RTI Karnataka Social Welfare
  'RTI Karnataka Social Welfare Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Social Welfare Department.pdf'),
  'RTI Karnataka Scheduled Castes Development Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Scheduled Castes Development Department.pdf'),
  'RTI Karnataka Scheduled Tribes Welfare Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Scheduled Tribes Welfare Department.pdf'),
  'RTI Karnataka Women & Child Development Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Women & Child Development Department.pdf'),
  'RTI Karnataka Backward Classes Welfare Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Backward Classes Welfare Department.pdf'),
  'RTI Karnataka Minority Welfare Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Minority Welfare Department.pdf'),
  'RTI Karnataka Youth & Sports Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Youth & Sports Department.pdf'),

  // RTI Karnataka Commerce & Industry
  'RTI Karnataka Industries & Commerce Department': createPDFPath('karnataka', 'RTI Karnataka Commerce & Industry', 'RTI Template for Karnataka Industries & Commerce Department.pdf'),
  'RTI Karnataka Labour Department': createPDFPath('karnataka', 'RTI Karnataka Commerce & Industry', 'RTI Template for Karnataka Labour Department.pdf'),
  'RTI Karnataka Food & Civil Supplies Department': createPDFPath('karnataka', 'RTI Karnataka Commerce & Industry', 'RTI Template for Karnataka Food & Civil Supplies Department.pdf'),
  'RTI Karnataka Handlooms & Textiles Department': createPDFPath('karnataka', 'RTI Karnataka Commerce & Industry', 'RTI Template for Karnataka Handlooms & Textiles Department.pdf'),
  'RTI Karnataka Mines & Geology Department': createPDFPath('karnataka', 'RTI Karnataka Commerce & Industry', 'RTI Template for Karnataka Mines & Geology Department.pdf'),

  // RTI Karnataka Environment & Resources
  'RTI Karnataka Environment Department': createPDFPath('karnataka', 'RTI Karnataka Environment & Resources', 'RTI Template for Karnataka Environment Department.pdf'),
  'RTI Karnataka Forest Department': createPDFPath('karnataka', 'RTI Karnataka Environment & Resources', 'RTI Template for Karnataka Forest Department.pdf'),
  'RTI Karnataka Water Resources Department': createPDFPath('karnataka', 'RTI Karnataka Environment & Resources', 'RTI Template for Karnataka Water Resources Department.pdf'),
  'RTI Karnataka Energy Department': createPDFPath('karnataka', 'RTI Karnataka Environment & Resources', 'RTI Template for Karnataka Energy Department.pdf'),
  'RTI Karnataka Irrigation & CAD Department': createPDFPath('karnataka', 'RTI Karnataka Environment & Resources', 'RTI Template for Karnataka Irrigation & CAD Department.pdf'),

  // RTI Karnataka Information & Technology
  'RTI Karnataka Information Technology Department': createPDFPath('karnataka', 'RTI Karnataka Information & Technology', 'RTI Template for Karnataka Information Technology Department.pdf'),
  'RTI Karnataka Information & Public Relations Department': createPDFPath('karnataka', 'RTI Karnataka Information & Technology', 'RTI Template for Karnataka Information & Public Relations Department.pdf'),
  'RTI Karnataka e-Governance Department': createPDFPath('karnataka', 'RTI Karnataka Information & Technology', 'RTI Template for Karnataka e-Governance Department.pdf'),

  // RTI Karnataka Culture & Tourism
  'RTI Karnataka Tourism Department': createPDFPath('karnataka', 'RTI Karnataka Culture & Tourism', 'RTI Template for Karnataka Tourism Department.pdf'),
  'RTI Karnataka Kannada & Culture Department': createPDFPath('karnataka', 'RTI Karnataka Culture & Tourism', 'RTI Template for Karnataka Kannada & Culture Department.pdf'),
  'RTI Karnataka Archaeology Department': createPDFPath('karnataka', 'RTI Karnataka Culture & Tourism', 'RTI Template for Karnataka Archaeology Department.pdf'),
  'RTI Karnataka Religious & Charitable Endowments Department': createPDFPath('karnataka', 'RTI Karnataka Culture & Tourism', 'RTI Template for Karnataka Religious & Charitable Endowments Department.pdf'),

  // ========== GOA DEPARTMENTS ==========
  // RTI Goa Police & Security
  'RTI Goa Home Department': createPDFPath('goa', 'RTI Goa Police & Security', 'RTI Template for Goa Home Department.pdf'),
  'RTI Goa Police Department': createPDFPath('goa', 'RTI Goa Police & Security', 'RTI Template for Goa Police Department.pdf'),
  'RTI Goa Fire Services Department': createPDFPath('goa', 'RTI Goa Police & Security', 'RTI Template for Goa Fire Services Department.pdf'),
  'RTI Goa Prisons Department': createPDFPath('goa', 'RTI Goa Police & Security', 'RTI Template for Goa Prisons Department.pdf'),
  'RTI Goa Law Department': createPDFPath('goa', 'RTI Goa Police & Security', 'RTI Template for Goa Law Department.pdf'),
  'RTI Goa Disaster Management Department': createPDFPath('goa', 'RTI Goa Police & Security', 'RTI Template for Goa Disaster Management Department.pdf'),

  // RTI Goa Finance & Revenue
  'RTI Goa Finance Department': createPDFPath('goa', 'RTI Goa Finance & Revenue', 'RTI Template for Goa Finance Department.pdf'),
  'RTI Goa Revenue Department': createPDFPath('goa', 'RTI Goa Finance & Revenue', 'RTI Template for Goa Revenue Department.pdf'),
  'RTI Goa Commercial Taxes Department': createPDFPath('goa', 'RTI Goa Finance & Revenue', 'RTI Template for Goa Commercial Taxes Department.pdf'),
  'RTI Goa Registration & Stamps Department': createPDFPath('goa', 'RTI Goa Finance & Revenue', 'RTI Template for Goa Registration & Stamps Department.pdf'),
  'RTI Goa Planning Department': createPDFPath('goa', 'RTI Goa Finance & Revenue', 'RTI Template for Goa Planning Department.pdf'),
  'RTI Goa Treasuries Department': createPDFPath('goa', 'RTI Goa Finance & Revenue', 'RTI Template for Goa Treasuries Department.pdf'),

  // RTI Goa Transport & Infrastructure
  'RTI Goa Transport Department': createPDFPath('goa', 'RTI Goa Transport & Infrastructure', 'RTI Template for Goa Transport Department.pdf'),
  'RTI Goa Public Works Department (PWD)': createPDFPath('goa', 'RTI Goa Transport & Infrastructure', 'RTI Template for Goa Public Works Department PWD.pdf'),
  'RTI Goa Urban Development Department': createPDFPath('goa', 'RTI Goa Transport & Infrastructure', 'RTI Template for Goa Urban Development Department.pdf'),
  'RTI Goa Municipal Administration Department': createPDFPath('goa', 'RTI Goa Transport & Infrastructure', 'RTI Template for Goa Municipal Administration Department.pdf'),
  'RTI Goa Rural Development & Panchayats Department': createPDFPath('goa', 'RTI Goa Transport & Infrastructure', 'RTI Template for Goa Rural Development & Panchayats Department.pdf'),
  'RTI Goa Infrastructure Development Department': createPDFPath('goa', 'RTI Goa Transport & Infrastructure', 'RTI Template for Goa Infrastructure Development Department.pdf'),

  // RTI Goa Education & Health
  'RTI Goa Directorate of Education': createPDFPath('goa', 'RTI Goa Education & Health', 'RTI Template for Goa Directorate of Education.pdf'),
  'RTI Goa Directorate of Health Services': createPDFPath('goa', 'RTI Goa Education & Health', 'RTI Template for Goa Directorate of Health Services.pdf'),
  'RTI Goa Directorate of Technical Education': createPDFPath('goa', 'RTI Goa Education & Health', 'RTI Template for Goa Directorate of Technical Education.pdf'),
  'RTI Goa Medical Education Department': createPDFPath('goa', 'RTI Goa Education & Health', 'RTI Template for Goa Medical Education Department.pdf'),
  'RTI Goa Higher Education Department': createPDFPath('goa', 'RTI Goa Education & Health', 'RTI Template for Goa Higher Education Department.pdf'),

  // RTI Goa Agriculture & Rural Development
  'RTI Goa Directorate of Agriculture': createPDFPath('goa', 'RTI Goa Agriculture & Rural Development', 'RTI Template for Goa Directorate of Agriculture.pdf'),
  'RTI Goa Animal Husbandry & Veterinary Services Department': createPDFPath('goa', 'RTI Goa Agriculture & Rural Development', 'RTI Template for Goa Animal Husbandry & Veterinary Services Department.pdf'),
  'RTI Goa Co-operation Department': createPDFPath('goa', 'RTI Goa Agriculture & Rural Development', 'RTI Template for Goa Co-operation Department.pdf'),
  'RTI Goa Rural Development Department': createPDFPath('goa', 'RTI Goa Agriculture & Rural Development', 'RTI Template for Goa Rural Development Department.pdf'),
  'RTI Goa Directorate of Panchayats': createPDFPath('goa', 'RTI Goa Agriculture & Rural Development', 'RTI Template for Goa Directorate of Panchayats.pdf'),

  // RTI Goa Social Welfare
  'RTI Goa Social Welfare Department': createPDFPath('goa', 'RTI Goa Social Welfare', 'RTI Template for Goa Social Welfare Department.pdf'),
  'RTI Goa Tribal Welfare Department': createPDFPath('goa', 'RTI Goa Social Welfare', 'RTI Template for Goa Tribal Welfare Department.pdf'),
  'RTI Goa Women & Child Development Department': createPDFPath('goa', 'RTI Goa Social Welfare', 'RTI Template for Goa Women & Child Development Department.pdf'),
  'RTI Goa Backward Classes Welfare Department': createPDFPath('goa', 'RTI Goa Social Welfare', 'RTI Template for Goa Backward Classes Welfare Department.pdf'),
  'RTI Goa Minorities Welfare Department': createPDFPath('goa', 'RTI Goa Social Welfare', 'RTI Template for Goa Minorities Welfare Department.pdf'),

  // RTI Goa Commerce & Industry
  'RTI Goa Industries, Trade & Commerce Department': createPDFPath('goa', 'RTI Goa Commerce & Industry', 'RTI Template for Goa Industries Trade & Commerce Department.pdf'),
  'RTI Goa Labour & Employment Department': createPDFPath('goa', 'RTI Goa Commerce & Industry', 'RTI Template for Goa Labour & Employment Department.pdf'),
  'RTI Goa Food & Civil Supplies Department': createPDFPath('goa', 'RTI Goa Commerce & Industry', 'RTI Template for Goa Food & Civil Supplies Department.pdf'),
  'RTI Goa Mines & Geology Department': createPDFPath('goa', 'RTI Goa Commerce & Industry', 'RTI Template for Goa Mines & Geology Department.pdf'),
  'RTI Goa Tourism Department': createPDFPath('goa', 'RTI Goa Commerce & Industry', 'RTI Template for Goa Tourism Department.pdf'),
  'RTI Goa Excise Department': createPDFPath('goa', 'RTI Goa Commerce & Industry', 'RTI Template for Goa Excise Department.pdf'),
  'RTI Goa Factories & Boilers Department': createPDFPath('goa', 'RTI Goa Commerce & Industry', 'RTI Template for Goa Factories & Boilers Department.pdf'),
  'RTI Goa Handicrafts, Textile & Coir Department': createPDFPath('goa', 'RTI Goa Commerce & Industry', 'RTI Template for Goa Handicrafts Textile & Coir Department.pdf'),

  // RTI Goa Environment & Resources
  'RTI Goa Environment Department': createPDFPath('goa', 'RTI Goa Environment & Resources', 'RTI Template for Goa Environment Department.pdf'),
  'RTI Goa Forest Department': createPDFPath('goa', 'RTI Goa Environment & Resources', 'RTI Template for Goa Forest Department.pdf'),
  'RTI Goa Water Resources Department': createPDFPath('goa', 'RTI Goa Environment & Resources', 'RTI Template for Goa Water Resources Department.pdf'),
  'RTI Goa Electricity Department': createPDFPath('goa', 'RTI Goa Environment & Resources', 'RTI Template for Goa Electricity Department.pdf'),
  'RTI Goa Irrigation Department': createPDFPath('goa', 'RTI Goa Environment & Resources', 'RTI Template for Goa Irrigation Department.pdf'),
  'RTI Goa Drinking Water Department': createPDFPath('goa', 'RTI Goa Environment & Resources', 'RTI Template for Goa Drinking Water Department.pdf'),
  'RTI Goa New & Renewable Energy Department': createPDFPath('goa', 'RTI Goa Environment & Resources', 'RTI Template for Goa New & Renewable Energy Department.pdf'),
  'RTI Goa Science, Technology & Waste Management Department': createPDFPath('goa', 'RTI Goa Environment & Resources', 'RTI Template for Goa Science Technology & Waste Management Department.pdf'),

  // RTI Goa Information & Technology
  'RTI Goa Information Technology Department': createPDFPath('goa', 'RTI Goa Information & Technology', 'RTI Template for Goa Information Technology Department.pdf'),
  'RTI Goa Information & Public Relations Department': createPDFPath('goa', 'RTI Goa Information & Technology', 'RTI Template for Goa Information & Public Relations Department.pdf'),
  'RTI Goa e-Governance Department': createPDFPath('goa', 'RTI Goa Information & Technology', 'RTI Template for Goa e-Governance Department.pdf'),
  'RTI Goa Directorate of Accounts': createPDFPath('goa', 'RTI Goa Information & Technology', 'RTI Template for Goa Directorate of Accounts.pdf'),
  'RTI Goa Printing & Stationery Department': createPDFPath('goa', 'RTI Goa Information & Technology', 'RTI Template for Goa Printing & Stationery Department.pdf'),

  // RTI Goa Culture & Heritage
  'RTI Goa Art & Culture Department': createPDFPath('goa', 'RTI Goa Culture & Heritage', 'RTI Template for Goa Art & Culture Department.pdf'),
  'RTI Goa Archives & Archaeology Department': createPDFPath('goa', 'RTI Goa Culture & Heritage', 'RTI Template for Goa Archives & Archaeology Department.pdf'),
  'RTI Goa Official Language Department': createPDFPath('goa', 'RTI Goa Culture & Heritage', 'RTI Template for Goa Official Language Department.pdf'),

  // RTI Goa Municipal & Local Bodies
  'RTI Goa Municipal Councils': createPDFPath('goa', 'RTI Goa Municipal & Local Bodies', 'RTI Template for Goa Municipal Councils.pdf'),
  'RTI Goa Village Panchayats': createPDFPath('goa', 'RTI Goa Municipal & Local Bodies', 'RTI Template for Goa Village Panchayats.pdf'),
  'RTI Goa Corporation of the City of Panaji (CCP)': createPDFPath('goa', 'RTI Goa Municipal & Local Bodies', 'RTI Template for Goa Corporation of the City of Panaji CCP.pdf'),
  'RTI Goa Margao Municipal Council': createPDFPath('goa', 'RTI Goa Municipal & Local Bodies', 'RTI Template for Goa Margao Municipal Council.pdf'),
  'RTI Goa Vasco da Gama Municipal Council': createPDFPath('goa', 'RTI Goa Municipal & Local Bodies', 'RTI Template for Goa Vasco da Gama Municipal Council.pdf'),
  'RTI Goa Town & Country Planning Department': createPDFPath('goa', 'RTI Goa Municipal & Local Bodies', 'RTI Template for Goa Town & Country Planning Department.pdf'),

  // RTI Goa Specialized Services
  'RTI Goa Captain of Ports Department': createPDFPath('goa', 'RTI Goa Specialized Services', 'RTI Template for Goa Captain of Ports Department.pdf'),
  'RTI Goa Civil Aviation/Airport Directorate': createPDFPath('goa', 'RTI Goa Specialized Services', 'RTI Template for Goa Civil Aviation Airport Directorate.pdf'),
  'RTI Goa River & Navigation Department': createPDFPath('goa', 'RTI Goa Specialized Services', 'RTI Template for Goa River & Navigation Department.pdf'),
  'RTI Goa Directorate of Skill Development & Entrepreneurship': createPDFPath('goa', 'RTI Goa Specialized Services', 'RTI Template for Goa Directorate of Skill Development & Entrepreneurship.pdf'),
  'RTI Goa Legal Metrology Department': createPDFPath('goa', 'RTI Goa Specialized Services', 'RTI Template for Goa Legal Metrology Department.pdf'),
  'RTI Goa Provedoria Department': createPDFPath('goa', 'RTI Goa Specialized Services', 'RTI Template for Goa Provedoria Department.pdf'),
  'RTI Goa Public Grievances Department': createPDFPath('goa', 'RTI Goa Specialized Services', 'RTI Template for Goa Public Grievances Department.pdf'),
  'RTI Goa Vigilance Department': createPDFPath('goa', 'RTI Goa Specialized Services', 'RTI Template for Goa Vigilance Department.pdf'),
  'RTI Goa Protocol & Hospitality Department': createPDFPath('goa', 'RTI Goa Specialized Services', 'RTI Template for Goa Protocol & Hospitality Department.pdf'),
  'RTI Goa Sainik Welfare Department': createPDFPath('goa', 'RTI Goa Specialized Services', 'RTI Template for Goa Sainik Welfare Department.pdf'),

  // RTI Goa Commissions & Authorities
  'RTI Goa State Information Commission': createPDFPath('goa', 'RTI Goa Commissions & Authorities', 'RTI Template for Goa State Information Commission.pdf'),
  'RTI Goa State Commission for Backward Classes': createPDFPath('goa', 'RTI Goa Commissions & Authorities', 'RTI Template for Goa State Commission for Backward Classes.pdf'),
  'RTI Goa Public Service Commission': createPDFPath('goa', 'RTI Goa Commissions & Authorities', 'RTI Template for Goa Public Service Commission.pdf'),
  'RTI Goa Legislative Assembly': createPDFPath('goa', 'RTI Goa Commissions & Authorities', 'RTI Template for Goa Legislative Assembly.pdf'),
  'RTI Goa Chief Electoral Officer Office': createPDFPath('goa', 'RTI Goa Commissions & Authorities', 'RTI Template for Goa Chief Electoral Officer Office.pdf'),
};

/**
 * Get the state from a department name
 * @param departmentName - The display name of the department
 * @returns The state name ('goa', 'karnataka', or 'delhi')
 */
export const getStateFromDepartment = (departmentName: string): string => {
  return detectState(departmentName);
};

/**
 * Get the PDF path for a given department name
 * @param departmentName - The display name of the department
 * @returns The path to the PDF file, or null if not found
 */
export const getPDFPath = (departmentName: string): string | null => {
  return departmentToPDFMap[departmentName] || null;
};

/**
 * Check if a PDF exists for a given department
 * @param departmentName - The display name of the department
 * @returns True if PDF mapping exists, false otherwise
 */
export const hasPDF = (departmentName: string): boolean => {
  return departmentName in departmentToPDFMap;
};

