import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import WorkCarousel from "./WorkCarousel";
import { getWorksShowcase } from "@/lib/actions/works/get";
// import { useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

export default async function OurWorks({ children, className, ...props }) {
  const works = await getWorksShowcase();
  const t = await getTranslations("page.home");
  const tWorks = t.raw("works");
  const locale = await getLocale();
  return (
    <Section className={cn("bg-background px-3", className)} {...props}>
      <Container
        className={
          "bg-background rounded-3xl px-0 py-16 flex flex-col gap-y-16"
        }
      >
        <div className="text-center space-y-[6px]">
          <h2 className="text-muted-foreground text-lg">
            {/* Our Top Works */}
            {tWorks.heading}
          </h2>
          <p className="text-2xl font-semibold font-serif">
            {/* CSR Solutions Trail that Provides Real Impact */}
            {tWorks.subheading}
          </p>
        </div>
        <WorkCarousel locale={locale} works={works} translations={tWorks} />
      </Container>
    </Section>
  );
}
