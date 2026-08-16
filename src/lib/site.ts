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
    name: "Tracey Ivone",
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
      "Voice interface with speech-to-text and text-to-speech",
      "Persistent memory bank across sessions",
      "Web intelligence with real-time search and deep scraping",
      "Imagine Mode for instant image generation",
      "Document engine exporting to PDF and Markdown",
    ],
  },
  {
    slug: "enosx-store",
    name: "Enosx Tech Store",
    kicker: "E-commerce",
    blurb:
      "Our online storefront for tech products and digital services — fast browsing, clean checkout, built and maintained in-house.",
    url: "https://enosxtech.vercel.app",
    accent: "purple",
    features: [
      "Curated tech product catalogue",
      "Fast, mobile-first browsing experience",
      "Streamlined checkout flow",
      "Direct WhatsApp support on every order",
    ],
  },
  {
    slug: "exlover",
    name: "ExLover Coach",
    kicker: "Loving & relationship coaching",
    blurb:
      "An AI-guided coach for relationships — thoughtful prompts, honest reflection, and practical advice for real conversations.",
    url: "https://exlover.vercel.app",
    accent: "crimson",
    features: [
      "Guided conversation coaching",
      "Personalised advice and reflection prompts",
      "Private, judgement-free sessions",
      "Available anywhere, any time",
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
