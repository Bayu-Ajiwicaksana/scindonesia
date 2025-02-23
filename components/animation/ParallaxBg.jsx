"use client";
import { cn } from "@/lib/utils";
import { motion, useTransform } from "motion/react";
import Image from "next/image";
import OpImage from "../OpImage";

export default function ParallaxBg({
  src,
  alt,
  quality = 100,
  placeholder = "blur",
  fromTop = "-150%",
  toTop = "15%",
  children,
  className,
  imgClassName,
  scrollProgress,
  ...props
}) {
  const top = useTransform(scrollProgress, [0, 1], [fromTop, toTop]);
  console.log(src);

  return (
    <motion.div
      className={cn("absolute inset-0 w-full -z-10 h-[150%]", className)}
      {...props}
      style={{ top }}
    >
      {/* <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        placeholder={placeholder}
        sizes="(min-width: 640px) 100vw, 100vw"
        className={cn("object-cover object-center", imgClassName)}
      /> */}
      <OpImage
        src={src}
        alt={alt}
        className={cn("w-full h-full object-center", imgClassName)}
      />
    </motion.div>
  );
}
