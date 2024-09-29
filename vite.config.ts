import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
export default defineConfig({
  // server: {
  //   port: 5173,
  //   hmr: { overlay: true }
  // },
  plugins: [
    remix({
      // ignoredRouteFiles: ['**/.*'],
    }),
  ],
  resolve: {
    alias: {
      '~': '/app',
    },
  },
  // ssr: {
  //   // noExternal: ['@mui/icons-material', '@mui/material/styles'],
  // },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules/katex')) {
  //           return 'katex';
  //         }
  //         if (id.includes('node_modules/react-syntax-highlighter')) {
  //           return 'sh';
  //         }
  //         return null;
  //       },
  //     },
  //   },
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //   },
  //   target: 'es2015',
  // }

});
