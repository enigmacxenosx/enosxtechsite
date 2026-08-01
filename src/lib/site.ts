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
  email: "hello@enosx.tech",
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
  initials: string;
  bio: string;
};

export const LEADERSHIP: Leader[] = [
  {
    name: "Enosh Yeswa",
    role: "Chief Executive Officer",
    initials: "EY",
    bio: "Founder of Enosx Technologies (2024). Sets product direction across ENOSX AI, the Enosx Tech Store and ExLover Coach, with one standard: speed is UX.",
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
