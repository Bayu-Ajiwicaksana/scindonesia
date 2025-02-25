import Hero from "@/components/layout/Hero";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronsDown } from "lucide-react";

export default function HomeHero({ children, className, ...props }) {
  const t = useTranslations("page");
  return (
    <Hero
      bgImage={"/img/contents/home-hero-bg.webp"}
      bgAlt={"SCI's Home Hero Background"}
      bgClass={"brightness-[0.55] h-[130%]"}
      // imgClass={"object-bottom"}
      className={{
        section: "px-0",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full px-6 gap-7 text-center relative">
        <h1 className="font-serif text-6xl text-white font-semibold">
          CSR That Creates{" "}
          <span className="text-primary-light">Real Impact</span>
        </h1>
        <p className="text-white text-lg">
          We help companies design and implement CSR programs that are
          strategic, sustainable, and truly benefit local communities.
        </p>
        <div className="flex flex-col gap-5 mt-8">
          <Button className="w-full h-fit text-xl px-8 py-4 hover:bg-white hover:text-primary">
            Discover Our Approach
          </Button>
          <Button
            variant="outline"
            className="w-full h-fit text-xl px-8 py-4 bg-transparent border border-primary-accent text-primary-accent backdrop-blur-[4px] hover:bg-primary-accent"
          >
            Our Social Programs
          </Button>
        </div>
        <span className="absolute bottom-8 flex flex-col items-center text-white/55 animate-bounce">
          Scroll for more
          <ChevronsDown />
        </span>
      </div>
    </Hero>
  );
}
