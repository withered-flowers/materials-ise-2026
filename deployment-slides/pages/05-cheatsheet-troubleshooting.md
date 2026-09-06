---
layout: section
---

# Referensi
## Cheatsheet & Troubleshooting

Referensi cepat kumpulan perintah Git, Netlify CLI, metrik Google Lighthouse, serta panduan pemecahan masalah untuk pemula.

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

# 2. Cheatsheet Perintah Netlify CLI

<div class="text-xs">

| Perintah | Deskripsi Fungsi |
| :--- | :--- |
| `npx netlify-cli login` | Membuka browser untuk otentikasi login ke akun Netlify. |
| `npx netlify-cli status` | Memeriksa informasi akun aktif dan status situs yang terhubung. |
| `npx netlify-cli dev` | Menjalankan server pengujian lokal di komputer pada port 8888. |
| `npx netlify-cli deploy` | Merilis website ke lingkungan **Draft / Preview** untuk pengujian. |
| `npx netlify-cli deploy --prod` | Merilis website secara langsung ke lingkungan **Production (Live URL)**. |
| `npx netlify-cli sites:list` | Menampilkan seluruh daftar situs web di akun Netlify Anda. |

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
| **Skor Keseluruhan Kategori** | 90 – 100 | 50 – 89 | 0 – 49 |

</div>

<div class="mt-6 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-950 dark:text-blue-100 text-xs">
  <b>Tips Pengujian:</b> Jalankan audit di Google Chrome <b>Incognito Window</b> (Jendela Penyamaran) untuk memperoleh hasil benchmark yang murni tanpa distorsi ekstensi browser.
</div>

---
layout: default
---

# 4. Matriks Penyelesaian Masalah (Troubleshooting)

<div class="grid grid-cols-2 gap-4 mt-2 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-red-700 dark:text-red-400 mb-1">1. Error HTTP 404 (Page Not Found)</div>
  <b>Penyebab:</b> Berkas utama bukan <code>index.html</code> atau direktori publish salah.<br>
  <b>Solusi:</b> Pastikan nama berkas persis <code>index.html</code> (huruf kecil) dan letak direktori publish sesuai.
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
layout: default
---

# 5. Template Konfigurasi `netlify.toml`

Gunakan konfigurasi standar berikut untuk proyek website statis Anda:

```toml [netlify.toml]
# netlify.toml - Konfigurasi Standar Website Statis

[build]
  publish = "."   # Direktori yang dipublikasikan ke server CDN Netlify

# Aturan Header Keamanan HTTP
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

<div class="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
  • <code>publish = "."</code> menandakan seluruh berkas HTML, CSS, dan JS berada di akar folder proyek.<br>
  • Header <code>X-Frame-Options</code> dan <code>nosniff</code> menjaga website dari eksploitasi keamanan dasar.
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
  <a href="https://netlify.com" target="_blank" class="px-4 py-2 bg-cyan-600 rounded-lg text-white font-bold hover:bg-cyan-500 transition">Buka Netlify Cloud</a>
  <a href="https://github.com" target="_blank" class="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition">Buka GitHub</a>
</div>
