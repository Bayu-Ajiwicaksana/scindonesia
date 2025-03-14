// import { cn } from "@/lib/utils";
// import ProgramsHeroBg from "@/public/img/contents/real_impact.webp";
import Hero from "@/components/layout/Hero";
// import MoveDown from "@/components/button/MoveDown";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";

export default function ProgramsHero({ children, className, ...props }) {
  const t = useTranslations("page.programs");
  return (
    <Hero
      bgImage={"/img/contents/programs-hero-bg"}
      bgAlt={"SCI's Programs Hero Background"}
      bgClass={"brightness-[0.35] h-[130%]"}
      // imgClass={"object-bottom"}
      className={{
        section: "px-0",
        container: "h-[95vh] md:h-screen",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full px-6 gap-7 text-center relative">
        <h1 className="font-serif text-5xl text-white font-semibold md:w-3/4">
          {/* CSR That Creates{" "}
          <span className="text-primary-light text-nowrap">Real Impact</span> */}
          Building <span className="text-primary-light">CSR</span> Programs{" "}
          <span className="text-primary-accent md:text-nowrap">
            That Change Lives
          </span>
        </h1>
        <p className="text-white text-lg md:text-xl md:w-4/5 xl:w-2/3">
          We don’t believe in one-size-fits-all CSR. Every community has unique
          challenges, and every company has a unique mission. That&apos;s why we
          create tailored, data-driven programs that drive real, measurable
          change.
        </p>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <Button className="w-full h-fit text-xl px-8 py-4 hover:bg-white hover:text-primary">
            Explore Our Initiatives
          </Button>
          {/* <Button
            variant="outline"
            className="w-full h-fit text-xl px-8 py-4 bg-transparent border border-primary-accent text-primary-accent backdrop-blur-[4px] hover:bg-primary-accent"
          >
            Our Social Programs
          </Button> */}
        </div>
        <span className="absolute bottom-3 flex flex-col items-center text-white/55 animate-bounce">
          Scroll for more
          <ChevronsDown />
        </span>
      </div>
    </Hero>
  );
}
