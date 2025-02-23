import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import ProgramWrapper from "./ProgramWrapper";
// import { useLocale, useTranslations } from "next-intl";
import { getAllPrograms } from "@/lib/actions/programs/get";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Programs({ children, className, ...props }) {
  const programs = await getAllPrograms();
  const t = await getTranslations("page.home");
  const tPrograms = t.raw("programs");
  const locale = await getLocale();

  return (
    <Section className={cn("", className)} {...props}>
      <Container className={"py-8"}>
        <div className="flex flex-col gap-16 items-center border border-border/45 rounded-3xl p-5 md:p-8">
          <div className="text-center space-y-[6px]">
            <h2 className="text-muted-foreground text-lg">
              {/* Programs We Offered */}
              {tPrograms.heading}
            </h2>
            <p className="text-2xl font-semibold font-serif">
              {/* CSR Solutions That Improve Lives and Make a Positive Impact */}
              {tPrograms.subheading}
            </p>
          </div>
          <ProgramWrapper programs={programs} locale={locale} />
        </div>
      </Container>
    </Section>
  );
}
