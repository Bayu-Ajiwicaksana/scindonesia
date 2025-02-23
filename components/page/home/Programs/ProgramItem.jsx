"use client";
import { motion, progress, useTransform } from "motion/react";
// import { useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import OpImage from "@/components/OpImage";

export default function ProgramItem({
  locale,
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
          "p-5 md:p-8 rounded-3xl border border-foreground h-[75vh] flex flex-col md:h-[87vh] lg:grid lg:grid-cols-[.7fr_1fr] gap-8 overflow-hidden",
          odd
            ? "bg-foreground text-background"
            : "bg-background text-foreground"
        )}
      >
        <div className="h-fit md:h-full self-end flex flex-col md:grid md:grid-cols-[.5fr_1fr] lg:flex lg:flex-col justify-between gap-3 md:gap-8 lg:gap-3">
          <h3 className="font-semibold text-4xl lg:text-6xl font-serif">
            {program[`name_${locale}`] ?? program.name}
          </h3>
          <p className="text-xl md:text-2xl lg:text-3xl">
            {program[`description_${locale}`] ?? program.description}
          </p>
        </div>
        <div className="relative overflow-hidden h-full order-first lg:order-last aspect-auto">
          {/* <Image
            src={program.img}
            alt={program.name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            placeholder="blur"
            className="absolute rounded-xl object-cover"
            style={{
              zIndex: programsLength - (programsLength - index) + 1,
            }}
          /> */}
          <OpImage
            src={program.thumbnail}
            alt={program.name}
            className="absolute rounded-xl object-center w-full h-full"
            style={{
              zIndex: programsLength - (programsLength - index) + 1,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
