---
layout: section
---

# Modul 3
## Deploy Backend TypeScript (Netlify Functions)

Panduan mendalam membangun dan me-deploy Serverless Functions menggunakan TypeScript native di Netlify beserta manajemen Environment Variables.

---
layout: default
---

# 1. Apa Itu Serverless Backend?

Pada arsitektur tradisional, Anda harus menyewa VPS (Virtual Private Server) yang menyala 24/7. **Serverless Architecture** mengubah paradigma tersebut:

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="p-4 rounded-lg bg-red-50 dark:bg-slate-800 border border-red-200 dark:border-slate-700 text-red-950 dark:text-slate-100">
  <div class="font-bold text-red-700 dark:text-red-400 text-base mb-2">🖥️ Traditional VPS</div>
  <ul class="text-xs space-y-2 opacity-90">
    <li>Server menyala 24 jam terus menerus.</li>
    <li>Bayar sewa bulanan meskipun sepi pengunjung.</li>
    <li>Perlu mengurus OS update & security patch.</li>
    <li>Risiko crash saat ada lonjakan trafik.</li>
  </ul>
</div>

<div class="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-950 dark:text-emerald-100">
  <div class="font-bold text-emerald-700 dark:text-emerald-400 text-base mb-2">⚡ Serverless Functions</div>
  <ul class="text-xs space-y-2 opacity-90">
    <li>Kode dipecah menjadi fungsi-fungsi kecil.</li>
    <li>Server hanya "bangun" saat ada request.</li>
    <li>Auto <b>scale to zero</b> saat idle (hemat biaya).</li>
    <li>Otomatis menangani trafik tinggi tanpa downtime.</li>
  </ul>
</div>

</div>

---
layout: default
---

# 2. Struktur Proyek Backend TS

### `sources/02-backend-ts`

```text
sources/02-backend-ts/
├── netlify/
│   └── functions/
│       ├── hello.ts        # Function 1: Menyapa pengguna & membaca env variable
│       └── quotes.ts       # Function 2: Mengembalikan quote acak berformat JSON
├── package.json            # Dependencies (@netlify/functions & typescript)
├── tsconfig.json           # Konfigurasi kompilator TypeScript
├── netlify.toml            # Konfigurasi redirect & lokasi fungsi
└── README.md
```

<div class="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-950 dark:text-blue-100 text-xs">
  💡 Netlify Functions modern menggunakan standar <b>Web Request & Response API</b> (mirip <code>fetch</code> bawaan browser).
</div>

---
layout: default
---

# 3. Anatomi Netlify Function: `hello.ts` (Part 1)

**Membaca Query Parameter & Environment Variable**

```typescript [netlify/functions/hello.ts]
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  // 1. Membaca Query Parameter dari URL (contoh: ?name=Budi)
  const url = new URL(req.url);
  const name = url.searchParams.get("name") || "Developer Junior";

  // 2. Membaca Environment Variable dari server
  const secretKey = process.env.MY_SECRET_KEY || "Secret belum diset";
```

<div class="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
  • <code>new URL(req.url)</code>: Parsing URL HTTP request yang masuk.<br>
  • <code>process.env.MY_SECRET_KEY</code>: Mengakses variabel lingkungan rahasia dari server cloud.
</div>

---
layout: default
---

# 3. Anatomi Netlify Function: `hello.ts` (Part 2)

**Mengembalikan Respon JSON**

```typescript [netlify/functions/hello.ts]
  // 3. Mengembalikan Response JSON
  return new Response(
    JSON.stringify({
      message: `Halo ${name}, selamat datang di Backend Netlify Functions!`,
      timestamp: new Date().toISOString(),
      customSecret: secretKey
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // Mengizinkan akses CORS
      }
    }
  );
};
```

<div class="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
  • <code>JSON.stringify(...)</code>: Mengubah object JavaScript menjadi string JSON.<br>
  • <code>headers</code>: Menentukan `Content-Type` JSON dan header `Access-Control-Allow-Origin` untuk CORS.
</div>

---
layout: default
---

# 4. Anatomi Netlify Function: `quotes.ts` (Part 1)

**Definisi Type Interface & Mock Data**

```typescript [netlify/functions/quotes.ts]
import type { Context } from "@netlify/functions";

// Definisi interface TypeScript untuk Quote data
interface Quote {
  id: number;
  text: string;
  author: string;
}

// Data kutipan dalam memori
const quotes: Quote[] = [
  { id: 1, text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { id: 2, text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" }
];
```

---
layout: default
---

# 4. Anatomi Netlify Function: `quotes.ts` (Part 2)

**Validasi HTTP Method & Response Random Quote**

```typescript [netlify/functions/quotes.ts]
export default async (req: Request, context: Context) => {
  // Validasi Metode HTTP (Hanya izinkan GET)
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Pilih quote secara acak
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return new Response(JSON.stringify(randomQuote), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
```

---
layout: default
---

# 5. Konfigurasi `netlify.toml` untuk Backend

Agar URL endpoint API terlihat rapi (`/api/hello` bukannya `/.netlify/functions/hello`), kita buat **URL Rewrites** di `netlify.toml`:

```toml [netlify.toml]
[build]
  functions = "netlify/functions" # Lokasi kode sumber fungsi TypeScript

# Rewrite URL /api/hello ke fungsi serverless
[[redirects]]
  from = "/api/hello"
  to = "/.netlify/functions/hello"
  status = 200

# Rewrite URL /api/quotes ke fungsi serverless
[[redirects]]
  from = "/api/quotes"
  to = "/.netlify/functions/quotes"
  status = 200
```

---
layout: default
---

# 6. Mengelola Environment Variables

Jangan pernah menyimpan kunci rahasia (API Key, DB Password) di dalam file `.ts`.

<div class="grid grid-cols-1 gap-4 mt-6">

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-cyan-700 dark:text-cyan-400 text-sm mb-2">💻 Cara 1: Netlify CLI</div>
  <div class="text-xs">
    Jalankan perintah ini di terminal:
    <pre class="bg-slate-200 dark:bg-slate-900 p-2 rounded mt-2 text-cyan-800 dark:text-cyan-300 font-mono">npx netlify-cli env:set MY_SECRET_KEY "KunciRahasiaSuperAman123"</pre>
  </div>
</div>

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
  <div class="font-bold text-amber-700 dark:text-amber-400 text-sm mb-2">🌐 Cara 2: Dashboard UI</div>
  <ol class="text-xs space-y-1 opacity-90">
    <li>Masuk ke Netlify Dashboard.</li>
    <li>Buka <b>Site configuration</b> ➔ <b>Environment variables</b>.</li>
    <li>Klik <b>Add a variable</b> ➔ Single variable.</li>
    <li>Key: <code>MY_SECRET_KEY</code>, Value: <code>Kunci...</code>.</li>
  </ol>
</div>

</div>

---
layout: default
---

# 7. Uji Coba Lokal & Deployment Backend

<ol class="space-y-3 mt-4 text-xs">
  <li class="p-3 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">Instal Dependencies:</span>
    <code class="block mt-1 bg-slate-200 dark:bg-slate-900 p-2 rounded text-cyan-800 dark:text-cyan-300 font-mono">cd sources/02-backend-ts && npm install</code>
  </li>

  <li class="p-3 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">Jalankan Netlify Dev Server:</span>
    <code class="block mt-1 bg-slate-200 dark:bg-slate-900 p-2 rounded text-cyan-800 dark:text-cyan-300 font-mono">npx netlify-cli dev</code>
    <span class="opacity-75">Netlify CLI mengompilasi TypeScript secara otomatis (hot-reload).</span>
  </li>

  <li class="p-3 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-cyan-700 dark:text-cyan-400">Uji Endpoint di Browser:</span>
    <div class="mt-1 space-x-2 font-mono text-amber-800 dark:text-amber-300">
      <span>http://localhost:8888/api/hello?name=Siti</span> | <span>http://localhost:8888/api/quotes</span>
    </div>
  </li>

  <li class="p-3 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <span class="font-bold text-emerald-700 dark:text-emerald-400">Deploy Backend ke Production:</span>
    <code class="block mt-1 bg-slate-200 dark:bg-slate-900 p-2 rounded text-emerald-800 dark:text-emerald-300 font-mono">npx netlify-cli deploy --prod</code>
  </li>
</ol>

---
layout: default
---

# 8. Troubleshooting Backend

<div class="space-y-4 mt-4">

<div class="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 text-amber-950 dark:text-amber-100">
  <div class="font-bold text-amber-700 dark:text-amber-400 text-sm">⚠️ Masalah: Error "Function invocation failed" (HTTP 500)</div>
  <div class="text-xs mt-1 leading-relaxed">
    • <b>Penyebab:</b> Terdapat sintaks error, undefined variable, atau modul gagal dimuat saat runtime.<br>
    • <b>Solusi:</b> Periksa log fungsi real-time di terminal:
    <code class="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded text-cyan-800 dark:text-cyan-300 font-mono">npx netlify-cli functions:logs</code> atau tab Logs di Dashboard.
  </div>
</div>

<div class="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 text-amber-950 dark:text-amber-100">
  <div class="font-bold text-amber-700 dark:text-amber-400 text-sm">⚠️ Masalah: Environment Variable bernilai undefined di Production</div>
  <div class="text-xs mt-1 leading-relaxed">
    • <b>Penyebab:</b> Environment variable baru ditambahkan <i>setelah</i> proses deployment selesai.<br>
    • <b>Solusi:</b> Lakukan re-deploy (<code class="font-mono text-cyan-800 dark:text-cyan-300">npx netlify-cli deploy --prod</code>) agar Netlify menginjeksikan nilai env var terbaru.
  </div>
</div>

</div>

---
layout: default
---

# 💡 Ringkasan Modul 3

<div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 mt-6 text-xs">

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>Serverless Functions:</b> Mengeksekusi kode backend berbasis permintaan (*on-demand*) tanpa VPS.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>TypeScript Web API:</b> Menulis API modern menggunakan standard `Request` & `Response` Web API.</span>
</div>

<div class="flex items-center space-x-2">
  <carbon:checkmark-filled class="text-emerald-600 dark:text-emerald-400" />
  <span><b>URL Rewrites:</b> Mengubah path `/.netlify/functions/*` menjadi `/api/*` di `netlify.toml`.</span>
</div>

</div>

<div class="mt-8 text-center text-sm text-purple-700 dark:text-purple-400 font-bold">
  Selanjutnya di Modul 4 ➔ Menghubungkan Frontend & Backend menjadi Fullstack App!
</div>
