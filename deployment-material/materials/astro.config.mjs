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
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "script",
          content: `
            (function() {
              function syncQuizGate() {
                try {
                  var params = new URLSearchParams(window.location.search);
                  var q = params.get('quiz');
                  if (q === 'enabled' || q === 'true' || q === '1') {
                    localStorage.setItem('quiz_unlocked_v1', 'true');
                  } else if (q === 'disabled' || q === 'false' || q === '0') {
                    localStorage.removeItem('quiz_unlocked_v1');
                  }
                  var isUnlocked = localStorage.getItem('quiz_unlocked_v1') === 'true';
                  if (isUnlocked) {
                    document.documentElement.classList.add('quiz-unlocked');
                  } else {
                    document.documentElement.classList.remove('quiz-unlocked');
                  }
                  document.querySelectorAll('a[href*="/quiz/"]').forEach(function(a) {
                    var li = a.closest('li');
                    var details = a.closest('details');
                    var card = a.closest('.sl-link-card');
                    if (isUnlocked) {
                      if (li) li.style.display = '';
                      if (details && details.closest('li')) details.closest('li').style.display = '';
                      if (card) card.style.display = '';
                    } else {
                      if (li) li.style.display = 'none';
                      if (details && details.closest('li')) details.closest('li').style.display = 'none';
                      if (card) card.style.display = 'none';
                    }
                  });
                } catch(e) {}
              }
              syncQuizGate();
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', syncQuizGate);
              }
              window.addEventListener('pageshow', syncQuizGate);
            })();
          `,
        },
      ],
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
        {
          label: "Evaluasi & Quiz",
          items: [
            { label: "Quiz Deployment Netlify", slug: "quiz/quiz-deployment" },
          ],
        },
      ],
    }),
  ],

  adapter: netlify(),
});