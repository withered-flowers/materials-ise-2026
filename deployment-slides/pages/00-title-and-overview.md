---
layout: cover
class: text-center
---

# Belajar Deployment Aplikasi Web di Netlify

### Panduan Praktis dan Terstruktur untuk Pemula

Dari Komputer Lokal ke Server Cloud Publik dengan Aman, Cepat, dan Terukur.

<div class="mt-8 text-sm opacity-80">
  Konsep Deployment (VPS vs Serverless) • Git & GitHub • Deploy via Netlify Dashboard • Audit Google Lighthouse
</div>

<div @click="$slidev.nav.next" class="mt-12 py-2 px-4 inline-block border border-slate-300 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition">
  Tekan <kbd>Space</kbd> atau <carbon:arrow-right class="inline" /> untuk Memulai
</div>

---
layout: default
---

# Rencana Pembelajaran

Materi ini disusun secara bertahap bagi pemula (SMA/SMK dan mahasiswa tingkat awal) untuk memahami alur kerja deployment modern:

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-900 dark:text-blue-100">
  <div class="font-bold text-blue-700 dark:text-blue-400 text-base mb-1">Modul 1: Konsep Dasar Deployment</div>
  <div class="text-xs opacity-90 leading-relaxed">Pengertian deployment, evolusi <b>Traditional VPS ke Modern CI/CD & Serverless</b>, DNS, Domain, HTTPS/SSL, dan <b>CDN</b>.</div>
</div>

<div class="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-900 dark:text-emerald-100">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-base mb-1">Modul 2: Git dan GitHub</div>
  <div class="text-xs opacity-90 leading-relaxed">Pengenalan <i>version control</i>, 3 area kerja Git, perintah dasar (<code>init</code>, <code>add</code>, <code>commit</code>), serta menghubungkan ke repositori <b>GitHub</b>.</div>
</div>

<div class="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-amber-900 dark:text-amber-100">
  <div class="font-bold text-amber-700 dark:text-amber-400 text-base mb-1">Modul 3: Deploy Website Statis</div>
  <div class="text-xs opacity-90 leading-relaxed">Mempublikasikan website statis kalkulator diskon langsung dari GitHub ke <b>Netlify Dashboard (Web UI)</b> tanpa command line dan tanpa netlify.toml.</div>
</div>

<div class="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/50 text-purple-900 dark:text-purple-100">
  <div class="font-bold text-purple-700 dark:text-purple-400 text-base mb-1">Modul 4: Benchmark Performa Lighthouse</div>
  <div class="text-xs opacity-90 leading-relaxed">Audit performa dengan <b>Google Lighthouse</b>, pemahaman mendalam <b>4 Kategori Audit</b> (Performance, Accessibility, Best Practices, SEO), dan 5 Indikator Metrik Performa (FCP, LCP, CLS, TBT, Speed Index).</div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/50 text-cyan-900 dark:text-cyan-100 text-xs">
  <b>Materi Pelengkap:</b> Cheatsheet perintah Git, panduan navigasi Netlify Dashboard, matriks skor Lighthouse, dan panduan troubleshooting.
</div>

---
layout: default
---

# Proyek Praktik (Source Code)

Praktik dalam materi ini berfokus pada aplikasi website statis yang dapat ditemukan pada direktori repository:

<div class="mt-6">

<div class="p-5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start space-x-4">
  <div class="text-3xl">📁</div>
  <div>
    <div class="font-mono text-cyan-700 dark:text-cyan-400 font-bold text-base">sources/01-frontend-static/</div>
    <div class="text-sm opacity-90 mt-2 leading-relaxed">
      Aplikasi website statis <b>Kalkulator Diskon</b> berbasis Vanilla HTML, CSS, dan JavaScript murni tanpa *bundler*.
    </div>
    <div class="text-xs opacity-75 mt-2">
      • <code>index.html</code> (Struktur halaman & formulir) • <code>style.css</code> (Desain visual) • <code>script.js</code> (Logika perhitungan diskon)
    </div>
  </div>
</div>

</div>

<div class="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-900 dark:text-blue-100 text-xs leading-relaxed">
  <b>Fokus Pembelajaran:</b> Menguasai alur pengiriman kode dari komputer lokal ke GitHub, merilisnya ke cloud Netlify via web dashboard, hingga menguji kualitas halaman secara terukur dengan Google Lighthouse.
</div>
