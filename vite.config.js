import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    // generate manifest.json in outDir
    manifest: true,
    outDir: "topperscontest.ca",
  },
  plugins: [react()],
});
