"use client";
import ParallaxBg from "@/components/animation/ParallaxBg";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { useScroll } from "motion/react";
import { useRef } from "react";

export default function VisionBgContainer({ children, className, ...props }) {
  const targetContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetContainer,
    offset: ["start end", "end start"],
  });
  return (
    <Section className={"h-screen px-0 xl:px-0"}>
      <Container
        className={cn(
          "relative h-full w-full overflow-hidden px-3 md:px-8 pb-8 md:pb-16 pt-14 md:pt-20",
          className
        )}
        ref={targetContainer}
      >
        <ParallaxBg
          imgClassName={"brightness-50 center"}
          alt="SCI's Vision background image"
          src="/img/contents/our-vision-bg.webp"
          fromTop="-50%"
          toTop="20%"
          scrollProgress={scrollYProgress}
        />
        {/* <div className="h-full flex flex-col justify-between">
          <h2 className="font-serif text-5xl md:text-6xl font-semibold text-white">
            {program.name}
          </h2>
          <p className="text-zinc-300 text-2xl self-end text-right md:w-1/2">
            {program.description}
          </p>
        </div> */}
        {children}
      </Container>
    </Section>
  );
}
