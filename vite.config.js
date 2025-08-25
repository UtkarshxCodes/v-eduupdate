import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glslify from 'vite-plugin-glslify';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), glslify()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
