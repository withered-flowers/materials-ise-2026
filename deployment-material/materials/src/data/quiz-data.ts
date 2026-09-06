export interface QuizOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuizQuestion {
  id: number;
  module: string;
  moduleCategory: 'Modul 1' | 'Modul 2' | 'Modul 3' | 'Modul 4' | 'Referensi';
  question: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  options: QuizOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  correctFeedback: string;
  incorrectFeedback: string;
  reference: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    module: "Modul 1: Konsep Dasar Deployment",
    moduleCategory: "Modul 1",
    question: "Apa yang dimaksud dengan proses *Deployment* dalam pengembangan aplikasi web?",
    options: [
      {
        id: "A",
        text: "Proses menginstal editor Visual Studio Code dan ekstensi pendukung di komputer lokal."
      },
      {
        id: "B",
        text: "Proses memindahkan aplikasi web dari lingkungan lokal (Local Environment) ke server cloud publik (Production Environment) agar dapat diakses oleh publik via internet."
      },
      {
        id: "C",
        text: "Proses mengubah desain gambar grafis menjadi baris kode HTML secara manual di komputer."
      },
      {
        id: "D",
        text: "Proses menghapus riwayat penjelajahan browser dan berkas cache penyimpanan di laptop."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Deployment adalah proses merilis berkas kode aplikasi dari komputer lokal ke server cloud publik agar dapat diakses melalui internet menggunakan nama domain.",
    incorrectFeedback: "Kurang tepat. Deployment adalah proses memindahkan kode aplikasi dari komputer lokal (komputer developer) ke server cloud publik (Production Environment) agar dapat diakses oleh pengguna melalui internet.",
    reference: "Modul 1: Konsep Dasar Deployment"
  },
  {
    id: 2,
    module: "Modul 1: Konsep Dasar Deployment",
    moduleCategory: "Modul 1",
    question: "Dalam arsitektur web cloud, apa fungsi utama dari *Domain Name System* (DNS)?",
    options: [
      {
        id: "A",
        text: "Mengenkripsi seluruh data formulir pengunjung agar tidak dapat dibaca oleh pihak lain."
      },
      {
        id: "B",
        text: "Menerjemahkan nama domain yang mudah diingat (seperti aplikasiku.netlify.app) menjadi alamat IP numerik server tujuan."
      },
      {
        id: "C",
        text: "Mengompresi ukuran berkas gambar secara otomatis saat halaman web dimuat."
      },
      {
        id: "D",
        text: "Menyimpan seluruh riwayat perubahan kode sumber yang dikirimkan oleh developer."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. DNS berfungsi seperti buku kontak telepon internet yang menerjemahkan nama domain yang mudah dibaca menjadi alamat IP numerik server tempat berkas website berada.",
    incorrectFeedback: "Kurang tepat. Fungsi utama DNS adalah menerjemahkan nama domain (seperti aplikasiku.netlify.app) menjadi alamat IP server komputer yang dituju.",
    reference: "Modul 1: Konsep Dasar Deployment"
  },
  {
    id: 3,
    module: "Modul 1: Konsep Dasar Deployment",
    moduleCategory: "Modul 1",
    question: "Apa salah satu tantangan atau kelemahan utama dari *Traditional Deployment* langsung ke Virtual Private Server (VPS) jika dibandingkan dengan *Modern Serverless Hosting*?",
    options: [
      {
        id: "A",
        text: "Traditional VPS mengharuskan developer mengelola sistem operasi, pembaruan keamanan, konfigurasi web server manual, serta rentan downtime jika server kehabisan kapasitas."
      },
      {
        id: "B",
        text: "Traditional VPS tidak dapat digunakan untuk menjalankan file HTML dan CSS sama sekali."
      },
      {
        id: "C",
        text: "Traditional VPS hanya bisa diakses oleh komputer yang memiliki sistem operasi Windows XP."
      },
      {
        id: "D",
        text: "Traditional VPS mewajibkan semua website dirilis menggunakan jaringan satelit luar angkasa."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Pada traditional VPS, pengembang bertanggung jawab penuh atas instalasi OS, patch keamanan, web server (Nginx/Apache), dan penanganan beban server secara manual.",
    incorrectFeedback: "Kurang tepat. Kelemahan utama traditional VPS adalah beban pengelolaan server manual (OS, firewall, Nginx, SSL) dan risiko server crash saat lonjakan pengunjung, berbeda dengan serverless managed cloud.",
    reference: "Modul 1: Konsep Dasar Deployment"
  },
  {
    id: 4,
    module: "Modul 1: Konsep Dasar Deployment",
    moduleCategory: "Modul 1",
    question: "Mengapa platform deployment modern seperti Netlify memanfaatkan jaringan *Content Delivery Network* (CDN)?",
    options: [
      {
        id: "A",
        text: "Untuk menghapus seluruh berkas CSS dan JavaScript yang berukuran lebih dari 1 MB secara otomatis."
      },
      {
        id: "B",
        text: "Agar berkas website disalin ke berbagai server edge di seluruh dunia, sehingga pengunjung dapat mengunduh halaman dari server terdekat dengan sangat cepat."
      },
      {
        id: "C",
        text: "Untuk memaksa pengunjung memasukkan password khusus setiap kali membuka website."
      },
      {
        id: "D",
        text: "Untuk mengubah alamat IP komputer pengunjung menjadi domain unik Netlify."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. CDN menduplikasi berkas website statis ke jaringan server global Netlify sehingga pengunjung dapat memuat halaman dari lokasi geografis terdekat dengan cepat.",
    incorrectFeedback: "Kurang tepat. CDN berfungsi mendistribusikan salinan berkas website ke banyak server di berbagai belahan dunia agar waktu pemuatan halaman menjadi sangat cepat bagi seluruh pengguna.",
    reference: "Modul 1: Konsep Dasar Deployment"
  },
  {
    id: 5,
    module: "Modul 2: Git dan GitHub",
    moduleCategory: "Modul 2",
    question: "Manakah pernyataan yang paling tepat mengenai perbedaan antara Git dan GitHub?",
    options: [
      {
        id: "A",
        text: "Git adalah bahasa pemrograman web, sedangkan GitHub adalah aplikasi editor teks seperti Visual Studio Code."
      },
      {
        id: "B",
        text: "Git adalah perangkat lunak lokal untuk mencatat riwayat perubahan kode, sedangkan GitHub adalah layanan cloud untuk menyimpan repository Git secara online."
      },
      {
        id: "C",
        text: "Git hanya dapat digunakan pada sistem operasi Linux, sedangkan GitHub hanya dapat diakses melalui Windows."
      },
      {
        id: "D",
        text: "Git dan GitHub adalah aplikasi yang sama persis tanpa perbedaan fungsi maupun cara penggunaan."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Git adalah tool Version Control System yang terpasang di komputer lokal, sedangkan GitHub adalah platform web hosting untuk menyimpan dan membagikan repository Git di internet.",
    incorrectFeedback: "Kurang tepat. Git adalah software kontrol versi di komputer lokal Anda, sementara GitHub adalah layanan hosting cloud untuk menyimpan salinan repository Git secara online.",
    reference: "Modul 2: Penggunaan Git dan GitHub"
  },
  {
    id: 6,
    module: "Modul 2: Git dan GitHub",
    moduleCategory: "Modul 2",
    question: "Perintah Git apa yang digunakan pertama kali untuk menginisialisasi sebuah folder proyek agar mulai dipantau oleh Git?",
    options: [
      {
        id: "A",
        text: "git start"
      },
      {
        id: "B",
        text: "git create"
      },
      {
        id: "C",
        text: "git init"
      },
      {
        id: "D",
        text: "git setup"
      }
    ],
    correctAnswer: "C",
    correctFeedback: "Tepat sekali. Perintah `git init` membuat folder tersembunyi `.git` yang mengaktifkan pelacakan Version Control pada folder proyek tersebut.",
    incorrectFeedback: "Kurang tepat. Perintah yang benar untuk menginisialisasi repository Git baru di folder lokal adalah `git init`.",
    reference: "Modul 2: Penggunaan Git dan GitHub"
  },
  {
    id: 7,
    module: "Modul 2: Git dan GitHub",
    moduleCategory: "Modul 2",
    question: "Dalam konsep 3 area kerja Git, apakah fungsi dari *Staging Area* yang diakses melalui perintah `git add`?",
    options: [
      {
        id: "A",
        text: "Menghapus berkas kode yang memiliki bug secara otomatis sebelum disimpan ke harddisk."
      },
      {
        id: "B",
        text: "Sebagai ruang persiapan untuk memilih dan mengumpulkan berkas yang akan disimpan ke dalam riwayat commit berikutnya."
      },
      {
        id: "C",
        text: "Mengunggah berkas secara langsung ke server cloud Netlify tanpa melalui repository GitHub."
      },
      {
        id: "D",
        text: "Mengompresi seluruh folder proyek menjadi satu berkas arsip zip berukuran kecil."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Staging Area adalah ruang persiapan di mana Anda mengumpulkan berkas-berkas yang perubahannya siap dicatat dalam jepretan riwayat (commit).",
    incorrectFeedback: "Kurang tepat. Staging area berfungsi sebagai tempat persiapan sebelum commit, di mana pengembang mengelompokkan berkas-berkas yang ingin disertakan dalam riwayat perubahan.",
    reference: "Modul 2: Penggunaan Git dan GitHub"
  },
  {
    id: 8,
    module: "Modul 2: Git dan GitHub",
    moduleCategory: "Modul 2",
    question: "Saat menjalankan perintah `git commit -m 'feat: tambah formulir kalkulator'`, apakah fungsi dari opsi flag `-m`?",
    options: [
      {
        id: "A",
        text: "Menentukan nama branch tujuan pengiriman berkas."
      },
      {
        id: "B",
        text: "Menyertakan pesan ringkas dan deskriptif mengenai perubahan apa yang baru saja disimpan."
      },
      {
        id: "C",
        text: "Memaksa penyimpanan file meskipun terdapat error sintaks pada kode HTML."
      },
      {
        id: "D",
        text: "Mengaktifkan mode penyamaran agar identitas pembuat commit tidak terlihat di GitHub."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Flag `-m` (singkatan dari message) digunakan untuk menuliskan pesan keterangan riwayat commit secara langsung di terminal.",
    incorrectFeedback: "Kurang tepat. Flag `-m` pada perintah `git commit` berfungsi untuk menyertakan pesan commit yang mendeskripsikan perubahan yang dilakukan.",
    reference: "Modul 2: Penggunaan Git dan GitHub"
  },
  {
    id: 9,
    module: "Modul 2: Git dan GitHub",
    moduleCategory: "Modul 2",
    question: "Perintah apa yang digunakan untuk menghubungkan repository lokal Anda ke repositori baru yang telah dibuat di GitHub?",
    options: [
      {
        id: "A",
        text: "git connect github <URL>"
      },
      {
        id: "B",
        text: "git remote add origin <URL>"
      },
      {
        id: "C",
        text: "git link repository <URL>"
      },
      {
        id: "D",
        text: "git attach origin <URL>"
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Perintah `git remote add origin <URL>` mendaftarkan alamat repositori GitHub remote dengan nama panggilan standar `origin`.",
    incorrectFeedback: "Kurang tepat. Perintah resmi Git untuk menambahkan alamat server remote adalah `git remote add origin <URL>`.",
    reference: "Modul 2: Penggunaan Git dan GitHub"
  },
  {
    id: 10,
    module: "Modul 3: Deploy Website Statis",
    moduleCategory: "Modul 3",
    question: "Saat menggunakan Netlify Dashboard (Web UI) tanpa command line, langkah apa yang dilakukan untuk menghubungkan proyek website Anda?",
    options: [
      {
        id: "A",
        text: "Membuka menu Add new site > Import an existing project, lalu memilih provider GitHub dan menentukan repositori proyek."
      },
      {
        id: "B",
        text: "Menyalin seluruh kode HTML ke dalam kolom komentar di forum Netlify Community."
      },
      {
        id: "C",
        text: "Mengirimkan flashdisk berisi kode ke kantor perwakilan Netlify melalui pos."
      },
      {
        id: "D",
        text: "Mengetikkan perintah npx netlify-cli di browser Google Chrome."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Pada Netlify Dashboard, proses import proyek dilakukan secara visual dengan mengeklik 'Add new site' > 'Import an existing project' lalu memilih akun GitHub.",
    incorrectFeedback: "Kurang tepat. Cara menghubungkan proyek di Netlify Dashboard adalah melalui tombol 'Add new site' > 'Import an existing project' dan memilih repositori GitHub yang sesuai.",
    reference: "Modul 3: Deploy Website Statis ke Netlify"
  },
  {
    id: 11,
    module: "Modul 3: Deploy Website Statis",
    moduleCategory: "Modul 3",
    question: "Setelah repositori GitHub terhubung dengan Netlify, apa yang terjadi secara otomatis saat developer menjalankan perintah `git push` pembaruan kode?",
    options: [
      {
        id: "A",
        text: "Website akan otomatis terhapus dari server cloud Netlify."
      },
      {
        id: "B",
        text: "Netlify menerima sinyal Webhook dari GitHub, lalu secara otomatis merilis versi terbaru website tanpa perlu tindakan manual di Netlify Dashboard."
      },
      {
        id: "C",
        text: "Developer wajib login ke server Linux Netlify via SSH untuk merestart komputer server."
      },
      {
        id: "D",
        text: "Netlify akan mematikan koneksi internet developer selama 24 jam."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Inilah esensi Continuous Deployment (CI/CD): setiap push baru di branch main otomatis memicu proses deployment di Netlify tanpa intervensi manual.",
    incorrectFeedback: "Kurang tepat. Berkat integrasi CI/CD Netlify, setiap kali ada commit baru yang di-push ke GitHub, Netlify secara otomatis mendeteksi dan memperbarui website live.",
    reference: "Modul 3: Deploy Website Statis ke Netlify"
  },
  {
    id: 12,
    module: "Modul 3: Deploy Website Statis",
    moduleCategory: "Modul 3",
    question: "Setelah melakukan deployment ke Netlify, URL website menampilkan pesan error '404 Page Not Found'. Apa penyebab paling umum dari kendala ini?",
    options: [
      {
        id: "A",
        text: "Berkas HTML utama tidak bernama index.html atau berada di dalam subfolder yang tidak terdaftar di akar repositori."
      },
      {
        id: "B",
        text: "Netlify belum menerima pembayaran langganan sertifikat SSL dari developer."
      },
      {
        id: "C",
        text: "Komputer developer dalam keadaan mati saat pengguna internet membuka website."
      },
      {
        id: "D",
        text: "Akun GitHub yang terhubung tidak memiliki centang verifikasi biru."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Server web Netlify secara default mencari berkas `index.html` pada akar repositori. Jika berkas bernama lain atau disimpan di dalam subfolder, akan muncul error 404.",
    incorrectFeedback: "Kurang tepat. Error 404 Page Not Found umumnya terjadi karena berkas utama tidak bernama `index.html` atau tersimpan di dalam subfolder sehingga tidak ditemukan di akar proyek.",
    reference: "Modul 3: Deploy Website Statis ke Netlify"
  },
  {
    id: 13,
    module: "Modul 3: Deploy Website Statis",
    moduleCategory: "Modul 3",
    question: "Saat mengonfigurasi Build Settings di Netlify Dashboard untuk website statis murni (Vanilla HTML/CSS/JS), mengapa kolom *Build command* sebaiknya dikosongkan?",
    options: [
      {
        id: "A",
        text: "Karena website statis murni tidak membutuhkan proses kompilasi kode sehingga berkas siap langsung disajikan ke CDN."
      },
      {
        id: "B",
        text: "Karena Netlify melarang pengisian teks pada kolom Build command untuk semua jenis website."
      },
      {
        id: "C",
        text: "Agar sistem operasi Netlify dapat mengunduh database MySQL secara otomatis."
      },
      {
        id: "D",
        text: "Karena kolom Build command hanya boleh diisi oleh pengguna berbayar."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Berkas Vanilla HTML, CSS, dan JavaScript tidak memerlukan proses build/kompilasi seperti framework React/Vite, sehingga Build command cukup dikosongkan.",
    incorrectFeedback: "Kurang tepat. Website statis murni tidak membutuhkan proses build/kompilasi. Jika Build command diisi tanpa adanya file package.json/script, proses rilis justru akan gagal.",
    reference: "Modul 3: Deploy Website Statis ke Netlify"
  },
  {
    id: 14,
    module: "Modul 3: Deploy Website Statis",
    moduleCategory: "Modul 3",
    question: "Mengapa sebuah website yang menggunakan berkas `Index.html` (huruf I kapital) dapat berjalan di Windows lokal tetapi menampilkan error 404 saat di-deploy ke Netlify?",
    options: [
      {
        id: "A",
        text: "Karena sistem operasi Windows bersifat case-insensitive, sedangkan server Linux Netlify bersifat case-sensitive dan hanya mengenali index.html."
      },
      {
        id: "B",
        text: "Karena Netlify melarang penggunaan huruf kapital pada seluruh baris kode HTML."
      },
      {
        id: "C",
        text: "Karena berkas yang diawali huruf kapital membutuhkan kuota hosting yang lebih besar."
      },
      {
        id: "D",
        text: "Karena GitHub secara otomatis menghapus berkas yang memiliki nama dengan huruf kapital."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Sistem operasi Windows tidak membedakan huruf besar/kecil (case-insensitive), sedangkan server Linux Netlify membedakannya (case-sensitive). Netlify hanya mencari `index.html` huruf kecil.",
    incorrectFeedback: "Kurang tepat. Server cloud Netlify menggunakan OS Linux yang bersifat *case-sensitive*, sehingga `Index.html` dianggap berkas berbeda dan tidak dikenali sebagai `index.html` default.",
    reference: "Modul 3: Deploy Website Statis ke Netlify"
  },
  {
    id: 15,
    module: "Modul 4: Benchmark Performa Lighthouse",
    moduleCategory: "Modul 4",
    question: "Empat kategori utama apa sajakah yang dinilai dalam laporan audit Google Lighthouse?",
    options: [
      {
        id: "A",
        text: "Frontend, Backend, Database, dan Server Hardware"
      },
      {
        id: "B",
        text: "Performance, Accessibility, Best Practices, dan SEO"
      },
      {
        id: "C",
        text: "HTML, CSS, JavaScript, dan TypeScript"
      },
      {
        id: "D",
        text: "Localhost, Staging, Production, dan Disaster Recovery"
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Empat pilar penilaian Google Lighthouse adalah Performance (kecepatan), Accessibility (kemudahan akses/disabilitas), Best Practices (standar keamanan), dan SEO (optimasi mesin pencari).",
    incorrectFeedback: "Kurang tepat. Empat kategori utama yang dinilai oleh Google Lighthouse adalah Performance, Accessibility, Best Practices, dan SEO.",
    reference: "Modul 4: Benchmark Performa dengan Google Lighthouse"
  },
  {
    id: 16,
    module: "Modul 4: Benchmark Performa Lighthouse",
    moduleCategory: "Modul 4",
    question: "Pada evaluasi Google Lighthouse, apa fokus utama dari kategori *Accessibility* (Aksesibilitas)?",
    options: [
      {
        id: "A",
        text: "Memastikan website dapat diakses dan digunakan dengan baik oleh semua orang, termasuk pengguna dengan disabilitas (kontras teks, atribut alt gambar, label form)."
      },
      {
        id: "B",
        text: "Memastikan kecepatan server cloud dalam menampung jutaan data transaksi per detik."
      },
      {
        id: "C",
        text: "Menilai seberapa mahal harga sewa domain yang dibeli oleh pemilik website."
      },
      {
        id: "D",
        text: "Memeriksa apakah website memiliki integrasi pembayaran perbankan internasional."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Accessibility menilai keramahan website bagi pengguna dengan kebutuhan khusus, seperti kecukupan kontras warna, atribut alt gambar, dan keteraturan label input.",
    incorrectFeedback: "Kurang tepat. Kategori Accessibility berfokus pada kemudahan akses bagi pengguna difabel, memastikan elemen web memiliki kontras warna baik, teks alt gambar, dan navigasi ramah screen reader.",
    reference: "Modul 4: Benchmark Performa dengan Google Lighthouse"
  },
  {
    id: 17,
    module: "Modul 4: Benchmark Performa Lighthouse",
    moduleCategory: "Modul 4",
    question: "Apa saja poin penting yang dievaluasi pada kategori *Best Practices* dan *SEO* di Google Lighthouse?",
    options: [
      {
        id: "A",
        text: "Koneksi aman HTTPS penuh, bebas pesan error di console, serta keberadaan tag title, meta description, dan viewport responsif."
      },
      {
        id: "B",
        text: "Jumlah total baris kode HTML minimal harus mencapai 10.000 baris."
      },
      {
        id: "C",
        text: "Keberadaan fitur animasi 3D dan pemutar video otomatis di latar belakang."
      },
      {
        id: "D",
        text: "Apakah website dibuat menggunakan komputer berspesifikasi gaming tinggi."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Best Practices menguji standar keamanan modern (HTTPS, bebas error console), sedangkan SEO menguji metadata dasar (tag title, meta description, viewport mobile).",
    incorrectFeedback: "Kurang tepat. Best Practices menguji kepatuhan standar web modern (HTTPS, konsistensi kode), sementara SEO menguji kesiapan dokumen HTML untuk dirayapi mesin pencari (title, description, viewport).",
    reference: "Modul 4: Benchmark Performa dengan Google Lighthouse"
  },
  {
    id: 18,
    module: "Modul 4: Benchmark Performa Lighthouse",
    moduleCategory: "Modul 4",
    question: "Dalam kategori *Performance* Google Lighthouse, metrik *Largest Contentful Paint* (LCP) mengukur apa dan berapa target nilai idealnya?",
    options: [
      {
        id: "A",
        text: "Mengukur waktu render elemen visual konten terbesar di layar pengguna, dengan target ideal di bawah 2,5 detik."
      },
      {
        id: "B",
        text: "Mengukur kapasitas penyimpanan harddisk server, dengan target ideal di atas 1 Terabyte."
      },
      {
        id: "C",
        text: "Mengukur jumlah klik mouse pengunjung, dengan target minimal 100 klik."
      },
      {
        id: "D",
        text: "Mengukur kecepatan mengetik developer di Visual Studio Code."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. LCP mengukur waktu yang dibutuhkan hingga konten visual utama selesai dimuat, dengan batas ideal di bawah 2,5 detik.",
    incorrectFeedback: "Kurang tepat. LCP (Largest Contentful Paint) mengukur waktu pemuatan elemen konten terbesar pada viewport layar dengan target ideal kurang dari 2,5 detik.",
    reference: "Modul 4: Benchmark Performa dengan Google Lighthouse"
  },
  {
    id: 19,
    module: "Modul 4: Benchmark Performa Lighthouse",
    moduleCategory: "Modul 4",
    question: "Mengapa menjalankan pengujian Google Lighthouse sangat disarankan dilakukan pada *Jendela Penyamaran* (Incognito Window) Google Chrome?",
    options: [
      {
        id: "A",
        text: "Agar riwayat penelusuran developer tidak terbaca oleh server Netlify."
      },
      {
        id: "B",
        text: "Agar hasil skor audit murni dan tidak terpengaruh oleh ekstensi browser pihak ketiga yang dapat memperlambat proses halaman."
      },
      {
        id: "C",
        text: "Karena fitur tab Lighthouse hanya dapat diaktifkan pada jendela penyamaran saja."
      },
      {
        id: "D",
        text: "Untuk mempercepat koneksi internet pengguna secara instan hingga sepuluh kali lipat."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Ekstensi browser (seperti adblocker atau plugin lain) dapat menyisipkan script tambahan yang memperlambat waktu muat, sehingga Incognito Window menghasilkan pengujian yang bersih dan objektif.",
    incorrectFeedback: "Kurang tepat. Jendela penyamaran digunakan agar ekstensi browser yang terpasang tidak ikut berjalan dan tidak mendistorsi pengukuran performa halaman web.",
    reference: "Modul 4: Benchmark Performa dengan Google Lighthouse"
  },
  {
    id: 20,
    module: "Referensi: Cheatsheet & Troubleshooting",
    moduleCategory: "Referensi",
    question: "Perintah Git mana yang paling tepat digunakan untuk memeriksa apakah ada berkas yang baru diubah, belum dipantau (untracked), atau sudah masuk ke staging area?",
    options: [
      {
        id: "A",
        text: "git status"
      },
      {
        id: "B",
        text: "git check"
      },
      {
        id: "C",
        text: "git view"
      },
      {
        id: "D",
        text: "git list"
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Perintah `git status` menampilkan rangkuman lengkap mengenai kondisi direktori kerja, staging area, dan berkas yang belum tercatat.",
    incorrectFeedback: "Kurang tepat. Perintah standar Git untuk melihat status perubahan berkas secara rinci adalah `git status`.",
    reference: "Referensi & Troubleshooting"
  }
];
