---
layout: section
---

# Referensi
## Cheatsheet & Troubleshooting

Referensi cepat kumpulan perintah Git, alur navigasi Netlify Dashboard, metrik Google Lighthouse, serta panduan pemecahan masalah untuk pemula.

---
layout: default
---

# 1. Cheatsheet Perintah Git & GitHub

<div class="text-xs">

| Perintah | Deskripsi Fungsi |
| :--- | :--- |
| `git init` | Menginisialisasi repositori Git baru pada folder lokal saat ini. |
| `git status` | Memeriksa status berkas (berkas baru, dimodifikasi, atau di staging). |
| `git add .` | Menambahkan seluruh perubahan berkas ke ruang persiapan (*staging area*). |
| `git commit -m "pesan"` | Menyimpan rekaman riwayat perubahan (*snapshot*) dengan keterangan jelas. |
| `git branch -M main` | Menamai branch utama proyek menjadi `main`. |
| `git remote add origin <URL>` | Menghubungkan repositori lokal dengan repositori remote di GitHub. |
| `git push -u origin main` | Mengunggah commit lokal ke branch `main` di GitHub untuk pertama kali. |
| `git push` | Mengunggah commit terbaru ke GitHub setelah remote origin terhubung. |
| `git pull` | Mengambil dan menggabungkan pembaruan kode terbaru dari GitHub. |

</div>

---
layout: default
---

# 2. Panduan Alur Kerja Netlify Dashboard (Web UI)

Pengelolaan deployment website dapat dilakukan secara visual tanpa perintah command line:

<div class="text-xs mt-2">

| Tindakan di Netlify Dashboard | Lokasi Menu & Langkah |
| :--- | :--- |
| **Menambahkan Proyek Baru** | Klik **Add new site** > **Import an existing project** > Pilih **GitHub**. |
| **Konfigurasi Build Statis** | *Branch*: `main`, *Build command*: (kosongkan), *Publish directory*: (kosongkan / `.`). |
| **Mengubah Nama Subdomain** | Menu situs > **Site configuration** > **General** > **Site details** > **Change site name**. |
| **Memantau Status Deployment** | Tab **Deploys** untuk melihat riwayat rilis otomatis dari commit GitHub. |
| **Melihat Log Rilis** | Klik salah satu riwayat deploy di tab **Deploys** untuk melihat detail proses. |

</div>

---
layout: default
---

# 3. Ambang Batas Metrik Google Lighthouse

<div class="text-xs mt-2">

| Indikator Metrik | Kategori Baik (Hijau) | Perlu Peningkatan (Oranye) | Kategori Buruk (Merah) |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | ≤ 2,5 detik | 2,5 – 4,0 detik | > 4,0 detik |
| **INP (Interaction to Next Paint)** | ≤ 200 ms | 200 – 500 ms | > 500 ms |
| **CLS (Cumulative Layout Shift)** | ≤ 0,1 | 0,1 – 0,25 | > 0,25 |
| **FCP (First Contentful Paint)** | ≤ 1,8 detik | 1,8 – 3,0 detik | > 3,0 detik |
| **Skor Keseluruhan Kategori** | 90 – 100 | 50 – 89 | 0 – 49 |

</div>

<div class="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-950 dark:text-blue-100 text-xs">
  <b>Tips Pengujian:</b> Jalankan audit di Google Chrome <b>Incognito Window</b> (Jendela Penyamaran) untuk memperoleh hasil benchmark yang murni tanpa distorsi ekstensi browser.
</div>

---
layout: default
---

# 4. Fokus 4 Kategori Audit Google Lighthouse

<div class="grid grid-cols-2 gap-3 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 mb-1">1. Performance</div>
  Kecepatan muat konten utama (LCP), responsivitas input (INP), dan kestabilan layout (CLS).
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 mb-1">2. Accessibility</div>
  Rasio kontras warna teks (minimal 4.5:1), atribut <code>alt</code> gambar, dan label form input.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-amber-700 dark:text-amber-400 mb-1">3. Best Practices</div>
  Koneksi HTTPS penuh, bebas dari error di console browser, dan keamanan pustaka kode.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-purple-700 dark:text-purple-400 mb-1">4. SEO</div>
  Keberadaan tag <code>&lt;title&gt;</code>, meta deskripsi, tag viewport mobile, dan link deskriptif.
</div>

</div>

---
layout: default
---

# 5. Matriks Penyelesaian Masalah (Troubleshooting)

<div class="grid grid-cols-2 gap-4 mt-2 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-red-700 dark:text-red-400 mb-1">1. Error HTTP 404 (Page Not Found)</div>
  <b>Penyebab:</b> Berkas utama bukan <code>index.html</code> atau berada di dalam subfolder.<br>
  <b>Solusi:</b> Pastikan nama berkas persis <code>index.html</code> (huruf kecil) di akar repositori.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-amber-700 dark:text-amber-400 mb-1">2. Tampilan CSS / JS Tidak Muncul</div>
  <b>Penyebab:</b> Penggunaan absolute path lokal (<code>C:/Users/...</code>).<br>
  <b>Solusi:</b> Gunakan relative path di tag HTML: <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-purple-700 dark:text-purple-400 mb-1">3. Git: "remote origin already exists"</div>
  <b>Penyebab:</b> Alamat remote origin sudah pernah diset.<br>
  <b>Solusi:</b> Gunakan <code class="font-mono text-cyan-700 dark:text-cyan-300">git remote set-url origin &lt;URL&gt;</code> untuk memperbarui alamat repositori.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 mb-1">4. Skor Lighthouse Rendah / Tidak Stabil</div>
  <b>Penyebab:</b> Ekstensi browser aktif atau ukuran gambar terlalu besar.<br>
  <b>Solusi:</b> Audit di Incognito Window dan kompres gambar ke format WebP.
</div>

</div>

---
layout: center
class: text-center
---

# Selamat Belajar dan Selamat Bereksperimen!

### Dari Komputer Lokal ke Server Cloud Publik dengan Netlify

<div class="mt-6 text-sm opacity-80">
  Materi Pembelajaran & Slide Presentasi Deployment Aplikasi Web
</div>

<div class="mt-8 flex justify-center space-x-4">
  <a href="https://app.netlify.com" target="_blank" class="px-4 py-2 bg-cyan-600 rounded-lg text-white font-bold hover:bg-cyan-500 transition">Buka Netlify Dashboard</a>
  <a href="https://github.com" target="_blank" class="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition">Buka GitHub</a>
</div>
