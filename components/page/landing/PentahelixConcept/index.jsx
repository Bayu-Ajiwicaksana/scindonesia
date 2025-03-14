import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { pentahelixItems } from "@/lib/data";

export default function PentahelixConcept({ children, className, ...props }) {
  return (
    <Section className={cn("px-0", className)} {...props}>
      <Container className={"px-0"}>
        <div className="">
          <h2>Konsep Pentahelix</h2>
          <div className="grid grid-cols-2 gap-2">
            {pentahelixItems.map((penta, i) => (
              <PentaWrapper key={`penta-${i}`} index={i} penta={penta} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PentaWrapper({ penta, index }) {
  return (
    <div
      className={cn("h-[70vh] bg-secondary", index === 0 && "col-span-full")}
    ></div>
  );
}
