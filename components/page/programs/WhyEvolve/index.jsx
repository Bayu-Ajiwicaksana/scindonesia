import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";

const evolvesKey = [
  {
    key: "strategic-social-mapping",
    title: "Strategic Social Mapping",
    description: "Identifying real issues before taking action.",
  },
  {
    key: "sustainable-solutions",
    title: "Sustainable Solutions",
    description: "Programs that continue to benefit communities long-term.",
  },
  {
    key: "data-driven-impact",
    title: "Data-Driven Impact",
    description: "Every initiative is tracked, measured, and improved.",
  },
];

export default function WhyEvolve({ children, className, ...props }) {
  return (
    <Section className={cn("", className)} {...props}>
      <Badge
        variant={"outline"}
        className={
          "text-primary-light/45 border-primary-light/45 text-sm md:text-base py-2 px-6 mb-4"
        }
      >
        Why CSR Needs to Evolve
      </Badge>
      <Container
        className={
          "p-5 bg-white rounded-2xl flex flex-col gap-y-10 justify-start items-center text-center"
        }
      >
        <h2 className="font-serif text-start md:text-center text-4xl font-semibold">
          Beyond Donations -
          <br />
          Creating Sustainable Impact
        </h2>
        <p className="text-lg xl:text-xl md:w-2/5">
          Many CSR programs fail to leave a lasting mark because they focus on
          short-term solutions. We take a different approach:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 mt-8">
          {evolvesKey.map((key, index) => (
            <div
              className="flex flex-col flex-rowjustify-start items-center gap-2 text-center p-4"
              key={`evolves-${key.key}`}
            >
              <div className="size-fit">
                <BadgeCheck className="size-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-primary">
                {key.title}
              </h3>
              <p className="text-lg">{key.description}</p>
            </div>
          ))}
        </div>
        {/* <Button className="basis-full border border-primary w-fit h-fit text-lg px-6 py-3 hover:bg-white hover:text-primary">
          Explore Our Works
        </Button> */}
      </Container>
    </Section>
  );
}
