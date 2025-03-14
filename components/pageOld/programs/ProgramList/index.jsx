import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/utils";
// import { programs } from "@/lib/data";
import ProgramBgContainer from "./ProgramBgContainer";
// import { useTranslations } from "next-intl";
import { getAllPrograms } from "@/lib/actions/programs/get";
import { getLocale, getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { focusAreas } from "@/lib/data";

export default async function ProgramList({ children, className, ...props }) {
  const programs = await getAllPrograms();
  const t = await getTranslations("page.programs");
  const locale = await getLocale();
  return (
    <Section className={cn("px-0", className)} {...props} id="program_list">
      {/* <Image src={} /> */}
      <Badge
        variant={"outline"}
        className={
          "ml-2 order-first text-primary-accent-darker/45 border-primary-accent-darker/45 text-sm md:text-base py-2 px-6"
        }
      >
        Our Programs
      </Badge>
      <Container className={"pt-0 pb-8 px-0"}>
        <div className="relative">
          <h1 className="px-2 text-4xl text-center my-6 font-serif font-semibold">
            Our Five Key Focus Areas
            {/* {t("list")} */}
          </h1>
          <p className="px-2 mb-16 text-lg md:text-xl text-center md:w-2/3 mx-auto">
            <span className="font-semibold italic">
              CSR With Real Impact, Not Just Good Intentions
            </span>{" "}
            - We specialize in five essential areas where companies can create
            real change. Each program is designed to be scalable, impactful, and
            aligned with your corporate vision.
          </p>
          {programs.map((program, i) => {
            // console.log(
            //   focusAreas
            //     .filter((area, index) => area.key === program.slug)
            //     .map((area) => area)
            // );
            return (
              <ProgramBgContainer
                locale={locale}
                program={program}
                focusArea={focusAreas
                  .filter((area, index) => area.key === program.slug)
                  .map((area) => area)
                  .at(0)}
                index={i}
                key={`programs-list-${i}`}
              />
            );
          })}
        </div>

        {/* <div className="flex flex-col items-center gap-y-16 bg-background rounded-3xl p-8">
          <div className="flex justify-between items-start">
            <h2 className="text-muted-foreground text-lg">Why Choose Us?</h2>
            <p className="w-[75%] text-2xl text-right text-pretty font-semibold font-serif">
              We believe that an effective CSR program requires a strategic and
              planned approach. Sirkular Center Indonesia offers services to
              assist your company in creating a relevant, measurable, and
              impactful CSR program.
            </p>
          </div>
        </div> */}
      </Container>
    </Section>
  );
}
