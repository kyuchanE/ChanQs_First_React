import { CompanyProfile } from "@/core/entities/company";
import { Product } from "@/core/entities/product";

export const COMPANY_PROFILE: CompanyProfile = {
  id: "chanq-digital",
  name: "ChanQ Digital",
  tagline: "Transforming operations with smart automation.",
  description:
    "ChanQ Digital partners with ambitious teams to deliver automated workflows, data-driven decision tools, and delightful digital experiences. From strategy through implementation, we ship resilient software that scales with your business.",
  foundedYear: 2012,
  headquarters: "Seoul, South Korea",
  employees: 48,
  mission:
    "Empower businesses with intuitive digital products that amplify human potential.",
  vision:
    "A world where every team has access to technology that works as hard as they do.",
  values: [
    "Customer first collaboration",
    "Ship with craftsmanship",
    "Insights over opinions",
    "Continuous learning",
  ],
  ctaLabel: "Book a strategy call",
  ctaHref: "/contact",
  socialLinks: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/chanq-digital" },
    { platform: "YouTube", url: "https://www.youtube.com/@chanqdigital" },
  ],
  milestones: [
    { year: 2013, achievement: "Launched first enterprise knowledge portal" },
    { year: 2016, achievement: "Expanded automation practice to 10 countries" },
    { year: 2020, achievement: "Achieved 99.99% uptime across managed clients" },
    { year: 2023, achievement: "Recognized as top AI implementation partner in APAC" },
  ],
};

export const PRODUCTS: Product[] = [
  {
    id: "ops-orchestrator",
    slug: "ops-orchestrator",
    name: "Ops Orchestrator",
    summary:
      "An end-to-end automation platform that connects scattered tooling into reliable operations workflows.",
    description:
      "Ops Orchestrator gives operations teams a single cockpit to design, schedule, and monitor business-critical workflows. With real-time observability, smart retries, and audit-ready reporting, you can scale processes without adding headcount.",
    category: "Automation",
    heroImage: "/images/products/ops-orchestrator.webp",
    price: "Custom pricing",
    highlights: [
      "Drag-and-drop workflow designer",
      "AI-powered anomaly detection",
      "Enterprise SSO and RBAC controls",
    ],
    features: [
      {
        title: "Unified workflow canvas",
        description:
          "Design, version, and deploy workflows with powerful integrations for ERP, CRM, and internal tooling.",
      },
      {
        title: "Observability by default",
        description:
          "Track every execution with granular logging, automated failure triage, and actionable alerting.",
      },
      {
        title: "Compliance ready",
        description:
          "Generate audit trails, enforce approval policies, and meet industry requirements effortlessly.",
      },
    ],
    seoTitle: "Ops Orchestrator | ChanQ Digital",
    seoDescription:
      "Connect legacy systems and automate operations with Ops Orchestrator. Ship reliable workflows with audit-ready observability.",
  },
  {
    id: "insight-hub",
    slug: "insight-hub",
    name: "Insight Hub",
    summary:
      "A self-service analytics workspace that finally unites data, commentary, and decisions in one place.",
    description:
      "Insight Hub gives business teams a collaborative, narrative-first analytics experience. Build live dashboards, annotate trends, and automate how insights flow to stakeholders.",
    category: "Analytics",
    heroImage: "/images/products/insight-hub.webp",
    price: "From $899 / month",
    highlights: [
      "Interactive notebooks and dashboards",
      "Data governance guardrails",
      "Slack and Teams announcements",
    ],
    features: [
      {
        title: "Live data stories",
        description:
          "Combine metrics, narrative, and multimedia in a single storytelling canvas that stays up to date.",
      },
      {
        title: "Decision tracking",
        description:
          "Capture context behind every decision, assign owners, and track outcomes automatically.",
      },
      {
        title: "Data guardrails",
        description:
          "Field-level permissions and data contracts give governance teams peace of mind without slowing analysts down.",
      },
    ],
    seoTitle: "Insight Hub | ChanQ Digital",
    seoDescription:
      "Build collaborative analytics experiences with Insight Hub. Give your teams a storytelling-first way to make data-backed decisions.",
  },
  {
    id: "support-genius",
    slug: "support-genius",
    name: "Support Genius",
    summary:
      "AI-assisted customer support that learns from your best agents and delivers instant answers at scale.",
    description:
      "Support Genius combines conversational AI with human-in-the-loop tooling so teams can handle surges without sacrificing quality. Train the assistant on your knowledge base, CRM history, and tone to deliver branded responses everywhere.",
    category: "Customer Experience",
    heroImage: "/images/products/support-genius.webp",
    price: "From $1,499 / month",
    highlights: [
      "Omni-channel response automation",
      "Agent copilot with live suggestions",
      "CX analytics with sentiment tracking",
    ],
    features: [
      {
        title: "Conversational AI tuned to your brand",
        description:
          "Train the assistant on curated transcripts and knowledge articles to deliver on-brand answers instantly.",
      },
      {
        title: "Agent assist mode",
        description:
          "Give every agent a copilot for recommended next best actions, macros, and cross-sell opportunities.",
      },
      {
        title: "Unified analytics",
        description:
          "Measure satisfaction trends, automate QA scoring, and coach agents with actionable insights.",
      },
    ],
    seoTitle: "Support Genius | ChanQ Digital",
    seoDescription:
      "Deliver faster, smarter support with Support Genius. Blend AI automation and agent assistance for exceptional customer experiences.",
  },
];
