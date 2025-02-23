"use client";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Image from "next/image";
import FooterBg from "@/public/img/contents/footer-bg.webp";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AppLogo from "@/components/AppLogo";
import ParallaxBg from "@/components/animation/ParallaxBg";

import { useScroll } from "motion/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Mail, Map, MapPin } from "lucide-react";
import RotatingText from "@/components/animation/RotatingText";
import ContactUsBtn from "@/components/button/ContactUsBtn";

export default function FooterWrapper({
  tHeading,
  tBtnContact,
  tExplore,
  tContact,
  tAddress,
  tNavHome,
  tNavWorks,
  tNavPrograms,
  tNavAbout,
  children,
  className,
  ...props
}) {
  const targetScroll = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetScroll,
    offset: ["start end", "end start"],
  });

  return (
    <Section as={"footer"} className={cn("", className)} {...props}>
      <Container className={"pt-8 pb-5"}>
        <div
          className="w-full h-full rounded-3xl relative overflow-hidden px-3 pb-3 pt-[160px] flex flex-col gap-y-[160px]"
          ref={targetScroll}
        >
          <ParallaxBg
            src={"/img/contents/footer-bg.webp"}
            alt={"SCI's Footer Background"}
            scrollProgress={scrollYProgress}
            className={"h-[120%]"}
            imgClassName={"brightness-[.6]"}
            fromTop="-15%"
            toTop="15%"
          />
          <div className="flex flex-col items-center gap-y-16">
            <h1 className="font-serif font-semibold text-4xl md:text-6xl text-white text-center md:w-3/4">
              {/* Ready to make an Impact with Us? */}
              {tHeading}
            </h1>
            <ContactUsBtn
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-zinc-900"
              iconOnly={false}
              withIcon={false}
            >
              {/* Schedule a Consultation */}
              {tBtnContact}
            </ContactUsBtn>
          </div>
          <div className="bg-white rounded-2xl px-5 pb-5 pt-8 flex flex-col justify-between gap-5 lg:gap-[72px]">
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-[1fr_.2fr_.4fr] gap-10 w-full">
              <div className="w-full lg:w-fit h-full justify-between items-center lg:items-start flex flex-col order-last lg:order-first gap-y-5 mt-5 md:col-span-full lg:col-span-1">
                <AppLogo className={"w-[225px] md:w-[295px] lg:w-[350px]"} />
                <div className="flex items-center font-serif">
                  <span className="text-xl md:text-2xl lg:text-4xl text-primary">
                    #
                  </span>
                  <RotatingText
                    texts={[
                      "SustainableSolutions",
                      "EmpoweringCommunities",
                      "LastingImpact",
                    ]}
                    mainClassName="px-1 sm:px-1.5 md:px-2 text-primary overflow-hidden py-0.5 sm:py-1 md:py-1.5 justify-center rounded-lg w-fit text-lg md:text-xl lg:text-3xl font-medium"
                    staggerFrom={"first"}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-120%", opacity: 0 }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={4000}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 h-full">
                <span className="font-serif text-3xl md:text-lg font-semibold text-primary-accent px-4 mb-4">
                  {/* Explore */}
                  {tExplore}
                </span>
                <NavigationMenu className="items-start">
                  <NavigationMenuList className="flex-col space-x-0 gap-y-4 md:gap-y-1 justify-start items-start">
                    <NavigationMenuItem>
                      <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "h-auto w-fit text-xl md:text-sm"
                          )}
                        >
                          {tNavHome}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/our-social-programs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "h-auto w-fit text-xl md:text-sm"
                          )}
                        >
                          {tNavPrograms}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/our-works" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "h-auto w-fit text-xl md:text-sm"
                          )}
                        >
                          {tNavWorks}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/about-us" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "h-auto w-fit text-xl md:text-sm"
                          )}
                        >
                          {tNavAbout}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="flex flex-col gap-2 h-full">
                <span className="font-serif text-3xl md:text-lg font-semibold text-primary-accent px-4 mb-4">
                  {/* Contact */}
                  {tContact}
                </span>
                <div className="space-y-4 md:space-y-1">
                  <Button
                    variant="link"
                    size="sm"
                    className="px-4 w-fit justify-start text-current text-xl md:text-sm [&_svg]:size-5 md:[&_svg]:size-4"
                    asChild
                  >
                    <a href="mailto:hi@scindonesia.org">
                      <Mail /> hi&#64;scindonesia.org
                    </a>
                  </Button>
                  <div
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "inline-flex items-start justify-start gap-2 px-4 hover:no-underline text-current text-xl md:text-sm [&_svg]:size-5 md:[&_svg]:size-4 whitespace-normal h-auto w-fit"
                    )}
                  >
                    <MapPin className="self-start mt-1 md:mt-0.5" />
                    {/* Sleman, Special Region of Yogyakarta, Indonesia, 55282 */}
                    <span className="text-wrap">{tAddress}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Separator className="w-full h-[2px] rounded-full bg-zinc-100" />
              <small className="text-center block">
                Copyright &#64; 2025 Sirkular Center Indonesia
              </small>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
