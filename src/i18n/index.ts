import { fr } from './fr';
import { en } from './en';

export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export const translations = { fr, en };

export type Lang = keyof typeof translations;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getLocalePath(lang: Lang, path: string = '') {
  if (lang === defaultLang) return `/${path}`;
  return `/${lang}/${path}`;
}
