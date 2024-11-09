export type Project = {
  title: string;
  image: string;
  description: string;
  stack: string[];
  liveUrl: string | null;
  github: string | null;
}

export const projects: Project[] = [
  {
    title: "Dicoding Clone",
    image: "dicoding-clone.jpeg",
    description: "Dicoding home page clone.",
    stack: ["typescript", "nextjs2", "tailwindcss", "framer"],
    liveUrl: "https://dicoding-clone.vercel.app/",
    github: "https://github.com/hidayahapriliansyah/dicoding-clone"
  },
  {
    title: "Thumbhash Generator",
    image: "thumbhash.png",
    description: "Effortless to create your customize beautiful and small blur image placeholder.",
    stack: ["typescript", "nextjs2", "tailwindcss"],
    liveUrl: "https://thumbhash-generator.vercel.app/",
    github: "https://github.com/hidayahapriliansyah/thumbhash-generator"
  },
  {
    title: "GIB Tasikmalaya",
    image: "gib.png",
    description: "Gerakan Infaq Tasikmalaya website that contains detail, contact, and more.",
    stack: ["typescript", "nextjs2"],
    liveUrl: "https://gib-tasikmalaya.vercel.app/",
    github: "https://github.com/hidayahapriliansyah/gib-tasikmalaya"
  },
  {
    title: "Open Music API",
    image: "node.jpg",
    description: "Open Music API with PostgreSQL, Redis, RabbitMQ and E2E testing with Jest.",
    stack: ["nodejs", "redis", "postgresql", "jest"],
    liveUrl: null,
    github: "https://github.com/hidayahapriliansyah/oper-music-api"
  },
  {
    title: "AmaTrace",
    image: "amatrace.png",
    description: "My Bangkit Capstone project team is collaborating with Amati Indonesia to build a Traceability Platform for SMEs.",
    stack: ["typescript", "nextjs2", "postgresql", "gcloud"],
    liveUrl: null,
    github: "https://github.com/AMATI-TP-02"
  },
  {
    title: "Link Tree Clone",
    image: "linktree-clone.png",
    description: "Simple Link Tree clone with Glassmorphism design using all vanilla code (HTML, CSS, JS).",
    stack: ["html5", "css3", "js"],
    liveUrl: "https://linktree-clone-it-insight-day.vercel.app/",
    github: "https://github.com/hidayahapriliansyah/linktree-clone"
  },
  {
    title: "Ngifent",
    image: "contoh.png",
    description: "E-Ticket platform for managing community event.",
    stack: ["nodejs", "typescript", "nextjs2", "postgresql", "prisma"],
    liveUrl: "https://ngifent.com",
    github: null
  },
  {
    title: "Realtime Chat with Pusher",
    image: "realtime.png",
    description: "Fulstack realtime chatting app with Pusher and OAuth.",
    stack: ["nextjs2"],
    liveUrl: "https://realtime-messanger-nextjs.vercel.app/",
    github: "https://github.com/hidayahapriliansyah/realtime-messanger-nextjs"
  },
  {
    title: "Hoobank Landing Page",
    image: "hoobank.png",
    description: "Slicing Beautiful Hoobank Landing Page with React.js.",
    stack: ["vitejs", "reactjs"],
    liveUrl: "https://bank-modern-app-pi-jet.vercel.app/",
    github: "https://github.com/hidayahapriliansyah/bank-modern-app-prod"
  },
  {
    title: "Open AI Codex",
    image: "codex.png",
    description: "Chatting with Codex powered by Open API.",
    stack: ["openai", "reactjs"],
    liveUrl: "https://hidayahapr-open-ai.vercel.app/",
    github: "https://github.com/hidayahapriliansyah/open_ai_codex/tree/master"
  },
  {
    title: "Prakiraan Cuaca",
    image: "prakiraan.jpeg",
    description: "Weather forecasting using openweathermap.org",
    stack: ["html5", "css3", "js"],
    liveUrl: "https://prakiraan-cuaca-fundamental-frontend.vercel.app/",
    github: "https://github.com/hidayahapriliansyah/prakiraan-cuaca-fundamental-frontend",
  }
];
