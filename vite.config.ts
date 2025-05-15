import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/le-centre./',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        404: './public/404.html' // Ajoutez cette ligne
      }
    }
  }
});