import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
module.exports = defineConfig({
  resolve: {
    // 导入别名 和tsconfig.json需要同步
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), vueJsx()],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
});
