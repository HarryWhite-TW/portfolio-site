import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const injectSharedStyles = {
  name: 'inject-shared-styles',
  enforce: 'pre',
  transformIndexHtml: {
    order: 'pre',
    handler() {
      return [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: '/src/style.css',
          },
          injectTo: 'head',
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: '/src/typography-tuning.css',
          },
          injectTo: 'head',
        },
      ];
    },
  },
};

export default defineConfig({
  base: './',
  plugins: [injectSharedStyles],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        lab: resolve(__dirname, 'homework.html'),
        blog: resolve(__dirname, 'blog.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
