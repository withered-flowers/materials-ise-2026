---
layout: section
---

# Modul 1
## Konsep Dasar Deployment

Memahami apa itu deployment, perbedaan antara lingkungan Local vs Production, serta arsitektur cloud modern untuk developer junior.

---
layout: default
---

# 1. Apa Itu Deployment?

**Deployment** (Penggelaran / Penyebaran) adalah proses memindahkan aplikasi web yang telah selesai dibuat di komputer lokal (*Local Environment*) ke server cloud publik (*Production Environment*) sehingga dapat diakses melalui internet.

### Mengapa Kita Membutuhkan Deployment?

Ketika Anda menjalankan aplikasi di komputer sendiri (`localhost:3000` atau `localhost:8888`), aplikasi tersebut **hanya bisa diakses oleh komputer Anda sendiri**. Pengguna internet lain tidak memiliki akses ke harddisk atau jaringan komputer lokal Anda.

<div class="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-500 text-blue-950 dark:text-blue-100">
  <div class="font-bold text-blue-700 dark:text-blue-400">💡 Analogi Sederhana</div>
  <div class="text-sm mt-1 leading-relaxed">
    Menulis kode di komputer lokal diibaratkan seperti <b>mengarang buku di buku catatan pribadi Anda</b>. 
    Deployment adalah proses <b>mencetak buku tersebut dan meletakkannya di rak toko buku publik</b> agar siapa saja dapat membacanya.
  </div>
</div>

---
layout: default
---

# 2. Perbedaan Lingkungan: Local vs Production

Dalam dunia pengembangan perangkat lunak (*software development*), terdapat pemisahan lingkungan (*environment*) kerja:

```mermaid {scale: 0.65}
graph LR
    subgraph Local ["💻 Lingkungan Lokal (Local Host)"]
        L1[Komputer Developer] --> L2[RAM & Server Lokal]
        L2 --> L3["localhost:8888 (Privat)"]
    end
    
    subgraph Cloud ["☁️ Netlify Cloud (Production)"]
        P1[Global CDN / AWS] --> P2[HTTPS / SSL Auto]
        P2 --> P3["https://myapp.netlify.app (Publik)"]
    end

    Local -- "Git Push / Netlify CLI Deploy" --> Cloud
```

<div class="mt-2 text-xs opacity-75 text-center"> Alur perpindahan kode dari komputer pengembang menuju platform hosting cloud publik</div>

---
layout: default
---

# 2. Perbedaan Local vs Production (Tabel)

<div class="text-xs">

| Fitur / Karakteristik | Lingkungan Lokal (*Local Environment*) | Lingkungan Produksi (*Production Environment*) |
| :--- | :--- | :--- |
| **Alamat URL** | `http://localhost:3000` atau `127.0.0.1` | `https://aplikasiku.netlify.app` / custom domain |
| **Aksesibilitas** | Hanya komputer Anda sendiri | Publik (Siapa saja yang terkoneksi internet) |
| **Keamanan (SSL)** | `http://` tanpa enkripsi | `https://` dengan sertifikat SSL aktif |
| **Database & API** | Database tiruan/lokal (`localhost:5432`) | Database cloud terenkripsi & skala besar |
| **Variabel Rahasia** | File `.env` lokal | Netlify Dashboard Environment Variables |
| **Toleransi Error** | Error ditampilkan lengkap di layar browser | Error disembunyikan untuk keamanan pengguna |

</div>

---
layout: default
---

# 3. Komponen Utama Aplikasi Web di Cloud

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-base mb-1">A. Web Hosting / Server Cloud</div>
  <div class="text-xs opacity-90 leading-relaxed">
    Tempat penyimpanan file HTML, CSS, JS, dan kode backend agar dapat dieksekusi 24/7. Netlify menggunakan <b>CDN (Content Delivery Network)</b> global untuk menduplikasi file ke puluhan server di seluruh dunia.
  </div>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-base mb-1">B. Nama Domain & DNS</div>
  <div class="text-xs opacity-90 leading-relaxed">
    • <b>IP Address</b>: Alamat numerik server (contoh: <code>75.2.60.5</code>).<br>
    • <b>Domain Name</b>: Nama mudah diingat (<code>google.com</code> atau <code>my-app.netlify.app</code>).<br>
    • <b>DNS</b>: Buku telepon internet yang menerjemahkan Domain ke IP Address.
  </div>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-amber-700 dark:text-amber-400 text-base mb-1">C. SSL / HTTPS Certificate</div>
  <div class="text-xs opacity-90 leading-relaxed">
    Enkripsi keamanan berikon gembok di browser. Memastikan data pengguna (password, data sensitif) tidak diintip pihak ketiga. Netlify memberikan <b>SSL Gratis (Let's Encrypt)</b> otomatis!
  </div>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-purple-700 dark:text-purple-400 text-base mb-1">D. Environment Variables</div>
  <div class="text-xs opacity-90 leading-relaxed">
    Tempat menyimpan kunci rahasia (<i>API Key</i>, <i>Database URL</i>, <i>Secret Key</i>) agar tidak ditulis langsung di dalam source code (<i>hardcoded</i>).
  </div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border-l-4 border-red-500 text-xs text-red-950 dark:text-red-100">
  <span class="font-bold text-red-700 dark:text-red-400">⚠️ Penting untuk Keamanan:</span> Jangan pernah mengunggah file <code>.env</code> atau <i>Secret API Key</i> ke repository GitHub publik! Selalu gunakan menu <i>Environment Variables</i> di platform hosting.
</div>

---
layout: default
---

# 4. Alur Kerja Otomatisasi (CI/CD)

Netlify mendukung alur kerja modern **Continuous Integration & Continuous Deployment (CI/CD)**:

<div class="grid grid-cols-2 gap-4 mt-2 items-center">

<div>
  <ol class="space-y-2 text-xs">
    <li><span class="font-bold text-cyan-700 dark:text-cyan-400">Developer Menulis Kode</span> di VS Code lokal.</li>
    <li><span class="font-bold text-cyan-700 dark:text-cyan-400">Commit & Push</span> kode ke GitHub repository.</li>
    <li><span class="font-bold text-cyan-700 dark:text-cyan-400">Netlify Mendeteksi</span> perubahan otomatis via Webhook.</li>
    <li><span class="font-bold text-cyan-700 dark:text-cyan-400">Process Build</span> dijalankan di cloud Netlify.</li>
    <li><span class="font-bold text-cyan-700 dark:text-cyan-400">Aplikasi Ter-update</span> secara otomatis tanpa downtime!</li>
  </ol>
</div>

<div>

```mermaid {scale: 0.6}
graph TD
    A["💻 Kode Lokal (VS Code)"] -- "git push" --> B["🐙 GitHub Repository"]
    B -- "Webhook" --> C["☁️ Netlify Build Engine"]
    C -- "Auto Deploy" --> D["🚀 Live Website (CDN)"]
```

</div>

</div>

---
layout: default
---

# 💡 Ringkasan Modul 1

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 mt-4 text-xs">

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Pengertian Deployment:</b> Memindahkan aplikasi dari komputer lokal ke server cloud publik.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Local vs Production:</b> Privasi <code>localhost</code> vs Keamanan & Aksesibilitas Publik Cloud.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Komponen Cloud:</b> CDN Hosting, Domain/DNS, SSL HTTPS Gratis, dan Environment Variables.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Otomatisasi CI/CD:</b> Perubahan di GitHub langsung ter-deploy otomatis ke Netlify CDN.</span>
</div>

</div>

<div class="mt-8 text-center text-sm text-cyan-700 dark:text-cyan-400 font-bold">
  Selanjutnya di Modul 2 ➔ Deploy Frontend Statis (Vanilla HTML/CSS/JS) ke Netlify!
</div>
