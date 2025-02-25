import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import OpImage from "@/components/OpImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeartHandshake, Recycle } from "lucide-react";

export default function TheProblem({ children, className, ...props }) {
  return (
    <Section className={cn("", className)} id="the-problem" {...props}>
      <Container className={"space-y-8"}>
        <Badge
          variant={"outline"}
          className={
            "text-primary-accent-darker/45 border-primary-accent-darker/45 text-sm py-2 px-6"
          }
        >
          Why We Exist
        </Badge>
        <q className="block font-serif text-4xl italic text-foreground/60">
          CSR is more than just giving back—it&apos;s about making a{" "}
          <strong className="text-primary-light">lasting difference</strong>.
        </q>
        <p className="text-lg mx-auto text-center">
          Many companies struggle with CSR programs that feel disconnected,
          ineffective, or unsustainable. Without proper planning, funding can be
          wasted, and real community needs may go unmet.
        </p>
        <OpImage
          src={"/img/contents/the-problem-2.webp"}
          alt="The Problem"
          className="h-[250px] w-auto mx-auto"
        />
        <div className="space-y-5">
          <p className="text-xl mx-auto text-center">
            <strong>That&apos;s where we come in</strong>.
          </p>
          <div className="space-y-5">
            <div className="flex gap-5">
              <div className="p-4 bg-primary-light rounded-full w-fit h-fit text-primary-accent">
                <Recycle className="size-6" />
              </div>
              <p className="text-lg">
                We ensure your CSR efforts are strategic, measurable, and
                impactful.
              </p>
            </div>
            <div className="flex gap-5">
              <div className="p-4 bg-primary-light rounded-full w-fit h-fit text-primary-accent">
                <HeartHandshake className="size-6" />
              </div>
              <p className="text-lg">
                We bridge the gap between corporate responsibility and community
                development.
              </p>
            </div>
          </div>
        </div>
        <Button className="!mt-20 w-full h-fit text-lg px-6 py-3 bg-primary-accent-darker hover:bg-primary-accent text-white">
          Learn more about us
        </Button>
      </Container>
    </Section>
  );
}
