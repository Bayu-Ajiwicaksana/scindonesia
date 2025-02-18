"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { programs } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ProgramItem from "./ProgramItem";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function Programs({ children, className, ...props }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80px", "end end"],
  });

  // const scroll_y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // const y = useSpring(scroll_y, {
  //   stiffness: 100,
  //   damping: 45,
  //   restDelta: 0.001,
  // });

  return (
    <Section className={cn("", className)} {...props}>
      <Container className={"py-8"}>
        <div className="flex flex-col gap-16 items-center border border-border/45 rounded-3xl p-8">
          <div className="text-center space-y-[6px]">
            <h2 className="text-muted-foreground text-lg">
              Programs We Offered
            </h2>
            <p className="text-2xl font-semibold font-serif">
              CSR Solutions That Improve Lives and Make a Positive Impact
            </p>
          </div>
          <motion.div
            ref={container}
            className="flex flex-col w-full gap-y-[1000px]"
          >
            {programs.map((p, i) => {
              const targetScale = 1 - (programs.length - i) * 0.15;
              return (
                <ProgramItem
                  programsLength={programs.length}
                  program={p}
                  index={i}
                  key={p.key}
                  scrollProgress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
