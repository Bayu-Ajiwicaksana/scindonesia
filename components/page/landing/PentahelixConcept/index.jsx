import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { pentahelixItems } from "@/lib/data";
import OpImage from "@/components/OpImage";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Goal } from "lucide-react";

export default function PentahelixConcept({ children, className, ...props }) {
  return (
    <Section className={cn("px-0", className)} {...props}>
      <Container className={"px-0"}>
        <div className="">
          <h2 className="text-5xl font-semibold font-serif">
            Konsep Pentahelix
          </h2>
          <div className="grid grid-cols-2">
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
      className={cn(
        "group min-h-[70vh] bg-secondary flex flex-col items-center gap-32 p-6 relative",
        index === 0 && "col-span-full"
      )}
    >
      <OpImage
        src={penta.img}
        alt={penta.title}
        className="absolute inset-0 w-full h-full object-cover object-center grayscale brightness-50 group-hover:grayscale-0 transition-all group-hover:brightness-[.45] group-hover:blur-[2px]"
      />
      <div className="relative text-center">
        <h3 className="text-3xl font-semibold font-serif text-white">
          {penta.title}
        </h3>
        <small className="italic text-base text-zinc-300">
          {penta.subtitle}
        </small>
      </div>
      <div className="relative space-y-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-lg text-zinc-300">{penta.description}</p>
        <div className="grid grid-cols-2 gap-3">
          {penta.roles.map((role, i) => (
            <Alert
              key={`penta-${index}-role-${i}`}
              className="[&>svg]:text-green-700"
            >
              <Goal className="h-4 w-4" />
              {/* <AlertTitle>Heads up!</AlertTitle> */}
              <AlertTitle>{penta.description}</AlertTitle>
            </Alert>
          ))}
        </div>
      </div>
    </div>
  );
}
