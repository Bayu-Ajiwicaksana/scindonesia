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
import { clients } from "@/lib/data";
import Image from "next/image";

export default function ClientsCarousel({ children, className, ...props }) {
  return (
    <Carousel
      plugins={[AutoScroll({ speed: 1, playOnInit: true })]}
      opts={{ loop: true }}
      className="w-full"
    >
      <div className="absolute top-0 left-0 w-full h-full flex z-[1]">
        <div className="h-full w-1/3 bg-gradient-to-r from-background-aziz to-transparent"></div>
        <div className="h-full w-1/3"></div>
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent to-background-aziz"></div>
      </div>
      <CarouselContent className="">
        {clients.map((c, i) => (
          <CarouselItem key={c.key} className=" basis-1/3">
            <div className="relative h-[65px]">
              <Image
                src={c.logo}
                alt={c.name}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                style={{
                  objectFit: "contain", // cover, contain, none
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
