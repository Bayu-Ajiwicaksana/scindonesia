"use client";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";
// import { programs } from "@/lib/data";
import ProgramItem from "./ProgramItem";

export default function ProgramWrapper({
  programs,
  locale,
  children,
  className,
  ...props
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80px", "end end"],
  });

  return (
    <motion.div
      ref={container}
      className="flex flex-col w-full justify-between h-[455vh]"
    >
      {programs.map((p, i) => {
        const targetScale = 1 - (programs.length - i) * 0.15;
        return (
          <ProgramItem
            locale={locale}
            programsLength={programs.length}
            program={p}
            index={i}
            key={p.slug}
            scrollProgress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </motion.div>
  );
}
