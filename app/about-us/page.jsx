import AboutUsHero from "@/components/page/about-us/AboutUsHero";
import CoreValue from "@/components/page/about-us/CoreValue";
import OurMission from "@/components/page/about-us/OurMission";
import OurVision from "@/components/page/about-us/OurVision";
import Subheading from "@/components/page/about-us/Subheading";

export default function AboutUs({ children, className, ...props }) {
  return (
    <>
      <AboutUsHero />
      <Subheading />
      <CoreValue />
      <OurVision />
      <OurMission />
    </>
  );
}
