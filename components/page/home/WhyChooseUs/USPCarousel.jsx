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

export default function USPCarousel({ children, className, ...props }) {
  const currentItem = useMotionValue(0);

  const [active, setActive] = useState(0);
  // const [cMainApi, setCMainApi] = useState();
  // const [cThumbApi, setCThumbApi] = useState();
  // const [isPlaying, setIsPlaying] = useState(true);
  // const [slide, setSlide] = useState(0);

  // useMotionValueEvent(timeToNext, "change", (latest) => {
  //   console.log("x changed to", latest);
  // });

  // const scrollThumb = useCallback(
  //   (cMainApi) => {
  //     if (!cThumbApi) return;
  //     cThumbApi.scrollTo(cMainApi.selectedScrollSnap() + 1);
  //   },
  //   [cThumbApi]
  // );

  // const timerBar = useTransform(timeToNext, [DURATION, 0], [0, 1]);

  // const onSelect = useCallback(() => {
  //   if (!cMainApi || !cThumbApi) return;
  //   setSelectedIndex(cMainApi.selectedScrollSnap());
  //   cThumbApi.scrollTo(cMainApi.selectedScrollSnap() + 1);
  // }, [cMainApi, cThumbApi, setSelectedIndex]);

  // useEffect(() => {
  //   if (!cMainApi || !cThumbApi) {
  //     return;
  //   }

  //   cMainApi.on("scroll", scrollThumb);
  //   cMainApi.on("autoplay:stop", () => setIsPlaying(false));
  //   cMainApi.on("autoplay:play", () => setIsPlaying(true));
  //   cMainApi.on("slidesInView", () => setSlide(cMainApi.slidesInView()));
  // }, [cMainApi, cThumbApi]);

  return (
    <div className="w-full flex flex-row gap-5">
      {usps.map((usp, i) => (
        <motion.div
          layout
          key={`usp-${i}`}
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
          // onHoverEnd={() => setActive(i)}
        >
          <usp.icon className="size-10 stroke-[2] text-white rounded-md z-[1]" />
          <div
            className="absolute top-0 left-0 w-full h-full backd"
            style={{
              background: `url(${usp.bg})`,
            }}
          >
            <Image
              src={usp.bg}
              alt={usp.label}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              className="object-cover object-center border-none"
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
                  {usp.label}
                </h3>
                <p className="font-light text-zinc-300 text-lg">
                  {usp.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      {/* <Carousel
        setApi={setCMainApi}
        opts={{ loop: true, align: "start", watchDrag: false }}
        plugins={[
          Autoplay({
            delay: DURATION,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        className="w-[66%] rounded-2xl h-[400px] relative"
      >
        <CarouselContent>
          {usps.map((usp, i) => (
            <CarouselItem key={usp.key}>
              <div
                className={cn(
                  "relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden shadow-lg h-[375px]"
                )}
              >
                <usp.icon className="size-10 stroke-[2] text-white rounded-md z-[1]" />

                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background: `url(${usp.bg})`,
                  }}
                >
                  <Image
                    src={usp.bg}
                    alt={usp.label}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    className="object-cover object-center border-none"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-900 from-5% to-transparent"></div>
                </div>
                <div className="space-y-2 z-[1]">
                  <h3 className="font-semibold text-white font-serif text-5xl">
                    {usp.label}
                  </h3>
                  <p className="font-light text-zinc-300 text-lg">
                    {usp.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-0 left-0 h-[6px] rounded-full w-full bg-secondary">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: 0 }}
            animate={{
              width: isPlaying ? "100%" : 0,
              transition: isPlaying
                ? {
                    duration: DURATION / 1000,
                    repeat: Infinity,
                    delay: 0.35,
                  }
                : {},
            }}
          ></motion.div>
        </div>
      </Carousel> */}
      {/* <Carousel
        setApi={setCThumbApi}
        opts={{ loop: true, align: "start", startIndex: 1, watchDrag: false }}
        className="w-[34%] rounded-2xl"
      >
        <CarouselContent className="-ml-5 rounded-2xl">
          {usps.map((usp, i) => (
            <CarouselItem key={usp.key} className="basis-1/2 pl-5">
              <div
                className={cn(
                  "relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden shadow-lg h-[400px]"
                )}
              >
                <usp.icon className="size-10 stroke-[2] text-white rounded-md z-[1]" />
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background: `url(${usp.bg})`,
                  }}
                >
                  <Image
                    src={usp.bg}
                    alt={usp.label}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    className="object-cover object-center border-none"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-900 from-5% to-transparent"></div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> */}
    </div>
  );
}
