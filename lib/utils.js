import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { id, enUS } from "date-fns/locale";
import { useLocale } from "next-intl";
import { format } from "date-fns";

const dateLocales = {
  id: id,
  en: enUS,
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function dateFormatter(date, formatStr = "PP", locale) {
  return format(date, formatStr, {
    locale: dateLocales[locale], // or global.__localeId__
  });
}
