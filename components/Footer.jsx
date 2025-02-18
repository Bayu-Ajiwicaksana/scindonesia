"use client";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import Section from "./layout/Section";
import Container from "./layout/Container";
import Image from "next/image";
import FooterBg from "@/public/img/contents/footer-bg.webp";
import { Button, buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import AppLogo from "./AppLogo";
import ParallaxBg from "./animation/ParallaxBg";

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
import RotatingText from "./animation/RotatingText";

export default function Footer({ children, className, ...props }) {
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
            src={FooterBg}
            alt={"SCI's Footer Background"}
            scrollProgress={scrollYProgress}
          />
          <div className="flex flex-col items-center gap-y-16">
            <h1 className="font-serif font-semibold text-6xl text-white">
              Ready to make an Impact with Us?
            </h1>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-zinc-900"
            >
              Schedule a Consultation
            </Button>
          </div>
          <div className="bg-white rounded-2xl px-5 pb-5 pt-8 flex flex-col justify-between gap-[72px]">
            <div className="grid grid-cols-[1fr_.2fr_.4fr]">
              <div className="w-fit h-full justify-between flex flex-col">
                <AppLogo className={"w-[350px]"} />
                <div className="flex items-center font-serif">
                  <span className="text-4xl text-primary">#</span>
                  <RotatingText
                    texts={[
                      "SustainableSolutions",
                      "EmpoweringCommunities",
                      "LastingImpact",
                    ]}
                    mainClassName="px-1 sm:px-1.5 md:px-2 text-primary overflow-hidden py-0.5 sm:py-1 md:py-1.5 justify-center rounded-lg w-fit text-3xl font-medium"
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
              <div className="flex flex-col gap-2">
                <span className="font-serif text-sm font-semibold text-primary-accent px-4">
                  Explore
                </span>
                <NavigationMenu className="items-start">
                  <NavigationMenuList className="flex-col space-x-0 gap-y-1 justify-start items-start">
                    <NavigationMenuItem>
                      <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "h-auto w-fit"
                          )}
                        >
                          Home
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/our-social-programs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "h-auto w-fit"
                          )}
                        >
                          Our Programs
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/our-works" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "h-auto w-fit"
                          )}
                        >
                          Our Works
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/about-us" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "h-auto w-fit"
                          )}
                        >
                          About Us
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-serif text-sm font-semibold text-primary-accent px-4">
                  Contact
                </span>
                <div className="space-y-1">
                  <Button
                    variant="link"
                    size="sm"
                    className="px-4 w-fit justify-start text-current"
                    asChild
                  >
                    <a href="mailto:hi@scindonesia.org">
                      <Mail /> hi&#64;scindonesia.org
                    </a>
                  </Button>
                  <div
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "inline-flex items-start justify-start gap-2 px-4 w-fit hover:no-underline whitespace-break-spaces text-current"
                    )}
                  >
                    <MapPin className="self-center" />
                    Sleman, Special Region of Yogyakarta, Indonesia, 55282
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Separator className="w-full h-[2px] rounded-full bg-zinc-300" />
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
