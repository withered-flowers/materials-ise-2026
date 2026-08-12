---
layout: section
---

# Referensi
## Cheatsheet & Troubleshooting Netlify

Referensi cepat kumpulan perintah Netlify CLI, Git, serta panduan penyelesaian masalah untuk developer.

---
layout: default
---

# 1. Cheatsheet Perintah Netlify CLI

<div class="text-xs">

| Perintah | Deskripsi Fungsi |
| :--- | :--- |
| `npx netlify-cli login` | Membuka browser untuk otentikasi login ke akun Netlify. |
| `npx netlify-cli status` | Memeriksa status login, akun aktif, dan situs terhubung. |
| `npx netlify-cli dev` | Menjalankan server pengembangan lokal (Frontend + Functions). |
| `npx netlify-cli deploy` | Me-deploy situs ke lingkungan **Draft / Preview** (Bukan Live). |
| `npx netlify-cli deploy --prod` | Me-deploy situs langsung ke lingkungan **Production (Live)**. |
| `npx netlify-cli sites:list` | Menampilkan seluruh daftar situs di akun Netlify Anda. |
| `npx netlify-cli env:list` | Menampilkan daftar Environment Variables di Netlify Cloud. |
| `npx netlify-cli env:set KEY "VAL"` | Menambahkan atau memperbarui Environment Variable di cloud. |
| `npx netlify-cli functions:logs` | Menampilkan *streaming log* eksekusi Functions live di terminal. |

</div>

---
layout: default
---

# 2. Cheatsheet Perintah Dasar Git & GitHub

<div class="text-xs">

| Perintah | Deskripsi Fungsi |
| :--- | :--- |
| `git init` | Menginisialisasi repository Git baru di folder lokal. |
| `git status` | Melihat status perubahan file (staged, unstaged, untracked). |
| `git add .` | Menambahkan seluruh perubahan file ke penampungan (*staging area*). |
| `git commit -m "pesan"` | Menyimpan jepretan (*snapshot*) perubahan dengan pesan. |
| `git push -u origin main` | Mengunggah commit lokal ke branch `main` di GitHub repository. |
| `git pull origin main` | Mengambil dan menggabungkan perubahan terbaru dari GitHub. |

</div>

---
layout: default
---

# 3. Matriks Troubleshooting Ringkas

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-red-700 dark:text-red-400 mb-1">1. Error HTTP 404 (Page Not Found)</div>
  <b>Solusi:</b> Pastikan nama berkas utama adalah <code>index.html</code> (huruf kecil semua) dan direktori <code>publish</code> mengarah ke lokasi file.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-amber-700 dark:text-amber-400 mb-1">2. Error CORS Policy</div>
  <b>Solusi:</b> Gunakan URL Rewrite pada <code>netlify.toml</code> (<code>status = 200</code> dari <code>/api/*</code> ke <code>/.netlify/functions/:splat</code>) dan panggil path relatif di JS.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-purple-700 dark:text-purple-400 mb-1">3. Error HTTP 500 (Internal Error)</div>
  <b>Solusi:</b> Jalankan <code class="text-cyan-700 dark:text-cyan-300">npx netlify-cli functions:logs</code> untuk melihat stack trace kesalahan pada kode TypeScript serverless.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 mb-1">4. Env Var Undefined di Production</div>
  <b>Solusi:</b> Lakukan re-deploy (<code class="text-cyan-700 dark:text-cyan-300">npx netlify-cli deploy --prod</code>) setelah menambah variable baru di Dashboard Netlify.
</div>

</div>

---
layout: default
---

# 4. Template Cheat `netlify.toml` (Part 1)

**Build Settings & API Rewrites**

```toml [netlify.toml]
# netlify.toml - Template Serbaguna Fullstack Vanilla JS + TS Netlify Functions

[build]
  publish = "public"            # Folder tempat file HTML/CSS/JS statis berada
  functions = "netlify/functions" # Folder fungsi serverless TypeScript

# 1. URL Rewrite untuk API Backend (Bebas Isu CORS)
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

---
layout: default
---

# 4. Template Cheat `netlify.toml` (Part 2)

**SPA Fallback & Security HTTP Headers**

```toml [netlify.toml]
# 2. Redirect Fallback untuk Single Page Application (SPA)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# 3. Security HTTP Headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---
layout: center
class: text-center
---

# 🎉 Selamat Belajar & Selamat Deployed!

### Dari Lokal ke Production dengan Netlify

<div class="mt-6 text-sm opacity-80">
  Dokumentasi & Slide Presentasi Deployment Aplikasi Web
</div>

<div class="mt-8 flex justify-center space-x-4">
  <a href="https://netlify.com" target="_blank" class="px-4 py-2 bg-cyan-600 rounded-lg text-white font-bold hover:bg-cyan-500 transition">Buka Netlify Cloud</a>
  <a href="https://sli.dev" target="_blank" class="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition">Dibuat dengan Slidev</a>
</div>
