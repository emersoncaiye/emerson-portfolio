# Legacy

Pre-redesign code and content, kept for reference only — nothing here is imported by the live site.

- `Resume.astro` — the original single-page homepage component (Experience / Moments / About Me / Contact).
- `translations.ts` — the original four-language copy (EN / 中文 / 粵語 / FR), including the full Cantonese (yue) content and the long-form experience descriptions.

To re-enable the Cantonese version later: add a `src/content/yue.ts` (content model defined in `src/content/types.ts`), register it in `src/content/index.ts`, and restore the `/yue/` routes.
