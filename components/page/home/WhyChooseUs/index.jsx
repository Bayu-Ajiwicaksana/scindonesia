import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import USPCarousel from "./USPCarousel";

export default function WhyChooseUs({ children, className, ...props }) {
  return (
    <Section className={cn("", className)} {...props}>
      <Container className={"pt-0 pb-8"}>
        <div className="flex flex-col items-center gap-y-16 bg-background rounded-3xl p-8">
          <div className="flex justify-between items-start">
            <h2 className="text-muted-foreground text-lg">Why Choose Us?</h2>
            <p className="w-[75%] text-2xl text-right text-pretty font-semibold font-serif">
              We believe that an effective CSR program requires a strategic and
              planned approach. Sirkular Center Indonesia offers services to
              assist your company in creating a relevant, measurable, and
              impactful CSR program.
            </p>
          </div>
          <USPCarousel />
          {/* <USPExpander /> */}
        </div>
      </Container>
    </Section>
  );
}
