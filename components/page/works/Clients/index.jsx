import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import ClientList from "./ClientList";
import { clients } from "@/lib/data";

export default function Clients({ children, className, ...props }) {
  return (
    <Section className={cn("", className)} {...props} id="clients_section">
      <Container className={"py-16"}>
        <div className="flex flex-col items-center gap-10 border border-border/45 rounded-3xl py-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-muted-foreground text-3xl font-serif">
              Companies we have helped
            </h2>
            <p className="text-zinc-700 text-xl font-medium w-2/3">
              See how we help companies create sustainable positive change
              through strategic CSR programs.
            </p>
          </div>
          {/* <BlurText
                delay={60}
                as={"h2"}
                text="Companies we have helped"
                className="text-muted-foreground text-3xl font-serif"
              /> */}
          <ClientList clients={clients} />
        </div>
      </Container>
    </Section>
  );
}
