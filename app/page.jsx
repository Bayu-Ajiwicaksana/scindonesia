import Clients from "@/components/page/home/Clients";
import HomeHero from "@/components/page/home/HomeHero";
import OurWorks from "@/components/page/home/OurWorks";
import Programs from "@/components/page/home/Programs";
import Testimonials from "@/components/page/home/Testimonials";
import WhyChooseUs from "@/components/page/home/WhyChooseUs";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Clients />
      <WhyChooseUs />
      <Programs />
      <OurWorks />
      <Testimonials />
    </>
  );
}
