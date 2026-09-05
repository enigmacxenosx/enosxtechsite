export const SITE = {
  name: "Enosx Technologies",
  founder: "Enosh Yeswa",
  founded: 2024,
  tagline: "Building the future from Kenya.",
  motto: "Speed is UX.",
  whatsappDisplay: "+254 798 303 978",
  whatsappUrl: "https://wa.me/254798303978",
  instagram: [
    { handle: "@enosx_tech", url: "https://instagram.com/enosx_tech" },
    { handle: "@engima_cx", url: "https://instagram.com/engima_cx" },
  ],
  email: "Enosxtech@gmail.com",
  github: "https://github.com/enigmacxenosx",
} as const;

export const WHATSAPP_GROUPS = [
  {
    name: "Official WhatsApp Group",
    desc: "Announcements, product updates and direct support from the Enosx team.",
    url: "https://chat.whatsapp.com/DOm9q02A7Vb0WteCoRiCGc",
    accent: "cyan" as const,
  },
  {
    name: "Gaming WhatsApp Group",
    desc: "Community conversations, tournaments and late-night lobbies.",
    url: "https://chat.whatsapp.com/KjY1hoHnsHg11rObOlW1rs",
    accent: "purple" as const,
  },
];

export type Leader = {
  name: string;
  role: string;
  photoKey: "enosh" | "fortune" | "tracey";
  bio: string;
};

export const LEADERSHIP: Leader[] = [
  {
    name: "Enosh Yeswa",
    role: "Founder & Product Engineer",
    photoKey: "enosh",
    bio: "Founder and product engineer building at the intersection of AI, web platforms, e-commerce and SaaS. Enosh leads the Enosx product ecosystem from Kenya, taking ideas from rough sketches to focused products with clear purpose and room to scale.",
  },
  {
    name: "Fortune",
    role: "Head of SEO",
    photoKey: "fortune",
    bio: "Leads search and organic growth across the Enosx ecosystem through keyword strategy, technical SEO and content that helps useful products reach the right people.",
  },
  {
    name: "Tracey Iyvone",
    role: "Leadership Team",
    photoKey: "tracey",
    bio: "Contributes to the leadership team at Enosx Technologies, helping shape thoughtful products that make technology more useful for people and businesses.",
  },
];

export type Product = {
  slug: string;
  name: string;
  kicker: string;
  blurb: string;
  url: string;
  accent: "cyan" | "purple" | "crimson";
  features: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "enosx-ai",
    name: "ENOSX AI",
    kicker: "Practical AI assistant and application platform",
    blurb:
      "A multimodal AI workspace for conversation, code, files, voice and product experiments — built to move from an idea to a useful result quickly.",
    url: "https://enosxai.vercel.app",
    accent: "cyan",
    features: [
      "Multimodal chat with text, code and file workflows",
      "Voice input and speech responses",
      "GitHub-connected development workflows",
      "Browser and web-intelligence surfaces",
      "Persistent knowledge and memory experiments",
      "Image generation and document workflows",
    ],
  },
  {
    slug: "enosx-hub",
    name: "E-commerce Hub",
    kicker: "Kenyan electronics discovery and comparison",
    blurb:
      "A unified shopping experience for discovering electronics across Kenyan marketplaces, comparing specifications and prices, and moving toward a purchase with less friction.",
    url: "https://enosxtech-hub.vercel.app",
    accent: "purple",
    features: [
      "Marketplace search across supported Kenyan platforms",
      "Side-by-side price and specification comparison",
      "Product pages with galleries and full details",
      "Watchlists, cart and checkout flows",
      "Accounts and order tracking",
      "Source repository: e-commernce",
    ],
  },
  {
    slug: "enosh-browser",
    name: "Enosh Browser",
    kicker: "Calm, source-first browser workspace",
    blurb:
      "A quieter way to research, with sources, trails, spaces and protection context in one workspace. It runs on the web and can be packaged as a desktop app.",
    url: "https://github.com/enigmacxenosx/ENOSH-BROWSER",
    accent: "cyan",
    features: [
      "Source trails, saved sources and spaces",
      "Command palette and workspace tools",
      "Visible protection and source context",
      "ENOSX AI workspace embedded without provider credentials",
      "Electron desktop packaging",
      "Installer targets for Linux, Windows and macOS",
    ],
  },
  {
    slug: "exboot",
    name: "Exboot",
    kicker: "Windows bootable-media utility",
    blurb:
      "A Windows desktop utility for creating bootable and multi-boot USB media from genuine ISO images, with guided destructive-operation confirmations and verified updates.",
    url: "https://github.com/enigmacxenosx/Exboot",
    accent: "purple",
    features: [
      "Windows install media for UEFI and Legacy BIOS",
      "Multi-boot USB creation through Ventoy",
      "FAT32-compatible splitting for large install files",
      "Optional Windows 11 TPM and Secure Boot settings",
      "Image freshness detection for ISO, WIM and ESD files",
      "SHA-256 verified GitHub Releases updates",
    ],
  },
  {
    slug: "enosh-blog",
    name: "Enosh Blog",
    kicker: "Editorial publishing platform",
    blurb:
      "A personal publishing space for writing about technology, building products and the Enosx journey, shaped as a dark editorial reading experience.",
    url: "https://github.com/enigmacxenosx/enosh-blog",
    accent: "crimson",
    features: [
      "Magazine-inspired editorial layouts",
      "Article listing and reading surfaces",
      "Server-backed article storage and seed content",
      "A darkroom-inspired visual direction",
      "A home for build logs and product thinking",
    ],
  },
  {
    slug: "enosx-tech-store",
    name: "Enosx Tech Store",
    kicker: "Electronics search concept",
    blurb:
      "The earlier Enosx electronics discovery experience: a fast, mobile-first surface for searching Kenyan marketplaces and finding better deals.",
    url: "https://enosxtech.vercel.app",
    accent: "cyan",
    features: [
      "Electronics-focused browsing",
      "Cross-marketplace discovery",
      "Category and product filtering",
      "Mobile-first shopping experience",
      "Direct support through WhatsApp",
    ],
  },
  {
    slug: "exlover",
    name: "ExLover Coach",
    kicker: "Private reflection and relationship coaching",
    blurb:
      "A private conversational space for pausing, naming what matters and finding clearer language for difficult personal situations.",
    url: "https://exlover.vercel.app",
    accent: "crimson",
    features: [
      "Reflection prompts for clarity and healing",
      "Conversation support for difficult moments",
      "Boundary-setting language",
      "A gentle, non-judgemental coaching tone",
      "Private sessions for personal reflection",
    ],
  },
];

export const PERSONALITY_MODES = [
  { icon: "💼", name: "Professional", desc: "Focused, concise and business-ready." },
  {
    icon: "🎨",
    name: "Creative",
    desc: "Imaginative and expressive for exploration and generation.",
  },
  {
    icon: "🧑‍🏫",
    name: "Mentor",
    desc: "Patient and educational, breaking complex topics into steps.",
  },
  { icon: "😊", name: "Casual", desc: "Friendly and conversational, like a helpful peer." },
];

export const OPERATIONAL_TIERS = [
  { name: "EX", desc: "Default balance of speed and intelligence." },
  { name: "EX Pro", desc: "Maximum intelligence for deep reasoning." },
  { name: "Smart", desc: "General knowledge and conversation." },
  { name: "Fast", desc: "Low latency for rapid-fire queries." },
  { name: "Balanced", desc: "An even split of speed and accuracy." },
  { name: "Task", desc: "Structured execution and coding workflows." },
  { name: "Creative", desc: "Writing, brainstorming and generation." },
];

export const PRICING_PLANS = [
  {
    name: "Free",
    price: "KES 0",
    period: "forever",
    desc: "Start exploring ENOSX AI at no cost.",
    features: [
      "Core AI assistant access",
      "Standard EX tier",
      "Community support via WhatsApp",
      "Usage limits apply",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "KES 500",
    period: "per month",
    desc: "For people who need more room for focused work.",
    features: [
      "Expanded personality modes",
      "EX Pro reasoning tier",
      "GitHub development workflows",
      "Higher usage limits",
      "Priority support",
    ],
    cta: "Ask about Pro",
    featured: true,
  },
  {
    name: "Teams",
    price: "Custom",
    period: "tailored",
    desc: "For organizations exploring AI and product integrations.",
    features: [
      "Everything in Pro",
      "Custom deployment discussions",
      "Integration planning",
      "Dedicated product conversation",
      "Security and workflow review",
    ],
    cta: "Contact the team",
    featured: false,
  },
];

export const TESTIMONIALS = [
  {
    name: "James M.",
    role: "Software developer, Nairobi",
    text: "ENOSX AI brings coding, research and conversation into one workflow. The GitHub connection is the part I return to most.",
    product: "ENOSX AI",
  },
  {
    name: "Grace W.",
    role: "Online shop owner, Kisumu",
    text: "The marketplace comparison idea makes it easier to see what is available before committing to a purchase.",
    product: "E-commerce Hub",
  },
  {
    name: "Kevin O.",
    role: "University student, Kakamega",
    text: "The coaching experience gives me a private place to slow down and think through what I actually want to say.",
    product: "ExLover Coach",
  },
];

export const CAREERS = [
  {
    title: "Frontend Developer",
    location: "Remote / Kenya",
    type: "Full-time",
    desc: "Build fast, accessible interfaces across AI, browsing, commerce and publishing products using React, TypeScript and modern CSS.",
    requirements: [
      "React and TypeScript",
      "Responsive interface development",
      "Accessibility and performance",
      "GitHub workflow familiarity",
    ],
  },
  {
    title: "Backend Engineer",
    location: "Remote / Kenya",
    type: "Full-time",
    desc: "Design APIs, data models and integrations that support the Enosx product ecosystem and its evolving user workflows.",
    requirements: [
      "Node.js or Python",
      "SQL and relational data modeling",
      "RESTful API design",
      "Authentication and deployment workflows",
    ],
  },
  {
    title: "AI Product Engineer",
    location: "Remote / Kenya",
    type: "Contract",
    desc: "Turn multimodal AI capabilities into dependable user-facing workflows across text, voice, vision, files and code.",
    requirements: [
      "LLM APIs and prompt design",
      "Python or TypeScript",
      "Evaluation and reliability thinking",
      "Interest in human-centred AI products",
    ],
  },
  {
    title: "Content & SEO Specialist",
    location: "Remote / Kenya",
    type: "Part-time",
    desc: "Help the ecosystem communicate clearly through search-friendly writing, product stories, technical explainers and build logs.",
    requirements: [
      "Technical content writing",
      "SEO fundamentals",
      "Content planning and editing",
      "Comfort learning product details",
    ],
  },
];

export const BLOG_POSTS = [
  {
    slug: "building-from-kenya",
    title: "Building the Future from Kenya",
    date: "2026-01-15",
    excerpt:
      "The Enosx approach starts with practical products, local context and the discipline to ship useful work before chasing scale.",
    category: "Company",
  },
  {
    slug: "inside-enosx-ai",
    title: "Inside ENOSX AI: From Assistant to Application Platform",
    date: "2026-02-12",
    excerpt:
      "A look at the product direction behind multimodal chat, voice, files, code workflows, memory and connected tools.",
    category: "Product",
  },
  {
    slug: "quiet-signal-browser",
    title: "Designing a Quieter Browser Workspace",
    date: "2026-03-10",
    excerpt:
      "Why Enosh Browser treats sources, protection context and research trails as first-class parts of the browsing experience.",
    category: "Design",
  },
  {
    slug: "ecommerce-for-discovery",
    title: "Making Kenyan Electronics Easier to Compare",
    date: "2026-04-08",
    excerpt:
      "The thinking behind a marketplace discovery experience that helps people compare products and prices before they buy.",
    category: "Commerce",
  },
  {
    slug: "shipping-desktop-utilities",
    title: "Shipping Focused Desktop Utilities",
    date: "2026-05-20",
    excerpt:
      "What Exboot and the Enosh Browser desktop shell teach us about safety, packaging, updates and dependable user flows.",
    category: "Engineering",
  },
];
