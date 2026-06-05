// ============================================================
//  EDIT EVERYTHING IN THIS FILE.
//  Ganti semua teks di dalam tanda kutip dengan kontenmu.
//  Tidak perlu menyentuh file lain untuk mengganti konten.
// ============================================================

export const profile = {
  // Nama lengkap kamu (muncul di nav & footer)
  name: "[insert your name here]",

  // Inisial / logo singkat untuk pojok kiri nav (mis. "JF")
  initials: "[insert initials here]",

  // Role singkat di bawah nama (mis. "Software Engineer")
  role: "[insert your role here]",

  // Lokasi (mis. "Jakarta, Indonesia") — opsional
  location: "[insert your location here]",

  // Status ketersediaan kerja (mis. "Open to opportunities")
  availability: "[insert availability status here]",
};

// HERO — kesan pertama, harus langsung menjawab "siapa kamu & apa value-mu"
export const hero = {
  // Label kecil mono di atas judul (mis. "Software Engineer / Data")
  eyebrow: "[insert short label here]",

  // Headline besar. Pakai \n untuk pindah baris.
  // Tulis value proposition, bukan sekadar nama.
  // mis: "I build software that turns complexity into clarity."
  headline: "[insert your headline / value proposition here]",

  // Paragraf pendukung 1-2 kalimat
  subline:
    "[insert 1-2 supporting sentences about what you do and who you help here]",

  // Tombol CTA
  primaryCta: { label: "View my work", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

// ABOUT — cerita singkat yang manusiawi (bukan CV)
export const about = {
  // Foto/portrait. Taruh file di folder /public lalu tulis "/your-photo.jpg"
  // Biarkan null kalau belum ada foto.
  photo: "[insert /your-photo.jpg here or set to null]",

  // 2-3 paragraf cerita. Tiap string = 1 paragraf.
  paragraphs: [
    "[insert paragraph 1 — background singkat & apa yang kamu kerjakan here]",
    "[insert paragraph 2 — apa yang kamu sukai dari bidang ini here]",
    "[insert paragraph 3 — arah/tujuan kamu ke depan here]",
  ],

  // Statistik kecil opsional (boleh dihapus/ditambah)
  stats: [
    { value: "[insert number]", label: "[insert label, e.g. Projects shipped]" },
    { value: "[insert number]", label: "[insert label, e.g. Years coding]" },
    { value: "[insert number]", label: "[insert label, e.g. Technologies]" },
  ],
};

// PROJECTS — bagian paling penting. Tiap project harus substantif.
export type Project = {
  title: string;
  year: string;
  // Deskripsi 1 kalimat ringkas
  tagline: string;
  // Konteks masalah yang diselesaikan
  problem: string;
  // Apa yang KAMU lakukan (peranmu)
  contribution: string;
  // Hasil / dampak (angka kalau ada)
  impact: string;
  // Tech stack
  stack: string[];
  // Gambar preview. Taruh di /public lalu "/project-1.jpg". null = placeholder.
  image: string | null;
  // Link. Kosongkan ("") kalau tidak ada.
  liveUrl: string;
  repoUrl: string;
  // Tandai true untuk project unggulan (tampil lebih besar)
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "[insert project name here]",
    year: "[insert year, e.g. 2026]",
    tagline: "[insert one-line description here]",
    problem: "[insert the problem this project solves here]",
    contribution: "[insert what you specifically built/did here]",
    impact: "[insert result or impact, with numbers if possible here]",
    stack: ["[insert tech]", "[insert tech]", "[insert tech]"],
    image: "[insert /project-1.jpg here or set to null]",
    liveUrl: "[insert live url here or empty string]",
    repoUrl: "[insert github url here or empty string]",
    featured: true,
  },
  {
    title: "[insert project name here]",
    year: "[insert year here]",
    tagline: "[insert one-line description here]",
    problem: "[insert the problem this project solves here]",
    contribution: "[insert what you specifically built/did here]",
    impact: "[insert result or impact here]",
    stack: ["[insert tech]", "[insert tech]", "[insert tech]"],
    image: null,
    liveUrl: "",
    repoUrl: "",
    featured: false,
  },
  {
    title: "[insert project name here]",
    year: "[insert year here]",
    tagline: "[insert one-line description here]",
    problem: "[insert the problem this project solves here]",
    contribution: "[insert what you specifically built/did here]",
    impact: "[insert result or impact here]",
    stack: ["[insert tech]", "[insert tech]", "[insert tech]"],
    image: null,
    liveUrl: "",
    repoUrl: "",
    featured: false,
  },
];

// SKILLS — jujur & terkategori. Hapus/tambah kategori sesukamu.
export const skills: { category: string; items: string[] }[] = [
  {
    category: "[insert category, e.g. Languages]",
    items: ["[insert skill]", "[insert skill]", "[insert skill]"],
  },
  {
    category: "[insert category, e.g. Frameworks]",
    items: ["[insert skill]", "[insert skill]", "[insert skill]"],
  },
  {
    category: "[insert category, e.g. Tools & Platforms]",
    items: ["[insert skill]", "[insert skill]", "[insert skill]"],
  },
];

// CONTACT — buat orang gampang menghubungi kamu
export const contact = {
  heading: "Let's build something.",
  subline:
    "[insert a short invitation, e.g. I'm open to roles and collaborations here]",
  // Email aktif kamu
  email: "[insert your email here]",
  // Link sosial. Kosongkan ("") untuk menyembunyikan.
  socials: [
    { label: "GitHub", href: "[insert github url here]" },
    { label: "LinkedIn", href: "[insert linkedin url here]" },
    { label: "Resume", href: "[insert resume/CV link here]" },
    { label: "X / Twitter", href: "" },
  ],
};

// SEO — penting biar muncul di Google
export const seo = {
  title: "[insert your name] — [insert role]",
  description:
    "[insert a 1-sentence description for search engines & link previews here]",
  // URL final situsmu (mis. "https://yourname.com")
  url: "[insert your site url here]",
};
