export const SITE = {
  name: "Enosx Technologies",
  founder: "Enosh Yeswa",
  founded: 2024,
  tagline: "Redefining the boundary between Human and OS.",
  motto: "Speed is UX.",
  whatsappDisplay: "+254 798 303 978",
  whatsappUrl: "https://wa.me/254798303978",
  instagram: [
    { handle: "@enosx_tech", url: "https://instagram.com/enosx_tech" },
    { handle: "@engima_cx", url: "https://instagram.com/engima_cx" },
  ],
  email: "Enosxtech@gmail.com",
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
    desc: "Our gaming community — tournaments, matchmaking and late-night lobbies.",
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
    role: "Chief Executive Officer",
    photoKey: "enosh",
    bio: "Founder and CEO of Enosx Technologies (2024). A visionary tech innovator dedicated to pushing the boundaries of multimodal AI and Windows system integration. Enosh oversees the strategic direction of ENOSX AI, the Enosx Tech Store, and ExLover Coach, operating under the core philosophy that 'Speed is UX'.",
  },
  {
    name: "Fortune",
    role: "Head of SEO",
    photoKey: "fortune",
    bio: "Leads search and organic growth across every Enosx product — keyword strategy, technical SEO and content that puts our work in front of the right people.",
  },
  {
    name: "Tracey Iyvone",
    role: "Leadership Team",
    photoKey: "tracey",
    bio: "Contributes to the leadership team at Enosx Technologies, helping shape thoughtful, high-velocity products that make technology more useful for people and businesses.",
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
    kicker: "Multimodal AI assistant",
    blurb:
      "An intelligent workspace that lives inside your operating environment — not just another chatbox. Fluid, iridescent, and built for speed.",
    url: "https://enosxai.vercel.app",
    accent: "cyan",
    features: [
      "God Mode terminal for low-level system commands",
      "Context-aware messaging that reads your active app",
      "Drag-and-drop file and code analysis",
      "Native GitHub integration and code review",
      "Voice replies powered by ElevenLabs speech synthesis",
      "Sign in with GitHub for a connected developer workflow",
      "Persistent memory bank across sessions",
      "Web intelligence with real-time search and deep scraping",
      "Imagine Mode for instant image generation",
      "Document engine exporting to PDF and Markdown",

    ],
  },
  {
    slug: "enosx-store",
    name: "Enosx Tech Store",
    kicker: "Kenya's #1 electronics aggregator",
    blurb:
      "Search Jumia, Kilimall and Jiji at the same time. One query brings back electronics from every major Kenyan platform so you can compare prices and grab the best deal.",
    url: "https://enosxtech.vercel.app",
    accent: "purple",
    features: [
      "Unified search across Jumia, Kilimall and Jiji",
      "Filter by category: smartphones, laptops, headphones, tablets, accessories",
      "Side-by-side price comparison across platforms",
      "Featured electronics and trending deals",
      "Fast, mobile-first browsing experience",
      "Direct WhatsApp support on every order",
    ],
  },
  {
    slug: "exlover",
    name: "ExLover Coach",
    kicker: "AI relationship coach — love, with clarity",
    blurb:
      "A private space for honest conversations. ExLover helps you pause, understand what you feel, and respond from a steadier place — no judgement, no perfect answers, just a little more clarity.",
    url: "https://exlover.vercel.app",
    accent: "crimson",
    features: [
      "Clarity: untangle the signal from the story and name what matters",
      "Communication: turn a difficult feeling into an honest, kind conversation",
      "Boundaries: find language that protects your peace",
      "Healing: make space for grief, growth and the next small choice",
      "A daily gentle prompt to reflect on",
      "Private coach room that tracks your reflections",
    ],
  },
  {
    slug: "enosx-hub",
    name: "Enosx E-commerce Hub",
    kicker: "Compare, watch, buy — all in one place",
    blurb:
      "The full shopping experience built on top of our Kenyan marketplace aggregator: product pages, watchlists, cart, checkout and order tracking across Jumia, Kilimall and Jiji.",
    url: "https://enosxtech-hub.vercel.app",
    accent: "cyan",
    features: [
      "Unified product search across supported marketplaces",
      "Side-by-side price and specification comparison",
      "Product pages with image galleries and full specs",
      "Watchlists, cart and secure checkout",
      "Accounts and order tracking",
    ],
  },
  {
    slug: "enosh-browser",
    name: "Enosh Browser",
    kicker: "A calm, source-first browser workspace",
    blurb:
      "A quieter way to research. Enosh Browser keeps your sources, trails and spaces in one workspace, with ENOSX AI built right in — on the web or as a desktop app.",
    url: "https://enosh-browser.vercel.app",
    accent: "purple",
    features: [
      "Source trails, saved sources and spaces",
      "Command palette for instant navigation",
      "Protection report and workspace tools built in",
      "ENOSX AI workspace embedded",
      "Desktop installers for Windows, macOS and Linux",
    ],
  },
  {
    slug: "enosh-blog",
    name: "Enosh Blog",
    kicker: "Editorial Noir publishing",
    blurb:
      "The personal publishing platform of Enosh Yeswa — dark, typographic and magazine-inspired writing on technology, building and the Enosx journey.",
    url: "https://enosh-blog.vercel.app",
    accent: "crimson",
    features: [
      "Editorial Noir design with serif-forward typography",
      "Magazine-style article listing and reading pages",
      "Case-study layouts for deeper stories",
      "Fast, server-rendered content",
    ],
  },
  {
    slug: "exboot",
    name: "Exboot",
    kicker: "Windows bootable-media creator",
    blurb:
      "A desktop utility for making bootable Windows installation drives from a genuine ISO — with clear, guided steps and safety confirmations before anything is erased.",
    url: "https://github.com/enigmacxenosx/Exboot",
    accent: "cyan",
    features: [
      "Create Windows install media for UEFI and Legacy BIOS",
      "Multi-boot USB drives via Ventoy",
      "Automatic splitting of large files for FAT32 drives",
      "Optional Windows 11 TPM and Secure Boot settings",
      "Verified update checks with SHA-256 checks",
    ],
  },
];


export const PERSONALITY_MODES = [
  {
    icon: "💼",
    name: "Professional",
    desc: "Focused, concise, business-ready. Prioritises efficiency and direct answers.",
  },
  {
    icon: "🎨",
    name: "Creative",
    desc: "Imaginative and expressive. Brainstorms and explores unconventional ideas.",
  },
  {
    icon: "🧑‍🏫",
    name: "Mentor",
    desc: "Patient and educational. Breaks down complex topics step by step.",
  },
  {
    icon: "😊",
    name: "Casual",
    desc: "Friendly and conversational. Keeps the tone light, like a peer.",
  },
];

export const OPERATIONAL_TIERS = [
  { name: "EX", desc: "Default balance of speed and intelligence." },
  { name: "EX Pro", desc: "Maximum intelligence for deep reasoning." },
  { name: "Smart", desc: "General knowledge and conversation." },
  { name: "Fast", desc: "Lowest latency for rapid-fire queries." },
  { name: "Balanced", desc: "Even split of speed and accuracy." },
  { name: "Task", desc: "Structured execution and coding." },
  { name: "Creative", desc: "Writing, brainstorming, generation." },
];

export const PRICING_PLANS = [
  {
    name: "Free",
    price: "KES 0",
    period: "forever",
    desc: "Get started with ENOSX AI at no cost.",
    features: [
      "Basic AI assistant access",
      "Standard speed tier (EX)",
      "Community support via WhatsApp",
      "Limited daily queries",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "KES 500",
    period: "per month",
    desc: "For professionals who need more power.",
    features: [
      "All AI personality modes",
      "EX Pro maximum intelligence tier",
      "GitHub integration and code review",
      "Unlimited daily queries",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    desc: "Full ecosystem access for teams and businesses.",
    features: [
      "Everything in Pro",
      "Custom deployment and integration",
      "Dedicated account manager",
      "API access and SLA",
      "On-premise options available",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export const TESTIMONIALS = [
  {
    name: "James M.",
    role: "Software Developer, Nairobi",
    text: "ENOSX AI has completely changed my workflow. The GitHub integration and code review features save me hours every day. Speed is truly UX here.",
    product: "ENOSX AI",
  },
  {
    name: "Grace W.",
    role: "Online Shop Owner, Kisumu",
    text: "The Enosx Tech Store makes it so easy to find products across Jumia, Kilimall and Jiji in one place. Price comparison alone saves me money every week.",
    product: "Enosx Tech Store",
  },
  {
    name: "Kevin O.",
    role: "University Student, Kakamega",
    text: "ExLover Coach helped me navigate a tough relationship with honest, practical advice. It feels private and judgement-free.",
    product: "ExLover Coach",
  },
];

export const CAREERS = [
  {
    title: "Frontend Developer",
    location: "Remote / Kakamega, Kenya",
    type: "Full-time",
    desc: "Build beautiful, fast interfaces for ENOSX AI, the Tech Store, and ExLover Coach using React, TypeScript, and Tailwind CSS.",
    requirements: ["3+ years React/TypeScript experience", "Tailwind CSS proficiency", "Experience with state management", "GitHub workflow familiarity"],
  },
  {
    title: "Backend Engineer",
    location: "Remote / Kakamega, Kenya",
    type: "Full-time",
    desc: "Design and maintain APIs, database schemas, and serverless functions powering the Enosx ecosystem.",
    requirements: ["Node.js / Express or Next.js API Routes", "PostgreSQL / Supabase experience", "RESTful API design", "Understanding of auth flows"],
  },
  {
    title: "AI/ML Engineer",
    location: "Remote / Kakamega, Kenya",
    type: "Contract",
    desc: "Enhance ENOSX AI's multimodal capabilities including voice, vision, and context-aware intelligence.",
    requirements: ["Experience with LLM APIs and prompt engineering", "Python proficiency", "Understanding of RAG and memory systems", "Interest in voice interfaces"],
  },
  {
    title: "Content & SEO Specialist",
    location: "Remote / Kakamega, Kenya",
    type: "Part-time",
    desc: "Drive organic growth through content strategy, keyword research, and technical SEO across all Enosx platforms.",
    requirements: ["SEO tools experience (Ahrefs, SEMrush)", "Content writing skills", "Social media management", "Analytics interpretation"],
  },
];

export const BLOG_POSTS = [
  {
    slug: "introducing-enosx-ai",
    title: "Introducing ENOSX AI: The Multimodal Assistant",
    date: "2025-01-15",
    excerpt: "We built ENOSX AI to be more than a chatbot — it's an intelligent workspace that lives inside your operating environment with terminal access, GitHub integration, voice commands, and persistent memory.",
    category: "Product Launch",
  },
  {
    slug: "why-speed-is-ux",
    title: "Why Speed is UX: Our Design Philosophy",
    date: "2025-02-20",
    excerpt: "Every millisecond counts. At Enosx Technologies, we believe that performance is the most underrated feature. Here's how we think about latency, rendering, and user perception.",
    category: "Engineering",
  },
  {
    slug: "e-commerce-aggregation-kenya",
    title: "Building E-commerce Aggregation for Kenya",
    date: "2025-03-10",
    excerpt: "Jumia, Kilimall, and Jiji each have their strengths. We built a unified search layer that brings them together — one query, all platforms, better prices.",
    category: "Product Launch",
  },
  {
    slug: "ai-coaching-relationships",
    title: "The Future of AI-Guided Relationship Coaching",
    date: "2025-04-05",
    excerpt: "ExLover Coach proves that AI can be a thoughtful companion for personal growth. We explore how structured prompts and private sessions create safe spaces for reflection.",
    category: "Insights",
  },
  {
    slug: "our-tech-stack-2025",
    title: "Our Tech Stack in 2025",
    date: "2025-05-12",
    excerpt: "From Next.js 16 and React 19 to Drizzle ORM and Neon PostgreSQL — a look at the tools powering the Enosx ecosystem and why we chose them.",
    category: "Engineering",
  },
];
