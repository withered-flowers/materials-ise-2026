# Modul 4: Source Code Fullstack Web (Frontend + Backend)

Folder ini berisi contoh aplikasi fullstack yang menggabungkan web statis Vanilla JS di `public/` dengan backend serverless Netlify Functions TypeScript di `netlify/functions/`.

## Instalasi Dependency

```bash
npm install
```

## Pengujian Lokal

Jalankan Netlify CLI:

```bash
npx netlify-cli dev
```

Netlify CLI secara otomatis menyatukan web static di `http://localhost:8888` dan backend API di `http://localhost:8888/api/tasks`.

## Deployment ke Netlify via CLI

```bash
npx netlify-cli deploy --prod
```
