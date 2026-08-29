export const site = {
  name: "Sri Gopal Bihar",
  tagline: "Real Location. Real Property. Real Conversation.",
  shortIntro:
    "A locally operated residential land and property development in Odisha. We show you the actual location, share the property details we have, and talk to you directly — before you decide anything.",

  contact: {
    whatsappNumber: "917978936593",
    whatsappLabel: "WhatsApp: +91 79789 36593",
    phone: "+91 79789 36593",
    officeAddress: "Sri Gopal Bihar project office — visits by appointment",
    locality: "Odisha, India",
    mapUrl: "",
    googleBusinessUrl: "",
  },

  googleRating: {
    rating: "5.0",
    reviewCount: 1,
    source: "Google",
    profileUrl: "",
  },

  trustPoints: [
    {
      icon: "FileSearch",
      title: "Transparent Property Information",
      body: "We share the property details we actually have — size, type, location and current availability. If something is not yet confirmed, we say so instead of guessing.",
    },
    {
      icon: "MapPinned",
      title: "Site Visit Available",
      body: "You are welcome to visit the location in person, walk the surroundings and see the property before any commitment.",
    },
    {
      icon: "FileCheck2",
      title: "Clear Documentation",
      body: "Applicable property documents are shared for your review during the process. Documents published on this site are only those provided by the owner.",
    },
    {
      icon: "MessagesSquare",
      title: "Direct Developer Communication",
      body: "You speak with the Sri Gopal Bihar team directly on WhatsApp or phone — no anonymous call centre in between.",
    },
    {
      icon: "Map",
      title: "Location Transparency",
      body: "We tell you exactly where the property is and what is around it, so you can judge the surroundings yourself.",
    },
    {
      icon: "Headphones",
      title: "Customer Support",
      body: "Questions before, during and after your visit are answered by the same team you started the conversation with.",
    },
    {
      icon: "ListChecks",
      title: "Professional Property Process",
      body: "A clear, step-by-step process from enquiry to documentation, so you always know what happens next.",
    },
  ],

  legalDocuments: [
    { title: "RERA Registration", note: "Registration details will be published here once provided." },
    { title: "Land Documents", note: "Land ownership records applicable to the project." },
    { title: "Approved Layout", note: "Sanctioned layout plan of the development." },
    { title: "Building Approval", note: "Building plan approval, where applicable." },
    { title: "Title Documents", note: "Title records applicable to the property." },
    { title: "Development Agreement", note: "Agreement applicable to the development." },
    { title: "NOC / Approvals", note: "No-objection certificates and departmental approvals." },
    { title: "Other Applicable Documents", note: "Any further documentation relevant to a specific project." },
  ],

  trustSteps: [
    { title: "Select Property", body: "Tell us the plot or property type you are looking for." },
    { title: "Explore Location", body: "See where it is and what surrounds it." },
    { title: "Visit the Site", body: "Come to the actual location with our team." },
    { title: "Review Property Details", body: "Size, type, boundaries and current status." },
    { title: "Review Applicable Documents", body: "Go through the documentation available for that property." },
    { title: "Discuss Pricing & Availability", body: "Current pricing and availability shared on request." },
    { title: "Complete Documentation", body: "Paperwork completed step by step, with your questions answered." },
    { title: "Purchase / Booking", body: "Proceed only when you are satisfied." },
  ],

  faqs: [
    {
      q: "Where exactly is the property located?",
      a: "Each project page states its locality and surroundings. Share your enquiry on WhatsApp and we will send the exact location and a map link for the property you are interested in.",
    },
    {
      q: "Can I visit the property?",
      a: "Yes. Site visits are available. Use the Schedule a Site Visit form with your preferred date and time, and our team will confirm with you.",
    },
    {
      q: "What documents are available?",
      a: "The Legal & Documentation section lists the document types applicable to our projects and shows a document only once it has been provided to us. Where a document has not been provided, the card says so plainly.",
    },
    {
      q: "How can I verify the property details?",
      a: "Visit the site with us, check the location and boundaries in person, review the applicable documentation for that property and ask us anything you are unsure about. We encourage independent verification by you or your advisor.",
    },
    {
      q: "What property types are available?",
      a: "Residential plots and property options as listed in the Projects section. Availability changes, so please confirm with us for the current status.",
    },
    {
      q: "How can I request the price?",
      a: "Prices are shared on request for the specific property and current availability. Message us on WhatsApp or use the enquiry form.",
    },
    {
      q: "Can I speak directly with the developer / team?",
      a: "Yes. Your enquiry goes to the Sri Gopal Bihar team directly, and the same team handles your visit and your questions afterwards.",
    },
    {
      q: "Can I register interest in upcoming projects?",
      a: "Yes. Send an enquiry mentioning upcoming projects and we will keep you informed as details are confirmed.",
    },
    {
      q: "What financing / EMI options may be available in the future?",
      a: "We do not offer or promise any financing at this time. If bank or institutional finance becomes applicable to a project, it will be stated on that project's page with the source clearly named.",
    },
  ],
};

export type Property = {
  slug: string;
  name: string;
  location: string;
  type: string;
  status: string;
  summary: string;
  highlights: string[];
  image: "plot" | "house" | "aerial";
};

export const properties: Property[] = [
  {
    slug: "sri-gopal-bihar-plots",
    name: "Sri Gopal Bihar Residential Plots",
    location: "Odisha — exact location shared on enquiry",
    type: "Residential plots",
    status: "Plots available — enquire for current status",
    summary:
      "Laid-out residential plots with internal approach roads and marked boundaries. Plot sizes and pricing shared on request for the plots currently available.",
    highlights: [
      "Marked plot boundaries you can walk on site",
      "Internal approach road",
      "Site visit available on request",
      "Applicable documents shared during the process",
    ],
    image: "plot",
  },
  {
    slug: "sri-gopal-bihar-homes",
    name: "Sri Gopal Bihar Independent Homes",
    location: "Odisha — exact location shared on enquiry",
    type: "Independent house",
    status: "Enquire for availability",
    summary:
      "Independent house options within the development. Layout, built-up details and pricing shared on request — nothing is quoted here without confirmation.",
    highlights: [
      "Visit and inspect before deciding",
      "Layout details shared on request",
      "Direct conversation with our team",
      "Documentation explained step by step",
    ],
    image: "house",
  },
  {
    slug: "upcoming-phase",
    name: "Upcoming Phase",
    location: "Location to be announced",
    type: "Upcoming development",
    status: "Register interest",
    summary:
      "A future phase is being planned. Details, documentation and pricing will be published here once confirmed. You can register your interest now.",
    highlights: [
      "Register interest with no commitment",
      "Details published only when confirmed",
      "You will be told the location as soon as it is final",
    ],
    image: "aerial",
  },
];
