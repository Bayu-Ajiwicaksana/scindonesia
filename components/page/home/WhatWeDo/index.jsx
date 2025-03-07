import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { Globe, HandHeart, PencilRuler } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatWeDo({ children, className, ...props }) {
  return (
    <Section className={cn("", className)} {...props}>
      <Badge
        variant={"outline"}
        className={
          "text-primary-light/45 border-primary-light/45 text-sm md:text-base py-2 px-6 mb-4"
        }
      >
        What We Do
      </Badge>
      <Container
        className={
          "p-5 bg-white rounded-2xl flex flex-col gap-y-10 md:flex-row md:flex-wrap md:justify-between"
        }
      >
        <h2 className="font-serif text-4xl font-semibold basis-[40%]">
          Strategic CSR,
          <br />
          Tailored for Your Company
        </h2>
        <div className="space-y-2 basis-[50%]">
          <p className="text-lg">We help you design CSR programs that:</p>
          <div className="flex flex-col gap-y-2">
            <Alert className="bg-white border-none [&>svg~*]:pl-3 md:[&>svg~*]:pl-5 [&>svg+div]:translate-y-[0px] [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-5 [&>svg]:text-primary-light">
              <Globe className="size-5 md:size-6 text-primary-light" />
              <AlertTitle className="text-lg md:text-xl text-primary-accent-darker">
                Align with global best practices
              </AlertTitle>
              <AlertDescription className="md:text-lg">
                We follow proven CSR models used by leading companies worldwide.
              </AlertDescription>
            </Alert>
            <Alert className="bg-white border-none [&>svg~*]:pl-3 md:[&>svg~*]:pl-5 [&>svg+div]:translate-y-[0px] [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-5 [&>svg]:text-primary-light">
              <PencilRuler className="size-5 md:size-6 text-primary-light" />
              <AlertTitle className="text-lg md:text-xl text-primary-accent-darker">
                Deliver measurable impact
              </AlertTitle>
              <AlertDescription className="md:text-lg">
                Every program is backed by clear impact metrics and evaluations.
              </AlertDescription>
            </Alert>
            <Alert className="bg-white border-none [&>svg~*]:pl-3 md:[&>svg~*]:pl-5 [&>svg+div]:translate-y-[0px] [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-5 [&>svg]:text-primary-light">
              <HandHeart className="size-5 md:size-6 text-primary-light" />
              <AlertTitle className="text-lg md:text-xl text-primary-accent-darker">
                Empower local communities
              </AlertTitle>
              <AlertDescription className="text-lg">
                We work closely with communities to ensure they benefit in a
                sustainable way.
              </AlertDescription>
            </Alert>
          </div>
        </div>
        <Button className="basis-full md:basis-1/2 md:ms-auto border border-primary w-full h-fit text-lg px-6 py-3 hover:bg-white hover:text-primary">
          Explore Our Works
        </Button>
      </Container>
    </Section>
  );
}
