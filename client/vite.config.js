import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDotenv } from "dotenv";
configDotenv();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: process.env.SERVER_HOST,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
