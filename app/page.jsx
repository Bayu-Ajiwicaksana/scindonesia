import FinalCTA, {
  CTABtn,
  CTAHeading,
  CTASubheading,
} from "@/components/FinalCTA";
import Clients from "@/components/page/home/Clients";
import HomeHero from "@/components/page/home/HomeHero";
import OurFocusAreas from "@/components/page/home/OurFocusAreas";
import OurWorks from "@/components/page/home/OurWorks";
import Programs from "@/components/page/home/Programs";
import Testimonials from "@/components/page/home/Testimonials";
import TheProblem from "@/components/page/home/TheProblem";
import WhatWeDo from "@/components/page/home/WhatWeDo";
import WhyChooseUs from "@/components/page/home/WhyChooseUs";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TheProblem />
      <WhatWeDo />
      <OurFocusAreas />
      <WhyChooseUs />
      <FinalCTA>
        <CTAHeading>Let&apos;s Create Meaningful CSR Together</CTAHeading>
        <CTASubheading>
          Your CSR efforts should do more than check a box—they should make a
          difference.
        </CTASubheading>
        <CTABtn className={"w-fit border border-primary"}>Get in touch</CTABtn>
      </FinalCTA>
    </>
  );
}
