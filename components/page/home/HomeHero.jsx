import { cn } from "@/lib/utils";
import HomeHeroBg from "@/public/img/contents/home-hero-bg.webp";
import Hero from "@/components/layout/Hero";
import MoveDown from "@/components/button/MoveDown";

export default function HomeHero({ children, className, ...props }) {
  return (
    <Hero bgImage={HomeHeroBg} bgAlt={"SCI's Home Hero Background"}>
      <div className="absolute bottom-0 h-full pt-10 pb-5 px-16 w-full flex flex-col justify-between">
        <h1 className="font-serif font-bold text-8xl text-white w-5/6">
          Strategic CSR Partners for Real Impact.
        </h1>
        <div className="self-end flex w-full justify-between items-center">
          <MoveDown to={"#clients_section"} />
          <p className="text-2xl w-1/2 text-zinc-200">
            We assist companies in implementing strategic, impactful, and
            sustainable CSR for society and the environment.
          </p>
        </div>
      </div>
    </Hero>
  );
}
