import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DynamicIcon from "@/components/DynamicIcon";

const usps = [
  {
    key: "planning",
    title: "Social Mapping",
    subtitle: "Identifying real needs",
    description:
      "We conduct in-depth research to understand community challenges before launching any initiative.",
    icon: "Radar",
  },
  {
    key: "implementing",
    title: "Implementation Support",
    subtitle: "Bringing CSR initiatives to life",
    description:
      "We guide companies through planning, execution, and engagement with local communities.",
    icon: "LandPlot",
  },
  {
    key: "closing",
    title: "Impact Measurement",
    subtitle: "Ensuring lasting change",
    description:
      "We track results using data-driven tools to measure success and optimize future programs.",
    icon: "PencilRuler",
  },
  {
    key: "evaluating",
    title: "Continuous Improvement",
    subtitle: "Refining for better results",
    description:
      "We conduct regular evaluations to ensure long-term success and make necessary improvements.",
    icon: "SearchCheck",
  },
];

export default function WhatWeDo({ children, className, ...props }) {
  return (
    <Section className={cn("", className)} {...props}>
      <Badge
        variant={"outline"}
        className={
          "text-primary-light/45 border-primary-light/45 text-sm py-2 px-6 mb-4"
        }
      >
        Why Choose Us
      </Badge>
      <Container className={"p-5 bg-primary rounded-2xl space-y-10"}>
        <h2 className="font-serif text-4xl font-semibold text-primary-foreground">
          We bring a structured,
          <br />
          results-driven approach to CSR
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {usps.map((usp, index) => (
            <UspItem usp={usp} index={index} key={`usp-${usp.key}`} />
          ))}
        </div>
        <Button className="w-full h-fit text-lg px-6 py-3 border border-background bg-background text-primary hover:bg-transparent hover:border-primary-foreground hover:text-primary-foreground">
          Partner With Us
        </Button>
      </Container>
    </Section>
  );
}

function UspItem({ usp, index }) {
  return (
    // <Card>
    //   <CardHeader>
    //     <CardTitle className="text-primary-accent">{usp.title}</CardTitle>
    //     <CardDescription className="text-primary-accent/65">
    //       {usp.subtitle}
    //     </CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <p>Card Content</p>
    //   </CardContent>
    //   <CardFooter>
    //     <p>Card Footer</p>
    //   </CardFooter>
    // </Card>
    <div className="py-6 flex flex-col items-center text-primary-foreground gap-3 relative">
      <DynamicIcon
        iconName={usp.icon}
        className="opacity-5 size-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[.65] text-primary-foreground"
      />
      <span className="size-8 px-6 py-1 rounded-full border border-secondary text-secondary flex justify-center items-center">
        0{index + 1}
      </span>
      <div className="text-center space-y-0">
        <h3 className="font-serif text-2xl font-semibold text-primary-accent">
          {usp.title}
        </h3>
        <span className="text-zinc-400 block text-sm italic">
          {usp.subtitle}
        </span>
      </div>
      <p className="text-center">{usp.description}</p>
    </div>
  );
}
