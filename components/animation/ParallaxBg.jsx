"use client";
import { cn } from "@/lib/utils";
import { motion, useTransform } from "motion/react";
import Image from "next/image";

export default function ParallaxBg({
  src,
  alt,
  quality = 100,
  placeholder = "blur",
  fromTop = "-30%",
  toTop = "20%",
  children,
  className,
  imgClassName,
  scrollProgress,
  ...props
}) {
  const top = useTransform(scrollProgress, [0, 1], [fromTop, toTop]);

  return (
    <motion.div
      className={cn("absolute inset-0 w-full -z-10 h-[150%]", className)}
      {...props}
      style={{ top }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        placeholder={placeholder}
        sizes="(min-width: 640px) 50vw, 100vw)"
        className={cn("object-cover object-center", imgClassName)}
      />
    </motion.div>
  );
}
