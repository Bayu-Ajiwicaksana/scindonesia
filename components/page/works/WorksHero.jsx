import { cn } from "@/lib/utils";
import WorksHeroBg from "@/public/img/contents/works-hero-bg.webp";
import Hero from "@/components/layout/Hero";
import MoveDown from "@/components/button/MoveDown";

export default function WorksHero({ children, className, ...props }) {
  return (
    <Hero
      bgImage={WorksHeroBg}
      bgAlt={"SCI's Works Page Hero Background"}
      bgClass={"brightness-50"}
    >
      <div className="absolute bottom-0 h-full pt-10 pb-5 px-16 w-full flex flex-col justify-between">
        <span className="text-2xl text-secondary w-5/6">Our Works</span>
        <div className="self-end flex w-full justify-between items-center">
          <MoveDown to={"#work_list"} />
          <h1 className="font-serif font-bold text-6xl w-2/3 text-zinc-200 text-right">
            CSR Solutions Trail That Provides Real Impact
          </h1>
        </div>
      </div>
    </Hero>
  );
}
