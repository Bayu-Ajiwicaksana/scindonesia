"use client";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Image from "next/image";
import ParallaxBg from "../animation/ParallaxBg";
import { useRef } from "react";
import { useScroll } from "motion/react";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Hero({
  bgImage,
  bgAlt,
  children,
  className = { section: "", container: "" },
  bgClass,
  imgClass,
  ...props
}) {
  const targetScroll = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetScroll,
    offset: ["start 80px", "end start"],
  });
  const { isLG } = useMediaQuery();
  return (
    <Section className={cn("py-0", className.section)}>
      <Container
        className={cn("h-screen min-h-screen px-0", className.container)}
        {...props}
      >
        <div
          className="relative h-full w-full rounded-b-[32px] md:rounded-none overflow-hidden"
          ref={targetScroll}
        >
          <ParallaxBg
            src={bgImage}
            alt={bgAlt}
            scrollProgress={scrollYProgress}
            fromTop={isLG ? "-30%" : "-10%"}
            toTop={isLG ? "30%" : "10%"}
            className={bgClass}
            imgClassName={imgClass}
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
