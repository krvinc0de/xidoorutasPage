import { defineConfig } from 'astro/config';
import { cp, readdir, stat } from 'node:fs/promises';
import { createReadStream, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));

// Páginas que todavía no se migran a Astro. Se sirven en desarrollo y se copian
// tal cual al build, para que los enlaces del nuevo inicio no se rompan.
const LEGACY_DIRS = ['src', 'devs'];
const isLegacyFile = (name) =>
  (name.endsWith('.html') && name !== 'index.html') || name.endsWith('.php');

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4', '.ico': 'image/x-icon',
};

function legacyPages() {
  return {
    name: 'legacy-pages',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use((req, res, next) => {
          const url = decodeURIComponent((req.url || '').split('?')[0]);
          const rel = url.replace(/^\/+/, '');
          const top = rel.split('/')[0];
          const ok = LEGACY_DIRS.includes(top) || (!rel.includes('/') && isLegacyFile(rel));
          const file = path.join(root, rel);
          if (!ok || !file.startsWith(root) || !existsSync(file)) return next();
          res.setHeader('Content-Type', TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream');
          createReadStream(file).pipe(res);
        });
      },
      'astro:build:done': async ({ dir }) => {
        const out = fileURLToPath(dir);
        for (const name of await readdir(root)) {
          const full = path.join(root, name);
          if ((await stat(full)).isFile() && isLegacyFile(name)) await cp(full, path.join(out, name));
        }
        for (const d of LEGACY_DIRS) await cp(path.join(root, d), path.join(out, d), { recursive: true });
      },
    },
  };
}

export default defineConfig({
  srcDir: './site',
  publicDir: './public',
  build: { format: 'file' },
  integrations: [legacyPages()],
});
