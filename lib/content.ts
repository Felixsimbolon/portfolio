export const profile = {
  name: "Jeremi Felix Adiyatma",
  initials: "felix",
  role: "Software & AI Engineer",
  location: "Jakarta, Indonesia",
  availability: "Open to opportunities",
};

export const hero = {
  greeting: "Hi, I'm",
  name: "Felix.",
  description:
    "Software & AI engineer building full-stack systems and data tools. " +
    "I've shipped products for schools, spas, and telcos. Currently studying Information Systems at Fasilkom UI.",
  primaryCta:   { label: "View my work",  href: "#work"    },
  secondaryCta: { label: "Get in touch",  href: "#contact" },
};

export const about = {
  photo: "/me.jpeg",
  intro: [
    "Hi! I'm Felix, an Information Systems student from Jakarta studying at Universitas Indonesia (Fasilkom UI). I'm passionate about full-stack development, AI, and building software that solves real problems.",
    "I love shipping products that people actually use. From school management systems to spa platforms to enterprise dashboards, I enjoy taking ideas all the way to production. I'm always looking for the next problem worth solving.",
  ],
  quickFacts: [
    { label: "Location",   value: "Jakarta, Indonesia"                    },
    { label: "Education",  value: "Universitas Indonesia, Fasilkom UI"   },
    { label: "Interests",  value: "Full-Stack Dev, AI / ML, Data Engineering" },
    { label: "Goal",       value: "Building software that ships to real users" },
  ],
  stats: [
    { value: "8",      label: "Projects shipped"       },
    { value: "3.90",   label: "GPA at Fasilkom UI"      },
    { value: "1,600+", label: "Data entities migrated" },
  ],
};

export type Project = {
  title: string;
  year: string;
  tagline: string;
  problem: string;
  contribution: string;
  impact: string;
  stack: string[];
  image: string | null;
  liveUrl: string;
  repos: { label: string; url: string }[];
  category: string;
  featured: boolean;
  showMeta: boolean;
};

export const projects: Project[] = [

  // ── TOP: showMeta projects (Sinsera, Sinaira, Dashboard) ────

  {
    title: "Sinsera",
    year: "2025",
    tagline: "School information system, built during Ciptadra Softindo internship",
    category: "Full-Stack Web",
    problem:
      "Schools under Yayasan Asih Putera had no unified system for registration, " +
      "fee collection, and academic records. Each was handled separately.",
    contribution:
      "A school platform with dedicated views for principals, teachers, parents, " +
      "and students to manage everything in one place.",
    impact: "Used by 10+ schools under Yayasan Asih Putera, supporting 1,000+ students.",
    stack: ["Next.js", "Express.js", "PostgreSQL", "Docker"],
    image: "/sinsera.png", liveUrl: "", repos: [],
    featured: true, showMeta: true,
  },

  {
    title: "Sinaira",
    year: "2026",
    tagline: "Spa automation platform for a real client across 3 locations",
    category: "Full-Stack Web",
    problem:
      "Senaira managed bookings, payments, and therapist assignments manually " +
      "through WhatsApp. Payments were frequently missed, stock was hard to " +
      "track, and scheduling therapists across 3 locations was inefficient.",
    contribution:
      "A single platform for Senaira, covering bookings, therapist scheduling, " +
      "inventory tracking, promotions, and a performance dashboard across 3 locations.",
    impact:
      "Automated 200+ monthly reservations, reduced missed payments, and gave " +
      "managers a real-time view across all branches.",
    stack: ["Django", "Vue.js", "PostgreSQL"],
    image: "/sinaira.png", liveUrl: "https://sinaira-fe-staging.vercel.app/", repos: [],
    featured: true, showMeta: true,
  },

  {
    title: "Sales Dashboard",
    year: "2026",
    tagline: "Sales analytics dashboard at Telkom International",
    category: "Data Analytics",
    problem:
      "No centralised view for sales performance. Pricing trends and customer " +
      "retention were tracked through manual spreadsheet exports.",
    contribution:
      "A live dashboard tracking pricing trends, revenue, and customer retention " +
      "with an automated data pipeline. No manual exports needed.",
    impact: "Real-time sales visibility for the team with zero manual report prep.",
    stack: ["Power BI", "DAX", "Power Query", "MinIO", "Elasticsearch", "Python"],
    image: "/dashboard.png", liveUrl: "", repos: [],
    featured: true, showMeta: true,
  },

  // ── Academic projects ────────────────────────────────────────

  {
    title: "TravelAPAP",
    year: "2025",
    tagline: "Multi-service travel platform with microservice architecture",
    category: "Microservices",
    problem: "",
    contribution:
      "A travel booking platform for flights, activities, and tour packages, " +
      "with revenue and booking tracking for tour operators. " +
      "Separate FE and BE repositories.",
    impact: "",
    stack: ["Spring Boot", "Vue.js", "PostgreSQL", "Docker", "AWS", "GitLab CI/CD", "JWT"],
    image: "/travelapap.png", liveUrl: "",
    repos: [
      { label: "FE", url: "https://github.com/Felixsimbolon/TravelAPAP-FE" },
      { label: "BE", url: "https://github.com/Felixsimbolon/TravelAPAP" },
    ],
    featured: false, showMeta: false,
  },

  {
    title: "PeduliLingkungan",
    year: "2025",
    tagline: "Citizen environmental reporting platform",
    category: "Full-Stack Web",
    problem: "",
    contribution:
      "A platform for citizens to report environmental violations like illegal " +
      "logging or waste dumping to the relevant authorities.",
    impact: "",
    stack: ["Django", "PostgreSQL", "HTML / CSS"],
    image: "/pedulingkungan.png", liveUrl: "",
    repos: [{ label: "Code", url: "https://github.com/Felixsimbolon/pedulingkungan" }],
    featured: false, showMeta: false,
  },

  {
    title: "Petclinic",
    year: "2025",
    tagline: "Pet health management system for owners, doctors, and clinics",
    category: "Full-Stack Web",
    problem: "",
    contribution:
      "A clinic app where pet owners book visits, vets log prescriptions and notes, " +
      "and staff manage inventory and appointment history.",
    impact: "",
    stack: ["Django", "PostgreSQL", "Railway", "Neon Console"],
    image: "/petclinic.png", liveUrl: "",
    repos: [{ label: "Code", url: "https://github.com/Felixsimbolon/petclinic" }],
    featured: false, showMeta: false,
  },

  {
    title: "Makan Bang",
    year: "2024",
    tagline: "Food and drink finder app for Jakarta",
    category: "Full-Stack Web",
    problem: "",
    contribution:
      "A directory app for finding food and drink options around Jakarta " +
      "with search and category filters.",
    impact: "",
    stack: ["Django", "Tailwind CSS", "PostgreSQL"],
    image: "/makanbang.png", liveUrl: "",
    repos: [{ label: "Code", url: "https://github.com/Felixsimbolon/makan-bang" }],
    featured: false, showMeta: false,
  },

  {
    title: "Image Reconstruction",
    year: "2025",
    tagline: "CNN model for emoji classification and image reconstruction",
    category: "Computer Vision",
    problem: "",
    contribution:
      "A computer vision model that identifies emojis and reconstructs them " +
      "when parts of the image are missing, blurred, or cropped.",
    impact: "",
    stack: ["Python", "CNN", "OpenCV"],
    image: null, liveUrl: "",
    repos: [{ label: "Code", url: "https://github.com/Felixsimbolon" }],
    featured: false, showMeta: false,
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages",        items: ["Python", "Java", "JavaScript", "SQL", "HTML / CSS"] },
  { category: "Frameworks",       items: ["Next.js", "Spring Boot", "Django", "Express.js", "Vue.js", "Flutter"] },
  { category: "Data & Analytics", items: ["Power BI", "DAX", "Power Query", "pandas", "scikit-learn"] },
  { category: "Databases",        items: ["PostgreSQL", "MySQL"] },
  { category: "DevOps & Cloud",   items: ["Docker", "AWS", "GitLab CI/CD", "GitHub Actions"] },
];

export const contact = {
  heading: "Let's build something.",
  subline: "Open to full-time roles, internships, and project collaborations.",
  email: "felixsmbln25@gmail.com",
  socials: [
    { label: "GitHub",      href: "https://github.com/Felixsimbolon" },
    { label: "LinkedIn",    href: "https://linkedin.com/in/felix-simbolon-89835b289" },
    { label: "Resume",      href: "" },
    { label: "X / Twitter", href: "" },
  ],
};

export const seo = {
  title: "Jeremi Felix Adiyatma, Software & AI Engineer",
  description:
    "Software & AI Engineer based in Jakarta. Building full-stack systems, data pipelines, " +
    "and AI-powered tools. Information Systems student at Fasilkom UI with a 3.90 GPA.",
  url: "https://felixsimbolon.dev",
};

export const navLinks = {
  github:   "https://github.com/Felixsimbolon",
  linkedin: "https://linkedin.com/in/felix-simbolon-89835b289",
  email:    "felixsmbln25@gmail.com",
};
