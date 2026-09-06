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

Mengapa platform deployment modern seperti Netlify menggunakan arsitektur *Content Delivery Network* (CDN)?

- A. Agar berkas website disalin ke berbagai server di seluruh dunia, sehingga pengunjung dapat mengakses website dari server terdekat dengan sangat cepat.
- B. Agar sistem operasi komputer developer dapat terhubung langsung ke komputer pengunjung tanpa perantara.
- C. Untuk membatasi pengunjung website hanya bagi orang yang memiliki kata sandi khusus.
- D. Untuk menghapus berkas CSS dan JavaScript secara berkala dari server cloud.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. CDN menduplikasi berkas website statis ke jaringan server global Netlify sehingga pengunjung dapat memuat halaman dari lokasi geografis terdekat dengan cepat.

Highlight Jika Jawaban Salah:
- Kurang tepat. CDN berfungsi mendistribusikan salinan berkas website ke banyak server di berbagai belahan dunia agar waktu pemuatan halaman menjadi sangat cepat bagi seluruh pengguna.

---

Soal 04

Mengapa rincian pesan kesalahan (*error stack trace*) sengaja disembunyikan pada lingkungan *Production*, berbeda dengan lingkungan lokal (*localhost*)?

- A. Karena server cloud tidak memiliki memori yang cukup untuk mencetak teks pesan error.
- B. Demi alasan keamanan, agar struktur internal sistem dan celah keamanan tidak terekspos ke publik (mencegah Information Disclosure).
- C. Agar tampilan antarmuka website terlihat tetap rapi meskipun aplikasi mengalami kerusakan total.
- D. Karena browser di perangkat ponsel tidak mendukung tampilan pesan kesalahan berbasis teks.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Menyembunyikan detail stack trace pada Production bertujuan mencegah pembocoran informasi internal sistem yang dapat dimanfaatkan oleh pihak tidak bertanggung jawab.

Highlight Jika Jawaban Salah:
- Kurang tepat. Pada lingkungan produksi, detail error disembunyikan demi alasan keamanan untuk mencegah pihak luar mengetahui struktur internal sistem (Information Disclosure).

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

Perintah Netlify CLI mana yang digunakan untuk merilis website secara langsung ke lingkungan *Production (Live URL)*?

- A. npx netlify-cli dev
- B. npx netlify-cli status
- C. npx netlify-cli deploy
- D. npx netlify-cli deploy --prod

Jawaban: 
- D

Highlight Jika Jawaban Benar:
- Tepat sekali. Menambahkan flag `--prod` pada perintah `deploy` memastikan hasil rilis diterapkan langsung pada URL produksi resmi website Anda.

Highlight Jika Jawaban Salah:
- Kurang tepat. Perintah `deploy` tanpa flag `--prod` hanya menghasilkan draft preview. Untuk rilis produksi, gunakan `npx netlify-cli deploy --prod`.

---

Soal 11

Saat mengembangkan website di komputer lokal, perintah Netlify CLI mana yang digunakan untuk menjalankan server simulasi lokal di port 8888?

- A. npx netlify-cli dev
- B. npx netlify-cli run
- C. npx netlify-cli serve
- D. npx netlify-cli test

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. Perintah `npx netlify-cli dev` menjalankan server pengujian lokal di `http://localhost:8888` untuk meninjau website sebelum di-deploy.

Highlight Jika Jawaban Salah:
- Kurang tepat. Perintah yang tepat untuk memutar server lokal Netlify adalah `npx netlify-cli dev`.

---

Soal 12

Setelah melakukan deployment ke Netlify, URL website menampilkan pesan error '404 Page Not Found'. Apa penyebab paling umum dari kendala ini?

- A. Berkas HTML utama tidak bernama index.html atau lokasi publish directory salah dikonfigurasi.
- B. Netlify belum menerima pembayaran langganan sertifikat SSL dari developer.
- C. Komputer developer dalam keadaan mati saat pengguna internet membuka website.
- D. Akun GitHub yang terhubung tidak memiliki centang verifikasi biru.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. Server web Netlify secara default mencari berkas `index.html` pada direktori publish. Jika berkas bernama lain atau direktori publish keliru, akan muncul error 404.

Highlight Jika Jawaban Salah:
- Kurang tepat. Error 404 Page Not Found umumnya terjadi karena berkas utama tidak bernama `index.html` atau lokasi folder publish tidak mengarah ke lokasi berkas tersebut.

---

Soal 13

Pada berkas konfigurasi `netlify.toml` untuk website statis tanpa bundler, apakah arti dari pengaturan `publish = '.'`?

- A. Menandakan bahwa website tidak boleh diakses oleh publik di internet.
- B. Memberitahu Netlify bahwa berkas website utama (index.html) berada langsung di akar folder proyek.
- C. Menginstruksikan Netlify untuk menghapus berkas setiap 24 jam sekali.
- D. Menjadikan website hanya dapat dibuka satu kali oleh setiap pengunjung.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Simbol titik (`.`) merepresentasikan direktori kerja saat ini (akar folder proyek), tempat berkas `index.html`, `style.css`, dan `script.js` berada.

Highlight Jika Jawaban Salah:
- Kurang tepat. Pada `netlify.toml`, atribut `publish = '.'` berarti direktori publikasi adalah akar folder proyek saat ini tempat berkas utama berada.

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

Apa tujuan utama dilakukannya audit dan *benchmark performa* menggunakan Google Lighthouse pada website yang telah di-deploy?

- A. Untuk menguji kecepatan pemuatan, kestabilan tampilan, aksesibilitas, dan kualitas keseluruhan halaman web secara terukur.
- B. Untuk mengubah bahasa pemrograman JavaScript menjadi bahasa Python secara otomatis.
- C. Untuk mendaftarkan hak cipta kode program ke organisasi internet dunia.
- D. Untuk memblokir pengguna yang menggunakan browser selain Google Chrome.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. Google Lighthouse digunakan untuk mengukur dan mengevaluasi performa, aksesibilitas, best practices, dan SEO agar website optimal bagi pengguna.

Highlight Jika Jawaban Salah:
- Kurang tepat. Tujuan audit Lighthouse adalah mengukur dan menganalisis kualitas halaman website dalam aspek performa kecepatan, aksesibilitas, best practices, dan SEO.

---

Soal 16

Empat kategori utama apa sajakah yang dievaluasi dalam laporan audit Google Lighthouse?

- A. Frontend, Backend, Database, dan Server Hardware
- B. Performance, Accessibility, Best Practices, dan SEO
- C. HTML, CSS, JavaScript, dan TypeScript
- D. Localhost, Staging, Production, dan Disaster Recovery

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Empat pilar penilaian Google Lighthouse adalah Performance (kecepatan), Accessibility (ramah disabilitas), Best Practices (standar keamanan), dan SEO (optimasi mesin pencari).

Highlight Jika Jawaban Salah:
- Kurang tepat. Empat kategori utama yang dinilai oleh Lighthouse adalah Performance, Accessibility, Best Practices, dan SEO.

---

Soal 17

Dalam indikator Core Web Vitals, apa yang diukur oleh metrik *Largest Contentful Paint* (LCP)?

- A. Jumlah total baris kode CSS yang ditulis di dalam proyek.
- B. Waktu yang dibutuhkan browser untuk menampilkan elemen visual konten terbesar di layar pengguna (target ideal < 2,5 detik).
- C. Waktu yang dibutuhkan server Netlify untuk mencetak sertifikat SSL.
- D. Kapasitas maksimal memori RAM yang digunakan oleh teks editor saat mengetik kode.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. LCP mengukur waktu hingga konten visual terbesar di layar selesai dirender oleh browser, dengan target ideal di bawah 2,5 detik.

Highlight Jika Jawaban Salah:
- Kurang tepat. LCP (Largest Contentful Paint) mengukur waktu yang diperlukan browser untuk merender elemen konten terbesar pada viewport layar pengunjung.

---

Soal 18

Apa yang diukur oleh metrik *Cumulative Layout Shift* (CLS) pada Google Lighthouse?

- A. Tingkat pergeseran tata letak elemen visual yang tidak terduga saat halaman sedang dimuat (target ideal < 0,1).
- B. Kecepatan koneksi internet pengguna yang diukur dalam satuan Mbps.
- C. Berapa kali pengguna melakukan klik pada tombol navigasi halaman.
- D. Jumlah repository GitHub publik yang dimiliki oleh seorang developer.

Jawaban: 
- A

Highlight Jika Jawaban Benar:
- Tepat sekali. CLS mengukur kestabilan visual halaman agar elemen tampilan tidak meloncat atau bergeser secara tiba-tiba saat konten baru dimuat.

Highlight Jika Jawaban Salah:
- Kurang tepat. CLS (Cumulative Layout Shift) mengukur kestabilan visual antarmuka halaman untuk memastikan elemen tidak bergeser secara tidak terduga saat memuat aset.

---

Soal 19

Mengapa menjalankan pengujian Google Lighthouse disarankan dilakukan pada *Jendela Penyamaran* (Incognito Window) browser?

- A. Agar riwayat penelusuran developer tidak terbaca oleh server Netlify.
- B. Agar hasil skor audit murni dan tidak terpengaruh oleh ekstensi browser pihak ketiga yang terpasang.
- C. Karena fitur tab Lighthouse hanya dapat dibuka pada jendela penyamaran saja.
- D. Untuk mempercepat koneksi internet pengguna secara instan hingga sepuluh kali lipat.

Jawaban: 
- B

Highlight Jika Jawaban Benar:
- Tepat sekali. Ekstensi browser (seperti adblocker atau translator) dapat menyisipkan script tambahan yang memperlambat waktu muat, sehingga Incognito Window menghasilkan pengujian yang bersih dan akurat.

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
