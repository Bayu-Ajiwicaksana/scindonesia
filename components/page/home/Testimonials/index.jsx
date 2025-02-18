import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import TestimoniesCarousel from "./TestimoniesCarousel";

export default function Testimonials({ children, className, ...props }) {
  return (
    <Section className={cn("", className)} {...props}>
      <Container className={"py-8"}>
        <div className="flex flex-col gap-16 items-center border border-border/45 rounded-3xl p-8">
          <div className="text-center space-y-[6px]">
            <h2 className="text-muted-foreground text-lg">From Our Clients</h2>
            <p className="text-2xl font-semibold font-serif">
              Here&apos;s what our clients had to say about working with Us
            </p>
          </div>
          <TestimoniesCarousel />
          {/* <motion.div
            ref={container}
            className="flex flex-col justify-between w-full gap-96 h-[1000vh]"
          >
            {programs.map((p, i) => {
              const targetScale = 1 - (programs.length - i) * 0.15;
              return (
                <ProgramItem
                  programsLength={programs.length}
                  program={p}
                  index={i}
                  key={p.key}
                  scrollProgress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </motion.div> */}
        </div>
      </Container>
    </Section>
  );
}
