import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { getAllWorks } from "@/lib/actions/works/get";
import { cn } from "@/lib/utils";
import WorkItem from "./WorkItem";
import CollabInvite from "./CollabInvite";
import { getLocale, getTranslations } from "next-intl/server";

export default async function WorkList({ children, className, ...props }) {
  const works = await getAllWorks();
  const t = await getTranslations("page.works.list");
  const locale = await getLocale();
  return (
    <Section className={cn("", className)} {...props} id="work_list">
      <Container className={"pt-0 pb-8"}>
        <div className="flex flex-col items-center gap-y-16 bg-background rounded-3xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-y-16 justify-between items-start">
            <h2 className="text-muted-foreground text-lg">
              {/* Our Works */}
              {t("heading")}
            </h2>
            <p className="md:w-[75%] text-2xl md:text-right text-pretty font-semibold font-serif">
              {/* We believe that an effective CSR program requires a strategic and
              planned approach. Sirkular Center Indonesia offers services to
              assist your company in creating a relevant, measurable, and
              impactful CSR program. */}
              {t("subheading")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
            {works.map((w, i) => (
              <WorkItem locale={locale} data={w} key={`works-${i}`} />
            ))}
            <CollabInvite translation={t("add")} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
