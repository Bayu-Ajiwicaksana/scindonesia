import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import OpImage from "@/components/OpImage";
import { Globe, HandHeart, Handshake, PencilRuler } from "lucide-react";

export default function OurMission({ children, className, ...props }) {
  const t = useTranslations("page.aboutUs").raw("mission");
  const countMission = Object.keys(t).length - 1;
  return (
    <Section className={cn("py-8 bg-secondary", className)}>
      <Container className={""}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_.7fr_.7fr] md:grid-rows-3 lg:grid-rows-2 gap-5">
          <div className="aspect-[4/5] md:aspect-[4/2] lg:aspect-auto md:col-span-full lg:row-span-full lg:col-span-1 rounded-2xl relative p-4 overflow-hidden">
            <OpImage
              src={"/img/contents/our-mission-bg.webp"}
              alt="SCI's Mission"
              className="absolute top-0 left-0 w-full h-full object-center"
            />
            <div className="relative">
              <h2 className="font-serif text-6xl font-semibold w-1/2">
                {t.heading}
              </h2>
            </div>
          </div>
          {Array.from({ length: countMission }, (_, i) => (
            <MissionItem mission={t[i]} index={i} key={`mission-${i}`} />
          ))}
          {/* <div className="">Test 1</div>
          <div className="bg-primary">Test 2</div>
          <div className="bg-primary">Test 3</div>
          <div>Test 4</div> */}
        </div>
      </Container>
    </Section>
  );
}

function MissionItem({ mission, index }) {
  const icons = {
    0: Handshake,
    1: HandHeart,
    2: PencilRuler,
    3: Globe,
  };

  const Icon = icons[index];
  return (
    <div
      className={cn(
        "w-full h-full rounded-2xl p-4 pt-28 flex flex-col justify-end relative text-2xl",
        index === 1
          ? "bg-primary text-primary-foreground"
          : index === 2
          ? "bg-primary-accent/25 text-zinc-700 md:bg-primary md:text-primary-foreground"
          : index === 3
          ? "bg-primary text-primary-foreground md:bg-primary-accent/25 md:text-zinc-700"
          : "bg-primary-accent/25 text-zinc-700"
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 p-3 flex justify-center items-center bg-secondary rounded-br-2xl",
          index === 1
            ? "text-primary-accent"
            : index === 2
            ? "text-primary md:text-primary-accent"
            : index === 3
            ? "text-primary-accent md:text-primary"
            : "text-primary"
        )}
      >
        <Icon className="size-10 md:size-16 md:stroke-1" />
      </div>
      {mission}
    </div>
  );
}
