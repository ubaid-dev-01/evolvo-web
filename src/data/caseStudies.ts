export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string; // e.g. "Metropolitan Hospital Network"
  category: string;
  categories: string[]; // for tags e.g. ["Hospital Management", "Enterprise Software"]
  year: string;
  description: string;
  overview: string; // longer text for detail page
  image?: string; // optional hero image url
  metrics: { label: string; value: string }[]; // e.g. IMPACT: 45% cost cut
  tags: string[]; // bottom tags e.g. ["Enterprise", "Resource Mgmt", "Analytics"]
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    rating: number;
  };
  ctaLabel: string;
  ctaHref: string;
};

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "hospital-resource-management",
    title: "Hospital Resource Management System",
    subtitle: "Metropolitan Hospital Network",
    category: "Enterprise Software",
    categories: ["Hospital Management", "Enterprise Software"],
    year: "2023",
    description:
      "Enterprise-grade solution for managing hospital resources, staff scheduling, inventory tracking, and patient flow optimization across 20+ facilities.",
    overview:
      "We delivered a full-stack platform enabling seamless resource allocation, real-time staff scheduling, and integrated inventory and patient flow optimization. The solution reduced manual coordination by 60% and improved bed turnover metrics across 20+ facilities. Built with HIPAA and HITRUST in mind, the system gives clinical and operations teams a single source of truth—so they can focus on care delivery while we handle the technical and regulatory complexity.",
    metrics: [
      { label: "Impact", value: "45% cost cut" },
      { label: "Scale", value: "5K+ staff" },
      { label: "Rating", value: "4.7/5" },
    ],
    tags: ["Enterprise", "Resource Mgmt", "Analytics"],
    testimonial: {
      quote: "The platform transformed how we manage resources. HIPAA-compliant, reliable, and the team delivered ahead of schedule.",
      author: "Michael Chen",
      role: "CTO, Metropolitan Hospital Network",
      rating: 4.9,
    },
    ctaLabel: "View full case study",
    ctaHref: "/case-studies/hospital-resource-management",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
  },
  {
    slug: "olx-ecommerce-platform",
    title: "E-Commerce Platform at Scale",
    subtitle: "OLX Group",
    category: "E-Commerce Platform",
    categories: ["E-Commerce", "Marketplace"],
    year: "2024",
    description:
      "Complete platform redesign driving measurable commerce growth and conversion lift across 30+ markets.",
    overview:
      "End-to-end redesign of the core marketplace experience: search, listings, payments, and seller tools. We focused on performance, accessibility, and conversion optimization with A/B-ready infrastructure—delivering measurable lift across 30+ markets while keeping the platform maintainable and scalable for the long term.",
    metrics: [
      { label: "Impact", value: "+21% conversion" },
      { label: "Scale", value: "30+ markets" },
      { label: "Rating", value: "4.8/5" },
    ],
    tags: ["E-Commerce", "Marketplace", "Performance"],
    testimonial: {
      quote: "Evolvo didn't just build our platform — they fundamentally transformed how we approach digital product development.",
      author: "Sarah Chen",
      role: "CTO, FinScale",
      rating: 4.8,
    },
    ctaLabel: "View full case study",
    ctaHref: "/case-studies/olx-ecommerce-platform",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  {
    slug: "arc-europe-ai-automation",
    title: "AI-Driven Vehicle Identification",
    subtitle: "ARC Europe",
    category: "AI & Automation",
    categories: ["AI & Automation", "Enterprise Software"],
    year: "2024",
    description:
      "AI-driven vehicle identification reducing manual processes from months to hours with 83% cost reduction.",
    overview:
      "Custom ML pipelines for document and vehicle identification, integrated with existing ERP. The system cut manual processing time from months to hours while maintaining audit trails and compliance. We delivered enterprise-grade reliability and governance so the team could scale automation without sacrificing control or transparency.",
    metrics: [
      { label: "Impact", value: "83% cost reduction" },
      { label: "Scale", value: "6mo → 6hrs" },
      { label: "Rating", value: "4.9/5" },
    ],
    tags: ["AI", "Automation", "Enterprise"],
    testimonial: {
      quote: "Their AI integration cut our processing time by 83%. It's been a game-changer for our operations.",
      author: "Marcus Webb",
      role: "VP Engineering, ARC Europe",
      rating: 4.9,
    },
    ctaLabel: "View full case study",
    ctaHref: "/case-studies/arc-europe-ai-automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  },
];
