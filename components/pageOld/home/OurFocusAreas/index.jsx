import ContactUsBtn from "@/components/button/ContactUsBtn";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import OpImage from "@/components/OpImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { focusAreas } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function OurFocusAreas({ children, className, ...props }) {
  return (
    <Section className={cn("", className)} {...props}>
      <Container className={"space-y-8"}>
        <Badge
          variant={"outline"}
          className={
            "text-primary-accent-darker/45 border-primary-accent-darker/45 text-sm md:text-base py-2 px-6"
          }
        >
          What We Offered
        </Badge>
        <div className="space-y-2">
          <h2 className="font-serif text-4xl font-semibold text-center">
            Our Focus Areas
          </h2>
          <p className="text-lg mx-auto text-center">
            We specialize in 5 key areas to drive sustainable impact
          </p>
          <div className="flex flex-col gap-y-10 !mt-10 !mb-10 md:flex-row md:flex-wrap md:*:basis-1/2 xl:*:basis-1/3 md:justify-center">
            {focusAreas.map((area, index) => (
              <div
                className="flex flex-col w-full items-center gap-y-3 text-center"
                key={`programs-${area.key}`}
              >
                <OpImage
                  src={area.icon}
                  alt={area.title}
                  className="w-3/4 md:w-auto md:h-[200px] mx-auto"
                />
                {/* <div className="contents md:block xl:contents md:space-y-3 xl:space-y-0 md:basis-3/5 xl:basis-full"> */}
                <h3 className="text-2xl font-semibold text-primary font-serif">
                  {area.title}
                </h3>
                <p className="w-full xl:w-4/5 md:text-lg">{area.subtitle}</p>
                {/* <p className="w-full xl:w-4/5 md:text-lg">
                    {area.description}
                  </p> */}
                {/* <div className=" flex flex-col rounded-2xl bg-secondary py-2.5 px-4 gap-3">
                    {area.SDGs.map((sdg, index) => (
                      <Button
                        variant="link"
                        className="h-fit w-fit p-0 text-wrap items-center text-start text-xs [&_svg]:size-3"
                        key={`programs-${area.key}-sdgs-${index}`}
                        asChild
                      >
                        <Link href={sdg.href} target="_blank">
                          SDGs {sdg.no} : {sdg.title}
                          <ArrowUpRightFromSquare className="" />
                        </Link>
                      </Button>
                    ))}
                  </div> */}
                {/* </div> */}
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center xl:justify-center gap-3 !mt-14">
            <Button className="bg-primary-accent-darker text-white hover:bg-primary-accent w-full xl:w-fit h-fit text-lg px-8 py-4">
              See Our Programs
            </Button>
            <ContactUsBtn
              variant="outline"
              className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full xl:w-fit h-fit text-lg px-8 py-4 "
            >
              Schedule a Consultation
            </ContactUsBtn>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// {
//   focusAreas.map((focus, index) => (
//     <Card
//       className={cn(
//         "sticky",
//         (index + 1) % 2 === 0 ? "bg-primary text-primary-foreground" : ""
//       )}
//       key={`focus-area-${focus.key}`}
//       style={{
//         bottom: "20px",
//         zIndex: focusAreas.length - index,
//       }}
//     >
//       <DynamicIcon
//         iconName={focus.icon}
//         className="absolute size-6 top-4 right-4 stroke-[1.5]"
//       />
//       <CardHeader className="p-4">
//         <CardTitle>{focus.title}</CardTitle>
//         <CardDescription
//           className={(index + 1) % 2 === 0 ? "text-zinc-400" : ""}
//         >
//           {focus.subtitle}
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="p-4 pt-8">
//         <p>{focus.description}</p>
//       </CardContent>
//     </Card>
//   ));
// }
