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
} from "motion/react";
import { useRef } from "react";

export default function Subheading({
  translation,
  children,
  className,
  ...props
}) {
  const targetScroll = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetScroll,
    offset: ["start 50%", "end 75%"],
  });

  return (
    <Section className={cn("py-8", className)} ref={targetScroll}>
      <Container
        className={
          "min-h-[80vh] p-8 flex flex-col justify-center items-center gap-10 border border-border/45 rounded-3xl"
        }
      >
        <ParagraphFade
          progress={scrollYProgress}
          text={translation}
          className={
            "text-3xl md:text-5xl leading-tight justify-center font-semibold font-serif"
          }
          spacing="mr-2 md:mr-3"
        />
      </Container>
    </Section>
  );
}
