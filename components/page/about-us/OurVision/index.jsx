"use client";
import ParagraphFade from "@/components/animation/ParagraphFade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useAnimate,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

export default function OurVision({ children, className, ...props }) {
  const targetScroll = useRef(null);
  // const [scope, animate] = useAnimate();
  // const isInView = useInView(scope, { once: false });

  const { scrollYProgress } = useScroll({
    target: targetScroll,
    offset: ["start start", "end end"],
  });

  return (
    <Section
      className={cn("py-8 h-[150vh]", className)}
      ref={targetScroll}
      // style={{ opacity }}
    >
      <Container
        className={
          "min-h-[80vh] p-8 sticky top-[80px] grid grid-cols-[.6fr_1fr] gap-10"
        }
      >
        <h2 className="text-4xl font-medium self-center">Our Vision</h2>
        <ParagraphFade
          progress={scrollYProgress}
          text="Encouraging sustainable and inclusive social change through impactful CSR programs"
          className={
            "text-6xl leading-tight justify-center font-semibold font-serif h-fit self-center"
          }
          spacing="mr-3 h-fit"
        />
      </Container>
    </Section>
  );
}
