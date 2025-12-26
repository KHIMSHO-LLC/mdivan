import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better type safety
const dictionaries = {
  en: () => import("./dictionaries/en").then((module) => module.default),
  es: () => import("./dictionaries/es").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
