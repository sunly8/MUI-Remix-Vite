import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
export default defineConfig({
  server: {
    port: 5173,
    hmr: { overlay: false }
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },

    }),
  ],
  resolve: {
    alias: {
      '~': '/app',
    },
  },
  ssr: {
    noExternal: ['@mui/icons-material'],
  },
});
