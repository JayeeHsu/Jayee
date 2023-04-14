import { PluginOption } from "vite";

const VitePluginVitePress = (): PluginOption => {
  return {
    name: "vite-plugin-vitepress",
    configResolved() {
      console.log("work!!!");
    },
  };
};

export { VitePluginVitePress };

export default VitePluginVitePress;
