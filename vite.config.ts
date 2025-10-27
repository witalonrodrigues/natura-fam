import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  // ----------------------------------------------------

  return {
    base: '/natura-fam/',
    
    server: {
      host: "::",
      port: 8080,
      // Removido 'base' daqui
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        // Agora o '__dirname' está definido e funciona
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
