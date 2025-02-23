import AboutUsHero from "@/components/page/about-us/AboutUsHero";
import CoreValue from "@/components/page/about-us/CoreValue";
import OurMission from "@/components/page/about-us/OurMission";
import OurVision from "@/components/page/about-us/OurVision";
import Subheading from "@/components/page/about-us/Subheading";
import { useTranslations } from "next-intl";

export default function AboutUs({ children, className, ...props }) {
  const t = useTranslations("page.aboutUs");
  const tCoreValue = useTranslations("coreValues");
  const coreTranslations = {
    heading: tCoreValue("heading"),
    planning: tCoreValue("planning"),
    implementing: tCoreValue("implementing"),
    closing: tCoreValue("closing"),
    evaluating: tCoreValue("evaluating"),
  };
  return (
    <>
      <AboutUsHero />
      <Subheading translation={t("subheading")} />
      <CoreValue translations={coreTranslations} />
      <OurVision
        tHeading={t("vision.heading")}
        tSubheading={t("vision.subheading")}
      />
      <OurMission />
    </>
  );
}
