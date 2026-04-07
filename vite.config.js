import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

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
