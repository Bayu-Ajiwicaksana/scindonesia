// import FinalCTA, {
//   CTABtn,
//   CTAHeading,
//   CTASubheading,
// } from "@/components/FinalCTA";
// import Clients from "@/components/pageOld/home/Clients";
// import HomeHero from "@/components/pageOld/home/HomeHero";
// import OurFocusAreas from "@/components/pageOld/home/OurFocusAreas";
// import OurWorks from "@/components/pageOld/home/OurWorks";
// import Programs from "@/components/pageOld/home/Programs";
// import Testimonials from "@/components/pageOld/home/Testimonials";
// import TheProblem from "@/components/pageOld/home/TheProblem";
// import WhatWeDo from "@/components/pageOld/home/WhatWeDo";
// import WhyChooseUs from "@/components/pageOld/home/WhyChooseUs";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

import How from "@/components/page/landing/How";
import LandingCTA from "@/components/page/landing/LandingCTA";
import LandingHero from "@/components/page/landing/LandingHero";
import PentahelixConcept from "@/components/page/landing/PentahelixConcept";
import Priority from "@/components/page/landing/Priority";
import Programs from "@/components/page/landing/Programs";

export default function Home() {
  return (
    <>
      <LandingHero />
      <How />
      <PentahelixConcept />
      <Priority />
      <Programs />
      <LandingCTA />
      {/* <HomeHero />
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
      </FinalCTA> */}
    </>
  );
}
