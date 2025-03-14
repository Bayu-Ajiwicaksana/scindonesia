"use client";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import Pentahelix from "./Pentahelix";
import { useRef, useState } from "react";
import PentaContent from "./PentaContent";
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { pentahelixItems } from "@/lib/data";

export default function WhatWeDo({ children, className, ...props }) {
  const targetScroll = useRef([]);
  const [currPenta, setCurrPenta] = useState(0);
  const rotation = useMotionValue(-(currPenta * 72));

  return (
    <Section
      className={cn("", className)}
      // style={{
      //   height: `${
      //     targetView.current.offsetHeight * (pentahelixItems.length - 1)
      //   }px`,
      // }}
      {...props}
    >
      <Container
        className={
          "p-10 bg-white rounded-2xl flex flex-col justify-between gap-8"
        }
      >
        <div className="flex flex-col xl:flex-row justify-between gap-5">
          <h2 className="text-4xl font-semibold font-serif basis-full xl:basis-1/5">
            Konsep Pentahelix
          </h2>
          <p className="xl:text-right basis-full xl:basis-3/5 text-lg text-zinc-500">
            Konsep Pentahelix adalah pendekatan kolaboratif dalam menciptakan
            impact yang melibatkan lima elemen utama dalam ekosistem
            pembangunan. Pendekatan ini menekankan bahwa perubahan yang
            berkelanjutan hanya dapat terjadi jika berbagai pemangku kepentingan
            bekerja sama dalam sinergi yang kuat.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full h-full relative">
          <Pentahelix
            rotation={rotation}
            penta={currPenta}
            onPentaClick={setCurrPenta}
          />
          <div className="flex flex-col xl:h-[450vh] justify-between gap-20">
            <PentaContent onPentaChange={setCurrPenta} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
