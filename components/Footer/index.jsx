import { cn } from "@/lib/utils";
import FooterWrapper from "./FooterWrapper";
import { useTranslations } from "next-intl";

export default function Footer({ children, className, ...props }) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <FooterWrapper
      tHeading={t("heading")}
      tBtnContact={t("contactBtn")}
      tExplore={t("explore")}
      tContact={t("contact")}
      tAddress={t("address")}
      tNavHome={tNav("home")}
      tNavWorks={tNav("works")}
      tNavPrograms={tNav("programs")}
      tNavAbout={tNav("aboutUs")}
    />
  );
}
