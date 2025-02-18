"use client";
import ParagraphFade from "@/components/animation/ParagraphFade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useAnimate,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

export default function OurMission({ children, className, ...props }) {
  const targetScroll = useRef(null);
  // const [scope, animate] = useAnimate();
  // const isInView = useInView(scope, { once: false });

  const { scrollYProgress } = useScroll({
    target: targetScroll,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  return (
    <Section
      className={cn("py-8 h-[400vh]", className)}
      ref={targetScroll}
      // style={{ opacity }}
    >
      <Container className={"h-[80vh] p-8 sticky top-[80px]"}>
        <div className="w-full h-full grid grid-cols-2 gap-x-10 gap-y-20 relative">
          <motion.h2
            className="text-4xl font-medium self-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.25 } }}
            viewport={{
              once: false,
            }}
          >
            Our Mission
          </motion.h2>
          <motion.div
            className="bg-background rounded-2xl p-7 flex flex-col justify-center items-center font-serif text-2xl font-semibold text-center"
            style={{ opacity: opacity1 }}
          >
            Assisting the company in designing relevant and sustainable CSR
            programs.
          </motion.div>
          <motion.div
            className="bg-background rounded-2xl p-7 flex flex-col justify-center items-center font-serif text-2xl font-semibold text-center"
            style={{ opacity: opacity2 }}
          >
            Empowering local communities through education, economic, health,
            environmental, and cultural programs.
          </motion.div>
          <motion.div
            className="bg-background rounded-2xl p-7 flex flex-col justify-center items-center font-serif text-2xl font-semibold text-center"
            style={{ opacity: opacity3 }}
          >
            Measuring the impact of each program with transparent tools and
            methods.
          </motion.div>
          <motion.div
            className="bg-background rounded-2xl p-7 flex flex-col justify-center items-center font-serif text-2xl font-semibold text-center"
            style={{ opacity: opacity4 }}
          >
            Increasing awareness of the importance of social responsibility
            among national and global companies.
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
