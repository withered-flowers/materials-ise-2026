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
    question: "Mengapa platform deployment modern seperti Netlify menggunakan arsitektur *Content Delivery Network* (CDN)?",
    options: [
      {
        id: "A",
        text: "Agar berkas website disalin ke berbagai server di seluruh dunia, sehingga pengunjung dapat mengakses website dari server terdekat dengan sangat cepat."
      },
      {
        id: "B",
        text: "Agar sistem operasi komputer developer dapat terhubung langsung ke komputer pengunjung tanpa perantara."
      },
      {
        id: "C",
        text: "Untuk membatasi pengunjung website hanya bagi orang yang memiliki kata sandi khusus."
      },
      {
        id: "D",
        text: "Untuk menghapus berkas CSS dan JavaScript secara berkala dari server cloud."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. CDN menduplikasi berkas website statis ke jaringan server global Netlify sehingga pengunjung dapat memuat halaman dari lokasi geografis terdekat dengan cepat.",
    incorrectFeedback: "Kurang tepat. CDN berfungsi mendistribusikan salinan berkas website ke banyak server di berbagai belahan dunia agar waktu pemuatan halaman menjadi sangat cepat bagi seluruh pengguna.",
    reference: "Modul 1: Konsep Dasar Deployment"
  },
  {
    id: 4,
    module: "Modul 1: Konsep Dasar Deployment",
    moduleCategory: "Modul 1",
    question: "Mengapa rincian pesan kesalahan (*error stack trace*) sengaja disembunyikan pada lingkungan *Production*, berbeda dengan lingkungan lokal (*localhost*)?",
    options: [
      {
        id: "A",
        text: "Karena server cloud tidak memiliki memori yang cukup untuk mencetak teks pesan error."
      },
      {
        id: "B",
        text: "Demi alasan keamanan, agar struktur internal sistem dan celah keamanan tidak terekspos ke publik (mencegah Information Disclosure)."
      },
      {
        id: "C",
        text: "Agar tampilan antarmuka website terlihat tetap rapi meskipun aplikasi mengalami kerusakan total."
      },
      {
        id: "D",
        text: "Karena browser di perangkat ponsel tidak mendukung tampilan pesan kesalahan berbasis teks."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Menyembunyikan detail stack trace pada Production bertujuan mencegah pembocoran informasi internal sistem yang dapat dimanfaatkan oleh pihak tidak bertanggung jawab.",
    incorrectFeedback: "Kurang tepat. Pada lingkungan produksi, detail error disembunyikan demi alasan keamanan untuk mencegah pihak luar mengetahui struktur internal sistem (Information Disclosure).",
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
    question: "Perintah Netlify CLI mana yang digunakan untuk merilis website secara langsung ke lingkungan *Production (Live URL)*?",
    options: [
      {
        id: "A",
        text: "npx netlify-cli dev"
      },
      {
        id: "B",
        text: "npx netlify-cli status"
      },
      {
        id: "C",
        text: "npx netlify-cli deploy"
      },
      {
        id: "D",
        text: "npx netlify-cli deploy --prod"
      }
    ],
    correctAnswer: "D",
    correctFeedback: "Tepat sekali. Menambahkan flag `--prod` pada perintah `deploy` memastikan hasil rilis diterapkan langsung pada URL produksi resmi website Anda.",
    incorrectFeedback: "Kurang tepat. Perintah `deploy` tanpa flag `--prod` hanya menghasilkan draft preview. Untuk rilis produksi, gunakan `npx netlify-cli deploy --prod`.",
    reference: "Modul 3: Deploy Website Statis ke Netlify"
  },
  {
    id: 11,
    module: "Modul 3: Deploy Website Statis",
    moduleCategory: "Modul 3",
    question: "Saat mengembangkan website di komputer lokal, perintah Netlify CLI mana yang digunakan untuk menjalankan server simulasi lokal di port 8888?",
    options: [
      {
        id: "A",
        text: "npx netlify-cli dev"
      },
      {
        id: "B",
        text: "npx netlify-cli run"
      },
      {
        id: "C",
        text: "npx netlify-cli serve"
      },
      {
        id: "D",
        text: "npx netlify-cli test"
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Perintah `npx netlify-cli dev` menjalankan server pengujian lokal di `http://localhost:8888` untuk meninjau website sebelum di-deploy.",
    incorrectFeedback: "Kurang tepat. Perintah yang tepat untuk memutar server lokal Netlify adalah `npx netlify-cli dev`.",
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
        text: "Berkas HTML utama tidak bernama index.html atau lokasi publish directory salah dikonfigurasi."
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
    correctFeedback: "Tepat sekali. Server web Netlify secara default mencari berkas `index.html` pada direktori publish. Jika berkas bernama lain atau direktori publish keliru, akan muncul error 404.",
    incorrectFeedback: "Kurang tepat. Error 404 Page Not Found umumnya terjadi karena berkas utama tidak bernama `index.html` atau lokasi folder publish tidak mengarah ke lokasi berkas tersebut.",
    reference: "Modul 3: Deploy Website Statis ke Netlify"
  },
  {
    id: 13,
    module: "Modul 3: Deploy Website Statis",
    moduleCategory: "Modul 3",
    question: "Pada berkas konfigurasi `netlify.toml` untuk website statis tanpa bundler, apakah arti dari pengaturan `publish = '.'`?",
    options: [
      {
        id: "A",
        text: "Menandakan bahwa website tidak boleh diakses oleh publik di internet."
      },
      {
        id: "B",
        text: "Memberitahu Netlify bahwa berkas website utama (index.html) berada langsung di akar folder proyek."
      },
      {
        id: "C",
        text: "Menginstruksikan Netlify untuk menghapus berkas setiap 24 jam sekali."
      },
      {
        id: "D",
        text: "Menjadikan website hanya dapat dibuka satu kali oleh setiap pengunjung."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Simbol titik (`.`) merepresentasikan direktori kerja saat ini (akar folder proyek), tempat berkas `index.html`, `style.css`, dan `script.js` berada.",
    incorrectFeedback: "Kurang tepat. Pada `netlify.toml`, atribut `publish = '.'` berarti direktori publikasi adalah akar folder proyek saat ini tempat berkas utama berada.",
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
    question: "Apa tujuan utama dilakukannya audit dan *benchmark performa* menggunakan Google Lighthouse pada website yang telah di-deploy?",
    options: [
      {
        id: "A",
        text: "Untuk menguji kecepatan pemuatan, kestabilan tampilan, aksesibilitas, dan kualitas keseluruhan halaman web secara terukur."
      },
      {
        id: "B",
        text: "Untuk mengubah bahasa pemrograman JavaScript menjadi bahasa Python secara otomatis."
      },
      {
        id: "C",
        text: "Untuk mendaftarkan hak cipta kode program ke organisasi internet dunia."
      },
      {
        id: "D",
        text: "Untuk memblokir pengguna yang menggunakan browser selain Google Chrome."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. Google Lighthouse digunakan untuk mengukur dan mengevaluasi performa, aksesibilitas, best practices, dan SEO agar website optimal bagi pengguna.",
    incorrectFeedback: "Kurang tepat. Tujuan audit Lighthouse adalah mengukur dan menganalisis kualitas halaman website dalam aspek performa kecepatan, aksesibilitas, best practices, dan SEO.",
    reference: "Modul 4: Benchmark Performa dengan Google Lighthouse"
  },
  {
    id: 16,
    module: "Modul 4: Benchmark Performa Lighthouse",
    moduleCategory: "Modul 4",
    question: "Empat kategori utama apa sajakah yang dievaluasi dalam laporan audit Google Lighthouse?",
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
    correctFeedback: "Tepat sekali. Empat pilar penilaian Google Lighthouse adalah Performance (kecepatan), Accessibility (ramah disabilitas), Best Practices (standar keamanan), dan SEO (optimasi mesin pencari).",
    incorrectFeedback: "Kurang tepat. Empat kategori utama yang dinilai oleh Lighthouse adalah Performance, Accessibility, Best Practices, dan SEO.",
    reference: "Modul 4: Benchmark Performa dengan Google Lighthouse"
  },
  {
    id: 17,
    module: "Modul 4: Benchmark Performa Lighthouse",
    moduleCategory: "Modul 4",
    question: "Dalam indikator Core Web Vitals, apa yang diukur oleh metrik *Largest Contentful Paint* (LCP)?",
    options: [
      {
        id: "A",
        text: "Jumlah total baris kode CSS yang ditulis di dalam proyek."
      },
      {
        id: "B",
        text: "Waktu yang dibutuhkan browser untuk menampilkan elemen visual konten terbesar di layar pengguna (target ideal < 2,5 detik)."
      },
      {
        id: "C",
        text: "Waktu yang dibutuhkan server Netlify untuk mencetak sertifikat SSL."
      },
      {
        id: "D",
        text: "Kapasitas maksimal memori RAM yang digunakan oleh teks editor saat mengetik kode."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. LCP mengukur waktu hingga konten visual terbesar di layar selesai dirender oleh browser, dengan target ideal di bawah 2,5 detik.",
    incorrectFeedback: "Kurang tepat. LCP (Largest Contentful Paint) mengukur waktu yang diperlukan browser untuk merender elemen konten terbesar pada viewport layar pengunjung.",
    reference: "Modul 4: Benchmark Performa dengan Google Lighthouse"
  },
  {
    id: 18,
    module: "Modul 4: Benchmark Performa Lighthouse",
    moduleCategory: "Modul 4",
    question: "Apa yang diukur oleh metrik *Cumulative Layout Shift* (CLS) pada Google Lighthouse?",
    options: [
      {
        id: "A",
        text: "Tingkat pergeseran tata letak elemen visual yang tidak terduga saat halaman sedang dimuat (target ideal < 0,1)."
      },
      {
        id: "B",
        text: "Kecepatan koneksi internet pengguna yang diukur dalam satuan Mbps."
      },
      {
        id: "C",
        text: "Berapa kali pengguna melakukan klik pada tombol navigasi halaman."
      },
      {
        id: "D",
        text: "Jumlah repository GitHub publik yang dimiliki oleh seorang developer."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali. CLS mengukur kestabilan visual halaman agar elemen tampilan tidak meloncat atau bergeser secara tiba-tiba saat konten baru dimuat.",
    incorrectFeedback: "Kurang tepat. CLS (Cumulative Layout Shift) mengukur kestabilan visual antarmuka halaman untuk memastikan elemen tidak bergeser secara tidak terduga saat memuat aset.",
    reference: "Modul 4: Benchmark Performa dengan Google Lighthouse"
  },
  {
    id: 19,
    module: "Modul 4: Benchmark Performa Lighthouse",
    moduleCategory: "Modul 4",
    question: "Mengapa menjalankan pengujian Google Lighthouse disarankan dilakukan pada *Jendela Penyamaran* (Incognito Window) browser?",
    options: [
      {
        id: "A",
        text: "Agar riwayat penelusuran developer tidak terbaca oleh server Netlify."
      },
      {
        id: "B",
        text: "Agar hasil skor audit murni dan tidak terpengaruh oleh ekstensi browser pihak ketiga yang terpasang."
      },
      {
        id: "C",
        text: "Karena fitur tab Lighthouse hanya dapat dibuka pada jendela penyamaran saja."
      },
      {
        id: "D",
        text: "Untuk mempercepat koneksi internet pengguna secara instan hingga sepuluh kali lipat."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali. Ekstensi browser (seperti adblocker atau translator) dapat menyisipkan script tambahan yang memperlambat waktu muat, sehingga Incognito Window menghasilkan pengujian yang bersih dan akurat.",
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
