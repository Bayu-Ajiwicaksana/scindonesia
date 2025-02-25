"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import AppLogo from "@/components/AppLogo";
import { Separator } from "@/components/ui/separator";
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
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import ContactUsBtn from "@/components/button/ContactUsBtn";
import Container from "@/components/layout/Container";
import LocaleSwitch from "@/components/LocaleSwitch";
import { useEffect, useMemo, useRef, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ArrowUpRight, Tally3 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function NavBar({ t, children, className, ...props }) {
  const pathname = usePathname();
  const [openSheet, setOpenSheet] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const lastY = useRef(0);

  const navItems = [
    {
      key: "home",
      label: t.home,
      url: "/",
    },
    {
      key: "social-programs",
      label: t.programs,
      url: "/our-social-programs",
    },
    {
      key: "projects",
      label: t.works,
      url: "/our-works",
    },
    {
      key: "about-us",
      label: t.aboutUs,
      url: "/about-us",
    },
  ];

  const { isLG } = useMediaQuery();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY.current;
    if (Math.abs(diff) > 20) {
      setIsScrolled(diff > 0);

      lastY.current = latest;
    }
  });

  const topVal = isLG ? "8px" : "0px";

  return (
    <motion.div
      className={cn(
        "fixed lg:sticky w-full xl:px-3 z-50 lg:mb-2 bg-background lg:bg-transparent shadow-xl lg:shadow-none py-5 px-3 lg:py-0 lg:px-0"
      )}
      initial={{
        top: topVal,
      }}
      animate={{
        top: isScrolled ? "-50%" : topVal,
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
          "w-full grid grid-cols-2 lg:flex lg:justify-between lg:items-center py-0 bg-background xl:px-3 xl:py-2 lg: rounded-2xl lg:shadow-xl",
          // isScrolled ? "shadow-none" : "shadow-xl",
          className
        )}
        {...props}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] items-center gap-1">
          <AppLogo className={"w-[215px] lg:mr-3"} />
          <Separator orientation="vertical" className="h-2/5 hidden lg:block" />
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {navItems.map((nav) => (
                <NavItems route={nav} key={nav.key} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="items-center gap-2 hidden lg:flex">
          <LocaleSwitch />
          <ContactUsBtn />
        </div>
        <div className="lg:hidden flex items-center justify-end">
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger>
              <Tally3 className="size-8 rotate-90 stroke-2 text-primary" />
            </SheetTrigger>
            <SheetContent className="w-screen p-0" closeBtnClassName="size-10">
              <SheetHeader className={"hidden"}>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Sirkular Center Indonesia's Website Navigation
                </SheetDescription>
              </SheetHeader>
              <nav className="w-full pt-20 pb-5 px-3 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  {navItems.map((_nav, index) => (
                    <SheetClose
                      key={"mobile" + _nav.key}
                      variant="link"
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "flex justify-start h-auto font-bold text-4xl text-wrap py-4",
                        pathname === _nav.url
                          ? "text-foreground"
                          : "text-zinc-400"
                        // route().current(_nav.key)
                        //   ? "text-foreground"
                        //   : "text-neutral-500"
                      )}
                      asChild
                    >
                      <Link
                        href={_nav.url}
                        // prefetch="mount"
                      >
                        {_nav.label}
                        <ArrowUpRight />
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <div className="space-y-4">
                  <LocaleSwitch
                    className={
                      "border w-full h-fit text-2xl font-light [&_svg]:size-6 [&_svg]:stroke-[1.5] lg:border-none lg:text-base lg:font-normal lg:[&_svg]:size-4 lg:[&_svg]:stroke-2"
                    }
                  />
                  <SheetClose asChild>
                    <ContactUsBtn className="rounded-xl w-full h-auto text-lg py-4" />
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
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
