---
layout: cover
class: text-center
---

# Belajar Deployment Aplikasi Web di Netlify

### Panduan Praktis & Terstruktur untuk Junior Developer

Dari Lokal ke Production dengan Cepat, Aman, dan Efisien.

<div class="mt-8 text-sm opacity-80">
  Frontend Statis • Backend Serverless TypeScript • Fullstack App • Netlify CLI & GitHub
</div>

<div @click="$slidev.nav.next" class="mt-12 py-2 px-4 inline-block border border-slate-300 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition">
  Tekan <kbd>Space</kbd> atau <carbon:arrow-right class="inline" /> untuk Memulai
</div>

---
layout: default
---

# 📚 Apa yang Akan Anda Pelajari?

Dokumentasi ini dirancang khusus untuk **Junior Developer** agar dapat memahami alur kerja deployment modern dari nol hingga berhasil merilis aplikasi ke internet.

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-900 dark:text-blue-100">
  <div class="font-bold text-blue-700 dark:text-blue-400 text-lg mb-1">📖 Modul 1: Konsep Deployment</div>
  <div class="text-sm opacity-90">Memahami apa itu deployment, perbedaan lingkungan <b>Local vs Production</b>, peran DNS/Domain, serta alur otomatisasi <b>CI/CD</b>.</div>
</div>

<div class="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-900 dark:text-emerald-100">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-lg mb-1">🚀 Modul 2: Deploy Frontend Statis</div>
  <div class="text-sm opacity-90">Langkah demi langkah menyebarkan web statis (HTML, CSS, JS) menggunakan <b>Netlify CLI</b> dan integrasi <b>GitHub repository</b>.</div>
</div>

<div class="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-amber-900 dark:text-amber-100">
  <div class="font-bold text-amber-700 dark:text-amber-400 text-lg mb-1">⚙️ Modul 3: Deploy Backend TypeScript</div>
  <div class="text-sm opacity-90">Membuat dan me-deploy <b>Serverless Functions</b> menggunakan TypeScript native di Netlify beserta pengelolaan <b>Environment Variables</b>.</div>
</div>

<div class="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/50 text-purple-900 dark:text-purple-100">
  <div class="font-bold text-purple-700 dark:text-purple-400 text-lg mb-1">🧩 Modul 4: Deploy Fullstack App</div>
  <div class="text-sm opacity-90">Menghubungkan Frontend dan Backend, menangani <b>CORS</b>, membuat <b>URL rewrite/redirects</b>, serta komunikasi REST API di cloud.</div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/50 text-cyan-900 dark:text-cyan-100 text-sm">
  💡 <b>Bonus Referensi:</b> Cheatsheet perintah Netlify CLI, Git, serta matriks troubleshooting lengkap!
</div>

---
layout: default
---

# 📂 Struktur Kode Sumber (Source Code)

Seluruh contoh kode yang dibahas dalam modul ini dapat diakses pada folder repository `sources/`:

<div class="space-y-4 mt-6">

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start space-x-4">
  <div class="text-2xl">📂</div>
  <div>
    <div class="font-mono text-cyan-700 dark:text-cyan-400 font-bold">sources/01-frontend-static/</div>
    <div class="text-sm opacity-90 mt-1">Web statis <b>Kalkulator Diskon</b> menggunakan Vanilla HTML, CSS, dan JavaScript.</div>
  </div>
</div>

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start space-x-4">
  <div class="text-2xl">📂</div>
  <div>
    <div class="font-mono text-amber-700 dark:text-amber-400 font-bold">sources/02-backend-ts/</div>
    <div class="text-sm opacity-90 mt-1">Serverless backend <b>TypeScript</b> dengan Netlify Functions (Endpoint <code>/api/hello</code> & <code>/api/quotes</code>).</div>
  </div>
</div>

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start space-x-4">
  <div class="text-2xl">📂</div>
  <div>
    <div class="font-mono text-purple-700 dark:text-purple-400 font-bold">sources/03-fullstack/</div>
    <div class="text-sm opacity-90 mt-1">Aplikasi <b>Task Manager</b> fullstack (Frontend Statis + Backend Serverless TS CRUD) yang terintegrasi secara utuh.</div>
  </div>
</div>

</div>
