import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@s": fileURLToPath(new URL("./src/modules/shared", import.meta.url)),
      "@r": fileURLToPath(new URL("./src/modules/requests", import.meta.url)),
      "@a": fileURLToPath(new URL("./src/modules/auth", import.meta.url)),
    },
  },
});
