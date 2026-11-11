import type { Content, Lang } from './types';
import en from './en';
import zh from './zh';
import fr from './fr';

/**
 * Active languages: EN / 中文 / FR.
 * 粤语 (yue) version is temporarily paused — legacy yue content is preserved
 * in src/i18n/translations.ts and can be re-enabled later.
 */
export const languages: Record<Lang, Content> = { en, zh, fr } as Record<Lang, Content>;

export const activeLangs: Lang[] = ['en', 'zh', 'fr'];

export function isLang(value: string): value is Lang {
  return value === 'en' || value === 'zh' || value === 'fr';
}

/** Prefix for locale-prefixed URLs ('' for the default locale). */
export function base(lang: Lang): string {
  return lang === 'en' ? '' : `/${lang}`;
}

/** Localised href, e.g. href('zh', '/work/delta/') → '/zh/work/delta/'. */
export function href(lang: Lang, path: string): string {
  return `${base(lang)}${path}`;
}

export interface LangLink {
  code: Lang;
  label: string;
  href: string;
  active: boolean;
}

/**
 * Language switcher links for the current language and page path,
 * e.g. langLinks('zh', '/work/delta/') → '/fr/work/delta/'.
 */
export function langLinks(lang: Lang, path = '/'): LangLink[] {
  return [
    { code: 'en', label: 'EN', href: href('en', path), active: lang === 'en' },
    { code: 'zh', label: '中文', href: href('zh', path), active: lang === 'zh' },
    { code: 'fr', label: 'FR', href: href('fr', path), active: lang === 'fr' },
  ];
}

export function getContent(lang: Lang): Content {
  return languages[lang];
}

/** Slugs of published journal articles for a language (same slugs across languages). */
export function journalSlugs(lang: Lang): string[] {
  return Object.keys(languages[lang].articles);
}

export * from './types';
