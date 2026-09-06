---
layout: section
---

# Modul 2
## Penggunaan Git dan GitHub

Panduan praktis version control menggunakan Git dan GitHub untuk pemula sebelum melakukan deployment.

---
layout: default
---

# 1. Mengenal Version Control System (VCS)

**Version Control System (VCS)** adalah sistem yang mencatat setiap riwayat perubahan pada berkas kode dari waktu ke waktu.

### Mengapa Kita Membutuhkan Git?

Tanpa sistem kontrol versi, pemula sering kali menduplikasi folder secara manual:
- `website-final/`
- `website-final-beneran/`
- `website-final-fix-banget/`

Cara tersebut membingungkan dan memakan ruang penyimpanan. Git memecahkan masalah ini dengan mencatat riwayat perubahan (*commit*) secara rapi di dalam satu proyek.

<div class="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-500 text-blue-950 dark:text-blue-100 text-xs leading-relaxed">
  <b>Analogi Sederhana:</b> Git bekerja seperti kamera yang mengambil foto (<i>snapshot</i>) riwayat proyek Anda setiap kali ada perubahan. GitHub adalah album foto daring (<i>cloud storage</i>) tempat Anda menyimpan foto-foto tersebut agar aman dan dapat diakses dari mana saja.
</div>

---
layout: default
---

# 1. Perbedaan Git dan GitHub

<div class="text-xs mt-2">

| Aspek | Git | GitHub |
| :--- | :--- | :--- |
| **Kategori** | Perangkat lunak / aplikasi (*tool*) | Layanan berbasis web (*cloud hosting*) |
| **Instalasi** | Dipasang di komputer lokal Anda | Diakses melalui browser di `github.com` |
| **Fungsi Utama** | Mencatat riwayat perubahan kode | Menyimpan salinan repository Git secara online |
| **Akses Jaringan** | Bekerja secara *offline* di laptop/PC | Membutuhkan koneksi internet |
| **Kolaborasi** | Berfokus pada pengelolaan lokal | Memudahkan berbagi kode dan kerja tim |

</div>

<div class="mt-6 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
  <b>Hubungan dengan Deployment:</b> Platform hosting modern seperti Netlify membaca langsung berkas kode dari repositori <b>GitHub</b> Anda untuk menjalankan otomatisasi rilis.
</div>

---
layout: default
---

# 2. Tiga Area Kerja dalam Git

Sebelum menjalankan perintah, pahami alur perpindahan berkas di dalam Git:

```mermaid {scale: 0.65}
graph LR
    subgraph LocalMachine [Alur Kerja Lokal Git]
        A["Working Directory<br>Berkas Sedang Diedit"] -- "git add" --> B["Staging Area<br>Persiapan Snapshot"]
        B -- "git commit" --> C["Local Repository<br>Riwayat Permanen"]
    end
    C -- "git push" --> D["GitHub Remote<br>Server Cloud"]
```

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <b>1. Working Directory:</b> Folder proyek tempat Anda mengedit kode HTML, CSS, dan JS.
</div>

<div class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <b>2. Staging Area:</b> Ruang persiapan untuk memilih berkas yang siap disimpan (<code>git add</code>).
</div>

<div class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <b>3. Local Repository:</b> Tempat penyimpanan riwayat permanen di folder <code>.git</code> lokal.
</div>

</div>

---
layout: default
---

# 3. Konfigurasi Awal & Inisialisasi Proyek

<div class="space-y-4 mt-4 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm mb-1">A. Menentukan Identitas Developer (Satu Kali Setup)</div>
  <pre class="bg-slate-200 dark:bg-slate-900 p-2 rounded text-cyan-800 dark:text-cyan-300 font-mono">git config --global user.name "Nama Lengkap Anda"
git config --global user.email "email.anda@contoh.com"
git config --list</pre>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">B. Menginisialisasi Proyek Baru (<code>git init</code>)</div>
  Jalankan perintah ini di dalam folder proyek website Anda:
  <pre class="bg-slate-200 dark:bg-slate-900 p-2 rounded text-emerald-800 dark:text-emerald-300 font-mono mt-1">git init</pre>
  <span class="opacity-75">Perintah ini membuat folder tersembunyi <code>.git</code> agar proyek mulai dipantau.</span>
</div>

</div>

---
layout: default
---

# 4. Alur Perintah Dasar: Add & Commit

<div class="space-y-3 mt-3 text-xs">

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <span class="font-bold text-cyan-700 dark:text-cyan-400">1. Memeriksa Status Berkas (<code>git status</code>)</span>
  <pre class="bg-slate-200 dark:bg-slate-900 p-2 rounded text-cyan-800 dark:text-cyan-300 font-mono mt-1">git status</pre>
  <span class="opacity-75">Menampilkan berkas baru (untracked), berkas yang dimodifikasi, atau berkas di staging.</span>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <span class="font-bold text-cyan-700 dark:text-cyan-400">2. Memasukkan Berkas ke Staging Area (<code>git add</code>)</span>
  <pre class="bg-slate-200 dark:bg-slate-900 p-2 rounded text-cyan-800 dark:text-cyan-300 font-mono mt-1">git add .</pre>
  <span class="opacity-75">Tanda titik (<code>.</code>) berarti menambahkan seluruh berkas di folder saat ini ke staging area.</span>
</div>

<div class="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <span class="font-bold text-cyan-700 dark:text-cyan-400">3. Menyimpan Snapshot Riwayat (<code>git commit</code>)</span>
  <pre class="bg-slate-200 dark:bg-slate-900 p-2 rounded text-cyan-800 dark:text-cyan-300 font-mono mt-1">git commit -m "feat: inisialisasi struktur web statis"</pre>
  <span class="opacity-75">Flag <code>-m</code> menyertakan pesan penjelasan perubahan secara ringkas dan jelas.</span>
</div>

</div>

---
layout: default
---

# 5. Menghubungkan Proyek Lokal ke GitHub

<ol class="space-y-2 text-xs mt-2">
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">1. Buat Repository di GitHub:</span> Buka <a href="https://github.com" target="_blank" class="underline text-cyan-600">github.com</a> ➔ Klik <b>New</b> ➔ Beri nama repo (contoh: <code>kalkulator-diskon</code>) ➔ Public ➔ Klik <b>Create repository</b>.
  </li>
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">2. Namai Branch Utama:</span>
    <pre class="bg-slate-200 dark:bg-slate-900 p-1.5 rounded text-cyan-800 dark:text-cyan-300 font-mono mt-1">git branch -M main</pre>
  </li>
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">3. Tambahkan Alamat Remote:</span>
    <pre class="bg-slate-200 dark:bg-slate-900 p-1.5 rounded text-cyan-800 dark:text-cyan-300 font-mono mt-1">git remote add origin https://github.com/username-anda/kalkulator-diskon.git</pre>
  </li>
  <li class="p-2 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-emerald-700 dark:text-emerald-400">4. Unggah Kode ke GitHub (Push):</span>
    <pre class="bg-slate-200 dark:bg-slate-900 p-1.5 rounded text-emerald-800 dark:text-emerald-300 font-mono mt-1">git push -u origin main</pre>
  </li>
</ol>

---
layout: default
---

# Ringkasan Modul 2

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 mt-4 text-xs">

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Version Control:</b> Git mencatat riwayat perubahan kode sehingga mudah ditinjau dan dikembalikan jika ada error.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Git vs GitHub:</b> Git adalah alat lokal; GitHub adalah platform cloud hosting untuk repositori Git.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>3 Area Kerja:</b> <i>Working Directory</i> ➔ <code>git add</code> (Staging) ➔ <code>git commit</code> (Local Repo).</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Siklus Harian:</b> <code>git add .</code> ➔ <code>git commit -m "pesan"</code> ➔ <code>git push</code>.</span>
</div>

</div>

<div class="mt-8 text-center text-sm text-cyan-700 dark:text-cyan-400 font-bold">
  Selanjutnya di Modul 3 ➔ Praktik Deploy Website Statis ke Netlify!
</div>
