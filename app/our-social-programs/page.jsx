import FinalCTA, {
  CTABtn,
  CTAHeading,
  CTASubheading,
} from "@/components/FinalCTA";
import ProgramList from "@/components/page/programs/ProgramList";
import ProgramsHero from "@/components/page/programs/ProgramsHero";
import SocialProof from "@/components/page/programs/SocialProof";
import Subheading from "@/components/page/programs/Subheading";
import WhyEvolve from "@/components/page/programs/WhyEvolve";
import { useTranslations } from "next-intl";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function OurSocialPrograms() {
  const tSub = useTranslations("page.programs");
  return (
    <>
      <ProgramsHero />
      {/* <Subheading translation={tSub("subheading")} /> */}
      <WhyEvolve />
      <ProgramList />
      <SocialProof />
      <FinalCTA>
        <CTAHeading>Let&apos;s Build Something Meaningful</CTAHeading>
        <CTASubheading>
          Your CSR program has the power to transform lives. Let’s make it
          happen—together.
        </CTASubheading>
        <CTABtn className={"w-fit border border-primary"}>
          Contact Us Today
        </CTABtn>
      </FinalCTA>
      {/* <WhyChooseUs /> */}
      {/* <Programs /> */}
      {/* <OurWorks /> */}
      {/* <Testimonials /> */}
    </>
  );
}
