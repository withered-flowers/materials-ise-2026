// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mermaid({
      theme: "forest",
      autoTheme: true,
    }),
    starlight({
      title: "Panduan Deployment Netlify",
      description: "Panduan Praktis Deployment Aplikasi Web di Netlify untuk Developer Junior",
      defaultLocale: "root",
      locales: {
        root: {
          label: "Bahasa Indonesia",
          lang: "id",
        },
      },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com" }],
      sidebar: [
        {
          label: "Pengantar",
          items: [{ label: "Selamat Datang", slug: "index" }],
        },
        {
          label: "Modul Pembelajaran",
          items: [
            { label: "Modul 1: Konsep Dasar Deployment", slug: "modul-1/konsep-deployment" },
            { label: "Modul 2: Deploy Frontend Statis", slug: "modul-2/deploy-frontend" },
            { label: "Modul 3: Deploy Backend TypeScript", slug: "modul-3/deploy-backend" },
            { label: "Modul 4: Deploy Fullstack App", slug: "modul-4/deploy-fullstack" },
          ],
        },
        {
          label: "Referensi & Tooling",
          items: [
            { label: "Cheatsheet & Troubleshooting", slug: "referensi/cheatsheet-troubleshooting" },
          ],
        },
      ],
    }),
  ],

  adapter: netlify(),
});