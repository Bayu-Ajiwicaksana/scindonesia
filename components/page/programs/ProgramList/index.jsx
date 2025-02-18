"use client";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ProgramsBg from "@/public/img/contents/programs-education.webp";
import { programs } from "@/lib/data";
import ParallaxBg from "@/components/animation/ParallaxBg";
import ProgramBgContainer from "./ProgramBgContainer";

export default function ProgramList({ children, className, ...props }) {
  return (
    <Section
      className={cn("px-0 xl:px-0", className)}
      {...props}
      id="program_list"
    >
      {/* <Image src={} /> */}
      <Container className={"pt-0 pb-8"}>
        <div className="relative">
          <h1 className="text-3xl text-center my-24">Programs We Offered</h1>
          {programs.map((program, i) => (
            <ProgramBgContainer
              program={program}
              index={i}
              key={`programs-list-${i}`}
            />
          ))}
        </div>

        {/* <div className="flex flex-col items-center gap-y-16 bg-background rounded-3xl p-8">
          <div className="flex justify-between items-start">
            <h2 className="text-muted-foreground text-lg">Why Choose Us?</h2>
            <p className="w-[75%] text-2xl text-right text-pretty font-semibold font-serif">
              We believe that an effective CSR program requires a strategic and
              planned approach. Sirkular Center Indonesia offers services to
              assist your company in creating a relevant, measurable, and
              impactful CSR program.
            </p>
          </div>
        </div> */}
      </Container>
    </Section>
  );
}
