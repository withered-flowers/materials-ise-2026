# Quiz Deployment Aplikasi Web di Netlify (untuk Junior Developer)

Quiz ini dirancang berdasarkan materi pembelajaran pada folder `deployment-material/materials`. Quiz ini terdiri dari **10 soal pilihan ganda** yang menguji pemahaman konsep deployment, local vs production environment, Netlify CLI, Netlify Functions (Serverless TypeScript), hingga penanganan CORS dan URL rewrites.

---

## 📝 Soal Pilihan Ganda

### Soal 1 (Modul 1: Konsep Deployment)

**Apa yang dimaksud dengan proses *Deployment* dalam pengembangan aplikasi web?**

- A. Proses menginstal Code Editor (seperti VS Code) di komputer lokal developer.
- B. Proses memindahkan aplikasi web dari lingkungan lokal (*Local Environment*) ke server cloud publik (*Production Environment*) agar dapat diakses pengguna via internet.
- C. Mengubah kode pemrograman JavaScript menjadi bahasa pemrograman Python agar berjalan lebih cepat.
- D. Menghapus seluruh file database lokal untuk menghemat kapasitas harddisk komputer.

---

### Soal 2 (Modul 1: Konsep Deployment)

**Dalam arsitektur web cloud, apa fungsi utama dari DNS (*Domain Name System*)?**

- A. Mengenkripsi kata sandi pengguna sebelum dikirimkan ke server cloud.
- B. Menerjemahkan nama domain yang mudah diingat manusia (seperti `aplikasiku.netlify.app`) menjadi alamat IP numerik server.
- C. Mengompilasi file TypeScript menjadi JavaScript secara otomatis saat di-push ke GitHub.
- D. Menyimpan kunci rahasia API Key agar tidak dapat dibaca oleh pengguna internet.

---

### Soal 3 (Modul 1 & Modul 3: Keamanan & Environment Variables)

**Mengapa *Environment Variables* (Variabel Lingkungan) sangat penting dan di mana variabel ini seharusnya dikelola saat aplikasi di-deploy ke Netlify?**

- A. Karena harus disimpan di file `.env` dan wajib di-push ke repository GitHub publik agar Netlify bisa membacanya.
- B. Karena digunakan untuk menyimpan file gambar dan CSS agar pemuatan halaman web lebih cepat.
- C. Karena digunakan untuk menyimpan kunci rahasia (*API Key* / *Secret Key*) agar tidak ditulis langsung (*hardcoded*) di kode sumber, dan dikelola via Netlify Dashboard atau Netlify CLI.
- D. Karena digunakan untuk menggantikan fungsi HTML dalam menampilkan teks di browser.

---

### Soal 4 (Modul 2: Deploy Frontend Statis)

**Perintah Netlify CLI mana yang digunakan untuk me-deploy aplikasi web secara langsung ke lingkungan *Production (Live)*?**

- A. `npx netlify-cli dev`
- B. `npx netlify-cli status`
- C. `npx netlify-cli deploy`
- D. `npx netlify-cli deploy --prod`

---

### Soal 5 (Modul 2: Deploy Frontend Statis)

**Setelah me-deploy web statis ke Netlify, Anda mendapatkan tampilan error "404 Page Not Found" saat membuka URL situs. Apa penyebab paling umum dan cara mengatasinya?**

- A. File HTML utama tidak bernama `index.html` (atau folder `publish` di `netlify.toml` mengarah ke lokasi yang salah); solusinya pastikan file bernama `index.html` dan letaknya sesuai dengan lokasi `publish`.
- B. Sertifikat SSL belum dibayar ke Netlify; solusinya membeli sertifikat SSL secara terpisah.
- C. Browser pengguna belum di-update; solusinya meminta pengguna memperbarui browser.
- D. Repository GitHub tidak memiliki branch `main`; solusinya membuat branch baru.

---

### Soal 6 (Modul 3: Deploy Backend TypeScript)

**Apa salah satu keuntungan utama dari arsitektur *Serverless* (seperti Netlify Functions) dibandingkan dengan menyewa Virtual Private Server (VPS) tradisional?**

- A. Serverless memerlukan pemeliharaan sistem operasi dan patch keamanan bulanan secara manual oleh developer.
- B. Kode server hanya dieksekusi saat ada permintaan (*request*) masuk dan otomatis mati (*scale to zero*) saat *idle*, sehingga sangat efisien biaya dan tidak memerlukan manajemen server fisik.
- C. Serverless menjamin seluruh data variabel memori tersimpan di RAM server secara permanen 24 jam sehari.
- D. Serverless hanya mendukung kode yang ditulis menggunakan bahasa C++.

---

### Soal 7 (Modul 3 & Modul 4: Serverless Backend & State)

**Saat menggunakan Netlify Functions, data yang disimpan dalam variabel memori (*in-memory storage*) dapat hilang setelah beberapa waktu sepi pemanggil (*idle*). Mengapa hal ini terjadi dan bagaimana solusinya untuk aplikasi produksi?**

- A. Terjadi karena Netlify menghapus file `.ts` secara otomatis; solusinya menulis ulang kode dalam bahasa HTML.
- B. Terjadi karena *instance* Serverless bersifat sementara (*ephemeral*) dan di-reset saat *scale to zero*; solusinya menggunakan database cloud eksternal (seperti Supabase atau MongoDB Atlas).
- C. Terjadi karena file `netlify.toml` belum di-commit; solusinya melakukan `git push`.
- D. Terjadi karena batas kuota gratis Netlify habis; solusinya meng-upgrade akun ke versi berbayar.

---

### Soal 8 (Modul 4: Deploy Fullstack App)

**Ketika frontend dan backend berada di domain yang berbeda, browser sering kali memblokir permintaan request karena masalah CORS (*Cross-Origin Resource Sharing*). Bagaimana Netlify mengatasi masalah ini tanpa perlu mengonfigurasi header tambahan secara rumit?**

- A. Dengan menggunakan fitur **URL Rewrites (Proxy)** pada `netlify.toml` (`status = 200`) yang meneruskan path `/api/*` ke Netlify Functions secara internal sehingga seolah-olah berada pada domain yang sama.
- B. Dengan mengubah koneksi internet pengguna menjadi koneksi VPN khusus.
- C. Dengan menghapus kode `fetch()` pada file JavaScript frontend.
- D. Dengan mengompres file CSS dan JavaScript menjadi format zip.

---

### Soal 9 (Modul 4: Deploy Fullstack App)

**Pada file `netlify.toml`, apakah arti dari aturan berikut?**

```toml
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

- A. Netlify akan melakukan pengalihan halaman (redirect 301) ke alamat URL baru di browser.
- B. Netlify akan menolak semua permintaan HTTP ke `/api/*` dengan status 200 Forbidden.
- C. Netlify akan melakukan **Rewrite** (proxy internal dengan status 200), meneruskan request dari `/api/*` ke fungsi serverless tanpa mengubah URL di browser.
- D. Netlify akan menghapus semua file di folder `netlify/functions`.

---

### Soal 10 (Referensi & Cheatsheet)

**Jika backend Serverless Function Anda mengalami error HTTP 500 (*Internal Server Error*) di cloud production, perintah Netlify CLI mana yang paling tepat digunakan untuk melihat pesan kesalahan (*stack trace*) secara real-time dari terminal?**

- A. `npx netlify-cli env:list`
- B. `npx netlify-cli functions:logs`
- C. `npx netlify-cli sites:list`
- D. `npx netlify-cli login`

---

## 🔑 Kunci Jawaban dan Pembahasan

| No | Kunci Jawaban | Modul Acuan | Summary / Pembahasan Singkat |
| --- | --- | --- | --- |
| **1** | **B** | Modul 1 | Deployment adalah proses penggelaran aplikasi dari komputer lokal (*Local Environment*) ke server cloud publik (*Production Environment*) agar dapat diakses melalui internet. |
| **2** | **B** | Modul 1 | DNS (*Domain Name System*) bertindak sebagai "buku telepon internet" yang menerjemahkan nama domain yang mudah diingat ke IP address numerik server. |
| **3** | **C** | Modul 3 | Environment Variables digunakan untuk mengamankan data sensitif seperti API key. Data ini tidak boleh ditulis langsung di kode (*hardcoded*) atau dimasukkan ke Git repository publik. |
| **4** | **D** | Modul 2 | Perintah `npx netlify-cli deploy` me-deploy ke lingkungan draft/preview, sedangkan penambahan flag `--prod` (`npx netlify-cli deploy --prod`) akan mengirim perubahan ke lingkungan produksi (live). |
| **5** | **A** | Modul 2 | HTTP 404 pada web statis hampir selalu disebabkan oleh berkas utama yang tidak bernama `index.html` (misal `Index.html` atau `main.html`) atau letak folder `publish` yang tidak sesuai di `netlify.toml`. |
| **6** | **B** | Modul 3 | Arsitektur *Serverless* bekerja dengan prinsip eksekusi berbasis permintaan (*event-driven*). Server hanya menyala saat ada request dan otomatis mati (*scale to zero*) saat tidak ada trafik. |
| **7** | **B** | Modul 3 & 4 | Netlify Functions bersifat *stateless/ephemeral*. Saat serverless instance mati (*scale to zero*), data *in-memory* di RAM akan ter-reset. Oleh karena itu, data permanen harus disimpan di database cloud (Supabase, MongoDB, dll). |
| **8** | **A** | Modul 4 | Isu CORS terjadi karena aturan keamanan browser antar domain berbeda. Dengan Netlify Rewrites (`status = 200`), request diproxy secara internal sehingga browser menganggap request dikirim ke domain yang sama. |
| **9** | **C** | Modul 4 | `status = 200` pada aturan redirect Netlify menandakan aksi *Rewrite* (bukan redirect pengalihan URL 301/302). Kode di frontend dapat memanggil `/api/nama-fungsi` secara transparan. |
| **10** | **B** | Referensi / Cheatsheet | Perintah `npx netlify-cli functions:logs` digunakan untuk *streaming* log eksekusi fungsi Netlify secara live langsung di terminal untuk keperluan *debugging*. |
