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
        text: "Proses pengujian kode JavaScript dan styling CSS secara otomatis di browser lokal pengembang sebelum berkas disimpan ke dalam komputer."
      },
      {
        id: "B",
        text: "Proses memindahkan aplikasi web dari lingkungan lokal ke server cloud publik agar dapat diakses oleh pengguna melalui internet."
      },
      {
        id: "C",
        text: "Proses kompilasi berkas konfigurasi database dan dependensi sistem operasi di komputer lokal sebelum pengujian aplikasi dijalankan."
      },
      {
        id: "D",
        text: "Proses pencadangan (backup) seluruh repositori kode sumber ke dalam media penyimpanan eksternal guna mencegah kehilangan data lokal."
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
        text: "Mengamankan seluruh transmisi data antara browser pengunjung dan server menggunakan enkripsi sertifikat kriptografi digital."
      },
      {
        id: "B",
        text: "Menerjemahkan nama domain yang mudah diingat menjadi alamat IP numerik server tempat berkas website berada."
      },
      {
        id: "C",
        text: "Mengompresi dan mengoptimasi seluruh aset gambar serta script secara otomatis sebelum dikirimkan ke perangkat browser pengunjung."
      },
      {
        id: "D",
        text: "Menyimpan salinan berkas HTML, CSS, dan JavaScript di berbagai titik server edge global untuk mempercepat proses loading halaman."
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
        text: "Developer wajib mengelola sistem operasi, konfigurasi web server manual, patch keamanan, dan risiko downtime saat lonjakan trafik."
      },
      {
        id: "B",
        text: "Traditional VPS sama sekali tidak mendukung penggunaan protokol HTTPS dan sertifikat SSL gratis sehingga rentan terhadap serangan sniffing data."
      },
      {
        id: "C",
        text: "Traditional VPS tidak dapat menjalankan berkas web statis murni (HTML/CSS) tanpa menginstal sistem manajemen database relasional SQL terlebih dahulu."
      },
      {
        id: "D",
        text: "Traditional VPS membatasi jumlah halaman web yang boleh diunggah maksimal sebanyak sepuluh berkas dalam satu direktori server publik."
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
        text: "Untuk mengompresi dan merestrukturisasi seluruh baris kode JavaScript secara otomatis ke dalam format binary sebelum dieksekusi browser."
      },
      {
        id: "B",
        text: "Mendistribusikan salinan berkas website ke berbagai server edge global agar pengunjung dapat memuat halaman dari lokasi terdekat."
      },
      {
        id: "C",
        text: "Menghubungkan database lokal pengembang secara langsung ke browser pengunjung melalui terowongan jaringan VPN terenkripsi berkecepatan tinggi."
      },
      {
        id: "D",
        text: "Menyaring seluruh lalu lintas data masuk dengan memblokir permintaan akses dari perangkat non-desktop untuk menghemat kuota bandwidth server."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. CDN menduplikasi berkas website statis ke jaringan server global Netlify sehingga pengunjung dapat memuat halaman dari lokasi geografis terdekat dengan cepat.",
    incorrectFeedback: "Kurang tepat. CDN berfungsi mendistribusikan salinan berkas website ke banyak server di berbagai belahan dunia agar waktu pemuatan halaman menjadi sangat cepat bagi seluruh pengguna.",
    reference: "Modul 1: Konsep Dasar Deployment"
  },
  {
    id: 5,
    module: "Modul 2: Pengelolaan Kode dengan GitHub Web",
    moduleCategory: "Modul 2",
    question: "Manakah pernyataan yang paling tepat mengenai perbedaan antara Git dan GitHub?",
    options: [
      {
        id: "A",
        text: "Git adalah bahasa skrip untuk membangun antarmuka web, sedangkan GitHub adalah sistem database cloud untuk menyimpan data dinamis pengguna."
      },
      {
        id: "B",
        text: "Git adalah sistem Version Control lokal untuk mencatat riwayat kode, sedangkan GitHub adalah platform cloud untuk hosting repositori."
      },
      {
        id: "C",
        text: "Git adalah layanan web hosting khusus website statis, sedangkan GitHub adalah aplikasi desktop visual untuk mengedit kode program bersama tim."
      },
      {
        id: "D",
        text: "Git berfungsi menjalankan kode program secara online, sedangkan GitHub berfungsi mendeteksi kesalahan sintaks dan bug secara otomatis di cloud."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Git adalah konsep Version Control System, sedangkan GitHub adalah platform web hosting cloud untuk menyimpan dan mengelola repositori secara visual di internet.",
    incorrectFeedback: "Kurang tepat. Git adalah sistem kontrol versi, sementara GitHub adalah platform cloud berbasis web untuk menyimpan dan membagikan repositori proyek secara online.",
    reference: "Modul 2: Pengelolaan Kode dengan GitHub Web"
  },
  {
    id: 6,
    module: "Modul 2: Pengelolaan Kode dengan GitHub Web",
    moduleCategory: "Modul 2",
    question: "Bagaimana cara termudah mengunduh seluruh berkas proyek starter code dari repositori GitHub ke komputer lokal tanpa menggunakan terminal?",
    options: [
      {
        id: "A",
        text: "Menekan tombol 'Fork' di pojok kanan atas repositori lalu memilih opsi 'Save to Local Disk' pada menu browser."
      },
      {
        id: "B",
        text: "Membuka menu 'Settings' pada repositori lalu mengekspor seluruh basis data proyek ke dalam format arsip RAR."
      },
      {
        id: "C",
        text: "Mengklik tombol hijau '<> Code' pada repositori GitHub lalu memilih opsi 'Download ZIP'."
      },
      {
        id: "D",
        text: "Menyorot seluruh baris kode pada tab 'Pull requests' kemudian menyalinnya secara manual ke editor teks lokal."
      }
    ],
    correctAnswer: "C",
    correctFeedback: "Tepat sekali. Fitur 'Download ZIP' pada tombol '<> Code' memungkinkan Anda mengunduh seluruh isi proyek dalam satu berkas arsip zip yang siap diekstrak di komputer lokal.",
    incorrectFeedback: "Kurang tepat. Cara resmi dan praktis untuk mengunduh kode starter dari GitHub via browser adalah mengeklik tombol '<> Code' lalu memilih opsi 'Download ZIP'.",
    reference: "Modul 2: Pengelolaan Kode dengan GitHub Web"
  },
  {
    id: 7,
    module: "Modul 2: Pengelolaan Kode dengan GitHub Web",
    moduleCategory: "Modul 2",
    question: "Saat membuat repositori baru di situs web GitHub untuk proyek website statis yang akan dideploy ke Netlify, pengaturan visibilitas apa yang wajib dipilih?",
    options: [
      {
        id: "A",
        text: "Opsi 'Private' agar kode sumber tidak dapat dilihat orang lain sebelum proses deployment disetujui."
      },
      {
        id: "B",
        text: "Opsi 'Public' agar repositori dapat diakses dan diimpor secara gratis oleh Netlify Dashboard."
      },
      {
        id: "C",
        text: "Opsi 'Internal' agar repositori hanya dapat diakses oleh anggota organisasi berbayar di GitHub."
      },
      {
        id: "D",
        text: "Opsi 'Archived' agar repositori terkunci secara otomatis dan terlindungi dari perubahan kode yang tidak disengaja."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Memilih opsi 'Public' memastikan repositori dapat diakses dan diimpor secara gratis dan lancar oleh Netlify Dashboard.",
    incorrectFeedback: "Kurang tepat. Pengaturan visibilitas yang tepat untuk proyek latihan yang akan dideploy secara gratis di Netlify adalah 'Public'.",
    reference: "Modul 2: Pengelolaan Kode dengan GitHub Web"
  },
  {
    id: 8,
    module: "Modul 2: Pengelolaan Kode dengan GitHub Web",
    moduleCategory: "Modul 2",
    question: "Setelah membuat repositori baru di web GitHub, fitur apa yang digunakan untuk memasukkan berkas index.html, style.css, dan script.js langsung via browser?",
    options: [
      {
        id: "A",
        text: "Memanfaatkan menu 'Actions' lalu menjalankan alur kerja otomatis untuk menarik berkas dari drive komputer pengembang."
      },
      {
        id: "B",
        text: "Memanfaatkan menu 'Add file' > 'Upload files' (atau tautan 'uploading an existing file') dengan metode drag and drop."
      },
      {
        id: "C",
        text: "Membuka menu 'Issues' lalu melampirkan berkas proyek sebagai dokumen pendukung pada tiket diskusi publik repositori."
      },
      {
        id: "D",
        text: "Menekan tombol 'Create new release' lalu melampirkan seluruh dokumen proyek ke dalam paket distribusi versi terbaru."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Fitur 'Upload files' (atau tautan 'uploading an existing file') memungkinkan pengembang mengunggah berkas proyek langsung ke repositori GitHub via browser tanpa command line.",
    incorrectFeedback: "Kurang tepat. Di GitHub Web, Anda dapat mengunggah berkas secara visual melalui menu 'Add file' > 'Upload files' dan menarik berkas ke browser.",
    reference: "Modul 2: Pengelolaan Kode dengan GitHub Web"
  },
  {
    id: 9,
    module: "Modul 2: Pengelolaan Kode dengan GitHub Web",
    moduleCategory: "Modul 2",
    question: "Pada formulir *Commit changes* saat mengunggah atau mengedit berkas di web GitHub, mengapa menuliskan *Commit message* (pesan commit) yang jelas sangat penting?",
    options: [
      {
        id: "A",
        text: "Membantu mesin perayap (crawler) Google mengindeks struktur halaman web agar peringkat SEO website meningkat di hasil pencarian."
      },
      {
        id: "B",
        text: "Mendokumentasikan riwayat perubahan secara rapi agar maksud dan tujuan pembaruan kode mudah dipahami di masa depan."
      },
      {
        id: "C",
        text: "Memicu kompilasi otomatis kode CSS dan JavaScript menjadi format binary terkompresi sebelum disimpan ke server GitHub."
      },
      {
        id: "D",
        text: "Memberikan otorisasi keamanan dua faktor (2FA) agar berkas yang diunggah tidak dapat diubah kembali oleh pengguna lain."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Pesan commit mendokumentasikan ringkasan tindakan yang Anda lakukan, sehingga riwayat perubahan proyek tercatat rapi dan mudah dilacak.",
    incorrectFeedback: "Kurang tepat. Menuliskan pesan commit yang deskriptif bertujuan agar developer memahami maksud perubahan kode yang disimpan pada versi tersebut.",
    reference: "Modul 2: Pengelolaan Kode dengan GitHub Web"
  },
  {
    id: 10,
    module: "Modul 3: Deploy Website Statis",
    moduleCategory: "Modul 3",
    question: "Saat menggunakan Netlify Dashboard (Web UI) tanpa command line, langkah apa yang dilakukan untuk menghubungkan proyek website Anda?",
    options: [
      {
        id: "A",
        text: "Memilih menu 'Add new site' > 'Import an existing project', memilih provider GitHub, lalu menentukan repositori proyek."
      },
      {
        id: "B",
        text: "Membuka menu 'Billing & Plans' lalu mengunggah berkas zip proyek melalui formulir verifikasi pembayaran langganan hosting."
      },
      {
        id: "C",
        text: "Masuk ke menu 'Domains Management' lalu mendaftarkan nama repositori GitHub sebagai server nama (Nameserver) utama Netlify."
      },
      {
        id: "D",
        text: "Mengakses menu 'Integrations' lalu menempelkan tautan profil akun GitHub pribadi pada kolom webhook eksternal organisasi."
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
    question: "Setelah repositori GitHub terhubung ke Netlify, apa yang terjadi secara otomatis saat kita memperbarui berkas kode dan mengeklik tombol 'Commit changes' di web GitHub?",
    options: [
      {
        id: "A",
        text: "Netlify secara otomatis membatalkan status publikasi situs dan mengembalikan versi website ke pengaturan awal pabrik (factory reset)."
      },
      {
        id: "B",
        text: "Netlify menerima sinyal Webhook dari GitHub lalu otomatis memproses dan merilis pembaruan website tanpa tindakan manual."
      },
      {
        id: "C",
        text: "Netlify mewajibkan developer melakukan sinkronisasi manual melalui terminal SSH untuk menyetujui setiap perubahan kode di cloud."
      },
      {
        id: "D",
        text: "Netlify menangguhkan sementara nama domain publik selama 24 jam hingga proses verifikasi keaslian kode selesai diverifikasi."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Inilah keunggulan Continuous Deployment (CI/CD): setiap commit baru di branch main otomatis memicu proses rilis pembaruan di Netlify.",
    incorrectFeedback: "Kurang tepat. Berkat integrasi CI/CD Netlify, setiap kali ada commit perubahan baru yang disimpan di GitHub, Netlify secara otomatis mendeteksi dan memperbarui website live.",
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
        text: "Berkas utama tidak bernama index.html atau tersimpan di dalam subfolder sehingga tidak ditemukan di akar repositori."
      },
      {
        id: "B",
        text: "Sertifikat enkripsi SSL domain belum diperpanjang sehingga server Netlify memblokir seluruh akses halaman bagi publik."
      },
      {
        id: "C",
        text: "Kuota bandwidth jaringan global Netlify telah terlampaui sehingga server otomatis menampilkan halaman galat pemeliharaan."
      },
      {
        id: "D",
        text: "Repositori GitHub menggunakan lisensi open-source yang membatasi hak akses publikasi berkas ke layanan cloud pihak ketiga."
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
        text: "Website statis murni tidak memerlukan proses kompilasi atau bundler sehingga berkas siap disajikan langsung ke CDN."
      },
      {
        id: "B",
        text: "Netlify secara otomatis memblokir eksekusi perintah terminal jika akun pengguna belum diverifikasi menggunakan kartu kredit."
      },
      {
        id: "C",
        text: "Pengisian kolom Build command akan menghapus seluruh isi berkas CSS dan JavaScript yang berada di repositori utama GitHub."
      },
      {
        id: "D",
        text: "Server build Netlify hanya dapat mengeksekusi skrip kompilasi yang ditulis secara spesifik menggunakan bahasa pemrograman C++."
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
        text: "Sistem operasi Windows bersifat case-insensitive, sedangkan server Linux Netlify bersifat case-sensitive terhadap nama berkas."
      },
      {
        id: "B",
        text: "Huruf kapital pada nama berkas menyebabkan server Netlify mengidentifikasi dokumen tersebut sebagai berkas biner terenkripsi."
      },
      {
        id: "C",
        text: "Sistem keamanan GitHub membatasi hak akses berkas yang diawali huruf kapital agar tidak dapat dibaca oleh webhook pihak ketiga."
      },
      {
        id: "D",
        text: "Protokol transfer HTTP/2 mewajibkan seluruh berkas dokumen web diubah namanya menjadi huruf kecil saat diunggah ke cloud."
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
        text: "Frontend Layout, Backend Architecture, Database Security, dan Cloud Storage"
      },
      {
        id: "B",
        text: "Performance, Accessibility, Best Practices, dan Search Engine Optimization (SEO)"
      },
      {
        id: "C",
        text: "Code Quality, Network Latency, Memory Leak Detection, dan Responsive Breakpoints"
      },
      {
        id: "D",
        text: "Continuous Integration, Disaster Recovery, Containerization, dan DNS Resolution"
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
        text: "Memastikan website ramah bagi semua pengguna termasuk penyandang disabilitas melalui kontras warna, teks alt, dan label form."
      },
      {
        id: "B",
        text: "Menilai tingkat ketahanan server hosting dalam menangani ribuan transaksi permintaan data secara bersamaan tanpa mengalami lonjakan latensi."
      },
      {
        id: "C",
        text: "Memeriksa kelayakan arsitektur database backend dalam memproses kueri SQL kompleks serta konsistensi replikasi data ke server cadangan."
      },
      {
        id: "D",
        text: "Menguji kepatuhan antarmuka visual terhadap pedoman desain sistem operasi tertentu seperti Material Design atau Apple Human Interface."
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
        text: "Penerapan protokol HTTPS, kebersihan log console dari pesan error, serta kelengkapan tag title, deskripsi, dan meta viewport."
      },
      {
        id: "B",
        text: "Keberadaan integrasi sistem autentikasi OAuth pihak ketiga, pelacakan analitik Google Tag Manager, dan banner cookie GDPR."
      },
      {
        id: "C",
        text: "Penggunaan framework CSS terkini, kompresi seluruh gambar ke format WebP, serta implementasi Service Worker untuk mode luring."
      },
      {
        id: "D",
        text: "Pengujian kompatibilitas rendering halaman pada peramban warisan (legacy browser) serta ketersediaan pintasan keyboard kustom."
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
        text: "Waktu render elemen visual konten utama terbesar di layar pengguna, dengan target ideal di bawah 2,5 detik."
      },
      {
        id: "B",
        text: "Total waktu respon awal yang dibutuhkan oleh server untuk mengembalikan byte data pertama, dengan target di bawah 0,5 detik."
      },
      {
        id: "C",
        text: "Tingkat pergeseran tata letak visual tak terduga saat elemen halaman dimuat, dengan skor target kumulatif di bawah nilai 0,1."
      },
      {
        id: "D",
        text: "Jeda waktu antara interaksi pertama pengguna (klik tombol) hingga browser merespons aksi tersebut, dengan target di bawah 100 ms."
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
        text: "Mencegah server web Netlify mendeteksi identitas alamat IP asli developer guna menghindari pemblokiran batas kuota akses harian."
      },
      {
        id: "B",
        text: "Menghindari interferensi ekstensi browser pihak ketiga yang dapat menyuntikkan skrip tambahan dan mendistorsi hasil skor audit."
      },
      {
        id: "C",
        text: "Mengaktifkan mode simulasi jaringan berkecepatan tinggi yang hanya tersedia secara eksklusif pada sesi penyamaran peramban Chrome."
      },
      {
        id: "D",
        text: "Memastikan seluruh data cookie dan sesi login pengguna dihapus secara otomatis sebelum proses pengujian keamanan SSL dijalankan."
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
    question: "Jika Anda menemukan kesalahan penulisan kecil (typo) pada teks berkas index.html yang sudah tersimpan di repositori GitHub, bagaimana cara tercepat memperbaikinya langsung via browser?",
    options: [
      {
        id: "A",
        text: "Membuka berkas index.html di GitHub, mengeklik ikon pensil ('Edit this file'), memperbaiki teks, lalu menyimpan via 'Commit changes'."
      },
      {
        id: "B",
        text: "Menghapus repositori lama secara permanen di menu Settings, membuat repositori baru, lalu mengunggah kembali seluruh berkas proyek."
      },
      {
        id: "C",
        text: "Membuka menu Pull Requests, membuat tiket isu pelaporan kesalahan penulisan, lalu menunggu konfirmasi verifikasi dari tim teknis GitHub."
      },
      {
        id: "D",
        text: "Mengunduh arsip ZIP proyek ke komputer lokal, mengekstrak berkas, mengubah teks pada Notepad, lalu membuat repositori cadangan kedua."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Fitur editor bawaan web GitHub via ikon pensil ('Edit this file') memungkinkan Anda memperbaiki kesalahan kecil secara instan dan langsung menyimpannya via 'Commit changes'.",
    incorrectFeedback: "Kurang tepat. Cara tercepat adalah membuka berkas di repositori GitHub, mengeklik ikon pensil ('Edit this file'), mengedit teks langsung, lalu mengeklik 'Commit changes'.",
    reference: "Referensi & Troubleshooting"
  }
];
