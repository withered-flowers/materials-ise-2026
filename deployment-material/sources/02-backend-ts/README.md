# Modul 3: Source Code Backend TypeScript (Netlify Functions)

Folder ini berisi contoh backend serverless menggunakan Netlify Functions yang ditulis dengan TypeScript standar modern (Web Fetch API `Response` / `Request` format).

## Instalasi Dependency

```bash
npm install
```

## Pengujian Lokal

Jalankan Netlify CLI untuk mensimulasikan lingkungan serverless lokal:

```bash
npx netlify-cli dev
```

Endpoint API yang tersedia di lokal:
- `http://localhost:8888/api/hello?name=Budi`
- `http://localhost:8888/api/quotes`

## Deployment ke Netlify via CLI

```bash
npx netlify-cli deploy --prod
```
