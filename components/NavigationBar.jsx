"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import AppLogo from "./AppLogo";
import { Separator } from "./ui/separator";
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
import ContactUsBtn from "./button/ContactUsBtn";
import Container from "./layout/Container";
import LocaleSwitch from "./LocaleSwitch";
import { useEffect, useRef, useState } from "react";

const navItems = [
  {
    key: "home",
    label: "Home",
    url: "/",
  },
  {
    key: "social-programs",
    label: "Our Programs",
    url: "/our-social-programs",
  },
  {
    key: "projects",
    label: "Our Works",
    url: "/our-works",
  },
  {
    key: "about-us",
    label: "About Us",
    url: "/about-us",
  },
];

export default function NavigationBar({ children, className, ...props }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY.current;
    if (Math.abs(diff) > 20) {
      setIsScrolled(diff > 0);

      lastY.current = latest;
    }
  });

  return (
    <motion.div
      className={cn("sticky w-full xl:px-11 z-50 mb-2")}
      initial={{
        top: "8px",
      }}
      animate={{
        top: isScrolled ? "-50%" : "8px",
        // backgroundColor: isScrolled ? "hsl(var(--background))" : "transparent",
        // borderRadius: "0px 0px 20px 20px",
        transition: {
          duration: 0.6,
          ease: "linear",
        },
      }}
    >
      <Container
        className={cn(
          "max-w-[1356px] grid lg:flex lg:justify-between lg:items-center py-0 bg-background xl:px-3 xl:py-2 rounded-3xl shadow-xl",
          // isScrolled ? "shadow-none" : "shadow-xl",
          className
        )}
        {...props}
      >
        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-1">
          <AppLogo className={"w-[165px]"} />
          <Separator orientation="vertical" className="h-2/5" />
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((nav) => (
                <NavItems route={nav} key={nav.key} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <LocaleSwitch />
          <ContactUsBtn />
        </div>
      </Container>
    </motion.div>
  );
}

function NavItems({ route, className, ...props }) {
  return (
    <NavigationMenuItem {...props}>
      <Link href={route.url} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "", className)}
        >
          {route.label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
