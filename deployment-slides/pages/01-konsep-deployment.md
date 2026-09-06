---
layout: section
---

# Modul 1
## Konsep Dasar Deployment

Memahami konsep dasar deployment, evolusi dari traditional VPS ke modern CI/CD dan serverless, serta arsitektur cloud untuk pemula.

---
layout: default
---

# 1. Pengertian Deployment

**Deployment** adalah proses memindahkan atau merilis aplikasi web dari komputer lokal (*Local Environment*) ke server cloud publik (*Production Environment*) sehingga dapat diakses oleh siapa saja melalui internet.

### Mengapa Deployment Diperlukan?

Ketika Anda menjalankan website di komputer sendiri (`localhost:3000` atau `localhost:8888`), website tersebut **hanya bisa dibuka oleh komputer Anda sendiri**. Pengguna internet di luar tidak memiliki izin atau akses ke penyimpanan komputer pribadi Anda.

<div class="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-500 text-blue-950 dark:text-blue-100">
  <div class="font-bold text-blue-700 dark:text-blue-400">Analogi Sederhana</div>
  <div class="text-xs mt-1 leading-relaxed">
    Menulis kode di komputer lokal diibaratkan seperti <b>menulis catatan pada buku harian pribadi</b>. 
    Deployment adalah proses <b>mencetak tulisan tersebut dan menaruhnya di rak perpustakaan publik</b> agar dapat dibaca oleh masyarakat umum.
  </div>
</div>

---
layout: default
---

# 2. Evolusi Deployment: Tradisional vs Modern

Bagaimana cara pengembang web merilis website ke internet dari masa ke masa?

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-red-700 dark:text-red-400 text-sm mb-2">A. Traditional Deployment (VPS)</div>
  <ul class="space-y-1.5 opacity-90 leading-relaxed">
    <li>• Sewa VPS (Ubuntu Linux) dengan biaya bulanan tetap.</li>
    <li>• Akses server manual via terminal <b>SSH</b> atau <b>FTP/SFTP</b>.</li>
    <li>• Instal & konfigurasi manual web server <b>Nginx / Apache</b>.</li>
    <li>• Pasang & perpanjang sertifikat SSL manual (Certbot).</li>
    <li>• Risiko crash / downtime saat lonjakan trafik pengunjung.</li>
  </ul>
</div>

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-2">B. Modern Deployment (CI/CD & Serverless)</div>
  <ul class="space-y-1.5 opacity-90 leading-relaxed">
    <li>• <b>Otomatisasi CI/CD:</b> Cukup <code>git push</code> ke GitHub, website langsung ter-update di cloud.</li>
    <li>• <b>Serverless & Global CDN:</b> Berkas disalin ke puluhan server edge di seluruh dunia tanpa mengurus OS.</li>
    <li>• <b>Auto-scaling:</b> Menangani ribuan trafik tanpa downtime.</li>
    <li>• <b>SSL Otomatis:</b> Enkripsi HTTPS aktif gratis seketika.</li>
  </ul>
</div>

</div>

---
layout: default
---

# 2. Tabel Perbandingan VPS vs Serverless CI/CD

<div class="text-xs mt-2">

| Aspek | Traditional Deployment (VPS) | Modern Deployment (Netlify / Serverless) |
| :--- | :--- | :--- |
| **Pengelolaan Server** | Manual (Konfigurasi OS, Nginx, Firewall) | Dikelola penuh oleh platform cloud (*Zero Server Ops*) |
| **Alur Rilis Kode** | Manual via SSH, FTP, atau Git pull di VPS | Otomatis terpicu saat melakukan `git push` ke GitHub |
| **Sertifikat SSL** | Dikonfigurasi dan diperpanjang manual | Otomatis aktif (*Let's Encrypt*) secara gratis |
| **Distribusi Berkas** | Terpusat pada satu lokasi server VPS | Tersebar di puluhan server **Global CDN** di seluruh dunia |
| **Ketahanan Trafik** | Terbatas pada kapasitas RAM/CPU VPS | Skala otomatis (*Auto-scaling*) tanpa risiko server down |
| **Tingkat Kesulitan** | Butuh keahlian Linux & DevOps | Sangat ramah pemula, cukup menghubungkan GitHub |

</div>

---
layout: default
---

# 3. Perbedaan Lingkungan: Local vs Production

```mermaid {scale: 0.65}
graph LR
    subgraph Local ["Lingkungan Lokal (Localhost)"]
        L1[Komputer Anda] --> L2[Penyimpanan Lokal]
        L2 --> L3["localhost:8888 (Privat)"]
    end
    
    subgraph Cloud ["Netlify Cloud (Production)"]
        P1[Server Global CDN] --> P2[Enkripsi HTTPS / SSL]
        P2 --> P3["https://situs-anda.netlify.app (Publik)"]
    end

    Local -- "Git Push ke GitHub -> Netlify Auto Deploy" --> Cloud
```

<div class="text-xs mt-2">

| Karakteristik | Lingkungan Lokal (*Localhost*) | Lingkungan Produksi (*Cloud*) |
| :--- | :--- | :--- |
| **Alamat URL** | `http://localhost:3000` atau `127.0.0.1` | `https://situs-anda.netlify.app` / custom domain |
| **Aksesibilitas** | Hanya komputer Anda sendiri | Publik (seluruh pengguna internet) |
| **Keamanan** | `http://` tanpa enkripsi | `https://` dengan sertifikat SSL aktif |
| **Error Handling** | Pesan error ditampilkan lengkap untuk debugging | Pesan internal disembunyikan demi keamanan |

</div>

---
layout: default
---

# 4. Komponen Utama Infrastruktur Web Cloud

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm mb-1">A. Web Hosting & CDN</div>
  <div class="text-xs opacity-90 leading-relaxed">
    • <b>Hosting:</b> Komputer cloud penyimpan berkas web 24/7.<br>
    • <b>CDN (Content Delivery Network):</b> Jaringan server global yang menduplikasi berkas agar dimuat cepat dari lokasi terdekat.
  </div>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">B. Nama Domain & DNS</div>
  <div class="text-xs opacity-90 leading-relaxed">
    • <b>IP Address:</b> Alamat numerik server (contoh: <code>75.2.60.5</code>).<br>
    • <b>Domain:</b> Nama alamat web yang mudah diingat manusia.<br>
    • <b>DNS:</b> Buku kontak internet yang menerjemahkan Domain ke IP.
  </div>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 col-span-2">
  <div class="font-bold text-amber-700 dark:text-amber-400 text-sm mb-1">C. Protokol HTTPS & Sertifikat SSL</div>
  <div class="text-xs opacity-90 leading-relaxed">
    Protokol transfer data terenkripsi berikon gembok di browser. Menjamin data pengunjung tidak disadap di jaringan. Netlify memberikan <b>Sertifikat SSL Gratis (Let's Encrypt)</b> secara otomatis pada setiap website yang di-deploy!
  </div>
</div>

</div>

---
layout: default
---

# 5. Alur Kerja Otomatisasi (CI/CD)

Netlify mendukung alur kerja modern **Continuous Integration & Continuous Deployment (CI/CD)**:

<div class="grid grid-cols-2 gap-4 mt-4 items-center">

<div>
  <ol class="space-y-2 text-xs">
    <li><span class="font-bold text-cyan-700 dark:text-cyan-400">1. Menulis Kode:</span> Mengembangkan website di VS Code komputer lokal.</li>
    <li><span class="font-bold text-cyan-700 dark:text-cyan-400">2. Commit & Push:</span> Mengunggah pembaruan kode ke repositori GitHub.</li>
    <li><span class="font-bold text-cyan-700 dark:text-cyan-400">3. Notifikasi Webhook:</span> GitHub memberi tahu Netlify saat ada perubahan kode baru.</li>
    <li><span class="font-bold text-cyan-700 dark:text-cyan-400">4. Publikasi Global:</span> Netlify mendistribusikan berkas ke jaringan CDN.</li>
    <li><span class="font-bold text-cyan-700 dark:text-cyan-400">5. Website Ter-update:</span> Live otomatis tanpa jeda (*zero downtime*).</li>
  </ol>
</div>

<div>

```mermaid {scale: 0.6}
graph TD
    A["Kode Komputer Lokal"] -- "git push" --> B["GitHub Repository"]
    B -- "Webhook Otomatis" --> C["Netlify Build Engine"]
    C -- "Auto Deploy" --> D["Website Live (CDN Global)"]
```

</div>

</div>

---
layout: default
---

# Ringkasan Modul 1

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 mt-4 text-xs">

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Pengertian Deployment:</b> Memindahkan aplikasi dari komputer lokal ke server cloud publik.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Tradisional vs Modern:</b> Kerumitan mengurus VPS manual vs kemudahan otomatisasi Serverless & CI/CD.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Infrastruktur Cloud:</b> CDN untuk kecepatan akses, DNS untuk penerjemah domain, dan SSL untuk enkripsi HTTPS.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Alur CI/CD:</b> Perubahan kode di GitHub secara otomatis memicu pembaruan website di Netlify.</span>
</div>

</div>

<div class="mt-8 text-center text-sm text-cyan-700 dark:text-cyan-400 font-bold">
  Selanjutnya di Modul 2 ➔ Penggunaan Git dan GitHub untuk Pengembang Pemula!
</div>
