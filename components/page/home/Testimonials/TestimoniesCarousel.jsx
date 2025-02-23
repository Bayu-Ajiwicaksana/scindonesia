"use client";

import { cn } from "@/lib/utils";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonies } from "@/lib/data";
import Image from "next/image";
import TestimonyCard from "./TestimonyCard";

export default function TestimoniesCarousel({ children, className, ...props }) {
  return (
    <Carousel
      plugins={[
        AutoScroll({
          speed: 1,
          playOnInit: true,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
          startDelay: 0,
        }),
      ]}
      opts={{ loop: true }}
      className="w-full"
    >
      {/* <div className="absolute top-0 left-0 w-full h-full flex z-[1]">
        <div className="h-full w-1/3 bg-gradient-to-r from-background-aziz to-transparent"></div>
        <div className="h-full w-1/3"></div>
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent to-background-aziz"></div>
      </div> */}
      <CarouselContent className="">
        {testimonies.map((t, i) => (
          <CarouselItem
            key={t.key}
            className="basis-full md:basis-1/2 lg:basis-1/3"
          >
            <TestimonyCard testimony={t} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
