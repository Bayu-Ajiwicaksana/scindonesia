import Hero from "@/components/layout/Hero";
import MoveDown from "@/components/button/MoveDown";
import { useTranslations } from "next-intl";

export default function WorksHero({ children, className, ...props }) {
  const t = useTranslations("page.works");
  return (
    <Hero
      bgImage={"/img/contents/works-hero-bg"}
      bgAlt={"SCI's Works Page Hero Background"}
      bgClass={"brightness-50"}
      className={{
        section: "px-0",
      }}
    >
      <div className="absolute bottom-0 h-5/6 lg:h-full pt-0 lg:pt-10 pb-14 lg:pb-5 px-3 lg:px-16 w-full flex flex-col gap-10 md:gap-0 md:justify-between">
        <span className="text-2xl text-secondary w-5/6">{t("name")}</span>
        <div className="self-end h-full md:h-fit flex flex-col-reverse md:flex-row w-full justify-between items-center">
          <MoveDown
            to={"#work_list"}
            className={
              "md:place-items-center lg:place-items-start md:basis-1/3"
            }
          />
          <h1 className="font-serif font-bold text-5xl w-full md:w-2/3 text-zinc-200 text-left md:text-right">
            {t("hero")}
          </h1>
        </div>
      </div>
    </Hero>
  );
}
