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
          "text-primary-light/45 border-primary-light/45 text-sm py-2 px-6 mb-4"
        }
      >
        What We Do
      </Badge>
      <Container className={"p-5 bg-white rounded-2xl space-y-10"}>
        <h2 className="font-serif text-4xl font-semibold">
          Strategic CSR,
          <br />
          Tailored for Your Company
        </h2>
        <div className="space-y-2">
          <p className="text-lg">We help you design CSR programs that:</p>
          <Alert className="bg-white border-none [&>svg~*]:pl-3 [&>svg+div]:translate-y-[0px] [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-5 [&>svg]:text-primary-light">
            <Globe className="size-5 text-primary-light" />
            <AlertTitle className="text-lg text-primary-accent-darker">
              Align with global best practices
            </AlertTitle>
            <AlertDescription>
              We follow proven CSR models used by leading companies worldwide.
            </AlertDescription>
          </Alert>
          <Alert className="bg-white border-none [&>svg~*]:pl-3 [&>svg+div]:translate-y-[0px] [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-5 [&>svg]:text-primary-light">
            <PencilRuler className="size-5 text-primary-light" />
            <AlertTitle className="text-lg text-primary-accent-darker">
              Deliver measurable impact
            </AlertTitle>
            <AlertDescription>
              Every program is backed by clear impact metrics and evaluations.
            </AlertDescription>
          </Alert>
          <Alert className="bg-white border-none [&>svg~*]:pl-3 [&>svg+div]:translate-y-[0px] [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-5 [&>svg]:text-primary-light">
            <HandHeart className="size-5 text-primary-light" />
            <AlertTitle className="text-lg text-primary-accent-darker">
              Empower local communities
            </AlertTitle>
            <AlertDescription>
              We work closely with communities to ensure they benefit in a
              sustainable way.
            </AlertDescription>
          </Alert>
        </div>
        <Button className="border border-primary w-full h-fit text-lg px-6 py-3 hover:bg-white hover:text-primary">
          Explore Our Works
        </Button>
      </Container>
    </Section>
  );
}
