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
import OpImage from "@/components/OpImage";

export default function ClientsCarousel({ children, className, ...props }) {
  return (
    <Carousel
      plugins={[AutoScroll({ speed: 1, playOnInit: true })]}
      opts={{ loop: true }}
      className="w-full"
    >
      <div className="absolute top-0 left-0 w-full h-full flex z-[1]">
        <div className="h-full w-1/3 bg-gradient-to-r from-background to-transparent"></div>
        <div className="h-full w-1/3"></div>
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent to-background"></div>
      </div>
      <CarouselContent className="-ml-7 lg:ml-0">
        {clients.map((c, i) => (
          <CarouselItem
            key={c.key}
            className="pl-7 lg:pl-0 basis-1/2 md:basis-1/3"
          >
            <div className="relative h-[45px] md:h-[55px] lg:h-[65px]">
              {/* <Image
                src={c.logo}
                alt={c.name}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                style={{
                  objectFit: "contain", // cover, contain, none
                }}
              /> */}
              <OpImage
                src={c.logo}
                alt={c.name}
                className="object-contain w-full h-full"
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
