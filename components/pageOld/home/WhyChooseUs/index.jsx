import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import OpImage from "@/components/OpImage";
import { Separator } from "@/components/ui/separator";

const usps = [
  {
    key: "planning",
    title: "Social Mapping",
    subtitle: "Identifying real needs",
    description:
      "We conduct in-depth research to understand community challenges before launching any initiative.",
    icon: "Radar",
    img: "/img/contents/social-mapping-2",
  },
  {
    key: "implementing",
    title: "Implementation Support",
    subtitle: "Bringing CSR initiatives to life",
    description:
      "We guide companies through planning, execution, and engagement with local communities.",
    icon: "LandPlot",
    img: "/img/contents/implementation-support-4",
  },
  {
    key: "closing",
    title: "Impact Measurement",
    subtitle: "Ensuring lasting change",
    description:
      "We track results using data-driven tools to measure success and optimize future programs.",
    icon: "PencilRuler",
    img: "/img/contents/continuous-improvement",
  },
  {
    key: "evaluating",
    title: "Continuous Improvement",
    subtitle: "Refining for better results",
    description:
      "We conduct regular evaluations to ensure long-term success and make necessary improvements.",
    icon: "SearchCheck",
    img: "/img/contents/impact-measurement-2",
  },
];

export default function WhatWeDo({ children, className, ...props }) {
  return (
    <Section className={cn("", className)} {...props}>
      <Container className={"space-y-10"}>
        <div className="bg-primary rounded-2xl px-4 py-6">
          <Badge
            variant={"outline"}
            className={
              "text-primary-foreground/45 border-primary-foreground/45 text-sm md:text-base py-2 px-6 mb-4"
            }
          >
            Why Choose Us
          </Badge>
          <h2 className="font-serif text-4xl font-semibold text-primary-foreground">
            We bring a structured,
            <br />
            results-driven approach to CSR
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-4 xl:flex xl:flex-col xl:gap-8">
          {usps.map((usp, index) => (
            <UspItem usp={usp} index={index} key={`usp-${usp.key}`} />
          ))}
        </div>
        {/* <ContactUsBtn className="flex w-full md:w-fit md:mx-auto h-fit text-lg px-6 py-3 border border-primary">
          Partner With Us
        </ContactUsBtn> */}
      </Container>
    </Section>
  );
}

function UspItem({ usp, index }) {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-4">
        <Badge
          className={
            "w-fit h-fit flex flex-col items-center justify-center bg-transparent border border-primary text-primary xl:mt-1"
          }
        >
          0{index + 1}
        </Badge>
        <div className="xl:basis-7/12">
          <h2 className="text-2xl font-semibold text-primary-accent-darker">
            {usp.title}
          </h2>
          <p className="text-zinc-800 xl:w-2/3">{usp.description}</p>
        </div>
        <div className="xl:basis-5/12">
          <OpImage
            src={usp.img}
            alt={usp.title}
            className="w-full aspect-video xl:aspect-[16/7] object-center rounded-2xl shadow-lg"
          />
        </div>
      </div>
      <Separator className="hidden xl:block" />
    </>
  );
}
