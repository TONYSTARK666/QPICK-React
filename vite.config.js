import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "https://tonystark666.github.io/QPICK-React/",
    publicDir: "public", // Стандартная папка для статических файлов
});
