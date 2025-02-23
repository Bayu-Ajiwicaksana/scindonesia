import { cn } from "@/lib/utils";
import AboutUsHeroBg from "@/public/img/contents/skills_experience.webp";
import Hero from "@/components/layout/Hero";
import MoveDown from "@/components/button/MoveDown";
import { useTranslations } from "next-intl";

export default function AboutUsHero({ children, className, ...props }) {
  const t = useTranslations("page.aboutUs.hero");
  return (
    <Hero
      bgImage={"/img/contents/skills_experience.webp"}
      bgAlt={"SCI's Home Hero Background"}
      bgClass={"[&_img]:brightness-50"}
      className={{
        section: "px-0",
      }}
    >
      <div className="absolute bottom-0 h-5/6 lg:h-full pt-0 lg:pt-10 pb-14 lg:pb-5 px-3 lg:px-16 w-full flex flex-col gap-10 md:gap-0 md:justify-between">
        <h1 className="font-serif font-bold text-6xl md:text-7xl lg:text-8xl text-white lg:w-5/6">
          {/* Realizing meaningful and sustainable CSR. */}
          {t("heading")}
        </h1>
        <div className="self-end h-full md:h-fit flex flex-col-reverse md:flex-row w-full justify-between items-center">
          <MoveDown
            to={"#core_values"}
            className={"md:place-items-center lg:place-items-start w-full"}
          />
          <p className="text-2xl w-full lg:w-1/2 text-zinc-200">
            {/* We are corporate partners in developing and managing CSR programs
            based on social mapping, effective implementation, and transparent
            impact evaluation. */}
            {t("subheading")}
          </p>
        </div>
      </div>
    </Hero>
  );
}
