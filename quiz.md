Soal 01

Apa yang dimaksud dengan proses *Deployment* dalam pengembangan aplikasi web?

- A. Proses menginstal editor Visual Studio Code dan ekstensi pendukung di komputer lokal.
- B. Proses memindahkan aplikasi web dari lingkungan lokal (Local Environment) ke server cloud publik (Production Environment) agar dapat diakses oleh publik via internet.
- C. Proses mengubah desain gambar grafis menjadi baris kode HTML secara manual di komputer.
- D. Proses menghapus riwayat penjelajahan browser dan berkas cache penyimpanan di laptop.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Deployment adalah proses merilis berkas kode aplikasi dari komputer lokal ke server cloud publik agar dapat diakses melalui internet menggunakan nama domain.

Highlight Jika Jawaban Salah:
- Kurang tepat. Deployment adalah proses memindahkan kode aplikasi dari komputer lokal (komputer developer) ke server cloud publik (Production Environment) agar dapat diakses oleh pengguna melalui internet.

---

Soal 02

Dalam arsitektur web cloud, apa fungsi utama dari *Domain Name System* (DNS)?

- A. Mengenkripsi seluruh data formulir pengunjung agar tidak dapat dibaca oleh pihak lain.
- B. Menerjemahkan nama domain yang mudah diingat (seperti aplikasiku.netlify.app) menjadi alamat IP numerik server tujuan.
- C. Mengompresi ukuran berkas gambar secara otomatis saat halaman web dimuat.
- D. Menyimpan seluruh riwayat perubahan kode sumber yang dikirimkan oleh developer.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. DNS berfungsi seperti buku kontak telepon internet yang menerjemahkan nama domain yang mudah dibaca menjadi alamat IP numerik server tempat berkas website berada.

Highlight Jika Jawaban Salah:
- Kurang tepat. Fungsi utama DNS adalah menerjemahkan nama domain (seperti aplikasiku.netlify.app) menjadi alamat IP server komputer yang dituju.

---

Soal 03

Apa salah satu tantangan atau kelemahan utama dari *Traditional Deployment* langsung ke Virtual Private Server (VPS) jika dibandingkan dengan *Modern Serverless Hosting*?

- A. Traditional VPS mengharuskan developer mengelola sistem operasi, pembaruan keamanan, konfigurasi web server manual, serta rentan downtime jika server kehabisan kapasitas.
- B. Traditional VPS tidak dapat digunakan untuk menjalankan file HTML dan CSS sama sekali.
- C. Traditional VPS hanya bisa diakses oleh komputer yang memiliki sistem operasi Windows XP.
- D. Traditional VPS mewajibkan semua website dirilis menggunakan jaringan satelit luar angkasa.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. Pada traditional VPS, pengembang bertanggung jawab penuh atas instalasi OS, patch keamanan, web server (Nginx/Apache), dan penanganan beban server secara manual.

Highlight Jika Jawaban Salah:
- Kurang tepat. Kelemahan utama traditional VPS adalah beban pengelolaan server manual (OS, firewall, Nginx, SSL) dan risiko server crash saat lonjakan pengunjung, berbeda dengan serverless managed cloud.

---

Soal 04

Mengapa platform deployment modern seperti Netlify memanfaatkan jaringan *Content Delivery Network* (CDN)?

- A. Untuk menghapus seluruh berkas CSS dan JavaScript yang berukuran lebih dari 1 MB secara otomatis.
- B. Agar berkas website disalin ke berbagai server edge di seluruh dunia, sehingga pengunjung dapat mengunduh halaman dari server terdekat dengan sangat cepat.
- C. Untuk memaksa pengunjung memasukkan password khusus setiap kali membuka website.
- D. Untuk mengubah alamat IP komputer pengunjung menjadi domain unik Netlify.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. CDN menduplikasi berkas website statis ke jaringan server global Netlify sehingga pengunjung dapat memuat halaman dari lokasi geografis terdekat dengan cepat.

Highlight Jika Jawaban Salah:
- Kurang tepat. CDN berfungsi mendistribusikan salinan berkas website ke banyak server di berbagai belahan dunia agar waktu pemuatan halaman menjadi sangat cepat bagi seluruh pengguna.

---

Soal 05

Manakah pernyataan yang paling tepat mengenai perbedaan antara Git dan GitHub?

- A. Git adalah bahasa pemrograman web, sedangkan GitHub adalah aplikasi editor teks seperti Visual Studio Code.
- B. Git adalah perangkat lunak lokal untuk mencatat riwayat perubahan kode, sedangkan GitHub adalah layanan cloud untuk menyimpan repository Git secara online.
- C. Git hanya dapat digunakan pada sistem operasi Linux, sedangkan GitHub hanya dapat diakses melalui Windows.
- D. Git dan GitHub adalah aplikasi yang sama persis tanpa perbedaan fungsi maupun cara penggunaan.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Git adalah tool Version Control System yang terpasang di komputer lokal, sedangkan GitHub adalah platform web hosting untuk menyimpan dan membagikan repository Git di internet.

Highlight Jika Jawaban Salah:
- Kurang tepat. Git adalah software kontrol versi di komputer lokal Anda, sementara GitHub adalah layanan hosting cloud untuk menyimpan salinan repository Git secara online.

---

Soal 06

Perintah Git apa yang digunakan pertama kali untuk menginisialisasi sebuah folder proyek agar mulai dipantau oleh Git?

- A. git start
- B. git create
- C. git init
- D. git setup

Jawaban: 
- C

Highlight Jika Jawaban Benar:
- Tepat sekali. Perintah `git init` membuat folder tersembunyi `.git` yang mengaktifkan pelacakan Version Control pada folder proyek tersebut.

Highlight Jika Jawaban Salah:
- Kurang tepat. Perintah yang benar untuk menginisialisasi repository Git baru di folder lokal adalah `git init`.

---

Soal 07

Dalam konsep 3 area kerja Git, apakah fungsi dari *Staging Area* yang diakses melalui perintah `git add`?

- A. Menghapus berkas kode yang memiliki bug secara otomatis sebelum disimpan ke harddisk.
- B. Sebagai ruang persiapan untuk memilih dan mengumpulkan berkas yang akan disimpan ke dalam riwayat commit berikutnya.
- C. Mengunggah berkas secara langsung ke server cloud Netlify tanpa melalui repository GitHub.
- D. Mengompresi seluruh folder proyek menjadi satu berkas arsip zip berukuran kecil.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Staging Area adalah ruang persiapan di mana Anda mengumpulkan berkas-berkas yang perubahannya siap dicatat dalam jepretan riwayat (commit).

Highlight Jika Jawaban Salah:
- Kurang tepat. Staging area berfungsi sebagai tempat persiapan sebelum commit, di mana pengembang mengelompokkan berkas-berkas yang ingin disertakan dalam riwayat perubahan.

---

Soal 08

Saat menjalankan perintah `git commit -m 'feat: tambah formulir kalkulator'`, apakah fungsi dari opsi flag `-m`?

- A. Menentukan nama branch tujuan pengiriman berkas.
- B. Menyertakan pesan ringkas dan deskriptif mengenai perubahan apa yang baru saja disimpan.
- C. Memaksa penyimpanan file meskipun terdapat error sintaks pada kode HTML.
- D. Mengaktifkan mode penyamaran agar identitas pembuat commit tidak terlihat di GitHub.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Flag `-m` (singkatan dari message) digunakan untuk menuliskan pesan keterangan riwayat commit secara langsung di terminal.

Highlight Jika Jawaban Salah:
- Kurang tepat. Flag `-m` pada perintah `git commit` berfungsi untuk menyertakan pesan commit yang mendeskripsikan perubahan yang dilakukan.

---

Soal 09

Perintah apa yang digunakan untuk menghubungkan repository lokal Anda ke repositori baru yang telah dibuat di GitHub?

- A. git connect github <URL>
- B. git remote add origin <URL>
- C. git link repository <URL>
- D. git attach origin <URL>

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Perintah `git remote add origin <URL>` mendaftarkan alamat repositori GitHub remote dengan nama panggilan standar `origin`.

Highlight Jika Jawaban Salah:
- Kurang tepat. Perintah resmi Git untuk menambahkan alamat server remote adalah `git remote add origin <URL>`.

---

Soal 10

Saat menggunakan Netlify Dashboard (Web UI) tanpa command line, langkah apa yang dilakukan untuk menghubungkan proyek website Anda?

- A. Membuka menu Add new site > Import an existing project, lalu memilih provider GitHub dan menentukan repositori proyek.
- B. Menyalin seluruh kode HTML ke dalam kolom komentar di forum Netlify Community.
- C. Mengirimkan flashdisk berisi kode ke kantor perwakilan Netlify melalui pos.
- D. Mengetikkan perintah npx netlify-cli di browser Google Chrome.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. Pada Netlify Dashboard, proses import proyek dilakukan secara visual dengan mengeklik 'Add new site' > 'Import an existing project' lalu memilih akun GitHub.

Highlight Jika Jawaban Salah:
- Kurang tepat. Cara menghubungkan proyek di Netlify Dashboard adalah melalui tombol 'Add new site' > 'Import an existing project' dan memilih repositori GitHub yang sesuai.

---

Soal 11

Setelah repositori GitHub terhubung dengan Netlify, apa yang terjadi secara otomatis saat developer menjalankan perintah `git push` pembaruan kode?

- A. Website akan otomatis terhapus dari server cloud Netlify.
- B. Netlify menerima sinyal Webhook dari GitHub, lalu secara otomatis merilis versi terbaru website tanpa perlu tindakan manual di Netlify Dashboard.
- C. Developer wajib login ke server Linux Netlify via SSH untuk merestart komputer server.
- D. Netlify akan mematikan koneksi internet developer selama 24 jam.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Inilah esensi Continuous Deployment (CI/CD): setiap push baru di branch main otomatis memicu proses deployment di Netlify tanpa intervensi manual.

Highlight Jika Jawaban Salah:
- Kurang tepat. Berkat integrasi CI/CD Netlify, setiap kali ada commit baru yang di-push ke GitHub, Netlify secara otomatis mendeteksi dan memperbarui website live.

---

Soal 12

Setelah melakukan deployment ke Netlify, URL website menampilkan pesan error '404 Page Not Found'. Apa penyebab paling umum dari kendala ini?

- A. Berkas HTML utama tidak bernama index.html atau berada di dalam subfolder yang tidak terdaftar di akar repositori.
- B. Netlify belum menerima pembayaran langganan sertifikat SSL dari developer.
- C. Komputer developer dalam keadaan mati saat pengguna internet membuka website.
- D. Akun GitHub yang terhubung tidak memiliki centang verifikasi biru.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. Server web Netlify secara default mencari berkas `index.html` pada akar repositori. Jika berkas bernama lain atau disimpan di dalam subfolder, akan muncul error 404.

Highlight Jika Jawaban Salah:
- Kurang tepat. Error 404 Page Not Found umumnya terjadi karena berkas utama tidak bernama `index.html` atau tersimpan di dalam subfolder sehingga tidak ditemukan di akar proyek.

---

Soal 13

Saat mengonfigurasi Build Settings di Netlify Dashboard untuk website statis murni (Vanilla HTML/CSS/JS), mengapa kolom *Build command* sebaiknya dikosongkan?

- A. Karena website statis murni tidak membutuhkan proses kompilasi kode sehingga berkas siap langsung disajikan ke CDN.
- B. Karena Netlify melarang pengisian teks pada kolom Build command untuk semua jenis website.
- C. Agar sistem operasi Netlify dapat mengunduh database MySQL secara otomatis.
- D. Karena kolom Build command hanya boleh diisi oleh pengguna berbayar.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. Berkas Vanilla HTML, CSS, dan JavaScript tidak memerlukan proses build/kompilasi seperti framework React/Vite, sehingga Build command cukup dikosongkan.

Highlight Jika Jawaban Salah:
- Kurang tepat. Website statis murni tidak membutuhkan proses build/kompilasi. Jika Build command diisi tanpa adanya file package.json/script, proses rilis justru akan gagal.

---

Soal 14

Mengapa sebuah website yang menggunakan berkas `Index.html` (huruf I kapital) dapat berjalan di Windows lokal tetapi menampilkan error 404 saat di-deploy ke Netlify?

- A. Karena sistem operasi Windows bersifat case-insensitive, sedangkan server Linux Netlify bersifat case-sensitive dan hanya mengenali index.html.
- B. Karena Netlify melarang penggunaan huruf kapital pada seluruh baris kode HTML.
- C. Karena berkas yang diawali huruf kapital membutuhkan kuota hosting yang lebih besar.
- D. Karena GitHub secara otomatis menghapus berkas yang memiliki nama dengan huruf kapital.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. Sistem operasi Windows tidak membedakan huruf besar/kecil (case-insensitive), sedangkan server Linux Netlify membedakannya (case-sensitive). Netlify hanya mencari `index.html` huruf kecil.

Highlight Jika Jawaban Salah:
- Kurang tepat. Server cloud Netlify menggunakan OS Linux yang bersifat *case-sensitive*, sehingga `Index.html` dianggap berkas berbeda dan tidak dikenali sebagai `index.html` default.

---

Soal 15

Empat kategori utama apa sajakah yang dinilai dalam laporan audit Google Lighthouse?

- A. Frontend, Backend, Database, dan Server Hardware
- B. Performance, Accessibility, Best Practices, dan SEO
- C. HTML, CSS, JavaScript, dan TypeScript
- D. Localhost, Staging, Production, dan Disaster Recovery

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Empat pilar penilaian Google Lighthouse adalah Performance (kecepatan), Accessibility (kemudahan akses/disabilitas), Best Practices (standar keamanan), dan SEO (optimasi mesin pencari).

Highlight Jika Jawaban Salah:
- Kurang tepat. Empat kategori utama yang dinilai oleh Google Lighthouse adalah Performance, Accessibility, Best Practices, dan SEO.

---

Soal 16

Pada evaluasi Google Lighthouse, apa fokus utama dari kategori *Accessibility* (Aksesibilitas)?

- A. Memastikan website dapat diakses dan digunakan dengan baik oleh semua orang, termasuk pengguna dengan disabilitas (kontras teks, atribut alt gambar, label form).
- B. Memastikan kecepatan server cloud dalam menampung jutaan data transaksi per detik.
- C. Menilai seberapa mahal harga sewa domain yang dibeli oleh pemilik website.
- D. Memeriksa apakah website memiliki integrasi pembayaran perbankan internasional.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. Accessibility menilai keramahan website bagi pengguna dengan kebutuhan khusus, seperti kecukupan kontras warna, atribut alt gambar, dan keteraturan label input.

Highlight Jika Jawaban Salah:
- Kurang tepat. Kategori Accessibility berfokus pada kemudahan akses bagi pengguna difabel, memastikan elemen web memiliki kontras warna baik, teks alt gambar, dan navigasi ramah screen reader.

---

Soal 17

Apa saja poin penting yang dievaluasi pada kategori *Best Practices* dan *SEO* di Google Lighthouse?

- A. Koneksi aman HTTPS penuh, bebas pesan error di console, serta keberadaan tag title, meta description, dan viewport responsif.
- B. Jumlah total baris kode HTML minimal harus mencapai 10.000 baris.
- C. Keberadaan fitur animasi 3D dan pemutar video otomatis di latar belakang.
- D. Apakah website dibuat menggunakan komputer berspesifikasi gaming tinggi.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. Best Practices menguji standar keamanan modern (HTTPS, bebas error console), sedangkan SEO menguji metadata dasar (tag title, meta description, viewport mobile).

Highlight Jika Jawaban Salah:
- Kurang tepat. Best Practices menguji kepatuhan standar web modern (HTTPS, konsistensi kode), sementara SEO menguji kesiapan dokumen HTML untuk dirayapi mesin pencari (title, description, viewport).

---

Soal 18

Dalam kategori *Performance*, metrik Core Web Vitals *Largest Contentful Paint* (LCP) mengukur apa dan berapa target nilai idealnya?

- A. Mengukur waktu render elemen visual konten terbesar di layar pengguna, dengan target ideal di bawah 2,5 detik.
- B. Mengukur kapasitas penyimpanan harddisk server, dengan target ideal di atas 1 Terabyte.
- C. Mengukur jumlah klik mouse pengunjung, dengan target minimal 100 klik.
- D. Mengukur kecepatan mengetik developer di Visual Studio Code.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. LCP mengukur waktu yang dibutuhkan hingga konten visual utama selesai dimuat, dengan batas ideal di bawah 2,5 detik.

Highlight Jika Jawaban Salah:
- Kurang tepat. LCP (Largest Contentful Paint) mengukur waktu pemuatan elemen konten terbesar pada viewport layar dengan target ideal kurang dari 2,5 detik.

---

Soal 19

Mengapa menjalankan pengujian Google Lighthouse sangat disarankan dilakukan pada *Jendela Penyamaran* (Incognito Window) Google Chrome?

- A. Agar riwayat penelusuran developer tidak terbaca oleh server Netlify.
- B. Agar hasil skor audit murni dan tidak terpengaruh oleh ekstensi browser pihak ketiga yang dapat memperlambat proses halaman.
- C. Karena fitur tab Lighthouse hanya dapat diaktifkan pada jendela penyamaran saja.
- D. Untuk mempercepat koneksi internet pengguna secara instan hingga sepuluh kali lipat.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Ekstensi browser (seperti adblocker atau plugin lain) dapat menyisipkan script tambahan yang memperlambat waktu muat, sehingga Incognito Window menghasilkan pengujian yang bersih dan objektif.

Highlight Jika Jawaban Salah:
- Kurang tepat. Jendela penyamaran digunakan agar ekstensi browser yang terpasang tidak ikut berjalan dan tidak mendistorsi pengukuran performa halaman web.

---

Soal 20

Perintah Git mana yang paling tepat digunakan untuk memeriksa apakah ada berkas yang baru diubah, belum dipantau (untracked), atau sudah masuk ke staging area?

- A. git status
- B. git check
- C. git view
- D. git list

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. Perintah `git status` menampilkan rangkuman lengkap mengenai kondisi direktori kerja, staging area, dan berkas yang belum tercatat.

Highlight Jika Jawaban Salah:
- Kurang tepat. Perintah standar Git untuk melihat status perubahan berkas secara rinci adalah `git status`.
