"use client";
import ParallaxBg from "@/components/animation/ParallaxBg";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { useScroll } from "motion/react";
import { useRef } from "react";

export default function ProgramBgContainer({
  program,
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
        "relative h-screen overflow-hidden px-8 pb-16 pt-20",
        className
      )}
      key={program.key}
      ref={targetContainer}
    >
      <ParallaxBg
        imgClassName={"brightness-50"}
        alt={program.name}
        src={program.img}
        fromTop="-50%"
        toTop="20%"
        scrollProgress={scrollYProgress}
      />
      <div className="h-full flex flex-col justify-between">
        <h2 className="font-serif text-6xl font-semibold text-white">
          {program.name}
        </h2>
        <p className="text-zinc-300 text-2xl self-end text-right w-1/2">
          {program.description}
        </p>
      </div>
    </Container>
  );
}
