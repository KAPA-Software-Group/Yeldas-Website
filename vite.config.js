import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const vercelEnv = process.env.VERCEL_ENV ?? "";
const gtmId = process.env.VITE_GTM_ID || process.env.GTM_ID || "GTM-NWWHCQJ3";
const gtmScriptParam =
  process.env.VITE_GTM_SCRIPT_PARAM ||
  "eeo25xmz=HwpHNCc6VzshOTIwIj1JUwBTSF1CUR4bSw8UBBIFExkXGVQQEg%3D%3D";

const previewRobotsPlugin = {
  name: "preview-robots-meta",
  transformIndexHtml() {
    if (vercelEnv !== "preview") return [];

    return [
      {
        tag: "meta",
        attrs: {
          name: "robots",
          content: "noindex,nofollow,noarchive",
        },
        injectTo: "head",
      },
    ];
  },
};

const googleTagManagerPlugin = {
  name: "google-tag-manager",
  transformIndexHtml() {
    return [
      {
        tag: "script",
        injectTo: "head-prepend",
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://file.anwarilaw.ca/brcuzwssznv.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmScriptParam}');`,
      },
      {
        tag: "noscript",
        injectTo: "body-prepend",
        children: `<iframe src="https://file.anwarilaw.ca/ns.html?id=${gtmId}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      },
    ];
  },
};

export default defineConfig({
  plugins: [react(), previewRobotsPlugin, googleTagManagerPlugin],

  define: {
    __VERCEL_ENV__: JSON.stringify(vercelEnv),
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Raise the chunk-size warning threshold slightly (D3 is legitimately large)
    chunkSizeWarningLimit: 400,

    rollupOptions: {
      output: {
        /**
         * Manual chunk splitting strategy:
         *
         * vendor  — React + ReactDOM (changes rarely, long-lived cache)
         * d3      — All D3 geo/timer packages (large, changes rarely)
         * icons   — Lucide icons (medium, changes rarely)
         * ui      — Globe + wave canvas components (loaded with Hero)
         *
         * Everything else ends up in the default index chunk, which is now
         * much smaller and downloads/parses faster.
         */
        manualChunks(id) {
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/simplex-noise/")
          ) {
            return "vendor";
          }
          if (
            id.includes("node_modules/d3") ||
            id.includes("node_modules/d3-")
          ) {
            return "d3";
          }
          if (id.includes("node_modules/lucide-react/")) {
            return "icons";
          }
        },
      },
    },
  },
});
