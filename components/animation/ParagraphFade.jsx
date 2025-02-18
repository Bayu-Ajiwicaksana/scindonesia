"use client";
import { cn } from "@/lib/utils";
import { useTransform, motion } from "motion/react";

export default function ParagraphFade({
  text = "sample paragraph",
  progress,
  children,
  className,
  as,
  spacing = "mr-5",
  ...props
}) {
  const splittedByWords = text.split(" ");
  const Comp = as ?? "p";
  return (
    <Comp className={cn("flex flex-wrap", className)} {...props}>
      {splittedByWords.map((word, i) => {
        const start = i / splittedByWords.length;
        const end = start + 1 / splittedByWords.length;
        return (
          <Word
            key={`programs-subheading-${i}`}
            range={[start, end]}
            progress={progress}
            spacing={spacing}
          >
            {word}
          </Word>
        );
      })}
    </Comp>
  );
}

function Word({ children, range, progress, spacing }) {
  const splittedByChar = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={cn(spacing)}>
      {splittedByChar.map((char, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Char
            range={[start, end]}
            progress={progress}
            key={`programs-subheading-char-${i}`}
          >
            {char}
          </Char>
        );
      })}
    </span>
  );
}

function Char({ children, range, progress }) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
