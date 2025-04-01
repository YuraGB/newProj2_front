import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import react from "@vitejs/plugin-react";

const ReactCompilerConfig = {
  target: "19", // '17' | '18' | '19' major version of React
};

export default defineConfig({
  plugins: [
    tailwindcss(),
    mkcert(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src").replace(/\\/g, "/"),
    },
  },
  build: {
    outDir: "../backend/static",
    emptyOutDir: true,
  },
  preview: {
    port: 5174,
  },

  server: {
    port: 5174,
  },
});
