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
      ];
    },
  },
};

export default defineConfig({
  base: './',
  plugins: [injectSharedStyles],
});
