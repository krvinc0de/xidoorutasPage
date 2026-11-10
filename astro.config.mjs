import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Páginas como archivos .html (aplicacion.html, contacto.html…), igual que las direcciones anteriores.
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
});
