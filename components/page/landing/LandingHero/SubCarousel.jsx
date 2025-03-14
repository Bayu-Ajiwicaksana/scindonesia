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

export default function SubCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 6000,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="text-xl text-white">
        <CarouselItem>
          <p>
            Impact bukan sekadar hasil, tetapi sebuah perubahan yang nyata.
            Impact lahir dari kesadaran akan masalah yang ada, strategi yang
            tepat dalam menyelesaikannya, serta komitmen untuk menciptakan
            manfaat berkelanjutan.
          </p>
        </CarouselItem>
        <CarouselItem>
          <p>
            Impact seharusnya tercipta dengan perencanaan yang terukur, berbasis
            data dan riset, agar dampaknya dapat berlangsung dalam jangka
            panjang. Impact bukan hanya tentang memberikan sesuatu, tetapi
            membangun ekosistem yang memungkinkan perubahan positif terus
            berkembang.
          </p>
        </CarouselItem>
        <CarouselItem>
          <p>
            Impact harus dirasakan oleh mereka yang benar-benar
            membutuhkan—masyarakat yang terdampak, lingkungan yang terjaga,
            serta seluruh pemangku kepentingan yang terlibat. Bukan hanya untuk
            memenuhi kewajiban sosial, tetapi untuk menciptakan perubahan yang
            adil, inklusif, dan berkelanjutan.
          </p>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
          <CarouselNext /> */}
    </Carousel>
  );
}
