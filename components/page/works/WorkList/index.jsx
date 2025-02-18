import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { getAllWorks } from "@/lib/actions/works/get";
import { cn } from "@/lib/utils";
import WorkItem from "./WorkItem";
import CollabInvite from "./CollabInvite";

export default async function WorkList({ children, className, ...props }) {
  const works = await getAllWorks();
  return (
    <Section className={cn("", className)} {...props} id="work_list">
      <Container className={"pt-0 pb-8"}>
        <div className="flex flex-col items-center gap-y-16 bg-background rounded-3xl p-8">
          <div className="flex justify-between items-start">
            <h2 className="text-muted-foreground text-lg">Our Works</h2>
            <p className="w-[75%] text-2xl text-right text-pretty font-semibold font-serif">
              We believe that an effective CSR program requires a strategic and
              planned approach. Sirkular Center Indonesia offers services to
              assist your company in creating a relevant, measurable, and
              impactful CSR program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
            {works.map((w, i) => (
              <WorkItem data={w} key={`works-${i}`} />
            ))}
            <CollabInvite />
          </div>
        </div>
      </Container>
    </Section>
  );
}
