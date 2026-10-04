import { common } from './common';

export type Lang = 'en' | 'ka';

// ---- Pairs: { en, ka } -------------------------------------------------------------------------
// Any text written as { en: '…', ka: '…' } is resolved to the chosen language at build time.
// A pair missing one language (or left empty) stops the build with an error, so a gap can't go live unnoticed.
export type Localized<T> = T extends { en: infer E; ka: unknown }
  ? E
  : T extends readonly (infer U)[]
    ? Localized<U>[]
    : T extends object
      ? { [K in keyof T]: Localized<T[K]> }
      : T;

export function localize<T>(value: T, lang: Lang, path = ''): Localized<T> {
  if (Array.isArray(value)) return value.map((v, i) => localize(v, lang, `${path}[${i}]`)) as Localized<T>;
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    if ('en' in obj || 'ka' in obj) {
      if (!('en' in obj) || !('ka' in obj) || Object.keys(obj).length !== 2) {
        throw new Error(`Translation pair at "${path}" needs exactly "en" and "ka"`);
      }
      const picked = obj[lang];
      if (picked === undefined || picked === '') throw new Error(`Missing ${lang} text at "${path}"`);
      return localize(picked, lang, path) as Localized<T>;
    }
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, localize(v, lang, path ? `${path}.${k}` : k)]),
    ) as Localized<T>;
  }
  return value as Localized<T>;
}

// ---- Shared strings (header, footer, contact details) ------------------------------------------
function getStrings(lang: Lang) {
  const { nav, ...rest } = common;
  return {
    lang,
    ...localize(rest, lang),
    nav: nav.map((item) => ({
      label: localize(item.label, lang),
      path: `/${lang}/${item.slug ? item.slug + '/' : ''}`,
    })),
  };
}
export type Strings = ReturnType<typeof getStrings>;

export const strings: Record<Lang, Strings> = { en: getStrings('en'), ka: getStrings('ka') };

export const langFromPath = (path: string): Lang => (/^\/ka(\/|$)/.test(path) ? 'ka' : 'en');

// ---- Language switch ---------------------------------------------------------------------------
// Pages (slug after the language prefix; '' = home) that have a Georgian version.
// Add a slug here when its /ka/ page goes live — until then the "GE" switch stays disabled.
export const kaPages: string[] = ['', 'contact', 'about', 'projects', 'services'];

const slugOf = (path: string) => path.replace(/^\/(en|ka)\/?/, '').replace(/\/$/, '');

// Language names are written in their own language (for screen readers).
const names: Record<Lang, string> = { en: 'English', ka: 'ქართული' };

// Fixed order EN | GE. `href` is null for the current language and for languages with no matching page yet.
export function langLinks(path: string, current: Lang) {
  const slug = slugOf(path);
  return ([['EN', 'en'], ['GE', 'ka']] as [string, Lang][]).map(([code, lang]) => {
    const isCurrent = lang === current;
    const available = lang === 'en' || kaPages.includes(slug);
    return {
      code,
      lang,
      name: names[lang],
      current: isCurrent,
      href: !isCurrent && available ? `/${lang}/${slug ? slug + '/' : ''}` : null,
    };
  });
}

// Absolute-path alternates of a page in every language it exists in (for hreflang and the language switch).
export function pageAlternates(path: string) {
  const slug = slugOf(path);
  const out: { lang: Lang; path: string }[] = [];
  for (const lang of ['en', 'ka'] as Lang[]) {
    if (lang === 'en' || kaPages.includes(slug)) out.push({ lang, path: `/${lang}/${slug ? slug + '/' : ''}` });
  }
  return out;
}
