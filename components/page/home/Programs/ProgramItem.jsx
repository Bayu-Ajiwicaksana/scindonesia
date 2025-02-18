"use client";
import { motion, progress, useTransform } from "motion/react";
// import { useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProgramItem({
  programsLength,
  program,
  index,
  scrollProgress,
  range,
  targetScale,
}) {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start 80px", `end 50%`],
  // });
  const odd = (index + 1) % 2 !== 0;

  const scale =
    index + 1 === programsLength
      ? 1
      : useTransform(scrollProgress, range, [1, targetScale]);

  return (
    <motion.div
      // ref={ref}
      className={cn("w-full sticky overflow-hidden")}
      style={{
        zIndex: programsLength - (programsLength - index),
        // bottom: `-${80 * (programsLength + 1 - index)}px`,
        top: `80px`,
        // top: `${70 + 60 * index}px`,
        scale,
      }}
    >
      <div
        className={cn(
          "p-8 rounded-3xl border border-foreground h-[87vh] grid grid-cols-[.7fr_1fr] gap-8 overflow-hidden",
          odd
            ? "bg-foreground text-background"
            : "bg-background text-foreground"
        )}
      >
        <div className="h-full flex flex-col justify-between">
          <h3 className="font-semibold text-6xl font-serif">{program.name}</h3>
          <p className="text-3xl">{program.description}</p>
        </div>
        <div className="relative overflow-hidden w-full h-full">
          <Image
            src={program.img}
            alt={program.name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            placeholder="blur"
            className="absolute rounded-xl object-cover"
            style={{
              zIndex: programsLength - (programsLength - index) + 1,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
