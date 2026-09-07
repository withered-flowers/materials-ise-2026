---
layout: section
---

# Modul 2
## Pengelolaan Kode dengan GitHub Web (Tanpa CLI)

Panduan praktis mengelola kode proyek menggunakan antarmuka web browser GitHub: Download ZIP dan Upload Files langsung dengan pesan commit.

---
layout: default
---

# 1. Mengenal GitHub & Penyimpanan Berbasis Cloud

<b>Version Control System (VCS)</b> adalah sistem yang mencatat riwayat versi berkas kode dari waktu ke waktu.

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm mb-2">Mengapa GitHub?</div>
  Platform berbasis cloud terbesar di dunia untuk menyimpan, mengamankan, dan membagikan repositori kode. Repositori GitHub dapat langsung dihubungkan ke penyedia hosting seperti <b>Netlify</b>.
</div>

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-2">Keuntungan Alur Web (Tanpa CLI)</div>
  <ul class="space-y-1.5 list-disc list-inside">
    <li><b>Tanpa Instalasi:</b> Tidak perlu memasang Git CLI atau Git Bash.</li>
    <li><b>100% Visual:</b> Cukup klik tombol dan <i>drag and drop</i> berkas.</li>
    <li><b>Ramah Pemula:</b> Menghindari kesalahan sintaks baris perintah di terminal.</li>
  </ul>
</div>

</div>

<div class="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-500 text-blue-950 dark:text-blue-100 text-xs">
  <b>Analogi:</b> Repositori GitHub diibaratkan seperti Google Drive khusus kode program, di mana setiap unggahan berkas dicatat tanggal dan pesan keterangannya secara rapi.
</div>

---
layout: default
---

# 2. Mengunduh Starter Code (Download as ZIP)

Mengambil berkas kode awal (*template*) dari pengajar tanpa perlu perintah terminal:

<div class="space-y-3 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start space-x-3">
  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-base">1</div>
  <div>
    <b>Buka Repositori Materi di Browser:</b> Buka link GitHub yang dibagikan oleh instruktur pelatihan.
  </div>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start space-x-3">
  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-base">2</div>
  <div>
    <b>Klik Tombol Hijau "&lt;&gt; Code":</b> Terletak di bagian kanan atas daftar berkas proyek.
  </div>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start space-x-3">
  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-base">3</div>
  <div>
    <b>Pilih "Download ZIP":</b> Browser akan mengunduh seluruh berkas proyek dalam satu paket arsip <code>.zip</code>.
  </div>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start space-x-3">
  <div class="font-bold text-emerald-600 dark:text-emerald-400 text-base">4</div>
  <div>
    <b>Ekstrak Berkas di Komputer Lokal:</b> Klik kanan berkas zip ➔ <b>Extract All</b>. Anda kini memiliki <code>index.html</code>, <code>style.css</code>, dan <code>script.js</code>.
  </div>
</div>

</div>

---
layout: default
---

# 3. Membuat Repositori Baru di GitHub Web

Membuat ruang penyimpanan cloud baru di akun GitHub pribadi:

<div class="space-y-3 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <span class="font-bold text-cyan-700 dark:text-cyan-400 text-sm">Langkah 1: Buka Menu Pembuatan Repositori</span><br>
  Login ke <a href="https://github.com" target="_blank" class="underline text-cyan-600">github.com</a> ➔ Klik ikon <b>"+"</b> di pojok kanan atas ➔ Pilih <b>"New repository"</b> (atau klik tombol hijau <b>"New"</b>).
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <span class="font-bold text-cyan-700 dark:text-cyan-400 text-sm">Langkah 2: Isi Nama & Visibilitas</span><br>
  • <b>Repository name:</b> Beri nama dengan huruf kecil dan tanda minus (contoh: <code>kalkulator-diskon-web</code>).<br>
  • <b>Visibility:</b> Pilih opsi <b>Public</b> (wajib agar dapat diimpor gratis ke Netlify Dashboard).
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <span class="font-bold text-cyan-700 dark:text-cyan-400 text-sm">Langkah 3: Klik "Create repository"</span><br>
  Biarkan opsi inisialisasi kosong, lalu klik tombol hijau <b>"Create repository"</b> di bagian bawah.
</div>

</div>

---
layout: default
---

# 4. Mengunggah Berkas Proyek (Upload Files)

Memasukkan berkas website dari komputer ke repositori GitHub:

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm">A. Akses Menu Unggah</div>
  <p>Pada halaman repositori baru, klik tautan bertuliskan:</p>
  <div class="p-2 rounded bg-slate-200 dark:bg-slate-900 font-mono text-cyan-800 dark:text-cyan-300">
    "...or uploading an existing file"
  </div>
  <p class="opacity-75">Atau melalui menu tombol: <b>Add file</b> ➔ <b>Upload files</b>.</p>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm">B. Drag & Drop Berkas</div>
  <p>Tarik berkas dari File Explorer / Finder komputer Anda langsung ke kotak browser:</p>
  <div class="p-2 rounded bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200">
    ✓ <code>index.html</code><br>
    ✓ <code>style.css</code><br>
    ✓ <code>script.js</code>
  </div>
</div>

</div>

---
layout: default
---

# 5. Menuliskan Pesan Commit & "Commit Changes"

Mencatat versi berkas secara resmi ke dalam sistem Version Control GitHub:

<div class="space-y-3 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm mb-1">1. Tulis Pesan Commit (Commit Message)</div>
  Pada form <b>Commit changes</b> di bawah daftar berkas, tulis pesan ringkas dan deskriptif:<br>
  <span class="font-mono bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded text-cyan-800 dark:text-cyan-300 mt-1 inline-block">
    feat: upload berkas kalkulator diskon awal
  </span>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm mb-1">2. Pilih Target Branch</div>
  Pastikan opsi radio button tercentang pada: <b>Commit directly to the <code>main</code> branch</b>.
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">3. Klik Tombol Hijau "Commit changes"</div>
  Klik tombol hijau di bawah. Berkas Anda kini tersimpan aman di cloud dan tercatat di riwayat branch <code>main</code>!
</div>

</div>

---
layout: default
---

# 6. Memperbarui Berkas Kode di GitHub Web

Dua cara mudah memperbarui kode website kapan saja langsung melalui browser:

<div class="grid grid-cols-2 gap-4 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm">Metode 1: Edit Langsung di Web</div>
  <ul class="space-y-1.5 list-disc list-inside opacity-90">
    <li>Klik nama berkas (contoh: <code>index.html</code>).</li>
    <li>Klik ikon pensil <b>"Edit this file"</b>.</li>
    <li>Ubah baris kode di editor teks browser.</li>
    <li>Tulis pesan commit ➔ Klik <b>Commit changes</b>.</li>
  </ul>
  <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Sangat cepat untuk perbaikan typo atau teks.</span>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
  <div class="font-bold text-amber-700 dark:text-amber-400 text-sm">Metode 2: Unggah Ulang Berkas Baru</div>
  <ul class="space-y-1.5 list-disc list-inside opacity-90">
    <li>Edit berkas di komputer (VS Code / Notepad).</li>
    <li>Di repositori GitHub, klik <b>Add file</b> ➔ <b>Upload files</b>.</li>
    <li>Tarik berkas baru (nama harus sama persis).</li>
    <li>Tulis pesan commit ➔ Klik <b>Commit changes</b>.</li>
  </ul>
  <span class="text-emerald-600 dark:text-emerald-400 font-semibold">GitHub akan otomatis menimpa versi lama.</span>
</div>

</div>

---
layout: default
---

# Ringkasan Modul 2

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 mt-4 text-xs">

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Tanpa CLI:</b> Pengelolaan kode GitHub 100% menggunakan browser web tanpa kerumitan terminal.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Download ZIP:</b> Mengunduh template starter code melalui tombol <b>Code ➔ Download ZIP</b>.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Upload Files:</b> Memasukkan berkas ke repositori dengan fitur <i>drag and drop</i> pada menu browser.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Commit Changes:</b> Menyimpan riwayat perubahan resmi dengan menuliskan pesan commit yang jelas.</span>
</div>

</div>

<div class="mt-8 text-center text-sm text-cyan-700 dark:text-cyan-400 font-bold">
  Selanjutnya di Modul 3 ➔ Menghubungkan Repositori GitHub ke Netlify Dashboard!
</div>
