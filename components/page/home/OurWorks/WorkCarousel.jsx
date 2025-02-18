"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import ContactUsBtn from "@/components/button/ContactUsBtn";
import LinkBtn from "@/components/button/LinkBtn";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Sparkles } from "lucide-react";

export default function WorkCarousel({ works, children, className, ...props }) {
  const targetScroll = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetScroll,
    offset: ["start 80px", "end end"],
  });

  const scroll_x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "0%",
      // `-${
      //   (works.length / (works.length + 1)) * 100 -
      //   (0.5 / (works.length + 1)) * 100
      // }%`,
      "-50%",
    ]
  );
  const x = useSpring(scroll_x, {
    stiffness: 200,
    damping: 45,
    restDelta: 0.001,
  });

  return (
    <div className="h-[600vh]" ref={targetScroll}>
      <div className="h-[85vh] overflow-hidden sticky top-[80px] flex justify-start items-center">
        <motion.div
          className="flex items-center gap-10"
          // className="grid grid-rows-[1fr]"
          // style={{ x, gridTemplateColumns: `repeat(${works.length + 1}, 1fr)` }}
          style={{ x }}
        >
          {works.map((w, i) => (
            <div
              key={`works-${i}`}
              className={cn(
                "h-[85vh] aspect-square rounded-2xl flex flex-col gap-3 items-center relative overflow-hidden p-4 border-none",
                i === 0 ? "ml-28" : ""
              )}
            >
              <div className="absolute inset-0 -z-10 brightness-50">
                <Image
                  src={w.programs.thumbnail}
                  alt={w.title}
                  sizes="(min-width:640px) 50vw, 100vw"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={cn(
                  "aspect-[16/4] w-[150px] relative rounded-xl bg-zinc-100"
                )}
              >
                <Image
                  src={w.clients.logo}
                  alt={w.clients.name}
                  fill
                  sizes="(min-width:640px) 50vw, 100vw"
                  className="object-contain px-1 py-2"
                />
              </div>
              <div>
                <h3 className="text-background font-serif text-4xl text-center">
                  {w.title}
                </h3>
              </div>
              <div
                className={cn(
                  // "absolute bottom-4 left-4 w-2/3 bg-transparent"
                  "absolute bottom-0 left-0 w-2/3 bg-background rounded-tr-3xl pr-3 pt-3",
                  "before:content-[''] before:absolute before:size-6 before:-top-6 before:left-0 before:bg-transparent before:rounded-bl-3xl before:shadow-[-5px_5px_0px_5px_background]",
                  "after:content-[''] after:absolute after:size-6 after:-right-6 after:bottom-0 after:bg-transparent after:rounded-bl-3xl after:shadow-[-5px_5px_0px_5px_background]"
                )}
              >
                <ProjectBeneficiaries impacts={w.impact} />
              </div>
            </div>
          ))}
          <div className="h-[85vh] aspect-square border-dashed border-4 rounded-2xl flex flex-col justify-center items-center gap-3">
            <LinkBtn href="/our-works" variant="outline">
              More of our works
            </LinkBtn>
            <span className="text-sm text-muted-foreground">or</span>
            <ContactUsBtn>Start Your Program with Us</ContactUsBtn>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectBeneficiaries({ impacts, className, ...props }) {
  return (
    <Alert className={cn("bg-secondary", className)} {...props}>
      <Sparkles className="h-4 w-4" />
      <AlertTitle className="mb-3">Beneficiaries</AlertTitle>
      <AlertDescription>
        <ul className="list-disc list-outside space-y-2">
          {impacts.map((impact, index) => (
            <li key={impact} className="text-xs">
              {impact}
            </li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
}
