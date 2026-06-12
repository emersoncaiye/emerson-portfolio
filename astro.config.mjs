import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://emerson-portfolio.pages.dev',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'fr', 'yue'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
