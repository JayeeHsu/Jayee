import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Inspect from "vite-plugin-inspect"; // vite插件开发帮助工具 通过localhost:5173/__inspect/检查项目的模块和栈信息
import { VitePluginVitePress } from "../src/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePluginVitePress(), vue(), Inspect()],
});
