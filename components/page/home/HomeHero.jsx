import { cn } from "@/lib/utils";
import HomeHeroBg from "@/public/img/contents/home-hero-bg.webp";
import Hero from "@/components/layout/Hero";
import MoveDown from "@/components/button/MoveDown";
import { useTranslations } from "next-intl";

export default function HomeHero({ children, className, ...props }) {
  const t = useTranslations("page");
  return (
    <Hero
      bgImage={"/img/contents/home-hero-bg.webp"}
      bgAlt={"SCI's Home Hero Background"}
      bgClass={"brightness-[0.8]"}
      className={{
        section: "px-0",
      }}
    >
      <div className="absolute bottom-0 h-5/6 lg:h-full pt-0 lg:pt-10 pb-14 lg:pb-5 px-3 lg:px-16 w-full flex flex-col gap-10 md:gap-0 md:justify-between">
        <h1 className="font-serif font-bold text-6xl md:text-7xl lg:text-8xl text-white lg:w-5/6">
          {/* Strategic CSR Partners for Real Impact. */}
          {t("home.hero.heading")}
        </h1>
        <div className="self-end h-full md:h-fit flex flex-col-reverse md:flex-row w-full justify-between items-center">
          <MoveDown
            to={"#clients_section"}
            className={"md:place-items-center lg:place-items-start w-full"}
          />
          <p className="text-2xl w-full lg:w-1/2 text-zinc-200">
            {/* We assist companies in implementing strategic, impactful, and
            sustainable CSR for society and the environment. */}
            {t("home.hero.subheading")}
          </p>
        </div>
      </div>
    </Hero>
  );
}
