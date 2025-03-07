import Hero from "@/components/layout/Hero";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronsDown } from "lucide-react";
import RotatingText from "@/components/animation/RotatingText";

export default function HomeHero({ children, className, ...props }) {
  const t = useTranslations("page");
  return (
    <Hero
      bgImage={"/img/contents/home-hero-bg"}
      bgAlt={"SCI's Home Hero Background"}
      bgClass={"brightness-[0.35] h-[130%]"}
      // imgClass={"object-bottom"}
      className={{
        section: "px-0",
        container: "md:h-screen",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full px-6 gap-7 text-center relative pt-24 md:pt-0 pb-16">
        <h1 className="font-serif text-3xl md:text-5xl text-white font-semibold md:w-3/4">
          Impact yang Berarti Dimulai dari{" "}
          <span className="text-primary-light">Pemahaman yang Benar</span>
        </h1>
        {/* <p className="text-white text-lg md:text-xl md:w-4/5">
          We help companies design and implement CSR programs that are
          strategic, sustainable, and truly benefit local communities.
        </p> */}
        <RotatingText
          texts={[
            "Impact bukan sekadar hasil, tetapi sebuah perubahan yang nyata. Impact lahir dari kesadaran akan masalah yang ada, strategi yang tepat dalam menyelesaikannya, serta komitmen untuk menciptakan manfaat berkelanjutan.",
            "Impact seharusnya tercipta dengan perencanaan yang terukur, berbasis data dan riset, agar dampaknya dapat berlangsung dalam jangka panjang. Impact bukan hanya tentang memberikan sesuatu, tetapi membangun ekosistem yang memungkinkan perubahan positif terus berkembang.",
            "Impact harus dirasakan oleh mereka yang benar-benar membutuhkan—masyarakat yang terdampak, lingkungan yang terjaga, serta seluruh pemangku kepentingan yang terlibat. Bukan hanya untuk memenuhi kewajiban sosial, tetapi untuk menciptakan perubahan yang adil, inklusif, dan berkelanjutan.",
          ]}
          mainClassName="text-white text-lg md:text-left md:w-4/5"
          staggerFrom={"first"}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-120%", opacity: 0 }}
          staggerDuration={0.025}
          splitBy="words"
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={10000}
        />
        <div className="flex flex-col md:flex-row gap-5 mt-5">
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
        <span className="absolute bottom-3 flex flex-col items-center text-white/55 animate-bounce text-xs md:text-sm">
          Scroll for more
          <ChevronsDown className="size-3 md:size-4" />
        </span>
      </div>
    </Hero>
  );
}
