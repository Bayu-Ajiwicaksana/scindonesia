"use client";
import ParallaxBg from "@/components/animation/ParallaxBg";
import BadgeLink from "@/components/button/BadgeLink";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { ArrowUpRightFromSquare } from "lucide-react";
import { useScroll } from "motion/react";
import { useRef } from "react";

export default function ProgramBgContainer({
  locale,
  program,
  focusArea,
  children,
  className,
  ...props
}) {
  const targetContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetContainer,
    offset: ["start end", "end start"],
  });
  return (
    <Container
      className={cn(
        "relative h-screen overflow-hidden px-3 md:px-8 pb-8 md:pb-16 pt-14 md:pt-20",
        className
      )}
      key={program.slug}
      ref={targetContainer}
    >
      <ParallaxBg
        imgClassName={"brightness-[.35] object-[35%_50%] md:object-center"}
        // alt={program.name}
        className={"h-[115%]"}
        alt={focusArea.title}
        src={program.thumbnail}
        fromTop="-5%"
        toTop="5%"
        scrollProgress={scrollYProgress}
      />
      <div className="h-full flex flex-col justify-between">
        <h2 className="font-serif text-5xl md:text-6xl font-semibold text-primary-light brightness-125">
          {/* {program[`name_${locale}`] ?? program.name} */}
          {focusArea.title}
        </h2>
        <div className="self-end text-right md:w-2/3 space-y-8">
          <p className="text-zinc-300 text-lg md:text-2xl">
            {focusArea[`description_${locale}`] ?? focusArea.description}
          </p>
          <div className="flex flex-col md:flex-row md:items-center items-end md:justify-end justify-start gap-3">
            {focusArea.SDGs.map((sdg, index) => (
              <BadgeLink
                key={`programs-${program.slug}-sdg-${sdg.no}`}
                href={sdg.href}
                target="_blank"
                className="bg-primary-accent border-primary-accent-darker text-zinc-900 hover:bg-white hover:text-primary-accent-darker gap-2 w-fit"
              >
                <span>
                  SDGs {sdg.no} : {sdg.title}
                </span>
                <ArrowUpRightFromSquare className="size-3" />
              </BadgeLink>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
