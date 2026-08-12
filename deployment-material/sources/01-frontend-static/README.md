# Modul 2: Source Code Frontend Static Web

Folder ini berisi contoh aplikasi web statis menggunakan HTML, CSS, dan Vanilla JavaScript.

## Cara Menguji Lokal

1. Buka folder ini di terminal.
2. Jalankan lokal server sederhana, misalnya menggunakan Netlify CLI:
   ```bash
   npx netlify-cli dev
   ```
   atau menggunakan extension Live Server di VS Code.

## Cara Deployment ke Netlify via CLI

1. Login ke Netlify via CLI:
   ```bash
   npx netlify-cli login
   ```
2. Lakukan deployment awal (draft preview):
   ```bash
   npx netlify-cli deploy
   ```
3. Deploy ke Production:
   ```bash
   npx netlify-cli deploy --prod
   ```
