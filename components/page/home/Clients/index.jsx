import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import ClientsCarousel from "./ClientsCarousel";
import { useTranslations } from "next-intl";
// import BlurText from "@/components/animation/BlurText";

export default function Clients({ children, className, ...props }) {
  const t = useTranslations("page.home");
  return (
    <Section className={cn("", className)} {...props} id="clients_section">
      <Container className={"py-16"}>
        <div className="flex flex-col items-center gap-10 border border-border/45 rounded-3xl py-8">
          <h2 className="text-muted-foreground text-xl md:text-3xl font-serif">
            {/* Companies we have helped */}
            {t("clients")}
          </h2>
          {/* <BlurText
            delay={60}
            as={"h2"}
            text="Companies we have helped"
            className="text-muted-foreground text-3xl font-serif"
          /> */}
          <ClientsCarousel />
        </div>
      </Container>
    </Section>
  );
}
