import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative assets work both locally and under /e-plantShopping/ on Pages.
  base: './',
  plugins: [react()],
});
