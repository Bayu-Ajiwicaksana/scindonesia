import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function LocaleSwitch({ children, className, ...props }) {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <LocaleSwitcher
      defaultValue={locale}
      label={t("translate")}
      className={className}
    />
  );
}
