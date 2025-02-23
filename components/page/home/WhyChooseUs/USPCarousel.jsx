"use client";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { usps } from "@/lib/data";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const DURATION = 3000;
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  AnimatePresence,
} from "motion/react";
import useMediaQuery from "@/hooks/useMediaQuery";
import OpImage from "@/components/OpImage";

export default function USPCarousel({
  translations,
  children,
  className,
  ...props
}) {
  const [active, setActive] = useState(0);

  const { isMD } = useMediaQuery();

  return (
    <div className="w-full flex flex-col md:flex-row gap-5">
      {isMD
        ? usps.map((usp, i) => (
            <motion.div
              layout
              key={`usp-md-${i}`}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden shadow-lg h-[375px]"
              )}
              animate={{
                width: active === i ? "60%" : "20%",
                transition: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              // transition={{ duration: 0.3, ease: "easeInOut" }}
              onHoverStart={() => setActive(i)}
              onTapStart={() => setActive(i)}
              // onHoverEnd={() => setActive(i)}
            >
              <usp.icon className="size-10 stroke-[2] text-white rounded-md z-[1]" />
              <div
                className="absolute top-0 left-0 w-full h-full backd"
                style={{
                  background: `url(${usp.bg})`,
                }}
              >
                <OpImage
                  src={usp.bg}
                  alt={usp.label}
                  className="h-full w-full object-center border-none"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-900 from-5% to-transparent"></div>
              </div>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.42 } }}
                    exit={{ opacity: 0 }}
                    className="space-y-2 z-[1]"
                  >
                    <h3 className="font-semibold text-white font-serif text-5xl">
                      {translations[usp.key].label}
                    </h3>
                    <p className="font-light text-zinc-300 text-lg">
                      {translations[usp.key].description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        : usps.map((usp, i) => (
            <motion.div
              layout
              key={`usp-${i}`}
              className={cn(
                "relative rounded-2xl p-5 md:p-8 flex flex-col justify-between overflow-hidden shadow-lg w-full"
              )}
              animate={{
                height: active === i ? "50vh" : "10vh",
                transition: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              // transition={{ duration: 0.3, ease: "easeInOut" }}
              onHoverStart={() => setActive(i)}
              // onTapStart={() => setActive(i)}
              onClick={() => setActive(i)}
              // onHoverEnd={() => setActive(i)}
            >
              <usp.icon className="size-10 stroke-[2] text-white rounded-md z-[1]" />
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background: `url(${usp.bg})`,
                }}
              >
                {/* <Image
                  src={usp.bg}
                  alt={usp.label}
                  placeholder="blur"
                  quality={100}
                  fill
                  sizes="100vw"
                  className="object-cover object-center border-none"
                /> */}
                <OpImage
                  src={usp.bg}
                  alt={usp.label}
                  className="h-full w-full object-center border-none"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-900 from-5% to-transparent"></div>
              </div>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.42 } }}
                    exit={{ opacity: 0 }}
                    className="space-y-2 z-[1]"
                  >
                    <h3 className="font-semibold text-white font-serif text-4xl md:text-5xl">
                      {translations[usp.key].label}
                    </h3>
                    <p className="font-normal text-zinc-300 text-lg">
                      {translations[usp.key].description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
    </div>
  );
}
