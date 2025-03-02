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
      <Container
        className={"grid grid-cols-1 xl:grid-cols-2 xl:grid-flow-row gap-8"}
      >
        <div className="xl:col-span-full">
          <Badge
            variant={"outline"}
            className={
              "order-first text-primary-accent-darker/45 border-primary-accent-darker/45 text-sm md:text-base py-2 px-6"
            }
          >
            Why We Exist
          </Badge>
        </div>
        <div className="contents xl:block xl:order-1 xl:space-y-8">
          <q className="block font-serif text-4xl italic text-foreground/60 order-2">
            CSR is more than just giving back—it&apos;s about making a{" "}
            <strong className="text-primary-light">lasting difference</strong>.
          </q>
          {/* <div className="flex flex-col md:flex-row gap-8 items-center xl:contents"> */}
          <p className="text-lg md:text-xl mx-auto text-center md:text-start order-3">
            Many companies struggle with CSR programs that feel disconnected,
            ineffective, or unsustainable. Without proper planning, funding can
            be wasted, and real community needs may go unmet.
          </p>
          <div className="space-y-5 order-5">
            <p className="text-xl mx-auto text-center xl:text-start">
              <strong>That&apos;s where we come in</strong>.
            </p>
            <div className="flex flex-col md:flex-row xl:flex-col gap-x-8 gap-y-5">
              <div className="flex gap-5 md:gap-3">
                <div className="p-4 bg-primary-light rounded-full w-fit h-fit text-primary-accent">
                  <Recycle className="size-6" />
                </div>
                <p className="text-lg">
                  We ensure your CSR efforts are strategic, measurable, and
                  impactful.
                </p>
              </div>
              <div className="flex gap-5 md:gap-3">
                <div className="p-4 bg-primary-light rounded-full w-fit h-fit text-primary-accent">
                  <HeartHandshake className="size-6" />
                </div>
                <p className="text-lg">
                  We bridge the gap between corporate responsibility and
                  community development.
                </p>
              </div>
            </div>
            <Button className="xl:order-last !mt-20 xl:!mt-8  flex w-full md:w-fit md:mx-auto h-fit text-lg px-6 py-3 bg-primary-accent-darker hover:bg-primary-accent text-white">
              Learn more about us
            </Button>
          </div>
        </div>
        <OpImage
          src={"/img/contents/the-problem-2"}
          alt="The Problem"
          className="h-[250px] w-auto mx-auto xl:h-[90%] order-4 xl:order-2 xl:self-start"
        />
        {/* </div> */}
      </Container>
    </Section>
  );
}
