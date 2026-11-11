export type Lang = 'en' | 'zh' | 'yue' | 'fr';

export interface NavLabels {
  work: string;
  journal: string;
  experience: string;
  about: string;
  contact: string;
}

export interface HeroContent {
  label: string;
  headline: string;
  sub: string;
  meta: string[];
  scroll: string;
  name: string;
  nameMeta: string;
}

export interface ProjectFeature {
  num: string;
  title: string;
  categories: string[];
  year: string;
  intro: string;
  points?: string[];
  image: string;
  imageMobile?: string;
  imageAlt: string;
  imageCaption?: string;
  link: { href: string; label: string; external?: boolean };
}

export interface WorkContent {
  label: string;
  intro: string;
  delta: ProjectFeature;
  site: ProjectFeature;
}

export interface JournalEntry {
  num: string;
  title: string;
  place: string;
  tags: string[];
  description: string;
  slug: string | null;
  image?: string;
  imageAlt?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface PhotoNote {
  image: string;
  alt: string;
  caption: string;
  place: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface JournalContent {
  label: string;
  intro: string;
  entries: JournalEntry[];
  photos: PhotoNote[];
  labels: {
    entry: string;
    forthcoming: string;
    read: string;
    back: string;
    all: string;
    contents: string;
    tags: string;
  };
}

export interface ExperienceItem {
  role: string;
  org: string;
  date: string;
  place: string;
  description: string;
}

export interface ExperienceContent {
  label: string;
  intro: string;
  items: ExperienceItem[];
}

export interface AboutContent {
  label: string;
  heading: string;
  paragraphs: string[];
  traits: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  beyondLabel: string;
  beyondIntro: string;
  beyond: { title: string; text: string }[];
}

export interface ContactContent {
  label: string;
  heading: string;
  email: string;
  github: string;
  githubLabel: string;
  note: string;
}

export interface Article {
  slug: string;
  title: string;
  place: string;
  meta: string;
  tags: string[];
  intro: string;
  image?: string;
  imageAlt?: string;
  body: Array<string | ArticleFigure>;
}

export interface ArticleFigure {
  image: string;
  alt: string;
  caption: string;
}

export interface DeltaCase {
  eyebrow: string;
  title: string;
  standfirst: string;
  meta: { label: string; value: string }[];
  intro: string[];
  modelTitle: string;
  model: { key: string; text: string }[];
  notesTitle: string;
  notes: { title: string; text: string }[];
  prototypeTitle: string;
  prototypeText: string[];
  links: { label: string; value: string; href: string }[];
  disclaimer: string;
  back: string;
  gallery: { image: string; alt: string; caption: string }[];
}

export interface Content {
  lang: Lang;
  htmlLang: string;
  langLabel: string;
  title: string;
  description: string;
  nav: NavLabels;
  hero: HeroContent;
  work: WorkContent;
  journal: JournalContent;
  experience: ExperienceContent;
  about: AboutContent;
  contact: ContactContent;
  articles: Record<string, Article>;
  deltaCase: DeltaCase;
  footer: { rights: string; colophon: string };
  a11y: { skip: string; menu: string; language: string };
}
