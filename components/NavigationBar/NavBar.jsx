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
import {
  ArrowUpRight,
  BookMarked,
  ClipboardList,
  FileChartColumn,
  Newspaper,
  Tally3,
  Waypoints,
} from "lucide-react";
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

  const resourcesItem = [
    {
      key: "articles",
      label: "Articles",
      url: "/articles",
      icon: Newspaper,
    },
    {
      key: "theory",
      label: "Theory",
      url: "/theory",
      icon: Waypoints,
    },
    {
      key: "whitepapers-and-reports",
      label: "Whitepapers & Reports",
      url: "/whitepapers-and-reports",
      icon: FileChartColumn,
    },
    {
      key: "ebooks-and-guides",
      label: "Ebooks and Guides",
      url: "/ebooks-and-guides",
      icon: BookMarked,
    },
    {
      key: "case-study",
      label: "Case Study",
      url: "/case-study",
      icon: ClipboardList,
    },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY.current;
    if (Math.abs(diff) > 20) {
      setIsScrolled(diff > 0);

      lastY.current = latest;
    }
  });

  return (
    <motion.div
      className={cn(
        "fixed w-full z-50 lg:mb-2 bg-white shadow-xl py-5 xl:py-3 px-3"
      )}
      initial={{
        top: "0px",
      }}
      animate={{
        top: isScrolled ? "-50%" : "0%",
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
          "w-full grid grid-cols-2 lg:flex lg:justify-between lg:items-center py-0",
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
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-white text-zinc-600 data-[state=open]:text-current"
                  )}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {resourcesItem.map((item, index) => (
                      <li key={item.key}>
                        <ListItem route={item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="items-center gap-2 hidden lg:flex">
          <LocaleSwitch />
          <ContactUsBtn
            className={"text-sm px-5 py-2.5 border border-primary"}
          />
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

function ListItem({ route, className, ...props }) {
  const pathname = usePathname();
  const Icon = route.icon;
  return (
    <Link href={route.url} legacyBehavior passHref {...props}>
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          "bg-white gap-x-2",
          pathname === route.url ? "" : "text-zinc-600",
          className
        )}
      >
        <Icon className="size-4" />
        {route.label}
      </NavigationMenuLink>
    </Link>
  );
}

function NavItems({ route, className, ...props }) {
  const pathname = usePathname();
  return (
    <NavigationMenuItem {...props}>
      <Link href={route.url} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "bg-white",
            pathname === route.url ? "" : "text-zinc-600",
            className
          )}
        >
          {route.label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
