import ProgramList from "@/components/page/programs/ProgramList";
import ProgramsHero from "@/components/page/programs/ProgramsHero";
import Subheading from "@/components/page/programs/Subheading";
import { useTranslations } from "next-intl";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function OurSocialPrograms() {
  const tSub = useTranslations("page.programs");
  return (
    <>
      <ProgramsHero />
      <Subheading translation={tSub("subheading")} />
      <ProgramList />
      {/* <WhyChooseUs /> */}
      {/* <Programs /> */}
      {/* <OurWorks /> */}
      {/* <Testimonials /> */}
    </>
  );
}
