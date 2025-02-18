"use client";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Image from "next/image";
import ParallaxBg from "../animation/ParallaxBg";
import { useRef } from "react";
import { useScroll } from "motion/react";

export default function Hero({
  bgImage,
  bgAlt,
  children,
  className = { section: "", container: "" },
  bgClass,
  ...props
}) {
  const targetScroll = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetScroll,
    offset: ["start 80px", "end start"],
  });
  return (
    <Section className={cn("", className.section)}>
      <Container
        className={cn("h-[90vh] xl:pb-5 xl:pt-2", className.container)}
        {...props}
      >
        <div
          className="relative h-full w-full rounded-[32px] overflow-hidden"
          ref={targetScroll}
        >
          <ParallaxBg
            src={bgImage}
            alt={bgAlt}
            scrollProgress={scrollYProgress}
            fromTop="-30%"
            toTop="30%"
            className={bgClass}
          />
          {/* <Image
            src={bgImage}
            placeholder="blur"
            fill
            className="object-cover -z-10 brightness-75"
            role="presentation"
            alt={bgAlt}
          /> */}
          {children}
        </div>
      </Container>
    </Section>
  );
}
