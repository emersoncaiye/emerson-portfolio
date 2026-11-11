import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://emerson-portfolio.pages.dev',
  output: 'static',
  server: {
    port: 5000,
    host: true,
  },
  i18n: {
    // 粤语 (yue) 版本暂时停用；如需恢复，请在 locales 中加回并重建 /yue/ 路由。
    defaultLocale: 'en',
    locales: ['en', 'zh', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
