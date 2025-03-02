"use client";
import ParagraphFade from "@/components/animation/ParagraphFade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { useScroll } from "motion/react";
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
          // text="We are a trusted partner for companies looking to implement CSR programs in a targeted, effective, and sustainable manner. We are dedicated to assisting your company in designing and executing CSR programs that provide tangible benefits to the local community and the environment."
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
