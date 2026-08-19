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
    module: "Modul 1: Konsep Deployment",
    moduleCategory: "Modul 1",
    question: "Apa yang dimaksud dengan proses *Deployment* dalam pengembangan aplikasi web?",
    options: [
      {
        id: "A",
        text: "Proses menginstal dependensi serta perangkat lunak pendukung di komputer lokal developer agar aplikasi dapat dijalankan dalam mode pengembangan (development)."
      },
      {
        id: "B",
        text: "Proses memindahkan aplikasi web dari lingkungan lokal (Local Environment) ke server cloud publik (Production Environment) agar dapat diakses oleh pengguna via internet."
      },
      {
        id: "C",
        text: "Proses mengubah struktur kode JavaScript menjadi kode Python atau bahasa tingkat rendah secara otomatis agar eksekusi aplikasi berjalan lebih cepat di browser."
      },
      {
        id: "D",
        text: "Proses menghapus seluruh riwayat repository Git dan file database lokal untuk menghemat ruang penyimpanan harddisk komputer sebelum dipublikasikan."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali! Deployment adalah proses mengunggah/memindahkan kode aplikasi dari lingkungan lokal (komputer developer) ke server cloud (Production Environment) agar dapat diakses oleh publik via internet.",
    incorrectFeedback: "Jawaban kurang tepat. Deployment merujuk pada proses memindahkan aplikasi dari komputer lokal (Local Environment) ke server cloud publik (Production Environment) agar aplikasi bisa diakses online via internet oleh pengguna.",
    reference: "Modul 1: Konsep Deployment"
  },
  {
    id: 2,
    module: "Modul 1: Konsep Deployment",
    moduleCategory: "Modul 1",
    question: "Dalam arsitektur web cloud, apa fungsi utama dari DNS (*Domain Name System*)?",
    options: [
      {
        id: "A",
        text: "Mengenkripsi seluruh lalu lintas data dan kata sandi pengguna secara otomatis sebelum dikirimkan dari browser menuju server cloud production."
      },
      {
        id: "B",
        text: "Menerjemahkan nama domain yang mudah diingat oleh manusia (seperti aplikasiku.netlify.app) menjadi alamat IP numerik lokasi server tempat aplikasi berada."
      },
      {
        id: "C",
        text: "Mengompilasi file sumber TypeScript menjadi file JavaScript siap pakai secara otomatis saat developer melakukan push kode ke repository GitHub."
      },
      {
        id: "D",
        text: "Menyimpan variabel lingkungan dan kunci rahasia (API Key) di tingkat DNS agar tidak dapat dibaca atau diakses langsung oleh pengguna internet."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali! DNS (Domain Name System) bertindak seperti \"buku telepon internet\" yang menerjemahkan nama domain (seperti aplikasiku.netlify.app) menjadi alamat IP numerik server tempat aplikasi di-host.",
    incorrectFeedback: "Jawaban kurang tepat. DNS (Domain Name System) berfungsi menerjemahkan nama domain yang mudah diingat manusia menjadi alamat IP numerik server tempat aplikasi berada.",
    reference: "Modul 1: Konsep Deployment"
  },
  {
    id: 3,
    module: "Modul 1 & Modul 3: Keamanan & Environment Variables",
    moduleCategory: "Modul 3",
    question: "Mengapa *Environment Variables* (Variabel Lingkungan) sangat penting dan di mana variabel ini seharusnya dikelola saat aplikasi di-deploy ke Netlify?",
    options: [
      {
        id: "A",
        text: "Karena seluruh variabel konfigurasi aplikasi wajib disimpan dalam file .env pada proyek lokal dan di-push langsung ke repository GitHub publik agar sistem integrasi otomatis Netlify dapat membaca nilai variabel tersebut saat proses kompilasi kode berlangsung."
      },
      {
        id: "B",
        text: "Karena berfungsi mempercepat waktu muat halaman dengan cara menyimpan seluruh aset media statis seperti gambar dan CSS langsung ke jaringan CDN publik Netlify."
      },
      {
        id: "C",
        text: "Karena digunakan untuk mengamankan kunci rahasia (API Key) agar tidak ditulis langsung di kode sumber, serta dikelola melalui Netlify Dashboard atau Netlify CLI."
      },
      {
        id: "D",
        text: "Karena digunakan sebagai pengganti file HTML dan JavaScript dalam mengatur seluruh tampilan UI dinamis di browser pengguna."
      }
    ],
    correctAnswer: "C",
    correctFeedback: "Tepat sekali! Environment Variables digunakan untuk mengamankan data sensitif seperti API Key/Secret Key agar tidak hardcoded di kode sumber atau terekspos di repository publik.",
    incorrectFeedback: "Jawaban kurang tepat. Environment Variables digunakan untuk menyimpan rahasia seperti API Key agar tidak ditulis langsung di kode (hardcoded) atau ter-commit ke Git. Di Netlify, variabel ini dikelola melalui Dashboard atau CLI.",
    reference: "Modul 3: Deploy Backend TypeScript"
  },
  {
    id: 4,
    module: "Modul 2: Deploy Frontend Statis",
    moduleCategory: "Modul 2",
    question: "Perintah Netlify CLI mana yang digunakan untuk me-deploy aplikasi web secara langsung ke lingkungan *Production (Live)*?",
    options: [
      {
        id: "A",
        text: "npx netlify-cli dev (Jalankan server lokal)"
      },
      {
        id: "B",
        text: "npx netlify-cli status (Memeriksa informasi status akun dan situs terhubung)"
      },
      {
        id: "C",
        text: "npx netlify-cli deploy (Deploy ke lingkungan draft preview untuk pengujian sementara)"
      },
      {
        id: "D",
        text: "npx netlify-cli deploy --prod (Deploy langsung ke lingkungan production live)"
      }
    ],
    correctAnswer: "D",
    correctFeedback: "Tepat sekali! Perintah `npx netlify-cli deploy --prod` digunakan untuk melakukan deployment langsung ke lingkungan Production (Live). Tanpa flag `--prod`, perintah `deploy` hanya membuat Draft/Preview deployment.",
    incorrectFeedback: "Jawaban kurang tepat. Perintah `npx netlify-cli deploy --prod` adalah perintah yang benar untuk rilis ke lingkungan Production (Live). Perintah tanpa `--prod` hanya menghasilkan draft preview.",
    reference: "Modul 2: Deploy Frontend Statis"
  },
  {
    id: 5,
    module: "Modul 2: Deploy Frontend Statis",
    moduleCategory: "Modul 2",
    question: "Setelah me-deploy web statis ke Netlify, Anda mendapatkan tampilan error \"404 Page Not Found\" saat membuka URL situs. Apa penyebab paling umum dan cara mengatasinya?",
    options: [
      {
        id: "A",
        text: "File HTML utama tidak bernama index.html atau lokasi folder publish salah; solusinya pastikan file bernama index.html dan jalur publish sesuai."
      },
      {
        id: "B",
        text: "Sertifikat keamanan SSL belum dibayar dan diaktifkan di Netlify Dashboard; solusinya lakukan pembelian sertifikat SSL secara terpisah, lalu lakukan pembaharuan record DNS domain secara manual pada penyedia domain Anda."
      },
      {
        id: "C",
        text: "Cache browser pengguna tidak sinkron dengan server Netlify; solusinya instruksikan pengguna untuk melakukan hard-refresh atau menghapus seluruh cookie browser."
      },
      {
        id: "D",
        text: "Repository GitHub belum terhubung dengan branch utama main; solusinya buat branch baru bernama main dan hubungkan ulang repository ke dashboard Netlify secara manual."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali! Error 404 pada web statis biasanya terjadi karena server web tidak menemukan berkas utama `index.html` pada root folder publish yang dikonfigurasi.",
    incorrectFeedback: "Jawaban kurang tepat. Error 404 Page Not Found umumnya terjadi karena file utama tidak bernama `index.html` atau lokasi folder publish pada `netlify.toml` mengarah ke folder yang salah.",
    reference: "Modul 2: Deploy Frontend Statis"
  },
  {
    id: 6,
    module: "Modul 3: Deploy Backend TypeScript",
    moduleCategory: "Modul 3",
    question: "Apa salah satu keuntungan utama dari arsitektur *Serverless* (seperti Netlify Functions) dibandingkan dengan menyewa Virtual Private Server (VPS) tradisional?",
    options: [
      {
        id: "A",
        text: "Serverless memerlukan pemeliharaan sistem operasi, konfigurasi firewall, serta instalasi patch keamanan bulanan secara manual oleh tim developer untuk memastikan server tetap stabil."
      },
      {
        id: "B",
        text: "Kode server hanya berjalan saat ada request masuk dan otomatis mati (scale to zero) saat idle, sehingga efisien biaya dan bebas manajemen server."
      },
      {
        id: "C",
        text: "Serverless menjamin seluruh data variabel dalam memori tersimpan secara permanen di RAM server cloud selama 24 jam sehari tanpa pernah dihapus oleh sistem."
      },
      {
        id: "D",
        text: "Serverless hanya mendukung eksekusi backend yang ditulis menggunakan bahasa C++ atau Assembly."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali! Keuntungan utama Serverless adalah arsitektur berbasis event (event-driven) yang otomatis mati (scale to zero) saat tidak ada trafik, sehingga menghemat biaya dan tidak memerlukan manajemen server fisik/OS.",
    incorrectFeedback: "Jawaban kurang tepat. Keunggulan Serverless (seperti Netlify Functions) adalah kode hanya berjalan saat ada request masuk dan otomatis mati saat idle (scale to zero), sehingga efisien biaya tanpa perlu mengelola server VPS secara manual.",
    reference: "Modul 3: Deploy Backend TypeScript"
  },
  {
    id: 7,
    module: "Modul 3 & Modul 4: Serverless Backend & State",
    moduleCategory: "Modul 3",
    question: "Saat menggunakan Netlify Functions, data yang disimpan dalam variabel memori (*in-memory storage*) dapat hilang setelah beberapa waktu sepi pemanggil (*idle*). Mengapa hal ini terjadi dan bagaimana solusinya untuk aplikasi produksi?",
    options: [
      {
        id: "A",
        text: "Terjadi karena Netlify menghapus file sumber .ts setelah dieksekusi; solusinya adalah menuliskan seluruh kode logika backend langsung di dalam tag script HTML."
      },
      {
        id: "B",
        text: "Terjadi karena instance Serverless bersifat ephemeral dan di-reset saat scale to zero; solusinya simpan data di database cloud eksternal (Supabase/MongoDB)."
      },
      {
        id: "C",
        text: "Terjadi karena berkas netlify.toml belum di-commit ke repository Git lokal; solusinya jalankan perintah git add dan git push ulang agar status fungsi serverless menjadi permanen di cloud."
      },
      {
        id: "D",
        text: "Terjadi karena kuota gratis Netlify habis; solusinya upgrade akun ke paket berbayar."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali! Serverless instance bersifat ephemeral (sementara) dan ter-reset saat scale to zero. Oleh karena itu, data permanen harus disimpan di database cloud eksternal seperti Supabase atau MongoDB.",
    incorrectFeedback: "Jawaban kurang tepat. Karena Netlify Functions bersifat ephemeral (sementara), variabel di memori akan hilang ketika instance mati (scale to zero). Solusinya adalah menggunakan database cloud eksternal (misal: Supabase/MongoDB).",
    reference: "Modul 3 & Modul 4"
  },
  {
    id: 8,
    module: "Modul 4: Deploy Fullstack App",
    moduleCategory: "Modul 4",
    question: "Ketika frontend dan backend berada di domain yang berbeda, browser sering kali memblokir permintaan request karena masalah CORS (*Cross-Origin Resource Sharing*). Bagaimana Netlify mengatasi masalah ini tanpa perlu mengonfigurasi header tambahan secara rumit?",
    options: [
      {
        id: "A",
        text: "Menggunakan fitur URL Rewrites (Proxy) pada netlify.toml (status = 200) yang meneruskan /api/* ke Netlify Functions secara internal sehingga seolah satu domain."
      },
      {
        id: "B",
        text: "Mengubah seluruh lalu lintas jaringan pengguna secara otomatis melalui koneksi VPN enkripsi khusus Netlify guna menembus aturan kebijakan keamanan lintas origin (CORS) yang diterapkan oleh browser."
      },
      {
        id: "C",
        text: "Menghapus perintah fetch() pada JavaScript dan menggantinya dengan pemanggilan fungsi HTML form secara langsung."
      },
      {
        id: "D",
        text: "Mengompresi seluruh berkas frontend menjadi format zip agar browser dapat mengeksekusi kode JavaScript dalam konteks lingkungan lokal yang terisolasi dan aman."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali! Fitur URL Rewrites (Proxy) pada Netlify (`status = 200`) meneruskan request `/api/*` secara internal ke Netlify Functions, sehingga browser menganggap frontend dan backend berada di origin/domain yang sama.",
    incorrectFeedback: "Jawaban kurang tepat. Netlify menyediakan fitur URL Rewrites (Proxy) pada file `netlify.toml` dengan `status = 200` untuk meneruskan request dari domain frontend ke fungsi serverless backend tanpa terkena kendala CORS.",
    reference: "Modul 4: Deploy Fullstack App"
  },
  {
    id: 9,
    module: "Modul 4: Deploy Fullstack App",
    moduleCategory: "Modul 4",
    question: "Pada file `netlify.toml`, apakah arti dari aturan berikut?",
    codeSnippet: {
      language: "toml",
      code: `[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200`
    },
    options: [
      {
        id: "A",
        text: "Netlify akan melakukan pengalihan halaman secara terbuka (redirect HTTP 301) dengan mengubah alamat URL di browser pengguna menuju lokasi URL fungsi serverless yang baru."
      },
      {
        id: "B",
        text: "Netlify akan menolak seluruh akses permintaan HTTP yang mengarah ke path /api/* dengan memberikan pesan error status 200 Forbidden kepada pengguna."
      },
      {
        id: "C",
        text: "Netlify melakukan Rewrite (proxy internal status 200), meneruskan request /api/* ke fungsi serverless tanpa mengubah URL di browser."
      },
      {
        id: "D",
        text: "Netlify akan menghapus semua file di folder netlify/functions saat ada request ke /api/*."
      }
    ],
    correctAnswer: "C",
    correctFeedback: "Tepat sekali! Aturan `status = 200` pada Netlify config melakukan Proxy Rewrite internal, artinya URL di browser pengguna tidak berubah saat request diteruskan ke fungsi serverless.",
    incorrectFeedback: "Jawaban kurang tepat. Angka `status = 200` menandakan aksi Rewrite (proxy internal) bukan pengalihan URL (redirect 301/302). Permintaan dari `/api/*` diteruskan secara transparan ke fungsi serverless tanpa mengubah URL browser.",
    reference: "Modul 4: Deploy Fullstack App"
  },
  {
    id: 10,
    module: "Referensi & Cheatsheet",
    moduleCategory: "Referensi",
    question: "Jika backend Serverless Function Anda mengalami error HTTP 500 (*Internal Server Error*) di cloud production, perintah Netlify CLI mana yang paling tepat digunakan untuk melihat pesan kesalahan (*stack trace*) secara real-time dari terminal?",
    options: [
      {
        id: "A",
        text: "npx netlify-cli env:list (Menampilkan daftar seluruh variabel lingkungan yang dikonfigurasi pada proyek)"
      },
      {
        id: "B",
        text: "npx netlify-cli functions:logs (Melihat streaming log eksekusi fungsi secara real-time)"
      },
      {
        id: "C",
        text: "npx netlify-cli sites:list (Menampilkan daftar situs Netlify yang terhubung dengan akun Anda)"
      },
      {
        id: "D",
        text: "npx netlify-cli deploys:list (Melihat riwayat dan status seluruh proses deployment sebelumnya)"
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali! Perintah `npx netlify-cli functions:logs` digunakan untuk melihat live streaming log eksekusi dan stack trace dari Netlify Functions langsung di terminal.",
    incorrectFeedback: "Jawaban kurang tepat. Untuk memeriksa log eksekusi dan error stack trace pada backend Serverless Function di Netlify secara real-time dari terminal, gunakan perintah `npx netlify-cli functions:logs`.",
    reference: "Referensi & Cheatsheet"
  },
  {
    id: 11,
    module: "Modul 1: Konsep Deployment",
    moduleCategory: "Modul 1",
    question: "Saat Anda menghubungkan repository GitHub ke Netlify, mekanisme apa yang digunakan Netlify untuk mendeteksi commit baru secara otomatis dan memicu proses build otomatis (CI/CD)?",
    options: [
      {
        id: "A",
        text: "Netlify mengabaikan push otomatis dan mewajibkan developer menekan tombol build secara manual di dashboard setiap kali ada perubahan kode."
      },
      {
        id: "B",
        text: "Netlify menerima sinyal pemberitahuan otomatis via Webhook yang dikirimkan oleh GitHub saat ada commit baru di branch yang terhubung."
      },
      {
        id: "C",
        text: "Netlify terus-menerus mengunduh ulang seluruh repositori publik setiap satu detik secara berulang tanpa jeda."
      },
      {
        id: "D",
        text: "Netlify mengirimkan kode otentikasi dua faktor ke email developer untuk meminta persetujuan sebelum file dipublikasikan."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali! Netlify memanfaatkan mekanisme Webhook dari provider Git (seperti GitHub/GitLab). Saat ada commit baru yang di-push, GitHub mengirimkan event Webhook ke Netlify untuk memicu proses build & auto-deploy secara otomatis.",
    incorrectFeedback: "Jawaban kurang tepat. Netlify menggunakan fitur Webhook dari GitHub/GitLab yang secara otomatis mendeteksi ketika developer melakukan push kode baru, lalu memicu alur CI/CD untuk me-deploy versi terbaru aplikasi.",
    reference: "Modul 1: Konsep Deployment"
  },
  {
    id: 12,
    module: "Modul 1: Konsep Deployment",
    moduleCategory: "Modul 1",
    question: "Apa peran utama dari arsitektur Content Delivery Network (CDN) yang digunakan Netlify dalam memuat situs web statis pengguna?",
    options: [
      {
        id: "A",
        text: "Mengompresi seluruh file database di komputer lokal developer sebelum dikirimkan ke server utama."
      },
      {
        id: "B",
        text: "Mendistribusikan dan menduplikasi file web ke jaringan server cloud di berbagai belahan dunia sehingga pemuatan situs terasa sangat cepat bagi pengguna dari lokasi manapun."
      },
      {
        id: "C",
        text: "Menghapus otomatis file CSS dan JavaScript yang berukuran lebih dari 1 Megabyte agar tidak memenuhi RAM server."
      },
      {
        id: "D",
        text: "Mengubah alamat IP komputer pengguna menjadi domain unik Netlify agar tidak terdeteksi oleh peretas."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali! CDN (Content Delivery Network) menduplikasi file statis ke puluhan edge server Netlify di seluruh dunia, sehingga permintaan pengguna akan dilayani oleh server terdekat untuk kecepatan akses maksimal.",
    incorrectFeedback: "Jawaban kurang tepat. CDN (Content Delivery Network) berfungsi menyebarkan dan menyalin file aplikasi web ke jaringan server global Netlify. Hal ini membuat situs dimuat sangat cepat karena diakses dari server terdekat dengan lokasi pengguna.",
    reference: "Modul 1: Konsep Deployment"
  },
  {
    id: 13,
    module: "Modul 2: Deploy Frontend Statis",
    moduleCategory: "Modul 2",
    question: "Saat mengembangkan web statis di komputer lokal, perintah Netlify CLI mana yang digunakan untuk mensimulasikan server lokal (local development server) di port 8888?",
    options: [
      {
        id: "A",
        text: "npx netlify-cli dev (Mensimulasikan server pengujian lokal di komputer developer)"
      },
      {
        id: "B",
        text: "npx netlify-cli start --production-mode (Perintah rilis langsung ke server cloud global Netlify)"
      },
      {
        id: "C",
        text: "npx netlify-cli deploy --preview (Membuat tautan preview publik di server Netlify)"
      },
      {
        id: "D",
        text: "npx netlify-cli init --force (Mengosongkan dan mengatur ulang seluruh berkas proyek)"
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali! Perintah `npx netlify-cli dev` digunakan untuk menjalankan server pengujian lokal (biasanya di `http://localhost:8888`) yang mensimulasikan lingkungan Netlify di komputer Anda sendiri.",
    incorrectFeedback: "Jawaban kurang tepat. Perintah `npx netlify-cli dev` adalah perintah Netlify CLI yang berfungsi untuk memutar server lokal di lingkungan pengembangan (`localhost:8888`) sebelum aplikasi di-deploy ke cloud.",
    reference: "Modul 2: Deploy Frontend Statis"
  },
  {
    id: 14,
    module: "Modul 2: Deploy Frontend Statis",
    moduleCategory: "Modul 2",
    question: "Pada file konfigurasi `netlify.toml` untuk web statis tanpa bundler, apakah fungsi dari pengaturan `publish = \".\"`?",
    options: [
      {
        id: "A",
        text: "Menginstruksikan Netlify untuk mengunduh dependensi Node.js dari folder akar proyek."
      },
      {
        id: "B",
        text: "Memberi tahu Netlify bahwa berkas utama web seperti index.html berada di direktori utama (akar folder) proyek untuk dipublikasikan."
      },
      {
        id: "C",
        text: "Membatasi akses publik agar situs web hanya bisa dibuka dari satu alamat IP terdaftar."
      },
      {
        id: "D",
        text: "Mengubah seluruh format file HTML menjadi file data JSON secara otomatis saat build."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali! Pengaturan `publish = \".\"` pada `netlify.toml` mengarahkan Netlify untuk mengambil file publikasi (seperti `index.html`, `style.css`, dan `script.js`) langsung dari akar folder proyek.",
    incorrectFeedback: "Jawaban kurang tepat. Pada `netlify.toml`, atribut `publish = \".\"` berfungsi memberitahu Netlify bahwa direktori publikasi adalah akar folder proyek, tempat berkas utama `index.html` disimpan.",
    reference: "Modul 2: Deploy Frontend Statis"
  },
  {
    id: 15,
    module: "Modul 2: Deploy Frontend Statis",
    moduleCategory: "Modul 2",
    question: "Mengapa penggunaan jalur berkas absolut lokal (seperti `href=\"C:/Users/project/style.css\"`) pada `index.html` dapat menyebabkan tampilan CSS atau JS rusak saat situs di-deploy ke Netlify?",
    options: [
      {
        id: "A",
        text: "Karena server Netlify tidak mengizinkan nama file yang menggunakan ekstensi .css atau .js."
      },
      {
        id: "B",
        text: "Karena browser pengguna di internet tidak dapat mengakses struktur direktori atau harddisk lokal komputer developer; solusinya gunakan jalur relatif seperti `href=\"style.css\"`."
      },
      {
        id: "C",
        text: "Karena Netlify secara otomatis mengubah semua nama file style.css menjadi main.css saat proses deployment berlangsung."
      },
      {
        id: "D",
        text: "Karena file CSS harus dikompresi menjadi format base64 terlebih dahulu sebelum dimasukkan ke dalam file HTML."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali! Jalur absolut lokal mengarah ke lokasi fisik harddisk komputer Anda. Saat situs di-deploy ke cloud, browser pengguna lain tidak bisa membaca file tersebut. Gunakan jalur relatif (`href=\"style.css\"`) agar berkas dibaca dari server tempat web dipublikasikan.",
    incorrectFeedback: "Jawaban kurang tepat. Jalur absolut lokal (seperti `C:/...`) hanya bisa diakses dari komputer Anda sendiri. Ketika situs di-deploy ke cloud, gunakan jalur relatif (`href=\"style.css\"`) agar browser pengguna dapat mengunduh berkas CSS/JS dari server cloud Netlify.",
    reference: "Modul 2: Deploy Frontend Statis"
  },
  {
    id: 16,
    module: "Modul 2: Deploy Frontend Statis - Keamanan Headers",
    moduleCategory: "Modul 2",
    question: "Seorang developer menambahkan konfigurasi `[[headers]]` pada file `netlify.toml` berupa `X-Frame-Options = \"DENY\"` dan `X-Content-Type-Options = \"nosniff\"`. Apa dampak spesifik dan ancaman keamanan yang berhasil dicegah oleh kombinasi header tersebut?",
    options: [
      {
        id: "A",
        text: "Mencegah pihak luar memasukkan web Anda ke dalam tag iframe situs lain (Clickjacking) dan mencegah browser menebak jenis MIME berkas secara ilegal (MIME-sniffing)."
      },
      {
        id: "B",
        text: "Memblokir seluruh koneksi API dari domain luar dan mematikan pengunduhan berkas media gambar di browser pengguna."
      },
      {
        id: "C",
        text: "Mengharuskan pengguna memasukkan kata sandi autentikasi dua faktor setiap kali membuka halaman web di browser."
      },
      {
        id: "D",
        text: "Mengubah seluruh enkripsi HTTP biasa menjadi enkripsi tingkat tinggi berbasis sertifikat SSL bayaran."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali! Header `X-Frame-Options = \"DENY\"` melarang situs dimasukkan ke dalam `<iframe>` di situs lain untuk mencegah serangan Clickjacking, sedangkan `X-Content-Type-Options = \"nosniff\"` memaksa browser mengikuti MIME type resmi dari server untuk mencegah dieksekusi berkas berbahaya.",
    incorrectFeedback: "Jawaban kurang tepat. Header `X-Frame-Options = \"DENY\"` berfungsi mencegah Clickjacking (menolak situs dimuat di `<iframe>` lain), sedangkan `nosniff` mencegah MIME-sniffing agar browser tidak mengeksekusi file dengan tipe yang dimodifikasi penyerang.",
    reference: "Modul 2: Deploy Frontend Statis"
  },
  {
    id: 17,
    module: "Modul 1: Konsep Deployment - Toleransi Error",
    moduleCategory: "Modul 1",
    question: "Saat menguji aplikasi di lingkungan lokal (`localhost`), jika terjadi *runtime error*, rincian kesalahan (*stack trace*) akan muncul lengkap di layar browser. Mengapa perilaku ini secara sengaja diubah pada lingkungan *Production*, dan apa risiko keamanannya jika dibiarkan muncul di publik?",
    options: [
      {
        id: "A",
        text: "Diubah karena server cloud Netlify tidak memiliki kapasitas memori RAM yang cukup untuk menampilkan teks error berwarna merah."
      },
      {
        id: "B",
        text: "Rincian error disembunyikan di Production untuk mencegah penyerang memanfaatkan informasi struktur internal sistem (Information Disclosure) untuk meretas aplikasi."
      },
      {
        id: "C",
        text: "Perilaku ini terjadi secara tidak sengaja akibat bug teknis pada sertifikat SSL Let's Encrypt yang terpasang di server Netlify."
      },
      {
        id: "D",
        text: "Agar pengguna tidak sengaja menyalin kode error tersebut ke dalam repositori GitHub publik milik mereka sendiri."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali! Pada Production Environment, rincian error (stack trace) sengaja disembunyikan demi keamanan. Jika rincian internal terekspos (Information Disclosure), peretas dapat memanfaatkan info struktur file/database tersebut untuk menemukan celah keamanan.",
    incorrectFeedback: "Jawaban kurang tepat. Menampilkan error stack trace di Production berbahaya karena membocorkan struktur internal server/aplikasi (Information Disclosure) kepada publik, yang bisa dimanfaatkan peretas untuk mengeksploitasi celah keamanan.",
    reference: "Modul 1: Konsep Deployment"
  },
  {
    id: 18,
    module: "Modul 2: Deploy Frontend Statis - CLI Preview vs Production",
    moduleCategory: "Modul 2",
    question: "Seorang developer menjalankan perintah `npx netlify-cli deploy` tanpa flag `--prod` dan berhasil mendapatkan URL `https://64a1b2c3--aplikasi-saya.netlify.app`. Mengapa perubahan kode terbaru tersebut BELUM terlihat saat membuka URL utama `https://aplikasi-saya.netlify.app`?",
    options: [
      {
        id: "A",
        text: "Perintah tanpa --prod hanya membuat Draft Preview URL unik untuk pengujian; situs produksi live baru ter-update setelah menjalankan npx netlify-cli deploy --prod."
      },
      {
        id: "B",
        text: "Terjadi keterlambatan pada jaringan server DNS global Netlify yang memerlukan proses sinkronisasi serta propagasi domain selama 24 jam penuh sebelum situs produksi diperbarui."
      },
      {
        id: "C",
        text: "Perintah npx netlify-cli deploy secara otomatis mengosongkan isi repositori GitHub sehingga domain utama mengalami kondisi pemeliharaan sistem sementara di cloud."
      },
      {
        id: "D",
        text: "Karena sertifikat SSL gratis dari Let's Encrypt menolak otentikasi perubahan kode baru yang dikirimkan dari terminal tanpa menyertakan API Key rahasia pengguna."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali! Perintah `npx netlify-cli deploy` hanya menghasilkan **Draft Preview URL** (yang memiliki prefix hash unik) agar developer bisa menguji perubahan tanpa mengganggu pengguna situs live. Untuk memperbarui situs utama publik, wajib menggunakan flag `--prod`.",
    incorrectFeedback: "Jawaban kurang tepat. `npx netlify-cli deploy` (tanpa `--prod`) mempublikasikan perubahan ke lingkungan Draft Preview terisolasi. URL utama produksi (`https://site-name.netlify.app`) baru akan ter-update jika developer menjalankan `npx netlify-cli deploy --prod`.",
    reference: "Modul 2: Deploy Frontend Statis"
  },
  {
    id: 19,
    module: "Modul 2: Deploy Frontend Statis - Case Sensitivity OS",
    moduleCategory: "Modul 2",
    question: "Sebuah proyek web statis berjalan lancar di komputer lokal (Windows) dengan berkas utama `Index.html`. Namun, saat di-deploy ke Netlify Cloud, situs mengembalikan error `404 Page Not Found`. Mengapa hal ini terjadi padahal di komputer lokal aplikasi tidak memiliki kendala?",
    options: [
      {
        id: "A",
        text: "Karena sistem operasi Windows bersifat case-insensitive sehingga Index.html terbaca, sedangkan server Linux Netlify bersifat case-sensitive dan mewajibkan nama berkas index.html (huruf kecil)."
      },
      {
        id: "B",
        text: "Karena sistem arsitektur keamanan server Netlify secara otomatis memblokir dan menolak seluruh berkas HTML utama yang diawali dengan huruf kapital demi menjaga standar keamanan SSL, konsistensi struktur direktori cloud, serta pencegahan bahaya kebocoran file konfigurasi rahasia."
      },
      {
        id: "C",
        text: "Karena berkas utama Index.html yang ditulis menggunakan huruf kapital memerlukan proses kompilasi awal menggunakan bundler eksternal seperti Webpack atau Vite terlebih dahulu agar seluruh aset statis dapat diproses oleh engine distribusi CDN global Netlify secara optimal."
      },
      {
        id: "D",
        text: "Karena struktur direktori proyek pada komputer lokal developer belum dipisahkan ke dalam folder publikasi khusus seperti dist, build, atau public secara benar sebelum seluruh kode sumber aplikasi di-push dan diintegrasikan ke repositori GitHub utama proyek."
      }
    ],
    correctAnswer: "A",
    correctFeedback: "Tepat sekali! Sistem operasi Windows/macOS umumnya bersifat *case-insensitive* (tidak membedakan `Index.html` dan `index.html`), sedangkan server Linux pada Netlify Cloud bersifat *case-sensitive*. Netlify hanya mencari `index.html` (huruf kecil semua) sebagai entry point utama.",
    incorrectFeedback: "Jawaban kurang tepat. Server Netlify berjalan di atas OS Linux yang *case-sensitive*. Jika nama berkas adalah `Index.html` (huruf kapital I), server Linux tidak akan mengenali berkas tersebut sebagai `index.html` (entry point default), sehingga menghasilkan error 404.",
    reference: "Modul 2: Deploy Frontend Statis"
  },
  {
    id: 20,
    module: "Modul 2: Deploy Frontend Statis - Build Settings Vanilla Web",
    moduleCategory: "Modul 2",
    question: "Saat mengintegrasikan repository GitHub berisi web statis murni (Vanilla HTML/CSS/JS tanpa bundler seperti Vite/React) pada Netlify Dashboard, manakah konfigurasi Build Settings yang paling tepat agar proses build tidak error?",
    options: [
      {
        id: "A",
        text: "Isi Build command dengan npm run build dan Publish directory dengan dist."
      },
      {
        id: "B",
        text: "Kosongkan Build command (atau biarkan default) dan isi Publish directory dengan titik (.) atau folder tempat index.html berada."
      },
      {
        id: "C",
        text: "Isi Build command dengan git push origin main dan Publish directory dengan /src/content."
      },
      {
        id: "D",
        text: "Wajib mengisi Build command dengan npx netlify-cli deploy --prod agar Netlify tidak membatalkan proses deployment."
      }
    ],
    correctAnswer: "B",
    correctFeedback: "Tepat sekali! Untuk web statis murni (tanpa bundler/framework), tidak ada proses kompilasi kode sehingga **Build command** harus dikosongkan. **Publish directory** diisi dengan `.` (akar proyek) tempat berkas `index.html` berada.",
    incorrectFeedback: "Jawaban kurang tepat. Aplikasi web statis murni (Vanilla HTML/CSS/JS) tidak memerlukan langkah kompilasi, sehingga **Build command** harus dikosongkan. Jika diisi `npm run build` tanpa `package.json`, build akan gagal (error exit code 1).",
    reference: "Modul 2: Deploy Frontend Statis"
  }
];
