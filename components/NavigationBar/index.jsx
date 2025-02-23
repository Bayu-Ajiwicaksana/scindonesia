import { cn } from "@/lib/utils";
import NavBar from "./NavBar";
import { useTranslations } from "next-intl";

export default function NavigationBar({ children, className, ...props }) {
  const t = useTranslations("nav");
  const homeLabel = t("home");
  const worksLabel = t("works");
  const programsLabel = t("programs");
  const aboutUsLabel = t("aboutUs");
  return (
    <NavBar
      t={{
        home: homeLabel,
        works: worksLabel,
        programs: programsLabel,
        aboutUs: aboutUsLabel,
      }}
    />
  );
}
