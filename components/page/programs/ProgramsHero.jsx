import { cn } from "@/lib/utils";
import ProgramsHeroBg from "@/public/img/contents/real_impact.webp";
import Hero from "@/components/layout/Hero";
import MoveDown from "@/components/button/MoveDown";

export default function ProgramsHero({ children, className, ...props }) {
  return (
    <Hero
      bgImage={ProgramsHeroBg}
      bgAlt={"SCI's Programs Hero Background"}
      bgClass={"brightness-50"}
    >
      <div className="absolute bottom-0 h-full pt-10 pb-5 px-16 w-full flex flex-col justify-between">
        <span className="text-2xl text-secondary w-5/6">
          Our Social Programs
        </span>
        <div className="self-end flex w-full justify-between items-center">
          <MoveDown to={"#program_list"} />
          <h1 className="font-serif font-bold text-6xl w-2/3 text-zinc-200 text-right">
            CSR Solutions That Improve Lives and Make a Positive Impact
          </h1>
        </div>
      </div>
    </Hero>
  );
}
