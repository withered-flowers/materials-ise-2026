---
layout: section
---

# Modul 4
## Benchmark Performa dengan Google Lighthouse

Panduan melakukan audit dan benchmark performa website statis menggunakan Google Lighthouse serta memahami indikator Core Web Vitals.

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
  <b>Benchmark Performa:</b> Proses pengujian dan pengukuran efisiensi kecepatan website menggunakan indikator metrik standar yang terukur.
</div>

---
layout: default
---

# 2. Mengenal Google Lighthouse & 4 Kategori Audit

**Google Lighthouse** adalah alat audit otomatis open-source dari Google yang tertanam langsung di dalam browser Google Chrome.

<div class="text-xs mt-3">

| Kategori Audit | Aspek yang Dinilai | Target Ideal |
| :--- | :--- | :--- |
| **Performance** | Kecepatan pemuatan berkas, respon klik tombol, dan kestabilan antarmuka. | Skor 90 – 100 |
| **Accessibility** | Ramah bagi seluruh kalangan pengguna (kontras warna teks, teks alt gambar). | Skor 90 – 100 |
| **Best Practices** | Kepatuhan standar keamanan web modern (protokol HTTPS, sintaks aman). | Skor 90 – 100 |
| **SEO** | Kelengkapan informasi dasar halaman agar mudah diindeks mesin pencari. | Skor 90 – 100 |

</div>

---
layout: default
---

# 3. Memahami Metrik Kunci: Core Web Vitals

Tiga metrik utama yang digunakan untuk menilai kualitas kecepatan halaman web:

```mermaid {scale: 0.65}
graph TD
    subgraph CoreWebVitals [Tiga Pilar Utama Core Web Vitals]
        A["1. LCP (Largest Contentful Paint)<br>Kecepatan Muat Konten Terbesar<br>Target: < 2.5 Detik"]
        B["2. INP / FID (Interactivity)<br>Kecepatan Respon Input & Tombol<br>Target: < 200 Milidetik"]
        C["3. CLS (Cumulative Layout Shift)<br>Kestabilan Posisi Elemen Layar<br>Target: < 0.1"]
    end
```

<div class="grid grid-cols-3 gap-3 mt-2 text-xs">
  <div class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <b>LCP:</b> Waktu hingga gambar/teks utama selesai ditampilkan di layar.
  </div>
  <div class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <b>INP:</b> Durasi jeda saat tombol ditekan hingga browser memproses logika.
  </div>
  <div class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <b>CLS:</b> Menghindari elemen melompat/bergeser tiba-tiba saat loading.
  </div>
</div>

---
layout: default
---

# 4. Langkah Menjalankan Audit Lighthouse

<ol class="space-y-2 text-xs mt-2">
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">1. Buka Chrome Incognito Window:</span>
    Tekan <kbd>Ctrl + Shift + N</kbd> (Windows) atau <kbd>Cmd + Shift + N</kbd> (Mac) agar pengujian bebas dari pengaruh ekstensi browser.
  </li>
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">2. Masukkan URL Website Netlify:</span>
    Buka URL live website statis Anda (contoh: <code>https://nama-aplikasi.netlify.app</code>).
  </li>
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">3. Buka Developer Tools (F12):</span>
    Tekan <kbd>F12</kbd> ➔ Pilih tab <b>Lighthouse</b> pada panel atas.
  </li>
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">4. Atur Konfigurasi Audit:</span>
    Pilih Device: <b>Mobile</b> atau <b>Desktop</b>, dan centang seluruh kategori yang ingin dinilai.
  </li>
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-emerald-700 dark:text-emerald-400">5. Jalankan Audit:</span>
    Klik tombol <b>Analyze page load</b> dan tunggu sekitar 15–30 detik hingga laporan skor muncul.
  </li>
</ol>

---
layout: default
---

# 5. Membaca & Menginterpretasikan Skor

Lighthouse memberikan skor angka 0 hingga 100 dengan indikator warna:

<div class="grid grid-cols-3 gap-4 mt-4 text-center text-xs">

<div class="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100">
  <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">90 – 100</div>
  <div class="font-bold mb-1">Sangat Baik (Hijau)</div>
  Website telah memenuhi standar performa dan kualitas optimal.
</div>

<div class="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-100">
  <div class="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">50 – 89</div>
  <div class="font-bold mb-1">Cukup Baik (Oranye)</div>
  Berfungsi normal, namun masih ada potensi penghematan waktu muat.
</div>

<div class="p-4 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-red-950 dark:text-red-100">
  <div class="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">0 – 49</div>
  <div class="font-bold mb-1">Perlu Perbaikan (Merah)</div>
  Pemuatan terlalu lambat atau ada kendala performa mendesak.
</div>

</div>

<div class="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
  • <b>Opportunities:</b> Rekomendasi tindakan spesifik untuk memangkas waktu muat.<br>
  • <b>Diagnostics:</b> Analisis detail struktur aset dan efisiensi eksekusi script.
</div>

---
layout: default
---

# 6. Tips Optimasi Performa Website Statis

<div class="space-y-3 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm mb-1">1. Optimasi Berkas Gambar</div>
  Gunakan format modern seperti <b>WebP</b> atau <b>SVG</b>. Cantumkan atribut <code>width</code> dan <code>height</code> pada tag <code>&lt;img&gt;</code> untuk mencegah lonjakan pergeseran layout (CLS).
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">2. Minifikasi CSS dan JavaScript</div>
  Bersihkan spasi kosong dan baris komentar yang tidak diperlukan pada berkas <code>style.css</code> dan <code>script.js</code> agar ukuran berkas yang diunduh browser lebih kecil.
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
  <span><b>Tujuan Benchmark:</b> Memastikan website yang dirilis memiliki performa terukur, stabil, dan cepat.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>4 Kategori Lighthouse:</b> Performance, Accessibility, Best Practices, dan SEO.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Core Web Vitals:</b> LCP (&lt; 2,5 detik), INP (&lt; 200 ms), dan CLS (&lt; 0,1).</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Praktik Terbaik:</b> Jalankan audit di Incognito Window untuk hasil skor yang murni dan akurat.</span>
</div>

</div>

<div class="mt-8 text-center text-sm text-cyan-700 dark:text-cyan-400 font-bold">
  Selanjutnya di Bagian Referensi ➔ Cheatsheet Perintah & Panduan Troubleshooting!
</div>
