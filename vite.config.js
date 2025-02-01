import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/profile/', // ✅ Ensure this matches your GitHub Pages repository name
  plugins: [react()],
  esbuild: {
    loader: "jsx", // ✅ Ensures JSX is recognized in JS files
    include: /src\/.*\.js$/, // ✅ Applies only to JS files in /src/
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    outDir: 'dist', // ✅ Ensure Vite outputs to "dist"
  },
});