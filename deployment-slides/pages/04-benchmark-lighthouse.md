---
layout: section
---

# Modul 4
## Benchmark Performa dengan Google Lighthouse

Panduan melakukan audit dan benchmark performa website statis menggunakan Google Lighthouse serta pemahaman mendalam mengenai 4 kategori skor audit dan 5 indikator metrik performa (FCP, LCP, CLS, TBT, Speed Index).

---
layout: default
---

# 1. Mengapa Performa Website Sangat Penting?

Ketika seseorang membuka website di ponsel atau komputer, setiap detik waktu pemuatan (*loading time*) sangat menentukan:

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm mb-2">1. Kepuasan Pengguna</div>
  Pengguna cenderung meninggalkan halaman (<i>bounce</i>) jika website membutuhkan waktu lebih dari 3 detik untuk terbuka.
</div>

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-2">2. Jaringan Terbatas</div>
  Website yang ringan dan teroptimasi tetap dapat diakses lancar pada koneksi internet seluler yang kurang stabil.
</div>

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-2">3. Peringkat Google SEO</div>
  Mesin pencari Google memprioritaskan website yang cepat, stabil, dan ramah pengguna perangkat ponsel (*Mobile-First*).
</div>

</div>

<div class="mt-6 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-950 dark:text-blue-100 text-xs">
  <b>Benchmark Performa:</b> Proses pengujian dan pengukuran efisiensi kualitas website menggunakan kumpulan indikator metrik standar yang terukur.
</div>

---
layout: default
---

# 2. Mengenal Google Lighthouse & 4 Kategori Audit

**Google Lighthouse** adalah alat audit otomatis open-source dari Google yang tertanam langsung di dalam browser Google Chrome Developer Tools.

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm mb-1">1. Performance</div>
  Mengukur kecepatan memuat aset, responsivitas klik, dan kestabilan tampilan visual halaman.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">2. Accessibility</div>
  Mengukur kemudahan akses halaman bagi seluruh pengguna, termasuk penyandang disabilitas (*screen reader*).
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-amber-700 dark:text-amber-400 text-sm mb-1">3. Best Practices</div>
  Menguji kepatuhan terhadap standar keamanan web modern (protokol HTTPS, sintaks kode aman).
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1">4. SEO</div>
  Menguji kelengkapan metadata agar halaman mudah ditemukan dan diindeks oleh mesin pencari Google.
</div>

</div>

---
layout: default
---

# 3. Kategori 1: 5 Indikator Metrik Performa Lighthouse

Mengukur kecepatan pemuatan halaman, efisiensi eksekusi script, dan kestabilan tata letak visual:

```mermaid {scale: 0.65}
graph LR
    FCP["1. FCP (10%)<br>First Contentful Paint<br>≤ 1,8s"]
    SI["2. Speed Index (10%)<br>Perceptual Visual Fill<br>≤ 3,4s"]
    LCP["3. LCP (25%)<br>Largest Contentful Paint<br>≤ 2,5s"]
    TBT["4. TBT (30%)<br>Total Blocking Time<br>≤ 200ms"]
    CLS["5. CLS (25%)<br>Cumulative Layout Shift<br>≤ 0,1"]
```

<div class="grid grid-cols-2 gap-2 mt-2 text-xs">
  <div class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    • <b>FCP (10%):</b> Konten visual pertama muncul di layar (&le; 1,8s).<br>
    • <b>Speed Index (10%):</b> Kecepatan visual halaman terisi (&le; 3,4s).<br>
    • <b>LCP (25%):</b> Elemen konten visual terbesar selesai dimuat (&le; 2,5s).
  </div>
  <div class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    • <b>TBT (30%):</b> Beban pemblokiran JavaScript pada main thread (&le; 200ms).<br>
    • <b>CLS (25%):</b> Kestabilan layout tanpa pergeseran mendadak (&le; 0,1).<br>
    <span class="text-emerald-600 dark:text-emerald-400 font-bold">TBT + LCP + CLS menyumbang 80% total skor Performance!</span>
  </div>
</div>

---
layout: default
---

# 4. Kategori 2: Accessibility (Aksesibilitas)

Memastikan website ramah bagi seluruh pengguna, termasuk penyandang disabilitas:

<div class="space-y-3 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">1. Kontras Warna Teks (Color Contrast)</div>
  Rasio perbedaan warna teks terhadap warna latar belakang minimal <b>4.5:1</b> agar mudah dibaca oleh pengguna dengan keterbatasan penglihatan.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">2. Atribut Teks Alternatif Gambar (<code>alt="..."</code>)</div>
  Setiap tag <code>&lt;img&gt;</code> wajib menyertakan deskripsi alternatif agar dapat dibacakan oleh aplikasi <i>screen reader</i> tunanetra.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">3. Label Input Form & Hierarki Heading</div>
  Setiap <code>&lt;input&gt;</code> wajib terhubung dengan <code>&lt;label for="..."&gt;</code>, serta urutan heading bertingkat teratur (<code>&lt;h1&gt;</code> ke <code>&lt;h2&gt;</code>).
</div>

</div>

---
layout: default
---

# 5. Kategori 3: Best Practices & Kategori 4: SEO

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-amber-700 dark:text-amber-400 text-sm mb-2">Best Practices (Standar Keamanan)</div>
  <ul class="space-y-1.5 opacity-90 leading-relaxed">
    <li>• <b>HTTPS Penuh:</b> Bebas dari <i>Mixed Content</i> (tanpa HTTP biasa).</li>
    <li>• <b>Bebas Error di Console:</b> Tab Console bersih tanpa pesan merah.</li>
    <li>• <b>Library Aman:</b> Tidak memakai pustaka usang dengan celah keamanan.</li>
    <li>• <b>Aspek Rasio Gambar:</b> Gambar ditampilkan proporsional tanpa distorsi.</li>
  </ul>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-2">SEO (Optimasi Mesin Pencari)</div>
  <ul class="space-y-1.5 opacity-90 leading-relaxed">
    <li>• <b>Tag Judul (<code>&lt;title&gt;</code>):</b> Memiliki judul halaman deskriptif.</li>
    <li>• <b>Meta Description:</b> Ringkasan halaman untuk cuplikan pencarian.</li>
    <li>• <b>Mobile Viewport:</b> Tag meta responsif layar smartphone.</li>
    <li>• <b>Descriptive Link:</b> Teks link bermakna jelas (bukan "klik di sini").</li>
  </ul>
</div>

</div>

---
layout: default
---

# 6. Membaca & Menginterpretasikan Skor Audit

Lighthouse menyajikan skor setiap kategori dalam rentang angka 0 hingga 100:

<div class="grid grid-cols-3 gap-4 mt-4 text-center text-xs">

<div class="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100">
  <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">90 – 100</div>
  <div class="font-bold mb-1">Sangat Baik (Hijau)</div>
  Website memenuhi standar performa dan kualitas optimal industri.
</div>

<div class="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-100">
  <div class="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">50 – 89</div>
  <div class="font-bold mb-1">Cukup Baik (Oranye)</div>
  Berfungsi normal, namun masih ada aspek yang dapat dioptimalkan.
</div>

<div class="p-4 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-red-950 dark:text-red-100">
  <div class="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">0 – 49</div>
  <div class="font-bold mb-1">Perlu Perbaikan (Merah)</div>
  Terdapat kendala signifikan yang mempengaruhi kenyamanan pengguna.
</div>

</div>

<div class="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
  • <b>Opportunities:</b> Rekomendasi tindakan spesifik untuk memangkas waktu pemuatan berkas.<br>
  • <b>Diagnostics:</b> Laporan teknis mendalam mengenai ukuran berkas dan efisiensi script.
</div>

---
layout: default
---

# 7. Langkah Menjalankan Audit Lighthouse

<ol class="space-y-2 text-xs mt-2">
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">1. Buka Chrome Incognito Window:</span>
    Tekan <kbd>Ctrl + Shift + N</kbd> (Windows) atau <kbd>Cmd + Shift + N</kbd> (Mac) agar bebas dari ekstensi browser.
  </li>
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">2. Buka URL Netlify Website Anda:</span>
    Ketikkan alamat live situs (contoh: <code>https://kalkulator-diskon-budi.netlify.app</code>).
  </li>
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">3. Buka Developer Tools (F12):</span>
    Tekan <kbd>F12</kbd> ➔ Pilih tab <b>Lighthouse</b> pada bilah atas panel.
  </li>
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">4. Atur Konfigurasi Audit:</span>
    Pilih Device: <b>Mobile</b> atau <b>Desktop</b>, dan centang keempat kategori audit.
  </li>
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-emerald-700 dark:text-emerald-400">5. Jalankan Proses Audit:</span>
    Klik tombol <b>Analyze page load</b> dan tunggu sekitar 15–30 detik hingga laporan skor lengkap muncul.
  </li>
</ol>

---
layout: default
---

# 8. Tips Optimasi Performa Website Statis

<div class="space-y-3 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm mb-1">1. Optimasi Berkas Gambar</div>
  Gunakan format modern seperti <b>WebP</b> atau <b>SVG</b>. Cantumkan atribut <code>width</code> dan <code>height</code> pada tag <code>&lt;img&gt;</code> untuk mencegah pergeseran layout (CLS).
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">2. Minifikasi CSS dan JavaScript</div>
  Bersihkan spasi kosong dan komentar yang tidak diperlukan pada berkas <code>style.css</code> dan <code>script.js</code> agar ukuran unduhan berkas semakin kecil.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-purple-700 dark:text-purple-400 text-sm mb-1">3. Memanfaatkan Global CDN Netlify</div>
  Netlify secara otomatis menerapkan kompresi <b>Brotli / Gzip</b> dan menyajikan berkas dari edge server terdekat dengan lokasi pengunjung.
</div>

</div>

---
layout: default
---

# Ringkasan Modul 4

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 mt-4 text-xs">

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>4 Kategori Audit:</b> Performance (kecepatan), Accessibility (ramah disabilitas), Best Practices (keamanan), dan SEO (mesin pencari).</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>5 Metrik Performa:</b> FCP (10%), Speed Index (10%), LCP (25%), TBT (30%), dan CLS (25%).</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Interpretasi Skor:</b> Hijau (90–100 Baik), Oranye (50–89 Cukup), Merah (0–49 Buruk).</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Pengujian Akurat:</b> Jalankan selalu pada Jendela Penyamaran (Incognito Window) Google Chrome.</span>
</div>

</div>

<div class="mt-8 text-center text-sm text-cyan-700 dark:text-cyan-400 font-bold">
  Selanjutnya di Bagian Referensi ➔ Cheatsheet Perintah & Panduan Troubleshooting!
</div>
