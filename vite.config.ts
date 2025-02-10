import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [tailwindcss(), mkcert()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src").replace(/\\/g, "/"),
    },
  },
});
