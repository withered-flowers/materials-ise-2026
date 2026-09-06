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
    module: "Modul 2: Pengelolaan Kode dengan GitHub Web",
    moduleCategory: "Modul 2",
    question: "Manakah pernyataan yang paling tepat mengenai perbedaan antara Git dan GitHub?",
    options: [
      {
        id: "A",
        text: "Git adalah bahasa pemrograman web, sedangkan GitHub adalah aplikasi editor teks seperti Visual Studio Code."
      },
      {
        id: "B",
        text: "Git adalah sistem Version Control untuk mencatat riwayat perubahan kode, sedangkan GitHub adalah platform cloud untuk menyimpan dan mengelola repositori secara online via browser."
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
        text: "Menyalin teks kode satu per satu dari browser ke dalam dokumen Microsoft Word."
      },
      {
        id: "B",
        text: "Menekan kombinasi tombol Ctrl + Alt + Delete pada keyboard."
      },
      {
        id: "C",
        text: "Mengklik tombol hijau '<> Code' pada repositori GitHub lalu memilih opsi 'Download ZIP'."
      },
      {
        id: "D",
        text: "Mengirimkan email permohonan berkas secara manual ke kantor pusat GitHub."
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
        text: "Secret"
      },
      {
        id: "B",
        text: "Public"
      },
      {
        id: "C",
        text: "Archived"
      },
      {
        id: "D",
        text: "Internal Enterprise"
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
        text: "Mengirimkan berkas melalui fitur direct message obrolan ke akun teman."
      },
      {
        id: "B",
        text: "Memanfaatkan menu 'Add file' > 'Upload files' (atau tautan 'uploading an existing file') dengan metode tarik dan lepas (drag and drop)."
      },
      {
        id: "C",
        text: "Menempelkan seluruh berkas ke dalam kolom kotak pencarian (search bar) GitHub."
      },
      {
        id: "D",
        text: "Mengunggah berkas ke Google Drive lalu menempel tautannya di kolom komentar GitHub."
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
        text: "Agar ukuran berkas HTML dan CSS otomatis mengecil menjadi nol kilobyte."
      },
      {
        id: "B",
        text: "Untuk mendokumentasikan riwayat perubahan proyek secara rapi sehingga tujuan dan isi perubahan mudah dipahami di masa depan."
      },
      {
        id: "C",
        text: "Karena GitHub akan menolak penyimpanan jika pesan commit tidak berima seperti bait puisi."
      },
      {
        id: "D",
        text: "Untuk menyembunyikan identitas akun pemilik repositori dari publik."
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
    question: "Setelah repositori GitHub terhubung ke Netlify, apa yang terjadi secara otomatis saat kita memperbarui berkas kode dan mengeklik tombol 'Commit changes' di web GitHub?",
    options: [
      {
        id: "A",
        text: "Website akan otomatis terhapus dari server cloud Netlify."
      },
      {
        id: "B",
        text: "Netlify menerima notifikasi Webhook dari GitHub, lalu secara otomatis merilis versi terbaru website tanpa perlu tindakan manual di Netlify Dashboard."
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
    question: "Jika Anda menemukan kesalahan penulisan kecil (typo) pada teks berkas index.html yang sudah tersimpan di repositori GitHub, bagaimana cara tercepat memperbaikinya langsung via browser?",
    options: [
      {
        id: "A",
        text: "Klik nama berkas index.html di repositori GitHub, klik ikon pensil ('Edit this file'), ubah teksnya, lalu klik 'Commit changes'."
      },
      {
        id: "B",
        text: "Menghapus seluruh akun GitHub dan mendaftar akun baru dari awal."
      },
      {
        id: "C",
        text: "Menginstal ulang sistem operasi komputer dan memasang browser baru."
      },
      {
        id: "D",
        text: "Menghubungi customer service Netlify agar mereka yang mengedit kode HTML kita."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Fitur editor bawaan web GitHub via ikon pensil ('Edit this file') memungkinkan Anda memperbaiki kesalahan kecil secara instan dan langsung menyimpannya via 'Commit changes'.",
    incorrectFeedback: "Kurang tepat. Cara tercepat adalah membuka berkas di repositori GitHub, mengeklik ikon pensil ('Edit this file'), mengedit teks langsung, lalu mengeklik 'Commit changes'.",
    reference: "Referensi & Troubleshooting"
  }
];
