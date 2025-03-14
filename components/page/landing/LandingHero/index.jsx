import { cn } from "@/lib/utils";
import ContactUsBtn from "@/components/button/ContactUsBtn";
import LinkBtn from "@/components/button/LinkBtn";
import SubCarousel from "./SubCarousel";
import Hero from "@/components/layout/Hero";
import { buttonVariants } from "@/components/ui/button";

export default function LandingHero() {
  return (
    <Hero
      bgImage={"/img/contents/landing-hero-bg"}
      bgAlt={"SCI's Home Hero Background"}
      bgClass={"contrast-[1] brightness-[.5] h-[130%]"}
      // imgClass={"object-bottom"}
      className={{
        section: "px-0",
        container: "",
      }}
    >
      <div className="h-full flex flex-col justify-center px-8">
        <div className="w-2/3 space-y-6">
          <h1 className="text-6xl font-semibold font-serif text-white">
            Impact yang Berarti Dimulai dari{" "}
            <span className="text-primary-accent">Pemahaman yang Benar</span>
          </h1>
          <div className="w-2/3 space-y-6">
            <SubCarousel />
            <div className="flex items-center gap-3">
              <ContactUsBtn
                className={
                  "border-primary-light hover:border-primary-foreground hover:bg-primary-foreground hover:text-zinc-800"
                }
              >
                Hubungi Kami
              </ContactUsBtn>
              <LinkBtn
                variant="outline"
                className={
                  "bg-transparent border border-border text-lg h-fit text-white backdrop-blur-md hover:bg-primary-accent hover:border-primary-accent"
                }
              >
                Lihat Program Kami
              </LinkBtn>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
}
