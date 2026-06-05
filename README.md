# Portfolio — Setup Guide

Portfolio website dengan Next.js (App Router) + TypeScript. Desain dark,
elegan, editorial, dengan nuansa software engineer. Tanpa backend, tanpa
Tailwind — semua styling pakai CSS murni jadi minim error versi.

---

## Langkah 1 — Buat project Next.js

Buka terminal, lalu jalankan:

```bash
npx create-next-app@latest my-portfolio
```

Saat ditanya, pilih:

- ✅ TypeScript → **Yes**
- ✅ ESLint → **Yes**
- ❌ Tailwind CSS → **No**  (kita pakai CSS custom)
- ✅ `src/` directory → **No**
- ✅ App Router → **Yes**
- ✅ Turbopack → **Yes** (boleh)
- ✅ import alias `@/*` → **Yes** (default, penting!)

Lalu masuk ke folder:

```bash
cd my-portfolio
```

---

## Langkah 2 — Salin file dari folder ini

Salin file-file berikut ke project kamu (timpa yang sudah ada):

```
my-portfolio/
├── app/
│   ├── layout.tsx      ← timpa
│   ├── page.tsx        ← timpa
│   └── globals.css     ← timpa
├── components/         ← folder baru
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Reveal.tsx
└── lib/                ← folder baru
    └── content.ts
```

> Catatan: kalau create-next-app membuat `app/page.module.css` atau
> `app/favicon.ico` bawaan, biarkan saja — tidak mengganggu. Yang penting
> `globals.css`, `layout.tsx`, dan `page.tsx` ditimpa dengan versi ini.

---

## Langkah 3 — Jalankan

```bash
npm run dev
```

Buka **http://localhost:3000** — portfolio sudah jalan dengan placeholder.

---

## Langkah 4 — Isi konten kamu

**Semua konten ada di satu file: `lib/content.ts`**

Ganti semua teks `[insert ... here]` dengan punyamu. Tidak perlu menyentuh
file lain. Bagian yang bisa diedit:

- `profile` — nama, inisial, role, lokasi, status
- `hero` — headline & value proposition
- `about` — cerita + statistik
- `projects` — daftar project (tambah/kurangi bebas)
- `skills` — kategori keahlian
- `contact` — email & link sosial
- `seo` — judul & deskripsi untuk Google

### Menambah foto / gambar project

1. Taruh file gambar di folder `public/` (mis. `public/me.jpg`,
   `public/project-1.jpg`)
2. Di `content.ts`, tulis path-nya dengan awalan `/`:
   ```ts
   photo: "/me.jpg",
   image: "/project-1.jpg",
   ```
3. Kalau dibiarkan `null` atau `[insert ...]`, otomatis muncul placeholder.

### Menambah project baru

Copy satu blok `{ ... }` di array `projects`, lalu edit isinya. Layout
otomatis berganti kiri-kanan (zig-zag) mengikuti urutan.

---

## Langkah 5 — Contact form (opsional)

Saat ini tombol kontak pakai `mailto:`. Kalau mau form sungguhan tanpa
backend, daftar gratis di **https://formspree.io** atau
**https://www.emailjs.com**, lalu tempel endpoint mereka. Bilang saja kalau
mau dibuatkan.

---

## Langkah 6 — Deploy ke Vercel (gratis)

1. Push project ke GitHub
2. Buka **https://vercel.com** → Import repo → Deploy
3. Selesai. Tambahkan custom domain di Settings kalau punya.

---

## Tweak desain cepat

Semua token desain ada di bagian atas `app/globals.css` (`:root`):

- `--accent` — warna aksen (default coral `#ff5e3a`). Ganti sesukamu.
- `--bg` / `--fg` — warna latar & teks.
- Font diatur di `app/layout.tsx` (Fraunces / Schibsted Grotesk /
  JetBrains Mono). Ganti via `next/font/google` kalau mau.

Mau versi light mode, layout grid, atau section tambahan (blog, experience
timeline)? Tinggal bilang.
