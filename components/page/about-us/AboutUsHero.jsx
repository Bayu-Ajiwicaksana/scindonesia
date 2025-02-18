import { cn } from "@/lib/utils";
import AboutUsHeroBg from "@/public/img/contents/skills_experience.webp";
import Hero from "@/components/layout/Hero";
import MoveDown from "@/components/button/MoveDown";

export default function AboutUsHero({ children, className, ...props }) {
  return (
    <Hero
      bgImage={AboutUsHeroBg}
      bgAlt={"SCI's Home Hero Background"}
      bgClass={"[&_img]:brightness-50"}
    >
      <div className="absolute bottom-0 h-full pt-10 pb-5 px-16 w-full flex flex-col justify-between">
        <h1 className="font-serif font-bold text-8xl text-white w-5/6">
          Realizing meaningful and sustainable CSR.
        </h1>
        <div className="self-end flex w-full justify-between items-center">
          <MoveDown to={"#core_values"} />
          <p className="text-2xl w-2/3 text-zinc-200 text-right">
            We are corporate partners in developing and managing CSR programs
            based on social mapping, effective implementation, and transparent
            impact evaluation.
          </p>
        </div>
      </div>
    </Hero>
  );
}
