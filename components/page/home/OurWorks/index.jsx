import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WorkCarousel from "./WorkCarousel";
import { getWorksShowcase } from "@/lib/actions/works/get";

export default async function OurWorks({ children, className, ...props }) {
  const works = await getWorksShowcase();
  return (
    <Section className={cn("bg-background xl:px-0", className)} {...props}>
      <Container
        className={
          "bg-background rounded-3xl px-0 py-16 flex flex-col gap-y-16"
        }
      >
        <div className="text-center space-y-[6px]">
          <h2 className="text-muted-foreground text-lg">Our Top Works</h2>
          <p className="text-2xl font-semibold font-serif">
            CSR Solutions Trail that Provides Real Impact
          </p>
        </div>
        <WorkCarousel works={works} />
      </Container>
    </Section>
  );
}
