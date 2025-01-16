import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
export default defineConfig({
  // server: {
  //   port: 5173,
  //   hmr: { overlay: true }
  // },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
    }),
  ],
  resolve: {
    alias: {
      '~': '/app',
    },
  }
});
